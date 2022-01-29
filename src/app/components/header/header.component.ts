import { Component, OnInit } from '@angular/core';
import { Announcement } from 'src/app/models/announcement/announcement';
import { AnnouncementService } from 'src/app/services/announcement.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  
  announcements: Announcement[];
  dataLoaded=false;

  constructor(private announcementService:AnnouncementService) {}
  ngOnInit() {
    this.getAnnouncement();
  }
  getAnnouncement(){
    this.announcementService.getAnnouncements().subscribe(response => {
      this.announcements = response.data
      this.dataLoaded=true
    })
  }

}
