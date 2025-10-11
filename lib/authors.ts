import authorsData from "../lib/authors.json";

export interface Author {
  id: string;
  name: string;
  bio: string;
  profilePicture: string;
  email?: string;
  twitter?: string;
  linkedin?: string;
}

export function getAllAuthors(): Author[] {
  return Object.values(authorsData) as Author[];
}

export function getAuthorById(id: string): Author | null {
  const author = (authorsData as any)[id];
  return author ? (author as Author) : null;
}

export function getAuthorByName(name: string): Author | null {
  const authorId = name.toLowerCase().replace(/\s+/g, '-');
  return getAuthorById(authorId);
}


