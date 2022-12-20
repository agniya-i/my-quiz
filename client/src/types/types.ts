
export interface IFolder {
    title: string;
    _id: string;
    cards: ICard[]
}

export interface IProfile {
    username: string;
    createdAt: string;
    email: string;
    favourites: string[];
    password: string;
    token: string;
    _id: string;
}


export interface ISet {
    _id: string;
    title: string;
    cards: ICard[];
}

export interface ICard {
    title: string,
    description: string
}