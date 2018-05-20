import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { MainPageComponent } from './main-component/main-page.component';
import { SearchIdeaComponent } from './search-idea/search-idea.component';
import { MainPageService } from './main-service/main-page.service';
import { TabsIdeasComponent } from './tabs-ideas/tabs-ideas.component';
import { TopTabComponent } from './tabs-ideas/top-tab/top-tab.component';
import { RecommendedTabComponent } from './tabs-ideas/recommended-tab/recommended-tab.component';
import { NewIdeasTabComponent } from './tabs-ideas/new-ideas-tab/new-ideas-tab.component';
import { UserService } from '../user/user-service/user.service';

@NgModule({
  imports: [
    CommonModule,
    MainPageRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [
    MainPageComponent,
    SearchIdeaComponent,
    TabsIdeasComponent,
    TopTabComponent,
    RecommendedTabComponent,
    NewIdeasTabComponent
  ],
  providers: [MainPageService, UserService]
})
export class MainPageModule { }
