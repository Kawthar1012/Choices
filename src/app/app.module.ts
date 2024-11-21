import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { QuestionComponent } from './components/question/question.component';
import { ResultComponent } from './components/result/result.component';
import { AppRoutingModule } from './app-routing.module';
import { pageAnimation } from './animations/page-animations';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    ResultComponent, // Declare the result component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // Required for animations
    AppRoutingModule, // Import the routing module
  ],
  providers: [],
  bootstrap: [AppComponent], // Bootstrap the app component
})
export class AppModule { }
