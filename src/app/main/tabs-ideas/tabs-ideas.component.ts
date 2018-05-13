import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MainPageService } from '../main-service/main-page.service'
import { Idea } from '../../models/idea'

@Component({
  selector: 'app-tabs-ideas',
  templateUrl: './tabs-ideas.component.html',
  styleUrls: ['./tabs-ideas.component.css']
})
export class TabsIdeasComponent implements OnInit {

  topIdeas: Idea[];

  constructor(private router: Router,
    private activedRoute: ActivatedRoute,
    private mainPageService: MainPageService) { }

  ngOnInit() {
    this.topIdeas = this.mainPageService.getTopIdeas();
  }

}
