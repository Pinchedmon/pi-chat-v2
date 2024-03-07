export type post = {
    id: number;
    content: string;
    author?: {
        tag: string;
        username: string;
        avatar: string;
        id: string;
    }
    group?: {
        img: string;
        id: string;
        name: string;
        userId: string;
    }
    publishedAt: Date;
    likes: number;
    comments: number;
    img?: string | undefined;
}
