import type {Review} from './../../reviews/components/types';

export interface Book {
    id: number;
    title: string;
    author_id: number;
    reviews: Review[];
}
