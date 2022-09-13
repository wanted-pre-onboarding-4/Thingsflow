import React from 'react';
import styled from 'styled-components';
import IssueItem from '../../../components/IssueItem';

const IssueHeader = () => {
    return (
        <Container>
            <ImageWrapper></ImageWrapper>
            <IssueItem />
        </Container>
    );
};

const Container = styled.div`
    display:flex;
    margin-bottom:30px;
`;

const ImageWrapper = styled.div`
    width: 100px;
    height:100px;
    border: 1px solid black;
    margin-right:10px;
`;

export default IssueHeader;
