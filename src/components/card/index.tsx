import styled from 'styled-components';

const CardContainer = styled.div`
    background-color: black;
    height: 18rem;
    border-radius: 15px;
    margin-top: 25px;
    display: inline-block;
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

    .card {
        cursor: pointer;
        background-color: red;
        background-image:  url("https://i.pinimg.com/236x/83/cd/af/83cdaf6a1719cb697137b089fee26e3c.jpg");
        background-position: center;
        background-size: 100%;
        background-repeat: no-repeat;
        border-radius: 15px;  
        height: 100%;
        box-shadow: inset 0px 0px 400px 510px rgba(0, 0, 0, .7);
        .card__content {
            .card__title {
                padding: 2rem 2rem;
                color: white;
            }
        }
    }

    .card:hover {
        transition: 0.5s ease all;
        transform: scale(1.05);
    }

`;

interface CardProps {
    title: String
}

export function Card(props: CardProps) {
    return (
        <CardContainer>
            <div className="card">
                <div className="card__content">
                    <h1 className="card__title">{props.title}</h1>
                </div>
            </div>
        </CardContainer>
    )
}