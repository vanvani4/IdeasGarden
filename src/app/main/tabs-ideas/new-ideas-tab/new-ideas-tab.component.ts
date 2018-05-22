import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MainPageService } from '../../main-service/main-page.service';
import { Idea } from '../../../models/idea';

@Component({
  selector: 'app-new-ideas-tab',
  templateUrl: './new-ideas-tab.component.html',
  styleUrls: ['./new-ideas-tab.component.css']
})
export class NewIdeasTabComponent implements OnInit {
  newIdeas: Idea[];

  constructor(private router: Router,
    private activedRoute: ActivatedRoute,
    private mainPageService: MainPageService) { }

  ngOnInit() {
    this.newIdeas = this.mainPageService.getNewIdeas();
  }

  like(id: number) {
    this.mainPageService.likeNew(id);
    return false;
  }

}
