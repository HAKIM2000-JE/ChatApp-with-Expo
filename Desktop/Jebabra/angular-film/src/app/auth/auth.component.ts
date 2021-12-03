import { User } from './../models';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {


  public user : User 

  constructor(

    private httpService: HttpService,
  ) {


   }

  ngOnInit(): void {
  }



  register(f){
    
     this.user=f.value

     console.log(this.user)

     this.httpService.addUser(this.user)
   
 
      
  }


 

}
