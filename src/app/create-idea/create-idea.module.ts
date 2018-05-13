import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateIdeaRoutingModule } from './create-idea-routing.module';
import { CreateIdeaComponent } from './create-idea/create-idea.component';

@NgModule({
  imports: [
    CommonModule,
    CreateIdeaRoutingModule
  ],
  declarations: [CreateIdeaComponent]
})
export class CreateIdeaModule { }
