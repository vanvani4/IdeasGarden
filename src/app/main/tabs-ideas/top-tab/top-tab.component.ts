import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MainPageService } from '../../main-service/main-page.service';
import { Idea } from '../../../models/idea';

@Component({
  selector: 'app-top-tab',
  templateUrl: './top-tab.component.html',
  styleUrls: ['./top-tab.component.css']
})
export class TopTabComponent implements OnInit {

  topIdeas: Idea[];

  constructor(private router: Router,
    private activedRoute: ActivatedRoute,
    private mainPageService: MainPageService) { }

  ngOnInit() {
    this.topIdeas = this.mainPageService.getTopIdeas();
  }

}
