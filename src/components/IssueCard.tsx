import styled from 'styled-components';
import { MdOutlineComment } from 'react-icons/md';
import { IIssue } from '../utils/types';
import { getMyDate } from '../utils/GetDate';

export default function IssueCard({ issue }: { issue: IIssue }) {
  return (
    <Card>
      <CardLeft>
        <CardHead>
          <Number>#{issue.number}</Number>
          <Title>{issue.title}</Title>
        </CardHead>
        <CardSub>
          <User>작성자 : {issue.user.login},</User>
          <Date>작성일 : {getMyDate(issue.created_at)}</Date>
        </CardSub>
      </CardLeft>
      <CardRight>
        <MdOutlineComment />
        <Comment>{issue.comments}</Comment>
      </CardRight>
    </Card>
  );
}

const Card = styled.div`
  width: 100%;
  padding: 30px 0px;
  border-bottom: 1px solid black;
  display: grid;
  grid-template-columns: 8fr 1fr;
  grid-gap: 30px;
  align-items: center;
  justify-content: space-between;
  @media ${({ theme }) => theme.breakPoints.mobile} {
    grid-template-columns: 8fr 1fr;
    grid-gap: 15px;
  }
`;

const CardLeft = styled.div``;

const CardHead = styled.div`
  font-size: 1.2rem;
  margin-bottom: 10px;
  @media ${({ theme }) => theme.breakPoints.mobile} {
    font-size: 1rem;
    margin-bottom: 10px;
  }
`;

const Number = styled.span`
  margin-right: 5px;
`;

const Title = styled.span``;

const CardSub = styled.div`
  @media ${({ theme }) => theme.breakPoints.mobile} {
    font-size: 0.8rem;
  }
`;

const User = styled.span`
  margin-right: 8px;
  @media ${({ theme }) => theme.breakPoints.mobile} {
    margin-right: 5px;
  }
`;

const Date = styled.span``;

const CardRight = styled.div`
  text-align: center;
  svg {
    width: 25px;
    height: 25px;
    @media ${({ theme }) => theme.breakPoints.mobile} {
      width: 20px;
      height: 20px;
    }
  }
`;

const Comment = styled.span`
  @media ${({ theme }) => theme.breakPoints.mobile} {
    font-size: 0.8rem;
  }
`;
