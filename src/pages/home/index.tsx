import {Header} from '../../components/header/index';
import {Card} from '../../components/card/index';
import styled from 'styled-components';

import '../../styles/index.css';

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2.5rem;

    #home {
        display: flex;
        justify-content: center;
        color: #fff;
        .box__container {
            display: flex;
            border-radius: 15px;
            justify-content: center;
            align-items: center;
            background-image:  url("https://www.gifcen.com/wp-content/uploads/2022/01/hacker-gif-5.gif");
            background-position: center;
            background-size: 100%;
            background-repeat: no-repeat;
            box-shadow: inset 0px 0px 400px 510px rgba(0, 0, 0, .7);
            object-fit: cover;
            width: 100%;
            height: 25rem;

            .box__main {
                .box__title {
                    font-size: 3rem;
                }
                .box__description {
                    text-align: center;
                    font-size: 1rem;
                    font-weight: 400; 
                }
            }
        }
    }

    #blogs {
        .title {
            color: #fff;
            font-family: 'Poppins', sans-serif;
            font-size: 2rem;
            text-align: center;
            align-content: center;
        }
        .blogs__container {
            .blogs__wrapper {
                display: flex;
                flex-wrap: wrap;
                gap: 2rem;
            }
        }
    }

    /* @media screen and (max-width: 939px){
        #blogs {
            .blogs__container {
                .blogs__wrapper {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    
                }
            }
        }
    } */

`;


export function Homepage(){
    return (
        <>
            <Header/>
            <Container>
                <section id="home">
                    <div className="box__container">
                        <div className="box__main">
                            <h1 className="box__title">Kaio Gomes</h1>
                            <h3 className="box__description">CyberSec Enthusiast</h3>
                        </div>
                    </div>
                </section>
                <section id="blogs">
                    <h1 className="title">Blog posts</h1>
                    <div className="blogs__container">
                        <div className="blogs__wrapper">
                            <Card title="HOW I HACKED NASA WEBSITE IN 10 MINUTES????"/>
                            <Card title="How I found 20 ATO in 5 minutes?"/>
                            <Card title="How I found 100 IDOR in 1 DAY?"/>
                            <Card title="HOW I FOUND 2 VULNERABILITIES ON FACEBOOK AND GOOGLE?"/>
                            <Card title="HOW TO DO PARAMETER POLLUTION"/>
                            <Card title="HOW TO EXPLORE GRAPHQL?"/>
                            <Card title="HOW GET PRIVATE PROGRAMS TO BUGBOUNTY?"/>
                        </div>
                    </div>
                </section>
            </Container>
        </>
    )
}