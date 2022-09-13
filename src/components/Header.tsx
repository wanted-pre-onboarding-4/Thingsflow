import React from "react";
import styled from "styled-components";

interface HeaderProps {
    organization: string;
    repository: string;
}


const Header = ({ organization, repository }: HeaderProps) => {
    return <Container>
        {organization}/{repository}
    </Container>
}

const Container = styled.header`
        width:100%;
        height:50px;
        font-size: 1.5rem;
        font-weight:600;
        display:flex;
        justify-content:center;
        align-items:center;
    `
export default Header;