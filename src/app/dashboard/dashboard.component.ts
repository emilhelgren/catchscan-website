import { Post } from './../models/post';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';

  posts: Observable<any>;
  newPost: Observable<any>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getPosts() {
    // Testfunktion GET
    let headers = new HttpHeaders().set('Authorization', 'auth-token');
    
    let params = new HttpParams().set('userId', '1');

    // Observable
    //this.posts = this.http.get(this.ROOT_URL + "/posts", { params });
    this.posts = this.http.get(this.ROOT_URL + "/posts", { headers });

  }

  createPost() {
    // Testfunktion POST
    const data: Post = {
      id: null,
      userId: 23,
      title: "ny post",
      body: "her er min eneste post"
    }

    this.newPost = this.http.post<Post>(this.ROOT_URL + '/posts', data)
        .pipe(map(post => post.title));

  }

}
