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
    this.user.identityNumber = "37018041374";
    this.user.birthDay = new Date("2000-10-04");
   
    this.user.bloodTypeId = 2;
    this.user.email = 'user7@example.com';
    this.user.password = '1234';
    
    this.user.phoneNumber="5312939472";
    
    
    console.log(this.user)

    this.userRegister();
  }

  
  userRegister() {
    
    this.userService.registerUser(this.user).subscribe(res => {
      console.log(res)
    })
  }


}
