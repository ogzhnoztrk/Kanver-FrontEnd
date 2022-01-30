import { Component, OnInit } from '@angular/core';
import { Faq } from 'src/app/models/faq/faq';
import { FaqService } from 'src/app/services/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  faqs: Faq[];
  dataLoaded =false;

  constructor(private faqService: FaqService) { }

  ngOnInit(): void {
    this.getFaq();
  }

  getFaq(){
    this.faqService.getFaqs().subscribe(response => {
      this.faqs = response.data
      this.dataLoaded = true;
      console.log(this.faqs);
    })
  }



}
