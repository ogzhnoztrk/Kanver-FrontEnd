import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/app/models/user/user';
import { UserService } from 'src/app/services/user.service';
declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  result: boolean;
  user = new User();
  dateArray: any[];
  date: Date;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}
  str: any;
  num: any;
  userRegister() {
    this.str = $('#birthDay').val();

    this.dateArray = this.str.split('-');

    this.user.name = $('#name').val();

    this.user.lastName = $('#lastName').val();

    this.user.identityNumber = $('#identityNumber').val();

    this.user.birthDay =
      this.dateArray[0] + '-' + this.dateArray[1] + '-' + this.dateArray[2];

    this.user.bloodTypeId = parseInt($('#bloodType').val());

    this.user.email = $('#email').val();

    this.user.password = $('#password').val();

    this.user.phoneNumber ="+90" + $('#phoneNumber').val();

    this.userService.registerUser(this.user).subscribe((res) => {
      this.result = res.success;

      if (this.result) {
        this.router.navigateByUrl('/register/success');
      } else {
        window.alert('Kayıt Yapılamadı Lütfen Bilgilerinizi Kontrol Ediniz');
      }
    });
  }
}
