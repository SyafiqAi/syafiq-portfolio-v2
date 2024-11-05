/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            margin: { md: "1.25rem", sectionCard: "3.5rem", section: "5rem" },
        },
    },
    plugins: [],
};
