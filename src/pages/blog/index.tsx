import ReactMarkdown from 'react-markdown';
import {Header} from '../../components/header/index';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ContentLoader from "react-content-loader";


import Api from '../../Api';


declare global {
    namespace JSX {
        interface IntrinsicElements {
          center: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}

export function BlogPage(){
    const params = useParams();
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState<any[]>([]);

    const Container = styled.div`
        #blog {
            .line-break {
                white-space: pre-wrap;
            }

            padding: 3rem 2.5rem;
            .blog__title {
                color: #fff;
                font-size: 2rem;
                text-align: center;
            }

            .blog__image {
                background: black;
                box-shadow: 0 0 1rem black;
                border-radius: 10px;
                object-fit: cover;
                user-select: none;
                width: 100%;
                height: 25rem;
                border-shadow: 0px 0px 4px;
                transition: 0.3s cubic-bezier(0.215, 0.61, 0.355, 1); //ease-out-cubic
                &:hover {
                    transform: scale(1.02);
                }
            }
            

            .blog__glass {
                background: rgba( 255, 255, 255, 0.10 );
                box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.10 );
                backdrop-filter: blur( 6px );
                -webkit-backdrop-filter: blur( 6px );
                border-radius: 10px;
                border: 1px solid rgba( 255, 255, 255, 0.18 );
                padding: 1rem;
                margin-top: 2rem;
                .blog__description {
                    padding: 2rem;
                    color: #fff;
                    p,a,h1,h2,h3,h4,h5,h6,kbd,div {
                        padding: 0.5rem 0;
                    }

                    iframe {
                        top: 0;
                        left: 0;
                        bottom: 0;
                        right: 0;
                        padding: 0;
                        width: 100%;
                        height: 40rem;
                    }

                    @media only screen and (max-width: 768px) {
                        /* For mobile phones: */
                        iframe {
                            height: 15em;
                        }
                      }
    
                    img {
                        padding: 2.5rem 0;
                        width: 100%;
                        max-width: 100%;
                        height: auto;
                    }

                    .language*{
                        background: black;
                    }
                }
            }

            .blog__share {
                .btn-share {
                    --btn-color: #3a2cbd;
                    position: relative;
                    padding: 16px 32px;
                    font-family: Roboto, sans-serif;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 1;
                    color: white;
                    background: none;
                    border: none;
                    outline: none;
                    overflow: hidden;
                    cursor: pointer;
                    filter: drop-shadow(0 2px 8px rgba(#275efe, 0.32));
                    transition: 0.3s cubic-bezier(0.215, 0.61, 0.355, 1); //ease-out-cubic

                    &::before {
                        position: absolute;
                        content: "";
                        top: 0;
                        left: 0;
                        z-index: -1;
                        width: 100%;
                        height: 100%;
                        background: var(--btn-color);
                        border-radius: 24px;
                        transition: 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
                    }

                    .btn-text,
                    .btn-icon {
                        display: inline-flex;
                        vertical-align: middle;
                        transition: 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
                    }

                    .btn-text {
                        transition-delay: 0.05s;
                    }

                    .btn-icon {
                        margin-left: 8px;
                        transition-delay: 0.1s;
                    }

                    .social-icons {
                        position: absolute;
                        top: 50%;
                        left: 0;
                        right: 0;
                        display: flex;
                        margin: 0;
                        padding: 0;
                        list-style-type: none;
                        transform: translateY(-50%);

                        li {
                            flex: 1;
                            a {
                                display: inline-flex;
                                vertical-align: middle;
                                transform: translateY(55px);
                                transition: 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);

                                &:hover {
                                    opacity: 0.5;
                                }
                            }
                        }
                    }

                    &:hover {
                        &::before {
                            transform: scale(1.2);
                        }

                        .btn-text,
                        .btn-icon {
                            transform: translateY(-55px);
                        }

                        .social-icons li {
                            a {
                                transform: translateY(0);
                            }

                            @for $i from 1 through 3 {
                                &:nth-child(#{$i}) a {
                                    transition-delay: 0.1s + 0.05s * $i;
                                }
                            }
                        }
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

    `;

    
    useEffect(() =>{
        if(params.id !== undefined){
            const getPosts = async () => {
                let data: any = await Api.getPosts(params.id);
                setPost(data);
            }
            setLoading(false);
            getPosts();
        }else{
            console.log("listar todos os posts em fileira --> todo");
        }
    }, [params.id])


    return (
        <>
            <Header/>
            <Container>
                <section id="blog">
                    {post.map((value)=>{   
                        return (
                            <>
                                {loading ?
                                <>
                                    <ContentLoader
                                        width={530}
                                        height={350}
                                        speed={2}
                                        backgroundColor={'#c7c7c7'}
                                        foregroundColor={'#757575'}
                                        cursor={'wait'}
                                    >
                                    <rect x="11" y="37" rx="0" ry="0" width="530" height="29" /> 
                                    <rect x="11" y="80" rx="0" ry="0" width="500" height="200" />
                                    <rect x="11" y="300" rx="0" ry="0" width="500" height="10" /> 
                                    <rect x="11" y="315" rx="0" ry="0" width="100" height="10" /> 
                                    <rect x="11" y="330" rx="0" ry="0" width="150" height="10" /> 

                                    </ContentLoader>
                                </>
                                :
                                <>
                                    <center>
                                        <img 
                                            className="blog__image"
                                            src={value.image}
                                            alt={value.title}
                                        />
                                    </center>
                                    <h1 className="blog__title">{value.title}</h1>
                                    <div className="blog__glass">
                                        <div className="blog__description">
                                            <ReactMarkdown 
                                                children={value.description}
                                                remarkPlugins={[remarkGfm]}
                                                rehypePlugins={[rehypeRaw]}
                                                className={"description__markdown"}
                                                components={{
                                                    code({node, inline, className, children, ...props}) {
                                                        const match = /language-(\w+)/.exec(className || '')
                                                        return !inline && match ? (
                                                        <SyntaxHighlighter
                                                            children={String(children).replace(/\n$/, '')}
                                                            style={monokai}
                                                            language={match[1]}
                                                            PreTag="div"
                                                            {...props}
                                                        />
                                                        ) : (
                                                        <code className={className} {...props}>
                                                            {children}
                                                        </code>
                                                        )
                                                    }
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <br></br>
                                    <center>
                                        <div className="blog__share">
                                            <button className="btn-share">
                                                <span className="btn-text">Compartilhe</span>
                                                <span className="btn-icon">
                                                    <svg
                                                        className="icon"
                                                        viewBox="0 0 1024 1024"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="18"
                                                        height="18"
                                                    >
                                                    <path
                                                        d="M767.99994 585.142857q75.995429 0 129.462857 53.394286t53.394286 129.462857-53.394286 129.462857-129.462857 53.394286-129.462857-53.394286-53.394286-129.462857q0-6.875429 1.170286-19.456l-205.677714-102.838857q-52.589714 49.152-124.562286 49.152-75.995429 0-129.462857-53.394286t-53.394286-129.462857 53.394286-129.462857 129.462857-53.394286q71.972571 0 124.562286 49.152l205.677714-102.838857q-1.170286-12.580571-1.170286-19.456 0-75.995429 53.394286-129.462857t129.462857-53.394286 129.462857 53.394286 53.394286 129.462857-53.394286 129.462857-129.462857 53.394286q-71.972571 0-124.562286-49.152l-205.677714 102.838857q1.170286 12.580571 1.170286 19.456t-1.170286 19.456l205.677714 102.838857q52.589714-49.152 124.562286-49.152z"
                                                        fill="white"
                                                    ></path>
                                                    </svg>
                                                </span>
                                                <ul className="social-icons">
                                                    <li>
                                                        <a href={`https://twitter.com/intent/tweet?text=Olha isso que interessantet no blog do @kaiogomes_._%0d%0a%0d%0a${value.title}&url=http://kgsa.cf/blog/1`} rel="noreferrer" target="_blank">
                                                            <svg
                                                                className="icon"
                                                                viewBox="0 0 1024 1024"
                                                                version="1.1"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="18"
                                                                height="18"
                                                            >
                                                            <path
                                                                d="M962.267429 233.179429q-38.253714 56.027429-92.598857 95.451429 0.585143 7.972571 0.585143 23.990857 0 74.313143-21.723429 148.260571t-65.974857 141.970286-105.398857 120.32-147.456 83.456-184.539429 31.158857q-154.843429 0-283.428571-82.870857 19.968 2.267429 44.544 2.267429 128.585143 0 229.156571-78.848-59.977143-1.170286-107.446857-36.864t-65.170286-91.136q18.870857 2.852571 34.889143 2.852571 24.576 0 48.566857-6.290286-64-13.165714-105.984-63.707429t-41.984-117.394286l0-2.267429q38.838857 21.723429 83.456 23.405714-37.741714-25.161143-59.977143-65.682286t-22.308571-87.990857q0-50.322286 25.161143-93.110857 69.12 85.138286 168.301714 136.265143t212.260571 56.832q-4.534857-21.723429-4.534857-42.276571 0-76.580571 53.979429-130.56t130.56-53.979429q80.018286 0 134.875429 58.294857 62.317714-11.995429 117.174857-44.544-21.138286 65.682286-81.115429 101.741714 53.174857-5.705143 106.276571-28.598857z"
                                                                fill="white"
                                                            ></path>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href={`whatsapp://send?text=Olha isso que interessantet no blog do @kaiogomes_._%0d%0a%0d%0a${value.title}&url=http://kgsa.cf/blog/1`} rel="noreferrer" data-action="share/whatsapp/share" target="_blank">
                                                            <svg 
                                                                xmlns="http://www.w3.org/2000/svg" 
                                                                viewBox="0 0 24 24"
                                                                width="18"
                                                                height="18"
                                                            >
                                                            <path
                                                                d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
                                                                fill="white"
                                                            />
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href={`https://www.linkedin.com/shareArticle?mini=true&url=http://kgsa.cf/blog/1&title=tge&summary=test&source=kgsa.cf`} rel="noreferrer" target="_blank">
                                                            <svg 
                                                                xmlns="http://www.w3.org/2000/svg" 
                                                                width="18"
                                                                height="18"
                                                                viewBox="0 0 24 24"
                                                                className="icon"
                                                                version="1.1"
                                                            >
                                                            <path 
                                                                fill="white"
                                                                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                                            ></path></svg>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </button>
                                        </div>
                                    </center>
                                </>
                                }
                            </>
                        )
                    })}
                </section>
            </Container>
        </>
    )
}