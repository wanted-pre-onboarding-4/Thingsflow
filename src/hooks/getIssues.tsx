import axios from 'axios';

const getIssues = async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}issues`, {
    headers: {
      Authorization: `auth ${process.env.REACT_APP_ACCESS_TOKEN}`,
    },
  });
  return data;
};

export default getIssues;
