export interface Book {
    id: number;
    title: string;
    author_id: number;
    reviews: Review[];
}

interface Review {
    id: number;
    body: string;
    bookd_id: number;
}
