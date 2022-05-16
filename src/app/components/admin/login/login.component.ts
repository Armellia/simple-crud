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
  }
  onLogin():void{
    this.login.login(this.user!).subscribe((res)=>{
      sessionStorage.setItem('token',res.accessToken)
      this.login.logged()
      this.route.navigate(['book'])
    })
  }
}
