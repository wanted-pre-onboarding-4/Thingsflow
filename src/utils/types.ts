export interface IIssue {
  active_lock_reason?: any;
  assignee?: any;
  assignees: any[];
  author_association: string;
  body: string;
  closed_at?: any;
  comments: number;
  comments_url: string;
  created_at: string;
  draft: boolean;
  events_url: string;
  html_url: string;
  id: number;
  labels: any[];
  labels_url: string;
  locked: boolean;
  milestone?: any;
  node_id: string;
  number: number;
  performed_via_github_app?: any;
  pull_request: Pullrequest;
  reactions: Reactions;
  repository_url: string;
  state: string;
  state_reason?: any;
  timeline_url: string;
  title: string;
  updated_at: string;
  url: string;
  user: User;
}

interface User {
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  id: number;
  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
}

interface Reactions {
  '+1': number;
  '-1': number;
  confused: number;
  eyes: number;
  heart: number;
  hooray: number;
  laugh: number;
  rocket: number;
  total_count: number;
  url: string;
}

interface Pullrequest {
  diff_url: string;
  html_url: string;
  merged_at?: any;
  patch_url: string;
  url: string;
}
