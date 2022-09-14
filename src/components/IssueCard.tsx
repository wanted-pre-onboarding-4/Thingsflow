import styled from 'styled-components';
import { MdOutlineComment } from 'react-icons/md';
import dateFormat from '../utils/dateFormat';
import { Link } from 'react-router-dom';

interface IssueItemProps {
  isDetail: boolean;
  name: string;
  created_at: string;
  issueNumber: number;
  comments: number;
  title: string;
  avatarUrl: string;
}

export default function IssueCard({
  isDetail,
  name,
  created_at,
  issueNumber,
  comments,
  title,
  avatarUrl,
}: IssueItemProps) {
  return (
    <Card to={`/issue/${issueNumber}`}>
      <CardLeft>
        <CardHead>
          <AvatarContainer>
            {isDetail && <AvatarImage src={avatarUrl} alt="userAvatar" />}
            <Number>#{issueNumber}</Number>
          </AvatarContainer>
          <Title>{title}</Title>
          <User>작성자 : {name}</User>
          <Date>작성일 : {dateFormat(created_at)}</Date>
        </CardHead>
      </CardLeft>
      <CardRight>
        <MdOutlineComment />
        <Comment>{comments}</Comment>
      </CardRight>
    </Card>
  );
}

const Card = styled(Link)`
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
  display: flex;
  flex-direction: column;
`;

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const AvatarImage = styled.img`
  width: 30px;
  height: 30px;
  display: inline;
`;

const Number = styled.div`
  margin: 5px;
`;

const Title = styled.span`
  margin-top: 5px;
`;

const User = styled.span`
  margin-right: 8px;
  margin-top: 5px;
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
