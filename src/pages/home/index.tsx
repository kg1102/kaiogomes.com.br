import {Button} from '../../components/button/index';
import {Header} from '../../components/header/index';
import {Card} from '../../components/card/index';
import styled from 'styled-components';
import TawkTo from 'tawkto-react';
import { useEffect } from 'react';

import '../../styles/index.css';
import { useNavigate } from 'react-router';

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

    const navigate = useNavigate();

    useEffect(() => new TawkTo("614690f425797d7a89ffb0f5", "1fftqcer5"), [])

    // api.get('/api/v1/posts').so
    const posts = [
        {
            "id":"1", 
            "title":"Novo bug do Argo CD pode permitir que hackers roubem informações secretas de aplicativos do Kubernetes", 
            "image":"https://i.pinimg.com/236x/83/cd/af/83cdaf6a1719cb697137b089fee26e3c.jpg",
            "description":"Os usuários da ferramenta de implantação contínua (CD) Argo para Kubernetes estão sendo instados a enviar atualizações após a descoberta de uma vulnerabilidade de dia zero que pode permitir que um invasor extraia informações confidenciais, como senhas e chaves de API.",
        },
        {
            "id":"2", 
            "title":"Microsoft revela novos detalhes de campanha de hackers russos visando a Ucrânia", 
            "image":"https://epipoca.com.br/wp-content/uploads/2021/02/Patrick-em-Bob-Esponja-Calca-Quadrada-Reproducao-1200x900.jpg",
            "description":"Os usuários da ferramenta de implantação contínua (CD) Argo para Kubernetes estão sendo instados a enviar atualizações após a descoberta de uma vulnerabilidade de dia zero que pode permitir que um invasor extraia informações confidenciais, como senhas e chaves de API.",
        },
        {
            "id":"3", 
            "title":"Outra empresa israelense, a QuaDream, é pega armando bug do iPhone para spyware", 
            "image":"https://pbs.twimg.com/media/Ekd2E_OXUAE2QmV.jpg",
            "description":"Os usuários da ferramenta de implantação contínua (CD) Argo para Kubernetes estão sendo instados a enviar atualizações após a descoberta de uma vulnerabilidade de dia zero que pode permitir que um invasor extraia informações confidenciais, como senhas e chaves de API.",
        },
        {
            "id":"4", 
            "title":"Autoridades dos EUA cobram 6 call centers indianos que enganam milhares de americanos", 
            "image":"https://pbs.twimg.com/media/EeTC348XYAAryih.jpg",
            "description":"Os usuários da ferramenta de implantação contínua (CD) Argo para Kubernetes estão sendo instados a enviar atualizações após a descoberta de uma vulnerabilidade de dia zero que pode permitir que um invasor extraia informações confidenciais, como senhas e chaves de API.",
        },
        {
            "id":"5", 
            "title":"Hackers russos de Gamaredon atacaram 'entidade do governo ocidental' na Ucrânia", 
            "image":"https://pbs.twimg.com/media/EbnUm4oXQAAg_p0?format=jpg&name=large",
            "description":"Os usuários da ferramenta de implantação contínua (CD) Argo para Kubernetes estão sendo instados a enviar atualizações após a descoberta de uma vulnerabilidade de dia zero que pode permitir que um invasor extraia informações confidenciais, como senhas e chaves de API.",
        },
        {
            "id":"6", 
            "title":"Russian Gamaredon Hackers Targeted 'Western Government Entity' in Ukraine", 
            "image":"https://i.pinimg.com/236x/83/cd/af/83cdaf6a1719cb697137b089fee26e3c.jpg",
            "description":"Os usuários da ferramenta de implantação contínua (CD) Argo para Kubernetes estão sendo instados a enviar atualizações após a descoberta de uma vulnerabilidade de dia zero que pode permitir que um invasor extraia informações confidenciais, como senhas e chaves de API.",
        }
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
                    <Button
                        onClick={() => navigate('/blog')}
                        style={{marginTop: '25px'}}
                    >Ver mais postagens</Button>
                </section>
                <section id="news">
                        {/**/}
                </section>
            </Container>
        </>
    )
}