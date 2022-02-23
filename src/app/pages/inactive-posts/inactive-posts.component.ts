import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { Router } from '@angular/router';
import * as Funzioni from  'src/app/posts.service';

@Component({
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss']
})
export class InactivePostsComponent implements OnInit {

  posts!: Post[];
  constructor(private router: Router) { }

  ngOnInit(): void {
    const posts = Funzioni.getPosts();
    this.posts = posts;
    console.log(this.posts);
  }

  onActivePosts(id: number, i: number){
    Funzioni.updatePost({active: true}, id);
    this.posts.splice(i, 1);
  }
  goDettagli(id:number){
    this.router.navigate(['/inactive-posts/'+ id]);
  }

}
