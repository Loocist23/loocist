import { heroui } from '@heroui/theme';

/** @type {import('tailwindcss').Config} */
export const content = [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./node_modules/@heroui/react/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/(button|card|navbar|ripple|spinner).js",
];
export const theme = {
    extend: {
        // Tu peux ici définir des couleurs custom comme background / foreground si tu veux
    },
};
export const plugins = [heroui()];
