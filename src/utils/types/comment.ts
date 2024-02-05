export type comment = {
    id: number;
    content: string;
    author: {
        tag: string;
        username: string;
        avatar: string;
        id: string;
    }
 
    publishedAt: Date;


}