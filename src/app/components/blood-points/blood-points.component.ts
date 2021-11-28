import { Component, OnInit, ViewChild } from '@angular/core';
declare const google:any;

@Component({
  selector: 'app-blood-points',
  templateUrl: './blood-points.component.html',
  styleUrls: ['./blood-points.component.css'],
})
export class BloodPointsComponent implements OnInit {
  map:any;
  @ViewChild('mapElement') mapElement:any;

  ngAfterViewInit(): void{
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      center: { lat: 37.768002, lng: 30.561905 },
      zoom: 10,
      
    });
  }
  constructor() {}

  ngOnInit(): void {}

 

 
}
