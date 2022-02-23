import { Post } from "./models/post";

let posts: Post[] = [
  {
    id: 1,
    title: 'Primo post',
    body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, dignissimos?',
    active: false,
    type: 'news',
    autore:'Giuseppe'
  },
  {
    id: 2,
    title: 'Secondo post',
    body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, dignissimos?',
    active: true,
    type: 'politic',
    autore: 'Antonio'
  },
  {
    id: 3,
    title: 'Terzo post',
    body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, dignissimos?',
    active: false,
    type: 'education',
    autore: 'Antonio'
  },
  {
    id: 4,
    title: 'Quarto post',
    body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, dignissimos?',
    active: false,
    type: 'politic',
    autore: 'Giuseppe'
  },
  {
    id: 5,
    title: 'Quinto post',
    body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, dignissimos?',
    active: true,
    type: 'news',
    autore: 'Giuseppe'
  },
]


export function getPosts(){
  return posts;
}

export function updatePost(data: Partial<Post>, id: number){
  posts = posts.map(post => post.id == id? {...post, ...data} : post);
  return posts.find(post => post.id == id) as Post;
}

export function getPost(idPost:number){
  return posts.find((post:Post)=> post.id === idPost)
}
