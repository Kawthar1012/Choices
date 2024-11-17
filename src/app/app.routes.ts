import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withViewTransitions } from '@angular/router';
import { QuestionOneComponent } from '../question-one/question-one.component';
import { QuestionTwoComponent } from '../question-two/question-two.component';
import { bootstrapApplication } from '@angular/platform-browser';
/*import { DismissComponent } from '../dismiss/dismiss.component';*/


export const routes: Routes = [
  { path: 'question1', component: QuestionOneComponent, data: { animation: 'QuestionOnePage' } },
  { path: 'question2', component: QuestionTwoComponent, data: { animation: 'QuestionTwoPage' } },
  { path: '', redirectTo: '/question1', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/question1' } 
];

bootstrapApplication(QuestionOneComponent, {
  providers: [
    provideRouter(routes, withViewTransitions()),
  ]
});

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
