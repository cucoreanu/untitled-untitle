import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseS} from "./base-s";
import {User} from "./user";
import {UserPost} from "./userPost";

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseS {

  constructor(private http: HttpClient) {
    super();
  }

  getUsers() {
    return this.http.get<User[]>(`${this.url}/users`)
  }

  getUserPost(id: number) {
    return this.http.get<UserPost[]>(`${this.url}/users/${id}/posts`);
  }
}

