import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  result: any;
  user = new User();

  constructor(private userService: UserService
     ) {}

  ngOnInit(): void {
   
    this.user.name = 'Oğuzhan';
    this.user.lastName = 'Öztürk';
    this.user.birthDay = 2000;
    this.user.bloodTypeId = 2;
    this.user.email = 'user7@example.com';
    this.user.password = '123';
    this.user.identityNumber = "37018041374";
    this.userRegister();
  }

  
  userRegister() {
    
    this.userService.registerUser(this.user).subscribe(resp =>{
      console.log(resp)
    });
  }


}
