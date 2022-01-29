import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    result:any;


  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  userLogin() {
    this.userService.loginUser($('#mail').val(), $('#pass').val()).subscribe(resp => {
      this.result = resp.success;
    });
    if(this.result){
      window.location.href = '/profile'
    }else{
      $('.error').css('display', 'block');
    }

  }
}
