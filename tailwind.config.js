/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        colors: {
            transparent: 'transparent',
            white: '#fff',
            black: '#000',
            fuchsia: {
                50: '#ffeff1',
                100: '#ffe0e4',
                200: '#ffc5d1',
                300: '#ff96ab',
                400: '#ff5b81',
                500: '#ff225b',
                600: '#ff0048',
                700: '#da003d',
                800: '#b6003c',
                900: '#840032', // main color
                950: '#58001a',
            },
            cream: {
                50: '#f9f7f7',
                100: '#f3eded',
                200: '#e5dada',
                300: '#d8c9c9',
                400: '#c1a8a8',
                500: '#a98a8a',
                600: '#927070',
                700: '#795c5c',
                800: '#654f4f',
                900: '#574545',
                950: '#2d2222',
            },
            gray: {
                50: '#f7f7f7',
                100: '#ececed',
                200: '#dddee0',
                300: '#c5c9cb',
                400: '#a9aeb1',
                500: '#94999e',
                600: '#83878d',
                700: '#757980',
                800: '#63656a',
                900: '#515457',
                950: '#343537',
            },
        },
        extend: {
            keyframes: {
                'accordion-down': {
                    from: { height: 0 },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: 0 },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
};
