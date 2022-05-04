import {Button} from '../../components/button/index';
import {Header} from '../../components/header/index';
import {Card} from '../../components/card/index';
import styled from 'styled-components';
import TawkTo from 'tawkto-react';
import { useEffect, useState } from 'react';
import ContentLoader from "react-content-loader";

import Api from '../../Api';

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
            background-image:  url("https://img.wattpad.com/ffbb2771e97a216672154fe539a9afacaa4b47f0/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f5a6b7842753749356f65686d77413d3d2d3637323133363231352e313635313464363764313836306262633936313637353332393833382e676966");
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
    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        new TawkTo("614690f425797d7a89ffb0f5", "1fftqcer5");
        const getPosts = async () => {
            let data: any = await Api.getPosts(undefined);
            setPosts(data);
            setLoading(false);
        }
        getPosts();
    }, [])
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