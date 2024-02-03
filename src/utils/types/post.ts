export type post = {
    id: number;
    content: string;
    author: {
        tag: string;
        username: string;
        avatar: string;
        id: string;
    }
    publishedAt: Date;
    likes: number;
    comments: number;
    imageUrl?: string | undefined;
}
