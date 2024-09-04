/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,jsx,js}"],
    theme: {
        extend: {
            fontFamily: {
                newAms: ['New Amsterdam', 'sans-serif'],
                oswald: ['Oswald', 'sans-serif'],
                kanit: ['Kanit', 'sans-serif']
            },
        },
    },
    plugins: [],
}