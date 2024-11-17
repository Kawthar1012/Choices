import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { QuestionOneComponent } from '../question-one/question-one.component';
import { QuestionTwoComponent } from '../question-two/question-two.component';

const routes: Routes = [
  { path: 'question1', component: QuestionOneComponent, data: { animation: 'Question1Page' } },
  { path: 'question2', component: QuestionTwoComponent, data: { animation: 'Question2Page' } },
  { path: '', redirectTo: 'question1', pathMatch: 'full' } // default route to question 1
];

@NgModule({
  declarations: [
    AppComponent,
    QuestionOneComponent,
    QuestionTwoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
