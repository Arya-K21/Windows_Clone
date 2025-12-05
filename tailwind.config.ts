import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                win: {
                    light: {
                        bg: "#f5f5f5",
                        card: "#ffffff",
                        border: "#e3e3e3",
                        accent: "#0066cc",
                    },
                    dark: {
                        bg: "#1a1a2e",
                        card: "#16213e",
                        accent: "#0f3460",
                        highlight: "#e94560",
                    }
                }
            },
            borderRadius: {
                'win': '8px',
            },
            fontFamily: {
                sans: ['"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'], // Windows 11 style
            }
        },
    },
    plugins: [],
};
export default config;
