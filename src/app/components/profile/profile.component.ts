import { Component, OnInit } from '@angular/core';

import { Announcement } from 'src/app/models/announcement/announcement';
import { City } from 'src/app/models/city/city';
import { Donor } from 'src/app/models/donor/donor';

import { User } from 'src/app/models/user/user';
import { AnnouncementService } from 'src/app/services/announcement.service';
import { CityService } from 'src/app/services/city.service';
import { DonorService } from 'src/app/services/donor.service';
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
  cities: any[];
  donor = new Donor();

  constructor(
    private userService: UserService,
    private announcementService: AnnouncementService,
    private cityService: CityService,
    private donorService:DonorService
  ) {}

  ngOnInit(): void {
    this.getUserByUserId();
    this.getAllCities();
  }

  //Prifil bilgilerini getiren method
  getUserByUserId() {
    var q = document.URL;
    var id = parseInt(q.split('profile/')[1]);

    this.userService.getUserById(id).subscribe((response) => {
      var key = Object.keys(response.data);
      var values = Object.values(response.data);
      this.user.userId = values[0];

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

  //ilan ekleyen Method
  addAnnouncement() {
    this.announcement.fullName = $('#fullName').val();
    this.announcement.phoneNumber = $('#phoneNumber').val();
    this.announcement.bloodTypeId = parseInt($('#bloodType').val());
    this.announcement.cityId = parseInt($('#city').val());
    this.announcement.explanation = $('#explanation').val();
    this.announcement.urgency = parseInt($('#urgency').val());

    this.announcementService
      .addAnnouncement(this.announcement)
      .subscribe((resp) => {
        console.log(resp.success);

        if (resp.success) {
          window.alert('İlan Eklendi');
        } else {
          window.alert('ilan Eklenemedi');
        }
      });
  }

  //Şehirleri getiren method
  getAllCities() {
    return this.cityService.getAllCities().subscribe((response) => {
      this.cities = response.data;
    });
  }

  //Donor ekleyen method
  addDonor() {
    var q = document.URL;
    var id = parseInt(q.split('profile/')[1]);
    this.donor.userId = id;
    this.donor.cityId = parseInt($('#city').val());
    this.donor.diseaseStatus = this.changeValue(
      $('#diseaseStatus:checked').val()
    );
    this.donor.drugStatus = this.changeValue($('#drugStatus:checked').val());

    this.donor.alcholStatus = this.changeValue(
      $('#alcholStatus:checked').val()
    );
    this.donor.medicationStatus = this.changeValue(
      $('#medicationStatus:checked').val()
    );
    
    return this.donorService.addDonor(this.donor).subscribe(resp=>{
        
        window.alert(resp.message)
      
    });
    
  }
 




  

  changeValue(str: string) {
    if (str === 'on') {
      return false;
    } else {
      return true;
    }
  }
}
