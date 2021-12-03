import { Component, OnInit } from '@angular/core';

import { HttpService } from 'src/app/services/http.service';
import { FavoritFilm, Film } from '../models';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.scss']
})
export class FavorisComponent implements OnInit {

  public films : Array< FavoritFilm> | undefined 


  constructor(
    private httpService: HttpService,
  ) { }

  
  ngOnInit(): void {
 
    this.httpService.getFavorits().then((data:any)=>{  
        

       
       this.films=data

       for(let i=0 ; i<this.films.length ; i ++  ){
        this.httpService.getImage(this.films[i].poster_path).then((err:any)=>(this.films[i].poster_path=err.url))
        
        
       }

     
         console.log(this.films)
      

        
       
      })

   



      
 
  
    
  }


 

}
