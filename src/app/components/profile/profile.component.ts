import { Component, OnInit } from '@angular/core';

import { Announcement } from 'src/app/models/announcement/announcement';

import { User } from 'src/app/models/user/user';
import { AnnouncementService } from 'src/app/services/announcement.service';
import { UserService } from 'src/app/services/user.service';
declare var $: any;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user = new User();
  announcement = new Announcement();

  constructor(
    private userService: UserService,
    private announcementService: AnnouncementService
  ) {}

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
    var q = document.URL;
    var id = parseInt(q.split('profile/')[1]);

    this.userService.getUserById(id).subscribe((response) => {
      var key = Object.keys(response.data);
      var values = Object.values(response.data);
      this.user.userId = values[0];
      console.log(values);
    });
  }
  addAnnouncement() {
    const d = new Date();
    let date = d.toString();
    this.announcement.fullName = $('#fullName').val();
    this.announcement.phoneNumber = $('#phoneNumber').val();
    this.announcement.bloodTypeId = parseInt($('#bloodType').val());
    this.announcement.cityId = parseInt($('#city').val());
    this.announcement.explanation = $('#explanation').val();
    this.announcement.urgency = parseInt($('#urgency').val());
    console.log(this.announcement);
    console.log("name"+typeof this.announcement.fullName)
    console.log("number" + typeof this.announcement.phoneNumber)
    console.log("blood"+typeof this.announcement.bloodTypeId)
    console.log("city"+typeof this.announcement.cityId)
    console.log("expl"+typeof this.announcement.explanation)
    console.log("urgency"+typeof this.announcement.urgency)

    this.announcementService
      .addAnnouncement(this.announcement)
      .subscribe();
  }
}
