import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutIdeaComponent } from './about-idea/about-idea.component';

const routes: Routes = [
  {path: 'idea/:id',
  component: AboutIdeaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutIdeaRoutingModule { }
