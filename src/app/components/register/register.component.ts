import { Component, OnInit } from '@angular/core';

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

  constructor(private userService: UserService) {}

  ngOnInit(): void {}
  str: any;
  num: any;
  userRegister() {
    this.str = $('#birthDay').val();

    this.dateArray = this.str.split('-');

    // this.date.setFullYear(
    //   this.dateArray[0],
    //   this.dateArray[1],
    //   this.dateArray[2]
    // );

    this.user.name = $('#name').val();

    this.user.lastName = $('#lastName').val();

    this.user.identityNumber = $('#identityNumber').val();

    this.user.birthDay =
      this.dateArray[0] + '-' + this.dateArray[1] + '-' + this.dateArray[2];

    this.user.bloodTypeId = parseInt($('#bloodType').val());

    this.user.email = $('#email').val();

    this.user.password = $('#password').val();

    this.user.phoneNumber = $('#phoneNumber').val();

    // console.log('name: ' + typeof this.user.name + "  " + this.user.name);
    // console.log('lastname: ' + typeof this.user.lastName+ "  " + this.user.lastName);
    // console.log('Id: ' + typeof this.user.identityNumber+ "  " + this.user.identityNumber);
    // console.log('BDay: ' + typeof this.user.birthDay+ "  " + this.user.birthDay);
    // console.log('BloodType: ' + typeof this.user.bloodTypeId+ "  " + this.user.bloodTypeId);
    // console.log('Mail: ' + typeof this.user.email+ "  " + this.user.email);
    // console.log('Pass: ' + typeof this.user.password+ "  " + this.user.password);
    // console.log('phone: ' + typeof this.user.phoneNumber+ "  " + typeof this.user.phoneNumber);

    // this.user.name = 'Oğuzhan';
    // this.user.lastName = 'Öztürk';
    // this.user.identityNumber = '37018041374';
    // this.user.birthDay = new Date('2000-10-04');

    // this.user.bloodTypeId = 2;
    // this.user.email = 'user7@example.com';
    // this.user.password = '1234';

    // this.user.phoneNumber = '5312939472';

    this.userService.registerUser(this.user).subscribe((res) => {
      this.result = res.success;

      if (this.result) {
        window.location.href = '/register/success';
      } else {
        window.alert('Kayıt Yapılamadı Lütfen Bilgilerinizi Kontrol Ediniz');
      }
    });
  }
}
