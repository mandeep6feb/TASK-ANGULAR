import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public api: ApiService) { 
    // this.api.getCart();
    // this.added = true;
  }

  ngOnInit(): void {
    
  }

}
