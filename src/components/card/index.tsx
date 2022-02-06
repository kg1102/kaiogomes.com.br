import styled from 'styled-components';

const CardContainer = styled.div`
    width: 15rem;
    height: 18rem;
    text-align: center;
    border-radius: 15px;
    margin-top: 25px;
    display: inline-block;
    background-color: red;
    flex-grow: 1;
    width: calc(100% * (1/4) - 10px - 1px);

    @media screen and (max-width: 939px){
        width: calc(100% * (1/4) - 10px - 1px);
    }

    @media screen and (max-width: 860px){
        width: calc(100% * (1/3) - 10px - 1px);
    }

    @media screen and (max-width: 510px){
        width: calc(100% * (1/2) - 10px - 1px);
    }

`;

interface CardProps {
    title: String
}

export function Card(props: CardProps) {
    return (
        <CardContainer>
            <div className="card__content">
                <h1>{props.title}</h1>
                <div className="card__author">
                    <div className="author__image">
                        {/**/}
                    </div>
                    <div className="author__name">
                        Kaio Gomes
                    </div>
                </div>
            </div>
        </CardContainer>
    )
}