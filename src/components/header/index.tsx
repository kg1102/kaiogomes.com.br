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
        padding: 0.5rem 0.5rem;
    }

    .header__nav {
        ul{
            li{
                text-align: center;
                p {
                    transition: color 0.2s;
                    position: relative;
                }
                p:hover {
                    cursor: pointer;
                    color: #ffffff;
                    transition: 0.5 all ease;
                }

                p::after {
                    content: '';
                    width: 0%;
                    height: 2px;
                    background: #ffffff;
                    position: absolute;
                    left: 0;
                    bottom: -0.5rem;
                    transition: width 0.2s;
                }

                p:hover::after,
                p.active::after {
                    width: 100%;
                }
            }
        }
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
                        <li><p onClick={()=>navigate("#home")}>Home</p></li>
                        <li><p onClick={()=>navigate("#blog")}>Blog</p></li>
                    </ul>
                </div>
            </ContainerHeader> 
        </>
    );
}
