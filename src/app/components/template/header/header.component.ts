import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userService:UserService,private route:Router) { }
  isLoggedIn?: boolean;
  ngOnInit(): void {
      this.userService.isLogged.subscribe(
        value=>{
          this.isLoggedIn=value
        console.log(value)})
  }
  logout(){
    sessionStorage.removeItem('token')
    this.userService.logged(false)
    this.route.navigate(['../login'])
  }
  checkLogin(){
    if (!sessionStorage.getItem('token')) {
      this.isLoggedIn=false
    } else {
      this.isLoggedIn=true
    }
  }
  

}
