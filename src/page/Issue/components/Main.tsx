import React from "react";
import styled from 'styled-components';

const IssueMain = () => {

    return (
        <Container>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique itaque fuga nisi expedita iusto numquam placeat vero unde dolorum, temporibus odio facere provident ipsa nihil nobis blanditiis. Officiis ex accusantium animi sit tempora possimus cumque deserunt est consequuntur et quae necessitatibus quos consequatur perferendis, illo quasi aut voluptatum dolorem laudantium velit ullam architecto impedit placeat aspernatur? Assumenda, nostrum. Neque a, nemo atque impedit quod quis ducimus harum inventore excepturi natus voluptatibus hic mollitia itaque iste eos? Odit aliquam labore vitae sunt incidunt commodi amet fuga quam soluta, aliquid sed reprehenderit dolorem qui doloremque ad, iste voluptatum omnis sit officiis molestiae nostrum aut. Commodi vel atque omnis quasi saepe excepturi veritatis quo aliquam impedit ex, cupiditate reprehenderit? Ipsum libero autem iusto sit quo, cumque laboriosam? Nisi fugit facere repellendus explicabo animi! Vitae voluptatum ut porro exercitationem, et eos numquam alias accusamus. Totam dicta soluta officia autem harum distinctio est vitae sint cupiditate fuga et nesciunt nobis ullam voluptatem magni esse excepturi illum velit, saepe error dignissimos. Porro ad a molestiae dolor vel minus deleniti quod, illo, error corrupti esse voluptas adipisci hic laborum! Deserunt iste a illum placeat animi deleniti ipsum expedita, quasi non cumque ad. Officia iure et recusandae debitis.</p>
            <div>ATTN: <span>@johnpapa</span> / <span>@papapap</span></div>
        </Container>
    )

}

const Container = styled.div`
        font-size:1.3rem;
    p{
        line-height:1.5;
    }
    div{
        margin-top:20px;
        span{
            font-weight:600;
        }
    }

`;

export default IssueMain;