import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MainPageService } from '../main-service/main-page.service';
import { UserService } from '../../user/user-service/user.service';
import { Idea } from '../../models/idea';
import { User } from '../../models/user';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers: [MainPageService, UserService]
})
export class MainPageComponent implements OnInit {

  topIdeas: Idea[];
  recomIdeas: Idea[];
  newIdeas: Idea[];
  mouseenter: any;
  currentUser: User;

  constructor(private router: Router,
    private activedRoute: ActivatedRoute,
    private mainPageService: MainPageService,
    private userService: UserService) {
    //this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.topIdeas = this.mainPageService.getTopIdeas();
    this.currentUser = this.userService.getUser(); // временно, дальше user с localStorage.getItem('currentUser'))
    this.recomIdeas = this.mainPageService.getRecomIdeas();
    this.newIdeas = this.mainPageService.getNewIdeas();
    this.likedTopIdeas();
    this.likedRecommendedIdeas();
    this.likedNewIdeas();
  }

  search(sear) {
    console.log(sear);
  }

  like(id: number) {
    this.mainPageService.likeTop(id);
    return false;
  }

  likedTopIdeas() {
    const favIdeasUser: number[] = this.currentUser.favoriteIdeas;
    for (let idea of this.topIdeas) {
      if (favIdeasUser.indexOf(idea.id) !== -1) {
        idea.favorIcon = 'favorite';
      }
    }
  }

  likedRecommendedIdeas() {
    const favIdeasUser: number[] = this.currentUser.favoriteIdeas;
    for (let idea of this.recomIdeas) {
      if (favIdeasUser.indexOf(idea.id) !== -1) {
        idea.favorIcon = 'favorite';
      }
    }
  }

  likedNewIdeas() {
    const favIdeasUser: number[] = this.currentUser.favoriteIdeas;
    for (let idea of this.newIdeas) {
      if (favIdeasUser.indexOf(idea.id) !== -1) {
        idea.favorIcon = 'favorite';
      }
    }
  }
}
