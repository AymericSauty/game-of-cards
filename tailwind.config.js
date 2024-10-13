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
            sans: ['cursive', 'sans-serif'],
        },
        colors: {
            transparent: 'transparent',
            'dark-1': '#141314',
            'dark-2': '#1c1b1d',
            'dark-3': '#2a282b',
            'light-1': '#fefbff',
            'light-2': '#f8f1f6',
            'light-3': '#e6e1e3',
            'surface-dark-1': '#2a282b', //(unactive hover)
            'surface-dark-2': '#45455a', //(active)
            'surface-dark-3': '#535265', //(active hover)
            'surface-light-1': '#ebe3ea', //(unactive hover)
            'surface-light-2': '#dcdaf5', //(active)
            'surface-light-3': '#cdcbe5', //(active hover)
        },
    },
    plugins: [],
};
