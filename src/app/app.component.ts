import { Component } from '@angular/core';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/internal/Observable';
import { Post } from '../model/post'
import * as PostActions from '../actions/post.actions'
import * as TextAction from '../actions/text.actions'


interface AppState {
  language: string
  post: Post
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  message$: Observable<string>;
  post$: Observable<Post>;
  titleText: string


  constructor(private store: Store<AppState>) {
    this.message$ = this.store.select('language')
    this.post$ = this.store.select('post')
  }

  spanishMessage() {
    this.store.dispatch({ type: TextAction.SPANISH })
  }
  frenchMessage() {
    this.store.dispatch({ type: TextAction.FRENCH })
  }
  nepaliMessage() {
    this.store.dispatch({ type: TextAction.NEPALI })
  }

  editText() {
    this.store.dispatch(new PostActions.EditText(this.titleText))
  }
  resetPost() {
    this.store.dispatch(new PostActions.Reset)
  }
  upVote() {
    this.store.dispatch(new PostActions.Upvote)
  }
  downVote() {
    this.store.dispatch(new PostActions.Downvote)
  }

}
