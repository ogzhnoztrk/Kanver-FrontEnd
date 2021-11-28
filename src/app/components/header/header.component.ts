import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
 
 
 
  cards: any[] = [
    {
      id: 1,
      city: 'İstanbul',
      blood_type: 'ab-.png',
      blood_png: 'assets/images/blood-types/ab-.png',
      text: 'MALTEPE VM MEDİCAL PARKHASTANESİNDE YATAN HASTA İÇİN ACİL AB RH (-) KANA İHTİYAÇ VARDIR.',
      tel: '0549 xxx xxxx',
    },
    {
      id: 2,
      city: 'Bursa',
      blood_type: 'a-.png',
      blood_png: 'assets/images/blood-types/ab-.png',
      text: 'İBNİ SİNA KAN MERKEZİ HASTANESİNDE YATAN HASTA İÇİN ACİL A RH (-) KANA İHTİYAÇ VARDIR.',
      tel: '0549 xxx xxxx',
    },
    {
      id: 3,
      city: 'Manisa',
      blood_type: 'b-.png',
      blood_png: 'assets/images/blood-types/ab-.png',
      text: ' CELAL BAYAR EGİTİM VE ARASTİRMA HASTANESİNDE YATAN HASTA İÇİN ACİL B RH (-) KANA İHTİYAÇ VARDIR.',
      tel: '0549 xxx xxxx',
    },
    {
      id: 4,
      city: 'YALOVA',
      blood_type: 'a-.png',
      blood_png: 'assets/images/blood-types/ab-.png',
      text: ' ATAKENT HASTANESİNDE YATAN HASTA İÇİN ACİL A RH (-) KANA İHTİYAÇ VARDIR.',
      tel: '0549 xxx xxxx',
    },
    {
      id: 5,
      city: 'Manisa',
      blood_type: 'b-.png',
      blood_png: 'assets/images/blood-types/ab-.png',
      text: ' CELAL BAYAR EGİTİM VE ARASTİRMA HASTANESİNDE YATAN HASTA İÇİN ACİL B RH (-) KANA İHTİYAÇ VARDIR.',
      tel: '0549 xxx xxxx',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
  
 
}
