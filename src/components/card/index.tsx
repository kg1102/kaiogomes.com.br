import styled from 'styled-components';

const CardContainer = styled.div`
    width: 15rem;
    height: 18rem;
    background-color: red;
    text-align: center;
    border-radius: 5px;
    margin-top: 25px;
`;

export function Card() {
    return (
        <CardContainer>
            <div className="card__content">
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