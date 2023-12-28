import type { Config } from "tailwindcss"

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            contrast: "#FC4747",
            primary: "#10141E",
            secondary: "#5A698F",
            primaryPale: "#161D2F",
            text: "#FFFFFF",
        },
        fontFamily: {
            outfit: ["Outfit", "sans-serif"],
        },
        extend: {},
    },
    plugins: [],
} satisfies Config
