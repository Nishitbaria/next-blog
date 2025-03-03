"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Monitor, Moon, Sun } from "lucide-react"

export default function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <div className="relative flex h-8 rounded-full bg-backdrop p-1 ring-1 ring-border">
            <button
                type="button"
                className={`relative h-6 w-6 rounded-full ${theme === "system" ? "bg-background" : ""}`}
                onClick={() => setTheme("system")}
                aria-label="System theme"
            >
                <Monitor className="relative m-auto h-4 w-4 text-foreground" />
            </button>
            <button
                type="button"
                className={`relative h-6 w-6 rounded-full ${theme === "light" ? "bg-background" : ""}`}
                onClick={() => setTheme("light")}
                aria-label="Light theme"
            >
                <Sun className="relative m-auto h-4 w-4 text-muted-foreground" />
            </button>
            <button
                type="button"
                className={`relative h-6 w-6 rounded-full ${theme === "dark" ? "bg-background" : ""}`}
                onClick={() => setTheme("dark")}
                aria-label="Dark theme"
            >
                <Moon className="relative m-auto h-4 w-4 text-muted-foreground" />
            </button>
        </div>
    )
} 