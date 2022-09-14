export interface IssueDataInterface {
  title: string;
  body: string;
  number: number;
  created_at: string;
  user: {
    login: string;
    avatar_url: string;
  };
  [key: string]: any;
}
