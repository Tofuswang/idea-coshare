export interface Definition {
  id: string;
  term: string;
  content: string;
  author: string;
  recorder?: string;
  source?: string;
  createdAt: Date;
  votes: number;
  category?: string[];
}

export interface TermGroup {
  term: string;
  definitions: Definition[];
}

export interface Comment {
  id: string;
  definitionId: string;
  content: string;
  author: string;
  createdAt: Date;
}