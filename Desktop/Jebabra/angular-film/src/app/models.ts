// we have to create and export interface film

export interface Film {
        id: string;
        background_image: string;
        title: string;
        released : string;
        vote_average:string,
        poster_path:string,
        orginal_title:string,
        overview:string,
        release_date:string
}


export interface Commentaire{
    id:string;
    contenu:string;
    }


export interface FavoritFilm {
    _id: string,
vote_average: string,
overview: string,
title:string,
id: string,
__v: number,
poster_path:string,
}


export interface User {
      
      username: string,
      password : string
}


export interface APIResponse<T> {
      results: Array<T> ;

}


interface Genre {
    name : string;
}

interface ParentPlatform{
    platform : {
        name: string;
    }
}

interface Publishers {
    name : string;

}


interface Rating {
    id: number;
    count: number;
    title: string;
    
}




interface Trailer{
    data :{
        max: string;
    }

}


