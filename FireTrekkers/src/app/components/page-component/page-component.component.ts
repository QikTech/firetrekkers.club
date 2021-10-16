import { Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs'; 


@Component({
  selector: 'app-page-component',
  templateUrl: './page-component.component.html',
  styleUrls: ['./page-component.component.scss']
})

export class PageComponentComponent implements OnInit {

  cardList = [];

  constructor() { }

  ngOnInit(): void {
        this.cardList = [
          {
            date: '10 Jan, 2016',
            title: 'कलावंती दुर्ग | Kalavanti Durg',
            area: 'Thakurwadi-Panvel-Maharashtra-India',
            elevation: 'Elevation: 2,250 ft (686 m)',
            description: 'Harihar fort / Harshagad is a fort located 40km from Nashik City, 48 km from Igatpuri, 40 km from Ghoti in Nashik district.',
            buttonText: 'Full Story',
            img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
          },
          {
            date: '10 Jan, 2016',
            title: 'कलावंती दुर्ग | Kalavanti Durg',
            area: 'Thakurwadi-Panvel-Maharashtra-India',
            elevation: 'Elevation: 2,250 ft (686 m)',
            description: 'Harihar fort / Harshagad is a fort located 40km from Nashik City, 48 km from Igatpuri, 40 km from Ghoti in Nashik district.',
            buttonText: 'Full Story',
            img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
          },
          {
            date: '10 Jan, 2016',
            title: 'कलावंती दुर्ग | Kalavanti Durg',
            area: 'Thakurwadi-Panvel-Maharashtra-India',
            elevation: 'Elevation: 2,250 ft (686 m)',
            description: 'Harihar fort / Harshagad is a fort located 40km from Nashik City, 48 km from Igatpuri, 40 km from Ghoti in Nashik district.',
            buttonText: 'Full Story',
            img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
          },
          {
            date: '10 Jan, 2016',
            title: 'कलावंती दुर्ग | Kalavanti Durg',
            area: 'Thakurwadi-Panvel-Maharashtra-India',
            elevation: 'Elevation: 2,250 ft (686 m)',
            description: 'Harihar fort / Harshagad is a fort located 40km from Nashik City, 48 km from Igatpuri, 40 km from Ghoti in Nashik district.',
            buttonText: 'Full Story',
            img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
          },
          {
            date: '10 Jan, 2016',
            title: 'कलावंती दुर्ग | Kalavanti Durg',
            area: 'Thakurwadi-Panvel-Maharashtra-India',
            elevation: 'Elevation: 2,250 ft (686 m)',
            description: 'Harihar fort / Harshagad is a fort located 40km from Nashik City, 48 km from Igatpuri, 40 km from Ghoti in Nashik district.',
            buttonText: 'Full Story',
            img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
          },
          {
            date: '10 Jan, 2016',
            title: 'कलावंती दुर्ग | Kalavanti Durg',
            area: 'Thakurwadi-Panvel-Maharashtra-India',
            elevation: 'Elevation: 2,250 ft (686 m)',
            description: 'Harihar fort / Harshagad is a fort located 40km from Nashik City, 48 km from Igatpuri, 40 km from Ghoti in Nashik district.',
            buttonText: 'Full Story',
            img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
          },
       

    ];
  }


}
