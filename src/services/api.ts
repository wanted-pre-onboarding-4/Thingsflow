import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const issueApi = {
  getAllIssue: (owner: string, repo: string, params: Object) =>
    axiosInstance.get(`/repos/${owner}/${repo}/issues`, {
      params,
    }),
  getIssueDetail: (owner: string, repo: string, issueId: number) =>
    axiosInstance.get(`/repos/${owner}/${repo}/issues/${issueId}`),
};

axiosInstance.interceptors.request.use(config => {
  config.headers!.Accept = 'application/vnd.github+json';
  // config.headers!.Authorization = `${process.env.REACT_APP_ACCESS_TOKEN}`;
  return config;
});
