import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Posts } from '../store/posts/posts.model';
import { RemovePost } from '../store/posts/posts.actions';

@Component({
  selector: 'app-listar-posts',
  templateUrl: './listar-posts.component.html',
  styleUrls: ['./listar-posts.component.css']
})
export class ListarPostsComponent implements OnInit {

  public posts: Observable<Posts>;

  constructor(private store: Store) {
    this.posts = store.select(state => state.posts.posts);
  }

  ngOnInit(): void {
  }

  public RemovePost(id) {
    console.log(id);
    this.store.dispatch(new RemovePost(id));
  }
}
