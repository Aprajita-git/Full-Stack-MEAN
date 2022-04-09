import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user:String;
  isLoggedIn:Boolean;
  constructor(private route: Router) {
   }

  ngOnInit(): void {
    this.user = localStorage.getItem("user");
    this.isLoggedIn = this.user === null ? false : true;
  }

  logout(){
    localStorage.removeItem("user");
    this.isLoggedIn = false;
    this.route.navigate([''])
          .then(() => {
            window.location.reload();
          });
  }

}
