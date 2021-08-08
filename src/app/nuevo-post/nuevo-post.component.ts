import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddPost } from '../store/posts/posts.actions';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-nuevo-post',
  templateUrl: './nuevo-post.component.html',
  styleUrls: ['./nuevo-post.component.css']
})
export class NuevoPostComponent implements OnInit {

  public text: string;

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  public addPost() {
    this.store.dispatch(new AddPost({ id: uuid(), text: this.text }));
    this.text = '';
  }

}
