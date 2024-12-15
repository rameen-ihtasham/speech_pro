import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F5F5DC", // Soft beige background
        foreground: "#2F3B4D", // Dark gray for main text
        card: {
			DEFAULT: '#FFFFFF', // Brighter shade of your original (#2F3B4D)
			foreground: '#2F3B4D	', // Medium gray for card text
        },
        popover: {
          DEFAULT: "#F9FAE1", // Light cream for popups
          foreground: "#333333", // Dark gray for popup text
        },
        primary: {
          DEFAULT: "#FF6F61", // Coral for primary actions
          foreground: "#FFFFFF", // White text on primary buttons
        },
        secondary: {
          DEFAULT: "#2D9CDB", // Calming blue for secondary actions
          foreground: "#FFFFFF", // White text on secondary buttons
        },
        accent: {
          DEFAULT: "#FFD166", // Bright yellow for accents and highlights
          foreground: "#333333", // Dark text for accents
        },
        muted: {
          DEFAULT: "#E0E0E0", // Light gray for muted elements
          foreground: "#666666", // Medium gray for muted text
        },
        destructive: {
          DEFAULT: "#F45D48", // Bright red for destructive actions
          foreground: "#FFFFFF", // White text on destructive buttons
        },
        border: "#808080", // Subtle light gray for borders
        input: "#F5F5DC", // Very light gray for input backgrounds
        ring: "#2D9CDB", // Blue for focus rings
        chart: {
          "1": "#A8D5BA", // Soft green for charts
          "2": "#FDCB58", // Bright yellow for charts
          "3": "#F45D48", // Bright red for charts
          "4": "#06D6A0", // Aqua for charts
          "5": "#2D9CDB", // Deep blue for charts
        },
      },
      borderRadius: {
        lg: "16px", // Large radius for cards and containers
        md: "12px", // Medium radius for smaller elements
        sm: "8px", // Small radius for buttons and inputs
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
