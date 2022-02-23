import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() post!: Post;
  @Input() bgColor!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
