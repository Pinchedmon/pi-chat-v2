export type post = {
    id: number;
    content: string;
    author: string;
    tag: string;
    publishedAt: Date;
    likes: number;
    comments: number;
    avatar: string;
    imageUrl?: string;
}
