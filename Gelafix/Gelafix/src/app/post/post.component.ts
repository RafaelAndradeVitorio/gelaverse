import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { error } from 'console';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit {
  ngOnInit(): void {
    // this.nextPage(4)
    this.loadPost()
  }


  // http = inject(HttpClient);
  private postService = inject(PostService);
  posts: any = [];
  pageAtual: number = 1

  loadPost(){
    this.postService.getPosts().subscribe({
      next: (posts: any) =>{
        this.posts = posts;
        console.log(posts);
      },
      error: (error) => console.log("Erro pai:", error)
    })
  }

  nextPage(teste?: number){
    this.postService.getPosts().subscribe({
      next: (post: any) =>{
        this.posts = post;
        this.pageAtual =  teste || this.pageAtual + 1
        const url = "https://rickandmortyapi.com/api/character/?page=" + this.pageAtual
        this.pageAtual = this.pageAtual + 1
        this.posts.info.next = "https://rickandmortyapi.com/api/character/?page=" + this.pageAtual
        this.pageAtual = this.pageAtual - 2
        this.posts.info.prev = "https://rickandmortyapi.com/api/character/?page=" + this.pageAtual
        this.pageAtual = this.pageAtual + 1
        this.postService.skipPage(url).subscribe({
          next: (result: any) =>{
            const url = "https://rickandmortyapi.com/api/character/?page=" + this.pageAtual
            this.posts = result
            ;console.log(url)
          },
          error: (error) => console.log("Erro pai:", error)
        })
        console.log( "info:", this.posts);
      },
      error: (error) => console.log("Erro pai:", error)
    })
  }
}

