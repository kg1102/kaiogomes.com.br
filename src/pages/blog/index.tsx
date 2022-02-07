import ReactMarkdown from 'react-markdown';
import {Header} from '../../components/header/index';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

export function BlogPage(){
    const Container = styled.div`
        #blog {
            padding: 3rem 2.5rem;
            .blog__title {
                color: #fff;
                font-size: 2rem;
            }

            .blog__image {
                padding: 2.5rem 0rem;
                width: 100%;
                max-width: 100%;
                height: auto;
            }

            .blog__description {
                padding: 2.5rem 0rem;
                color: #fff;
                font-size: 1rem;
                height: auto;

                p,a,h1,h2,h3,h4,h5,h6,kbd {
                    padding: 0.5rem 0;
                }

                img {
                    padding: 2.5rem 0;
                    width: 100%;
                    max-width: 100%;
                    height: auto;
                }
            }

            .blog__share {
                display: flex;
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
    `;

    const markdown = `

Os usuários da ferramenta de implantação contínua (CD) Argo para Kubernetes estão sendo instados a enviar atualizações após a descoberta de uma vulnerabilidade de dia zero que pode permitir que um invasor extraia informações confidenciais, como senhas e chaves de API.

A falha, marcada como CVE-2022-24348 (pontuação CVSS: 7,7), afeta todas as versões e foi corrigida nas versões 2.3.0, 2.2.4 e 2.1.9. A empresa de segurança em nuvem Apiiro foi creditada por descobrir e relatar o bug em 30 de janeiro de 2022.

A implantação contínua, também chamada de entrega contínua, refere-se a um processo que implanta automaticamente todas as alterações de código no ambiente de teste e/ou produção depois que elas são testadas e mescladas em um repositório compartilhado.

O Argo CD é usado oficialmente por 191 organizações, incluindo Alibaba Group, BMW Group, Deloitte, Gojek, IBM, Intuit, LexisNexis, Red Hat, Skyscanner, Swisscom e Ticketmaster.

Os criminosos podem explorar a vulnerabilidade carregando um arquivo YAML malicioso do Kubernetes Helm Chart, um gerenciador de pacotes que especifica uma coleção de recursos do Kubernetes necessários para implantar um aplicativo no sistema de destino, permitindo a recuperação de informações confidenciais de outros aplicativos.

![Attack flowchart](https://thehackernews.com/new-images/img/a/AVvXsEi-1IUIQhKHpMM_0gPfrnVaXav1E3SQyvi_4I34xxfOEzasAx6issOx-o6LM9dUY49T2XDqzpRR9oxGOTobDMZBuhGpMbNAFVJ17T2QG3ktEMlZVKVsFYqXchMR7bK3aXgufNKdr13XFwtW5KdaRJMLr0ftp2nSXsaFbV-XeyN-xiKou1azKhpTn1jB=s728-e1000)

A exploração bem-sucedida do defeito pode ter sérias consequências, desde o aumento de privilégios e divulgação de informações confidenciais até ataques de movimento lateral e tokens de exfiltração de outros aplicativos.

A cadeia de suprimentos de software emergiu como uma grande ameaça à segurança após ataques que exploram SolarWinds, Kaseya e Log4j nos últimos anos. Em julho de 2021, a Intezer divulgou que os invasores estão aproveitando as instâncias Argo Workflows mal configuradas para descartar criptomineradores em clusters Kubernetes (K8s).
`;
    
    // api.get('/api/v1/posts/1').so
    const posts = [
        {
            "id":"1", 
            "title":"Novo bug do Argo CD pode permitir que hackers roubem informações secretas de aplicativos do Kubernetes", 
            "image":"https://thehackernews.com/new-images/img/a/AVvXsEiwCWHZEq98c7B3Tzaxql5QIUtN3FdC_AToAt84-qZ7mg5BpVHifHC4wxmpsTCFdoLbusLlOQOKVAiuF8SFl1Gx8wzCBhJqBJKtdBVEtIJhd1yFYwIBVogpGtlswGMiCTk6clqdsHuAkyr6Nz1tZ6w3hFSfEDYNeQJwh57Drm7TdIdoKQ4Mzsz7Y1Au=s728-e1000",
            "description":"Os usuários da ferramenta de implantação contínua (CD) Argo para Kubernetes estão sendo instados a enviar atualizações após a descoberta de uma vulnerabilidade de dia zero que pode permitir que um invasor extraia informações confidenciais, como senhas e chaves de API.\n\rtestando blablabalbla",
        }
    ]

    return (
        <>
            <Header/>



            <Container>
                <section id="blog">
                    {posts.map((value)=>{
                        return (
                            <>
                                <h1 className="blog__title">{value.title}</h1>
                                <img 
                                    className="blog__image"
                                    src={value.image}
                                    alt={value.title}
                                />

                                <div className="blog__description">
                                <ReactMarkdown
                                    children={markdown}
                                    remarkPlugins={[remarkGfm]}
                                    rehypePlugins={[rehypeRaw]}
                                    components={{
                                        code({node, inline, className, children, ...props}) {
                                            const match = /language-(\w+)/.exec(className || '')
                                            return !inline && match ? (
                                            <SyntaxHighlighter
                                                children={String(children).replace(/\n$/, '')}
                                                style={docco}
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
                                <div className="blog__share">
                                <button className="btn-share">
                                <span className="btn-text">Compartilhe</span
                                ><span className="btn-icon">
                                    <svg
                                    className="icon"
                                    viewBox="0 0 1024 1024"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    p-id="9773"
                                    width="18"
                                    height="18"
                                    >
                                    <path
                                        d="M767.99994 585.142857q75.995429 0 129.462857 53.394286t53.394286 129.462857-53.394286 129.462857-129.462857 53.394286-129.462857-53.394286-53.394286-129.462857q0-6.875429 1.170286-19.456l-205.677714-102.838857q-52.589714 49.152-124.562286 49.152-75.995429 0-129.462857-53.394286t-53.394286-129.462857 53.394286-129.462857 129.462857-53.394286q71.972571 0 124.562286 49.152l205.677714-102.838857q-1.170286-12.580571-1.170286-19.456 0-75.995429 53.394286-129.462857t129.462857-53.394286 129.462857 53.394286 53.394286 129.462857-53.394286 129.462857-129.462857 53.394286q-71.972571 0-124.562286-49.152l-205.677714 102.838857q1.170286 12.580571 1.170286 19.456t-1.170286 19.456l205.677714 102.838857q52.589714-49.152 124.562286-49.152z"
                                        p-id="9774"
                                        fill="#ffffff"
                                    ></path>
                                    </svg>
                                </span>
                                <ul className="social-icons">
                                    <li>
                                    <a href="#twitter" target="_blank"
                                        ><svg
                                        className="icon"
                                        viewBox="0 0 1024 1024"
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        p-id="2099"
                                        width="18"
                                        height="18"
                                        >
                                        <path
                                            d="M962.267429 233.179429q-38.253714 56.027429-92.598857 95.451429 0.585143 7.972571 0.585143 23.990857 0 74.313143-21.723429 148.260571t-65.974857 141.970286-105.398857 120.32-147.456 83.456-184.539429 31.158857q-154.843429 0-283.428571-82.870857 19.968 2.267429 44.544 2.267429 128.585143 0 229.156571-78.848-59.977143-1.170286-107.446857-36.864t-65.170286-91.136q18.870857 2.852571 34.889143 2.852571 24.576 0 48.566857-6.290286-64-13.165714-105.984-63.707429t-41.984-117.394286l0-2.267429q38.838857 21.723429 83.456 23.405714-37.741714-25.161143-59.977143-65.682286t-22.308571-87.990857q0-50.322286 25.161143-93.110857 69.12 85.138286 168.301714 136.265143t212.260571 56.832q-4.534857-21.723429-4.534857-42.276571 0-76.580571 53.979429-130.56t130.56-53.979429q80.018286 0 134.875429 58.294857 62.317714-11.995429 117.174857-44.544-21.138286 65.682286-81.115429 101.741714 53.174857-5.705143 106.276571-28.598857z"
                                            p-id="2100"
                                            fill="white"
                                        ></path></svg
                                    ></a>
                                    </li>
                                    <li>
                                    <a href="#github" target="_blank"
                                        ><svg
                                        className="icon"
                                        viewBox="0 0 1024 1024"
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        p-id="2759"
                                        width="18"
                                        height="18"
                                        >
                                        <path
                                            d="M950.930286 512q0 143.433143-83.748571 257.974857t-216.283429 158.573714q-15.433143 2.852571-22.601143-4.022857t-7.168-17.115429l0-120.539429q0-55.442286-29.696-81.115429 32.548571-3.437714 58.587429-10.313143t53.686857-22.308571 46.299429-38.034286 30.281143-59.977143 11.702857-86.016q0-69.12-45.129143-117.686857 21.138286-52.004571-4.534857-116.589714-16.018286-5.12-46.299429 6.290286t-52.589714 25.161143l-21.723429 13.677714q-53.174857-14.848-109.714286-14.848t-109.714286 14.848q-9.142857-6.290286-24.283429-15.433143t-47.689143-22.016-49.152-7.68q-25.161143 64.585143-4.022857 116.589714-45.129143 48.566857-45.129143 117.686857 0 48.566857 11.702857 85.723429t29.988571 59.977143 46.006857 38.253714 53.686857 22.308571 58.587429 10.313143q-22.820571 20.553143-28.013714 58.88-11.995429 5.705143-25.746286 8.557714t-32.548571 2.852571-37.449143-12.288-31.744-35.693714q-10.825143-18.285714-27.721143-29.696t-28.306286-13.677714l-11.410286-1.682286q-11.995429 0-16.603429 2.56t-2.852571 6.582857 5.12 7.972571 7.460571 6.875429l4.022857 2.852571q12.580571 5.705143 24.868571 21.723429t17.993143 29.110857l5.705143 13.165714q7.460571 21.723429 25.161143 35.108571t38.253714 17.115429 39.716571 4.022857 31.744-1.974857l13.165714-2.267429q0 21.723429 0.292571 50.834286t0.292571 30.866286q0 10.313143-7.460571 17.115429t-22.820571 4.022857q-132.534857-44.032-216.283429-158.573714t-83.748571-257.974857q0-119.442286 58.88-220.306286t159.744-159.744 220.306286-58.88 220.306286 58.88 159.744 159.744 58.88 220.306286z"
                                            p-id="2760"
                                            fill="white"
                                        ></path></svg
                                    ></a>
                                    </li>
                                </ul>
                                </button>

                                </div>
                            </>
                        )
                    })}
                </section>
            </Container>
        </>
    )
}