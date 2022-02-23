import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/post';
import * as postSrv from 'src/app/posts.service';



@Component({
  selector: 'app-dettagli',
  templateUrl: './dettagli.component.html',
  styleUrls: ['./dettagli.component.scss']
})
export class DettagliComponent implements OnInit, OnDestroy {

  post!: Post | undefined;
  sub!:Subscription
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.router.params.subscribe((params:Params) => {
      const id = +params['id'];
      this.post = postSrv.getPost(id);
    })
  }

  ngOnDestroy(): void {
      this.sub.unsubscribe()
  }
}


