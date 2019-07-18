import {  HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts;
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { 
    http.get(this.url)
      .subscribe(responce => {
        this.posts = responce
      })
  }

  createPost(input: HTMLInputElement){
    let post = {title: input.value}
    input.value = '';

    this.http.post(this.url, JSON.stringify(post))
      .subscribe(responce => {
        post['id'] = responce['id'];
        this.posts.splice(0, 0, post)
      });
    }

  updatePost(post){
      //this.http.patch(this.url, JSON.stringify({isRed: true,}))
      this.http.put(this.url + '/' + post.id, JSON.stringify(post))
        .subscribe(responce => {
           console.log(responce)
        })
    }
  

  ngOnInit() {
  }

}
