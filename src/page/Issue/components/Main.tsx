import React from 'react';
import styled from 'styled-components';

interface IssueMainProps {
  body: string;
  attp: string[];
}

const IssueMain = ({ body, attp }: IssueMainProps) => {
  return (
    <Container>
      <p>{body}</p>
      <div>
        ATTN:
        {attp.map(person => (
          <span>@${person} /</span>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  font-size: 1.3rem;
  p {
    line-height: 1.5;
  }
  div {
    margin-top: 20px;
    span {
      font-weight: 600;
    }
  }
`;

export default IssueMain;
