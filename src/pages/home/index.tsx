import {Button} from '../../components/button/index';
import {Header} from '../../components/header/index';
import {Card} from '../../components/card/index';
import styled from 'styled-components';
import TawkTo from 'tawkto-react';
import { useEffect, useState } from 'react';
import ContentLoader from "react-content-loader";

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
            background-image:  url("https://api.creavite.co/out/cs6ZfZOeV3ra45xo_static.png");
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
                justify-content: center;
            }
        }
    }

`;


export function HomePage(){
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        new TawkTo("614690f425797d7a89ffb0f5", "1fftqcer5");
        var x = 0;
        if(x === 1){
            setLoading(true);
        }
        setTimeout(()=>{
            setLoading(false);
        }, 2000);
    }, [])

    // api.get('/api/v1/posts').so
    const posts = [
        {
            "id":"1", 
            "title":"Novo bug do Argo CD pode permitir que hackers roubem informações secretas de aplicativos do Kubernetes", 
            "image":"https://thehackernews.com/new-images/img/a/AVvXsEiwCWHZEq98c7B3Tzaxql5QIUtN3FdC_AToAt84-qZ7mg5BpVHifHC4wxmpsTCFdoLbusLlOQOKVAiuF8SFl1Gx8wzCBhJqBJKtdBVEtIJhd1yFYwIBVogpGtlswGMiCTk6clqdsHuAkyr6Nz1tZ6w3hFSfEDYNeQJwh57Drm7TdIdoKQ4Mzsz7Y1Au=s728-e1000",
            "description":"Os usuários da ferramenta de implantação contínua (CD) Argo para Kubernetes estão sendo instados a enviar atualizações após a descoberta de uma vulnerabilidade de dia zero que pode permitir que um invasor extraia informações confidenciais, como senhas e chaves de API.",
        },
        {
            "id":"2", 
            "title":"Microsoft revela novos detalhes de campanha de hackers russos visando a Ucrânia", 
            "image":"https://thehackernews.com/new-images/img/a/AVvXsEiJp7uIWTii8FlfW6-bjlIQtXIfrJrJFXH4Ugfe0gjljAZpuf12TjBhQePIB6zsBtqEthpAAi8mldUfBbVqSwfDcyF2D5fOIjsd2_epc-NZBtgT-vy679o27areeS1YWmkq9BB_0hV1a0jK1W3LiTQ9SQILOiq_UNAfUu8siQ3WF7DgCrrMOhASa5IB=s728-e1000",
            "description":"Os usuários da ferramenta de implantação contínua (CD) Argo para Kubernetes estão sendo instados a enviar atualizações após a descoberta de uma vulnerabilidade de dia zero que pode permitir que um invasor extraia informações confidenciais, como senhas e chaves de API.",
        },
        {
            "id":"3", 
            "title":"Outra empresa israelense, a QuaDream, é pega armando bug do iPhone para spyware", 
            "image":"https://thehackernews.com/new-images/img/a/AVvXsEh3TPKLg1hzNepKY2F1EdKmCpaHrcAUG9Nn6hJVDlrM4nXTEWXpqUnXEJ64FAumNDQUssibvY7ImZBz3iB3aqxCsYh_HuDr4ufd56aYQQv_Tdz0QCf4S-cwiQ6xFCMw-lcMG13U8360IHMqN3rAdQkA5liqwCnHgdZfTeh39gVBvfieTaBOAn9awulf=s728-e1000",
            "description":"Os usuários da ferramenta de implantação contínua (CD) Argo para Kubernetes estão sendo instados a enviar atualizações após a descoberta de uma vulnerabilidade de dia zero que pode permitir que um invasor extraia informações confidenciais, como senhas e chaves de API.",
        },
        {
            "id":"4", 
            "title":"Autoridades dos EUA cobram 6 call centers indianos que enganam milhares de americanos", 
            "image":"https://thehackernews.com/new-images/img/a/AVvXsEgmB_cE2sK6TeU1QBUu7TVJ2HLc8kebWL9Ds1SbxvKgdThNUcQqz-eSC-whypSrQ4V-QqKXVoEd2qsU1BDDD6yPTQW7W9niP7deiDcDnLzyqFW97Xzdq4Gg0-C74SJdgqT-R5GcTx0qgByk3APDeYdjzckN-mEwDMq66b2yX0OGDzFFkUlqKMxk-j4J=s728-e1000",
            "description":"Os usuários da ferramenta de implantação contínua (CD) Argo para Kubernetes estão sendo instados a enviar atualizações após a descoberta de uma vulnerabilidade de dia zero que pode permitir que um invasor extraia informações confidenciais, como senhas e chaves de API.",
        },
        {
            "id":"5", 
            "title":"Hackers russos de Gamaredon atacaram 'entidade do governo ocidental' na Ucrânia", 
            "image":"https://thehackernews.com/new-images/img/a/AVvXsEiilt05cQGSF6dv-WddlqccA95EnslFoohuLLcdquPvaoVr9AYktYq9wvGhcs7Y80cBcYQb-teuHlcNY8xYsXRP6Whpb8SYMHuKb9audbsgtSAukezz88GrQtYq1yunVpMjexGBXSdiP_rxfDAWU-tOoYj62xdG9c2ljRxqr1prQLootPKclV46BRSI=s728-e1000",
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
                            {loading ? 
                            <>
                                <ContentLoader 
                                    speed={2}
                                    width={400}
                                    height={460}
                                    viewBox="0 0 400 460"
                                    backgroundColor={'#c7c7c7'}
                                    foregroundColor={'#757575'}
                                    cursor={'wait'}
                                >
                                    <rect x="0" y="60" rx="10" ry="10" width="400" height="280" />
                                </ContentLoader>                               
                                <ContentLoader 
                                    speed={2}
                                    width={400}
                                    height={460}
                                    viewBox="0 0 400 460"
                                    backgroundColor={'#c7c7c7'}
                                    foregroundColor={'#757575'}
                                    cursor={'wait'}
                                >
                                    <rect x="0" y="60" rx="10" ry="10" width="400" height="280" />
                                </ContentLoader>
                            </> 
                            : 
                            <>
                                {posts.slice(0, 5).map((result, key) => {
                                    return <Card
                                        key={key}
                                        path_id={result.id}
                                        title={result.title}
                                        image={result.image}
                                    />
                                })}
                            </>}
                        </div>
                        {!loading ?
                            <Button
                                onClick={() => navigate('/blog')}
                                style={{marginTop: '10px'}}
                            >Ver mais postagens</Button> 
                        : null}
                    </div>

                </section>
                <section id="news">
                        {/**/}
                </section>
            </Container>
        </>
    )
}