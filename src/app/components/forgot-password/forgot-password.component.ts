import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
declare var $:any;
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  sendMail(){
    this.userService.sendMail($('#mail').val()).subscribe(resp=>{
      window.alert(resp.message)
    })
  }

}
