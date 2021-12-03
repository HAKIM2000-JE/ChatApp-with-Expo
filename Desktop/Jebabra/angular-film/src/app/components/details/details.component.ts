import { Commentaire } from './../../models';
import { Film } from 'src/app/models';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {


  filmId: string;
  film:Film ;
  routeSub: Subscription;

  recommedations : Array<Film> 

   films : Array<Film> 


   commentaire: Commentaire 
   Commentaires : Array<Commentaire>
    
   contenu : string
   
   
   public page : number=1

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService,
    private  router : Router
  ) { }

  ngOnInit(): void {
    
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.filmId = params['id'];
    
       this.getAll()
      
     
  
    })


    this.httpService.getCommentaires().then((data:any)=>{  
        

       
      this.Commentaires=data

    
        console.log(this.Commentaires)
     
    }
    )     

   
  }


  getAll(){
    this.httpService.getFilmFromServer().then((data:any)=>{  
        

      
      this.films=data.results
      for(let i=0 ; i<this.films.length ; i ++  ){
       this.httpService.getImage(this.films[i].poster_path).then((err:any)=>(this.films[i].poster_path=err.url))
       
       
      }

    
        console.log(this.films)

     

       
      
     }).then(()=> {
       this.getFilmDetails(this.filmId)
       alert("done")
       
        // this.httpService.getFilms(this.film.title,1).then((data)=>( console.log(data)))
    })
     
    
  }


  
  getFilmDetails(id: string){
    // this.film = this.films.find(film => film.id === id);
    for( let i =0 ; i<=this.films.length;i++){
         if(this.films[i].id==id){
             this.film=this.films[i]
             

         }
    }

    
   
    
  }

  openFilmDetails(id: string): any {
    return this.router.navigate(['/details/' + id]);
  }





  OnSubmit() {
    const commentaire : Commentaire = {
            id:this.filmId,
            contenu:this.contenu
    }
    
    this.httpService.addCommentaire(commentaire).then(()=>alert("comment sent"))
  
  }
  
  
  

  
  }


