import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/models/about/about';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  abouts: About[];

  constructor(private aboutService:AboutService) { }

  ngOnInit(): void {
    this.getAllAbout();
  }
  getAllAbout(){
    this.aboutService.getAnnouncements().subscribe(resp => {
      this.abouts = resp.data
      console.log(this.abouts)
    })
  }

}
