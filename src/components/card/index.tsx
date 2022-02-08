import styled from 'styled-components';
import { useNavigate } from 'react-router';


const CardContainer = styled.div`
    height: 18rem;
    border-radius: 15px;
    margin-top: 25px;
    display: inline-block;
    flex-grow: 1;
    width: calc(100% * (1/4) - 10px - 1px);
    box-shadow: -2px -2px 4px;
    background-color: black;


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
        background-position: center;
        background-size: 100%;
        background-repeat: no-repeat;
        border-radius: 15px;  
        height: 100%;
        box-shadow: inset 0px 0px 400px 510px rgba(0, 0, 0, .7);
        .card__content {
            /* display: flex; */
            /* justify-content: space-between; */
            .card__title {
                overflow: hidden;
                white-space: pre-wrap;      /* CSS3 */   
                white-space: -moz-pre-wrap; /* Firefox */    
                white-space: -pre-wrap;     /* Opera <7 */   
                white-space: -o-pre-wrap;   /* Opera 7 */    
                word-wrap: break-word;      /* IE */
                padding: 2rem 2rem;
                color: white;
                font-size: 1rem;
            }
            .card__author {
                padding: 0.3rem 2rem;
                color: #FFF;
                margin: 0 5%;
                background-color: #2038bb;
                border-radius: 10px;
            }
        }
    }

    .card:hover {
        transition: 0.5s ease all;
        -webkit-transform: translateY(-5px);
        transform: translateY(-5px);
    }

`;

interface CardProps {
    path_id: String,
    title: String,
    image: String
}

export function Card(props: CardProps) {
    const navigate = useNavigate();

    return (
        <CardContainer>
            <div 
                className="card" 
                style={{backgroundImage: `url("${props.image}")`}} 
                onClick={() => navigate(`/blog/${props.path_id}`)}
            > 
                <div className="card__content">
                    <h1 className="card__title">{props.title}</h1>
                    <span className="card__author">Kaio Gomes</span>
                </div>
            </div>
        </CardContainer>
    )
}