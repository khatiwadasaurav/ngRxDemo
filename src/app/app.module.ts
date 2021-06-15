import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store'
import { languageReducer } from '../reducer/language.reducer'
import { postReducer } from '../reducer/post.reducer'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(
      {
        language: languageReducer,
        post: postReducer
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
