import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { OWNER, REPOSITORY } from '../services/IssueServices';
import { Link } from 'react-router-dom';

export default function Layout() {
  return (
    <Wrap>
      <Header>
        <Link to="/">
          {OWNER} / {REPOSITORY}
        </Link>
      </Header>
      <Outlet />
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0px auto;
  margin-bottom: 50px;
  @media ${({ theme }) => theme.breakPoints.mobile} {
    width: 100%;
    min-width: 300px;
    padding: 10px 8px;
  }
`;

const Header = styled.h1`
  width: 100%;
  height: 80px;
  margin: 0;
  line-height: 80px;
  font-weight: 500;
  background-color: white;
  display: flex;
  justify-content: center;
  @media ${({ theme }) => theme.breakPoints.mobile} {
    margin: 10px 0px;
    height: 20px;
    line-height: 20px;
  }
`;
