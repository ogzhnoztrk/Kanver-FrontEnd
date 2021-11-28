import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    $(document).ready(function () {
      $('#submit').click(function (event: Event) {
        event.preventDefault();

        var ValidEmail = $('#mail').val() === 'asd@asd.com';
        var ValidPassword = $('#password').val() === 'a';

        if (ValidEmail === true && ValidPassword === true) {
          $('.valid').css('display', 'block');

          window.location.href = '/profile';
        } else {
          $('.error').css('display', 'block');
        }
      });
    });
  }
}
