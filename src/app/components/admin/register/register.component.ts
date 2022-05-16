import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:User=new User()
  constructor(private userService:UserService,private route:Router) { }

  ngOnInit(): void {
  }
  onRegister(){
    this.userService.register(this.user).subscribe(
      (res)=>{
        this.route.navigate(['/login'])
      }
    )
  }
}
