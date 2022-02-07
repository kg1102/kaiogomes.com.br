import styled from 'styled-components';

const ButtonStyle = styled.button`
    background-color: #3a2cbd;
    border: none;
    border-radius: 0.5rem;
    color: white;
    font-family: 'Poppins', sans-serif;
    padding: 0.5rem 2rem;
    :hover {
        cursor: pointer;
        transition: 0.5s all ease;
        transform: scale(1.08)
    }
`;

export function Button(props: any){
    return <ButtonStyle {...props} >{props.children}</ButtonStyle>
}