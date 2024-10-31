import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|card|code|image|input|kbd|link|navbar|select|snippet|toggle|ripple|spinner|listbox|divider|popover|scroll-shadow).js",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui",
      addCommonColors: false, // Avoid overriding built-in colors like "blue", "green"
      defaultTheme: "light",
      defaultExtendTheme: "light",
      themes: {
        light: {
          layout: {
            background: "#F4D9D0", // Pale Pink for light theme background
            cardBackground: "#D9ABAB", // Soft Blush for cards/sections
          },
          colors: {
            primary: "#921A40", // Deep Maroon for primary elements
            secondary: "#C75B7A", // Muted Pink for highlights
            textPrimary: "#F8F1F1", // Off-white for text on primary elements
            textSecondary: "#2E2E2E", // Charcoal Gray for regular text
            headline: "#1A1A1A", // Soft Black for headings
            buttonText: "#F8F1F1", // Off-white for buttons
            borderColor: "#C4C4C4", // Light Gray for borders/dividers
            accent: "#F5E9E2", // Warm Beige for badges or highlights
          },
        },
        dark: {
          layout: {
            background: "#1A1A1A", // Dark background for the dark theme
            cardBackground: "#2E2E2E", // Darker card background
          },
          colors: {
            primary: "#C75B7A", // Muted Pink as primary in dark mode
            secondary: "#F4D9D0", // Pale Pink for accents
            textPrimary: "#F5E9E2", // Warm Beige for text
            headline: "#D9ABAB", // Soft Blush for headings
            buttonText: "#F5E9E2", // Warm Beige for buttons
            borderColor: "#4A4A4A", // Dark Gray for dividers
            accent: "#D9ABAB", // Soft Blush for badges
          },
        },
      },
    }),
  ],
};
