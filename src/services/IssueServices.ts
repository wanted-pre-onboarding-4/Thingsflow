import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Authorization: `auth ${process.env.REACT_APP_ACCESS_TOKEN},`,
  },
});

export const OWNER = 'angular';
export const REPOSITORY = 'angular-cli';

export const issueApi = {
  getIssueList: (params: { sort: string; status: string; per_page: number; page: number }) => {
    return api.get(`repos/${OWNER}/${REPOSITORY}/issues`, {
      params,
    });
  },
};
