import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutIdeaRoutingModule } from './about-idea-routing.module';
import { AboutIdeaComponent } from './about-idea/about-idea.component';

@NgModule({
  imports: [
    CommonModule,
    AboutIdeaRoutingModule
  ],
  declarations: [AboutIdeaComponent]
})
export class AboutIdeaModule { }
