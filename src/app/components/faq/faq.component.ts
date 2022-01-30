import { Component, OnInit } from '@angular/core';
import { FaqService } from 'src/app/services/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  result: any;

  constructor(private faqService: FaqService) { }

  ngOnInit(): void {
  }

  

}
