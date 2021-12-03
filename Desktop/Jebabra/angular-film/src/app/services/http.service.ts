import { Commentaire, User } from './../models';
import { FavoritFilm, Film } from 'src/app/models';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as  env } from  'src/environments/environment' ;
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class HttpService {


  public result: any;

 

  constructor(private http: HttpClient) { }




  getFavorits(){

    return this.http.get<Array<FavoritFilm>>(`http://localhost:5000/films`).toPromise()
    .then((res: any)=>res).catch(err=>console.log(err))
    

   }


  

   getFilmFromServer() {
   

   return this.http.get<Array<Film>>(`https://api.themoviedb.org/3/trending/all/week?api_key=0697149ea65326dc3659c54195aace8a&language=en-US`).toPromise()
    .then((res: any)=>res).catch(err=>console.log(err))
    
  }


  getImage(name:String){
    //return 'https://image.tmdb.org/t/p/w300' +name;
    
   return this.http.get<Array<String>>(`https://image.tmdb.org/t/p/original/`+name).toPromise()
   .then((res: any)=>res).catch(err=>err)
   
  }


  getDetailFilm(id){
    const url = 'https://api.themoviedb.org/3/movie/' + id +'?api_key=' + '0697149ea65326dc3659c54195aace8a' + '&language=fr' 
    return this.http.get(url);
  }
  


  getFilms(text:String,page:number){
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + '0697149ea65326dc3659c54195aace8a' +'&language=fr&query=' + text + "&page=" + page
    return this.http.get<Array<Film>>(url)
     .toPromise()
         .then((response:any)=>response)
         .catch((err)=>console.log(err));
  }


  addCommentaire(commentaire : Commentaire){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(commentaire);
    console.log(body)
    return this.http.post('http://localhost:5000/commentaire', body,{'headers':headers}).toPromise()
    .then((response:any)=>response)
    .catch((err)=>console.log(err));
  }


  addToFavoris(film : Film){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(film);
    console.log(body)
    return this.http.post('http://localhost:5000/films/client/save', body,{'headers':headers}).toPromise()
    .then((response:any)=>response)
    .catch((err)=>console.log(err));
  }



  addUser(user:User){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(user);
    console.log(body)
    return this.http.post('http://localhost:5000/articles', body,{'headers':headers}).toPromise()
    .then((response:any)=>response)
    .catch((err)=>console.log(err));
  }


  getCommentaires(){

    return this.http.get<Array<Film>>(`http://localhost:5000/commentaire`).toPromise()
    .then((res: any)=>res).catch(err=>console.log(err))
    
  
   }
  

}
