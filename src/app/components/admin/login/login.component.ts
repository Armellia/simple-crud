import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User=new User();
  constructor(private login:UserService, private route:Router) { }
  
  ngOnInit(): void {
    const check=sessionStorage.getItem('token')
    if (!check) {
      
    }
  }
  onLogin():void{
    this.login.login(this.user!).subscribe((res)=>{
      sessionStorage.setItem('token',res.accessToken)
      this.login.logged(true)
      this.expired()
      this.route.navigate(['book'])
    })
  }
  expired(){
    return new Promise(resolve=>{
      setTimeout(() => {
        sessionStorage.removeItem('token')
      }, 1800000);
    })
  }
}
