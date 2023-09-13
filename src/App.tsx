import { ThemeProvider } from "@/components/theme-provider"
import {ModeToggle} from "@/components/mode-toggle.tsx";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {Terminal} from "lucide-react";

function App() {
    return (
        <div>
            <div className="w-screen h-80 flex-col items-center justify-around">
                <div className="flex">
                <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                    <ModeToggle/>
                </ThemeProvider>
                <h1 className="text-2xl p-4 font-bold">JoãoItoxd</h1>
                </div>
                    <Alert>
                    <Terminal className="h-4 w-4" />
                    <AlertTitle>Heads up!</AlertTitle>
                    <AlertDescription>
                        You can add components and dependencies to your app using the cli.
                    </AlertDescription>
                </Alert>
            </div>
        </div>
    )
}

export default App
