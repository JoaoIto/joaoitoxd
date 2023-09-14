import { ThemeProvider } from "@/components/theme-provider"
import {ModeToggle} from "@/components/mode-toggle.tsx";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {Terminal} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


function App() {
    const openSocialMedia = (url: string) => {
        window.location.href = url;
    };
    return (
            <div className="w-screen h-screen mt-10 flex-col items-center justify-around text-center">
                <div className="flex flex-col items-center justify-center text-center">
                    <div className="flex items-center">
                    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                    <ModeToggle/>
                </ThemeProvider>
                        <div className="flex items-center">
                            <HoverCard>
                                <HoverCardTrigger className="font-bold p-2 text-xl">@joaoitoxd</HoverCardTrigger>
                                <HoverCardContent>
                                    Software Web Enginner - Programador Web :)
                                </HoverCardContent>
                            </HoverCard>

                            <Avatar className="border-2 border-solid border-slate-300">
                                <AvatarImage src="https://avatars.githubusercontent.com/u/78181193?v=4" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>
                        <Alert className="h-36 w-80">
                    <Terminal className="h-6 w-8" />
                    <AlertTitle>Explore!</AlertTitle>
                    <AlertDescription className="">
                        Esse é meu site pessoal de links! Bonitin né?
                        É pra você que quer descobir um pouco mais sobre mim, quer saber mais
                        do que faço, e minhas redes sociais!
                    </AlertDescription>
                </Alert>
                </div>

                <div className="flex flex-col items-center">
                <TooltipProvider>
                    <Tooltip>

                        <TooltipTrigger
                            onClick={() => openSocialMedia('https://www.instagram.com/joaoitoxd')}
                            className="flex font-medium items-center justify-evenly w-60 text-white bg-indigo-500 p-4 m-2
                            rounded border border-solid border-purple-200">
                            <img width="40" src="https://github.com/JoaoIto/joaoitoxd/blob/new-version/public/instagram.png?raw=true" alt="Logo do Instagram"/>
                            Instagram
                        </TooltipTrigger>

                        <TooltipContent>
                            <p>Visite agora!</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger
                            onClick={() => openSocialMedia('https://github.com/joaoito')}
                            className="w-60 flex flex font-medium items-center justify-evenly font-medium items-center justify-evenly text-white bg-slate-900 p-4 m-2
                            rounded border border-solid border-slate-400">
                            <img width="40" src="https://github.com/JoaoIto/joaoitoxd/blob/new-version/public/github.png?raw=true" alt="Logo do Instagram"/>
                            GitHub

                        </TooltipTrigger>

                        <TooltipContent>
                            <p>projetinhos!</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger
                            onClick={() => openSocialMedia('https://www.linkedin.com/in/jo%C3%A3o-victor-p%C3%B3voa-fran%C3%A7a-97502420b/')}
                            className="w-60 text-white flex font-medium items-center justify-evenly bg-blue-500 p-4 m-2 rounded border border-solid border-blue-100">
                            <img width="40" src="https://github.com/JoaoIto/joaoitoxd/blob/new-version/public/linkedin.png?raw=true" alt="Logo do Instagram"/>
                            Linkedin

                        </TooltipTrigger>

                        <TooltipContent>
                            <p>Trabalho e mais trabalho...</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger
                                onClick={() => openSocialMedia('mailto:joaovictorpfr@gmail.com')}
                                className="w-60 flex font-medium items-center justify-evenly text-white bg-slate-500 p-4 m-2
                                rounded border border-solid border-red-300">
                                <img width="40" src="https://github.com/JoaoIto/joaoitoxd/blob/new-version/public/gmail.png?raw=true" alt="Logo do Instagram"/>
                                Gmail

                            </TooltipTrigger>

                            <TooltipContent>
                                <p>Manda lá!</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    <Accordion className="flex w-5/6  items-center justify-center" type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Mas o que o joão faz?</AccordionTrigger>
                            <AccordionContent>
                                Olá! Bom, eu construo qualquer coisa com software, mais sou especializado
                                em criação de sites e serviços para a internet, web!
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <Accordion className="flex w-5/6  items-center justify-center" type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Você é programador a quanto tempo?</AccordionTrigger>
                            <AccordionContent>
                                Eu estudo programação desde 2020, quando na pandemia decidi focar diretamente na área,
                                mas programação se tornou trabalho de fato a partir de 2021 quando já estava pegando
                                serviços freelance, e depois na segunda metade de 2022 já estava empregado como Engenheiro
                                de Software Front-End.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <Accordion className="flex w-5/6   items-center justify-center" type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Por quê escolheu essa área?</AccordionTrigger>
                            <AccordionContent>
                                Sempre amei e fui entusiasta da tecnologia, só decidi tornar isso profissional
                                quando vi que aquilo que eu gostava podia me retornar de alguma forma...
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <Accordion className="flex w-5/6  items-center justify-center" type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Precisava de um serviço de Marketing para minha loja, posso te contactar?</AccordionTrigger>
                            <AccordionContent>
                                Siiimm!! Se pretende que eu faça um serviço e confia no meu trabalho pode me contatar! Se prefere uma proposta
                                profissional e formal, meu email está linkado nos botões acima.

                                Se caso prefira um contato direto, meu instagram é aberto para direct.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
    )
}
export default App
