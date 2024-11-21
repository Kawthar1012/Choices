import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './components/question/question.component';
import { ResultComponent } from './components/result/result.component';

const routes: Routes = [
  { path: '', component: QuestionComponent, data: { animation: 'isLeft' } },
  { path: 'result', component: ResultComponent, data: { animation: 'isRight' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
