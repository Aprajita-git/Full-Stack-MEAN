import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  randomValues = ['Hard Worker', 'True Lover', 'Cheater', 'Addict', 'Silent Killer', 'Lazy Person', 'Handsome', 'Proud And Sweet', 'Lovely & Caring', 'Proud And Sweet']

  constructor() { }

  ngOnInit(): void {
  }

  randomNumberGenerator(){
    var num = Math.floor((Math.random() * 10) + 1);
    alert(num+" : "+this.randomValues[num-1]);
  }

}
