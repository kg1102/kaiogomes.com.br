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
                max-width: 60%;
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
                    max-width: 60%;
                    height: auto;
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
                            </>
                        )
                    })}
                </section>
            </Container>
        </>
    )
}