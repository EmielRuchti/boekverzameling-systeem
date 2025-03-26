export interface Review {
    id: number;
    body: string;
    book_id: number;
}

export interface Book {
    id: number;
    title: string;
    author_id: number;
    reviews: Review[];
}
