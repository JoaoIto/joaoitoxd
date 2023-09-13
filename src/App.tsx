import { ThemeProvider } from "@/components/theme-provider"
import {ModeToggle} from "@/components/mode-toggle.tsx";

function App() {
    return (
        <div>
            <div className="w-40 items-center justify-center">
                <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                    <ModeToggle/>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default App
