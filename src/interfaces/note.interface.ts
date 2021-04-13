export interface INote {
  title: string
  description: string
  category: Category
}

export type Category = 'note' | 'task' | 'category'
