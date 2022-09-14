import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { IIssue } from '../../utils/types';
import MarkDown from './components/Markdown';
import IssueCard from '../../components/IssueCard';

export default function IssueDetail() {
  const location = useLocation();
  const state = location.state as IIssue;

  return (
    <Wrap>
      <Head>
        <UserImage>
          <img alt="avatar" src={state.user.avatar_url} />
        </UserImage>
        <IssueCard issue={state} />
      </Head>
      <Body>
        <MarkDown content={state.body} />
      </Body>
    </Wrap>
  );
}

const Wrap = styled.div``;

const Head = styled.div`
  display: flex;
  align-items: center;
`;

const UserImage = styled.div`
  width: 80px;
  height: 80px;
  margin-right: 20px;
  @media ${({ theme }) => theme.breakPoints.mobile} {
    width: 50px;
    height: 50px;
    margin-right: 8px;
  }
  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    @media ${({ theme }) => theme.breakPoints.mobile} {
      width: 50px;
      height: 50px;
    }
  }
`;

const Body = styled.div`
  line-height: 24px;
`;
