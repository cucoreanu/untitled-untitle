import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {Observable} from "rxjs";
import {UserPost} from "../userPost";

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnChanges {

  @Input() userId!: number;
  posts!: Observable<UserPost[]>;

  constructor(private userService: UserService) { }

  ngOnChanges(): void {
    this.posts = this.userService.getUserPost(this.userId);
  }

}
