import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
export class Detail {
  image: any;
name: any;
description: any;
user_id: any;
constructor() {}
}
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  explo= false
  User: any;
  UserImage: any;
  detail: any;
  constructor(public api: ApiService) { 
    this.detail =  new Detail()
  }
    expo() {
      this.explo = !this.explo
    }
    userData(UID: any) {
        this.User = []

      let  a  = this.api.User.filter( (e: any) => e._id === UID);
      let  t  = this.api.LastUser.filter( (e: any) => e._id === UID);

      this.User = a;
      this.UserImage = t
    }
    userDataImage(UID: any) {
      this.UserImage = []
      let  t  = this.api.LastUser.filter( (e: any) => e._id === UID);
      this.UserImage = t

    console.log(this.UserImage)
    }
    
    ngOnInit(): void {
  }

}
