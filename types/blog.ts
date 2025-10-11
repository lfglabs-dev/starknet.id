export interface BlogPost {
  slug: string
  title: string
  description: string
  author: {
    name: string
    id: string
    profilePicture?: string
  }
  date: string
  modifiedDate?: string
  readingTime: string
  tags: string[]
  image?: string
  featured?: boolean
  content: string
}



