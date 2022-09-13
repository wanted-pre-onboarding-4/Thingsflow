import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import styled from 'styled-components';

function Issues() {
  const [issues, setissues] = useState<object[]>([]);
  useEffect(() => {
    const getIssues = async () => {
      const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}issues`, {
        headers: {
          Authorization: `auth ${process.env.REACT_APP_ACCESS_TOKEN}`,
        },
      });
      setissues(data);
    };
    getIssues();
  }, []);
  console.log(issues);
  return <h1>issues</h1>;
}

export default Issues;
