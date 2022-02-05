import {
    useState
} from "react";
import {
    useNavigate
} from "react-router";
import styled from "styled-components";

const ContainerHeader = styled.div`
    display: flex;
    color: #fff;
    justify-content: space-between;
    height: 5.5rem;
    align-items: center;

    .header__logo {
        font-size: 2rem;
        span {
            color: #504eff;
        }
    }

    .header__nav, ul {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        list-style: none;
    }

`;

export function Header() {
    const history = useNavigate();
    return (
        <>
            <ContainerHeader>
                <div className="header__logo">
                    <p><span>K</span>aio<span>G</span>omes</p>
                </div>
                <div className="header__nav">
                    <ul>
                        <li>Home</li>
                        <li>Blog</li>
                    </ul>
                </div>
            </ContainerHeader> 
        </>
    );
}
