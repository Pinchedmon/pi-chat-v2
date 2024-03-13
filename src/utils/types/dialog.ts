export type dialog = {
    id: number;
    name: string;
    img: string;
    participants: {
        id: string,
        username: string,
        avatar: string
    }
}

export type dialogData = {
    id: number;
    name: string;
    img: string;
    participants: [{
        id: string,
        username: string,
        avatar: string
    }]
}
