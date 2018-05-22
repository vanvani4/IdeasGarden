import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MainPageService } from '../../main-service/main-page.service';
import { Idea } from '../../../models/idea';

@Component({
  selector: 'app-recommended-tab',
  templateUrl: './recommended-tab.component.html',
  styleUrls: ['./recommended-tab.component.css']
})
export class RecommendedTabComponent implements OnInit {

  recomIdeas: Idea[];

  constructor(private router: Router,
    private activedRoute: ActivatedRoute,
    private mainPageService: MainPageService) { }

  ngOnInit() {
    this.recomIdeas = this.mainPageService.getRecomIdeas();
  }

  like(id: number) {
    this.mainPageService.likeRecommended(id);
    return false;
  }
}
