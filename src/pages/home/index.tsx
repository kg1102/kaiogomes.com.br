import {Header} from '../../components/header/index';
import {Card} from '../../components/card/index';
import styled from 'styled-components';
import TawkTo from 'tawkto-react';
import { useEffect } from 'react';

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
        padding: 1rem 2rem;
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


export function HomePage(){
    useEffect(() => new TawkTo("614690f425797d7a89ffb0f5", "1fftqcer5"), [])

    // api.get('/api/v1/posts').so
    const posts = [
        {"id":"1", "title":"%%25%25%33%37%25%34%32%25%25%33%37%25%34%32%25%25%33%37%25%34%32", "image":"https://i.pinimg.com/236x/83/cd/af/83cdaf6a1719cb697137b089fee26e3c.jpg"},
        {"id":"2", "title":"%%37%42%%37%42%%37%42", "image":"https://epipoca.com.br/wp-content/uploads/2021/02/Patrick-em-Bob-Esponja-Calca-Quadrada-Reproducao-1200x900.jpg"},
        {"id":"3", "title":"%%37%42%%37%42%%37%42", "image":"https://pbs.twimg.com/media/Ekd2E_OXUAE2QmV.jpg"},
        {"id":"4", "title":"%%37%42%%37%42%%37%42", "image":"https://pbs.twimg.com/media/EeTC348XYAAryih.jpg"},
        {"id":"5", "title":"%%37%42%%37%42%%37%42", "image":"https://pbs.twimg.com/media/EbnUm4oXQAAg_p0?format=jpg&name=large"},
        {"id":"6", "title":"%%37%42%%37%42%%37%42", "image":"https://i.pinimg.com/236x/83/cd/af/83cdaf6a1719cb697137b089fee26e3c.jpg"}
    ]

    return (
        <>
            <Header/>
            <Container>
                <section id="home">
                    <div className="box__container">
                        <div className="box__main">
                            <h1 className="box__title">Kaio Gomes</h1>
                            <h3 className="box__description">CyberSec Enthusiast | BugHunter</h3>
                        </div>
                    </div>
                </section>
                <section id="blogs">
                    <h1 className="title">Blog posts</h1>
                    <div className="blogs__container">
                        <div className="blogs__wrapper">
                            {posts.slice(0, 5).map((result, key) => {
                                return <Card
                                    key={key}
                                    path_id={result.id}
                                    title={result.title}
                                    image={result.image}
                                />
                            })}
                        </div>
                    </div>
                </section>
                <section id="news">
                    <br/>
                </section>
            </Container>
        </>
    )
}