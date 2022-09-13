import React, { ReactNode } from "react";
import styled from 'styled-components';
import Header from './Header';

interface LayoutProps {
    children: ReactNode;

}


const Layout = ({ children }: LayoutProps) => {
    return (
        <Container>
            <Header organization={"Angular"} repository={"Angular-cli"}></Header>
            {children}
        </Container >
    )

}

const Container = styled.div`
    border: 5px solid black;
    padding: 0 20px;
    height:calc(100vh - 10px);
    overflow:auto;
`


export default Layout;