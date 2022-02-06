import styled from "styled-components";
import { useNavigate } from "react-router";

const ContainerHeader = styled.div`
    display: flex;
    color: #fff;
    justify-content: space-between;
    height: 5.5rem;
    align-items: center;
    padding: 1rem 2rem;

    .header__logo {
        cursor: pointer;
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
        cursor: pointer;
    }
`;

export function Header() {
    const navigate = useNavigate();
    return (
        <>
            <ContainerHeader>
                <div className="header__logo" onClick={()=>navigate('/')}>
                    <p><span>K</span>aio<span>G</span>omes</p>
                </div>
                <div className="header__nav">
                    <ul>
                        <li><p>Home</p></li>
                        <li><p>Blog</p></li>
                    </ul>
                </div>
            </ContainerHeader> 
        </>
    );
}
