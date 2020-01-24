import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  @Input() posts=[];

  index:number;

  constructor() { }

  onDelete(i:number)
  {
    this.posts.splice(i,1);
  }

  ngOnInit() {
  }

}

