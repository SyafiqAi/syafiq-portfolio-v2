/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            padding: {
                section: "7rem",
            },
            margin: {
                sectionTitle: "6rem"
            },
            gap: {
                cardList: '3rem'
            }
        },
    },
    plugins: [],
};
