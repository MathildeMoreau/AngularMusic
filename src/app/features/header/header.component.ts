import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  isLight: boolean = false

  ngOnInit(): void {
  }

  handleTheme(){
    this.isLight = !this.isLight;
  }

}
