import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MainPageService } from '../main-service/main-page.service'
import { Idea } from '../../models/idea'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  // tiles = [
  //   {img: 'https://i.ytimg.com/vi/oIe9Rjcn0tA/maxresdefault.jpg', cols: 3, rows: 1, color: 'lightblue'},
  //   {img: 'http://www.autoconsulting.com.ua/pictures/testdrives/Moto/Dnepr_22.jpg', cols: 1, rows: 2, color: 'lightgreen'},
  //   {img: 'http://i.dailymail.co.uk/i/pix/2018/02/07/12/48F523F800000578-5362079-image-a-7_1518005510818.jpg', cols: 1, rows: 1, color: 'lightpink'},
  //   {img: 'https://cdn.vox-cdn.com/thumbor/ratuHD94xaVpChadADOS5oooCkE=/0x0:2362x1771/1200x800/filters:focal(993x698:1369x1074)/cdn.vox-cdn.com/uploads/chorus_image/image/55049115/ELEC_CITY.0.jpg', cols: 2, rows: 1, color: '#DDBDF1'},
  // ];

  topIdeas: Idea[];
  mouseenter;

  constructor(private router: Router,
    private activedRoute: ActivatedRoute,
    private mainPageService: MainPageService) { }

  ngOnInit() {
    this.topIdeas = this.mainPageService.getTopIdeas();
  }

  search(sear) {
    console.log(sear);
  }

  home() {
    this.router.navigate(['admin']);
  }

  growIdea() {
    this.router.navigate(['admin']);
  }
}
