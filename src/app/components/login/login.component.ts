import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user';
import { UserService } from 'src/app/services/user.service';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  result: any;
  userId: any;
  isLoggin: any

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  userLogin() {
    this.userService
      .loginUser($('#mail').val(), $('#pass').val())
      .subscribe((resp) => {
        this.result = resp.success;

        console.log(resp);
      });

    this.userService.getUserByEmail($('#mail').val()).subscribe((resp) => {
      this.userId = resp.data;

      if (this.result) {
        this.isLoggin = true;
      } else {
        $('.error').css('display', 'block');
      }
    });
  }
}
