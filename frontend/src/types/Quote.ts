import Tag from './Tag';

export default interface Quote {
  id: number,
  text: string,
  author: string,
  created_by: {
    id: number,
    username: string,
    is_staff: boolean
  },
  tags: Tag[]
}
