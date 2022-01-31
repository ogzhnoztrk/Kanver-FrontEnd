import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/models/user/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user = new User();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    var q = document.URL;
    var id = parseInt(q.split('profile/')[1]);

    this.userService.getUserById(id).subscribe((response) => {
      var values = Object.values(response.data);
      this.user.userId = values[0];
      this.user.bloodTypeId = values[1];
      this.user.name = values[2];
      this.user.lastName = values[3];
      this.user.email = values[4];
      this.user.phoneNumber = values[5];
      this.user.password = values[6];
      this.user.isValidate = values[7];
      this.user.isMernisOk = values[8];
      this.user.identityNumber = values[9];
      this.user.birthDay = values[10];
    });
  }

  getUserByUserId() {
    // this.user.bloodTypeId=1;
    // this.user.name="asdasd";
    // this.user.lastName="asdasd";
    // this.user.email="asdad";
    // this.user.phoneNumber="asdad";
    // this.user.password="asdad";
    // this.user.identityNumber="asdasdasd";
    // this.user.birthDay=new Date("2000-10-04")

    //console.log(this.user)

    var q = document.URL;
    var id = parseInt(q.split('profile/')[1]);

    this.userService.getUserById(id).subscribe((response) => {
      var key = Object.keys(response.data);
      var values = Object.values(response.data);
      this.user.userId = values[0];
      console.log(values);
    });
  }
}
