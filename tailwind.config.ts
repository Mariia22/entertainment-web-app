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
        extend: {
            screens: {
                xl: "1440px",
            },
            width: {
                "164": "164px",
                "220": "220px",
                "240": "240px",
                "280": "280px",
                "470": "470px",
            },
            height: {
                "110": "110px",
                "140": "140px",
                "174": "174px",
                "230": "230px",
            },
        },
    },
    plugins: [],
} satisfies Config
