/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            margin: { md: "2rem", sectionCard: "3.5rem", section: "5rem" },
            padding: { md: "2rem", sectionCard: "3.5rem", section: "5rem" },
            colors: {
                neonGreen: {
                    300: "rgb(47,117,88)",
                    500: "rgb(0,220,130)",
                },
                darkGreen: "rgb(0,15,25)",
                darkerGreen: "rgb(0,5,10)",
                darkBlue: "rgb(2,4,32)",
                offWhite: {
                    1: "rgb(226,232,240)",
                    2: "rgb(207,213,222)",
                },
            },
        },
    },
    plugins: [],
};
