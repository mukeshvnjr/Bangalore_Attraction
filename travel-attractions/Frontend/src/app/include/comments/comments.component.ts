import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Form, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../services/user.service';


interface mResponse{
  success:string;
  message:string;
  result:userResponse[];

}
interface userResponse{
  firstname:String;
}

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html'
})
export class CommentsComponent implements OnInit {

  commentsForm : FormGroup = new FormGroup({
    firstname: new FormControl(null, Validators.required),
    rating: new FormControl(null, Validators.required),
    reviewTitle: new FormControl(null, Validators.required),
    comments: new FormControl(null, Validators.required)
  });
 
  firstName: String='';

  constructor(private router:Router,private _userService: UserService) {

    this._userService.user()
    .subscribe(
     data=>this.addName(data),
     error=> this.router.navigate(['/login'])
    )
  }

  addName(data){
    this.firstName= data.firstName;
  }

 ngOnInit() {
  }

userComment(){
  if(!this.commentsForm.valid){
    console.log('Invalid form');
    return;
  }
  this._userService.attractionDetails(JSON.stringify(this.commentsForm.value))
  .subscribe(
    data =>{
      console.log(data);
      this.router.navigate(['/attraction']);
    },
    error => {
      console.error(error);
    }
  )
 //console.log(JSON.stringify(this.commentsForm.value));
}
}
