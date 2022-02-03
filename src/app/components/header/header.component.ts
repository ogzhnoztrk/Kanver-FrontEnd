import { Component, OnInit } from '@angular/core';
import { Announcement } from 'src/app/models/announcement/announcement';
import { AnnouncementService } from 'src/app/services/announcement.service';
import { Donor } from 'src/app/models/donor/donor';
import { DonorService } from 'src/app/services/donor.service';
import { BloodType } from 'src/app/models/bloodType/bloodType';
import { BloodTypeService } from 'src/app/services/bloodtype.service';
import { User } from 'src/app/models/user/user';
import { UserService } from 'src/app/services/user.service';



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
              private userService:UserService) {}
  ngOnInit() {
    this.getAnnouncement();
    this.getAllDonor();
    
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
      console.log(response.data)
    })
  }

  


}
