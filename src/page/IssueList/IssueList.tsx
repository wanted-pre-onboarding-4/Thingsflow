import React from "react";
import Banner from '../../components/Banner';
import Layout from '../../components/Layout';
import IssueItem from "../../components/IssueItem";


const IssueList = () => {

    return (
        <Layout>
            <ul>
                {[1, 2, 3, 4].map(item => <IssueItem />)}
                <Banner />
                {[1, 2, 3, 4].map(item => <IssueItem />)}

            </ul>
        </Layout>
    )
}

export default IssueList;