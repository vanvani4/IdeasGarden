import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateIdeaComponent } from './create-idea/create-idea.component'

const routes: Routes = [
  {path: 'create', component: CreateIdeaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateIdeaRoutingModule { }
