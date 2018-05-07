import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { MainPageComponent } from './main-component/main-page.component';
import { SearchIdeaComponent } from './search-idea/search-idea.component';
import { MainPageService } from './main-service/main-page.service'

@NgModule({
  imports: [
    CommonModule,
    MainPageRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [
    MainPageComponent,
    SearchIdeaComponent
  ],
  providers: [MainPageService]
})
export class MainPageModule { }
