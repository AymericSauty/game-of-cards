/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts}'],
    theme: {
        extend: {},
        screens: {
            desktop: { min: '1281px' },
            tablet: { min: '768px', max: '1280px' },
            mobile: { max: '767px' },
        },
        fontFamily: {
            sans: ['Roboto', 'sans-serif'],
        },
        colors: {
            'dark-1': '#141314',
            'dark-2': '#1c1b1d ',
            'light-1': '#fefbff',
            'light-2': '#f8f1f6',
            'light-3': '#e6e1e3',
        },
    },
    plugins: [],
};
