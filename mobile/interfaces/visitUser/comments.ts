export interface Comments {
    commentator: number;
    email: string;
    id_comment: number;
    description: string;
    amount_start: number;
    url_photo: string;
  }
  export interface CommentsPostType {
    description: string;
    id_user_visited: number;
    id_user_commentator: number;
    amountStart: number;
  }
  