type post = {
    id: number;
    title: string;
    content: string;
    author: string;
    publishedAt: Date;
    likes: number;
    comments: number;
    imageUrl?: string;
}
const enum PostsType {
    PROFILE = 'profile',
    WALL = 'wall',
    SEARCH = 'search',
    ONLYFRIENDS ='onlyFriends'
}
interface Posts {
    posts: post[]; 
    type: PostsType;
}
