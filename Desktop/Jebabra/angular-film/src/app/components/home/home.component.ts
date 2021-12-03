
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { stringify } from 'querystring';
import { Subscription } from 'rxjs';
import { APIResponse, Film } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit , OnDestroy {
  
  public sort: string | undefined;

  public films : Array<Film> | undefined 

  public total : Number

  public page : number=1


  public search_name : String


  public Images : Array<String> 
   
  constructor(
     private httpService: HttpService,
    private activatedRoute : ActivatedRoute,
    private  router : Router
  ) {
    

   }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }




   ngOnInit(): void {
 
    this.httpService.getFilmFromServer().then((data:any)=>{  
        

       
       this.films=data.results

       this.total = this.films.length
       for(let i=0 ; i<this.films.length ; i ++  ){
        this.httpService.getImage(this.films[i].poster_path).then((err:any)=>(this.films[i].poster_path=err.url))
        
        
       }

     
         console.log(this.films)
      

        
       
      })

   



      
 
  
    
  }



  
  

 
  openFilmDetails(id: string): void {
    this.router.navigate(['/details/' + id]);
  }



  openFvoris(): void {
    this.router.navigate(['/favoris']);
  }



  OnSubmit() {
    this.httpService.getFilms(this.search_name , 1).then((data)=>( this.films=data.results)).then(()=>{
      
                
      for(let i=0 ; i<this.films.length ; i ++  ){
        this.httpService.getImage(this.films[i].poster_path).then((err:any)=>(this.films[i].poster_path=err.url))
        
        
       }

    })
    

   
  }


  addToFavoris(film: Film){
    this.httpService.addToFavoris(film)
  }
}
