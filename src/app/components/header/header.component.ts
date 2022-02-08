import { Component, OnInit } from '@angular/core';
import { Announcement } from 'src/app/models/announcement/announcement';
import { AnnouncementService } from 'src/app/services/announcement.service';
import { Donor } from 'src/app/models/donor/donor';
import { DonorService } from 'src/app/services/donor.service';
import { BloodType } from 'src/app/models/bloodType/bloodType';
import { BloodTypeService } from 'src/app/services/bloodtype.service';
import { User } from 'src/app/models/user/user';
import { UserService } from 'src/app/services/user.service';
import { CityService } from 'src/app/services/city.service';
declare var $:any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  donors: Donor[]
  announcements: Announcement[];
  dataLoaded=false;

  constructor(private announcementService:AnnouncementService,
              private donorService:DonorService,
              private userService:UserService,
              private cityService:CityService) {}
  ngOnInit() {
    this.getAnnouncement();
    this.getAllDonor();
    // this.getCityNameByCityId()
   
    // console.log("id: " + ($('#cityId').val()));
    
    console.log(document.getElementById("cityId")?.nodeValue)

  }
  getAnnouncement(){
    this.announcementService.getAnnouncements().subscribe(response => {
      
      
      this.announcements = response.data
      
      this.dataLoaded=true
      
    })
  }

  getAllDonor(){
    this.donorService.getAllDonor().subscribe(response => {
      this.donors = response.data
      this.dataLoaded=true
      
    })
  }

  getCityNameByCityId(id:number){
    return this.cityService.getCityNameById(id).subscribe(resp => {
     console.log(Object.values(resp.data)[1]);
    })
  }

  


}
