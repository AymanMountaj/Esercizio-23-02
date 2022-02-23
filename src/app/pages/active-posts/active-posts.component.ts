import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { Router } from '@angular/router';
import * as Funzioni from  'src/app/posts.service';

@Component({
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss']
})
export class ActivePostsComponent  implements OnInit {

  posts!: Post[];


  constructor(private router: Router) { }

  ngOnInit(): void {
    const posts = Funzioni.getPosts();
    this.posts = posts;
    console.log(this.posts);
  }

  onInactivePosts(id: number, i: number){
    Funzioni.updatePost({active: false}, id);
    this.posts.splice(i, 1);
  }

  goDettagli(id:number){
    this.router.navigate(['/active-posts/'+ id]);
  }

}
