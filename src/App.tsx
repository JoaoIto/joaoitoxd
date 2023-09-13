import { ThemeProvider } from "@/components/theme-provider"
import {ModeToggle} from "@/components/mode-toggle.tsx";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {Terminal} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {Button} from "@/components/ui/button.tsx";

function App() {
    return (
        <div>
            <div className="w-screen h-80 flex-col items-center justify-around text-center">
                <div className="flex flex-col items-center justify-center text-center">
                    <div className="flex items-center">
                    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                    <ModeToggle/>
                </ThemeProvider>
                        <div className="flex items-center">
                <h1 className="text-2xl p-4 font-bold underline">JoãoItoxd</h1>
                            <Avatar className="border-2 border-solid border-slate-300">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>
                        <Alert className="w-60">
                    <Terminal className="h-4 w-4" />
                    <AlertTitle>Explore!</AlertTitle>
                    <AlertDescription>
                        Esse é meu site pessoal de links! Bonitin né?
                    </AlertDescription>
                </Alert>
                </div>
            </div>
        </div>
    )
}

export default App
