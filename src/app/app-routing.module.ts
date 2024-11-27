import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './components/question/question.component';
import { ResultComponent } from './components/result/result.component';

const routes: Routes = [
  { path: 'question/:id', component: QuestionComponent },
  { path: 'result/:id', component: ResultComponent },
  { path: '', redirectTo: '/question/q1', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
