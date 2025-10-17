import type { Config } from "tailwindcss";
import * as tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base colors
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        "light-off-white": "var(--light-off-white-color)",
        "milk-white": "var(--milk-white-color)",
        "muted-foreground": "var(--muted-foreground)",

        // Primary color variations
        "primary-light": "var(--primary-color-light)",
        "primary-dark": "var(--primary-color-dark)",
        "primary-hover": "var(--primary-color-hover)",
        "primary-active": "var(--primary-color-active)",

        // Secondary color variations
        "secondary-light": "var(--secondary-color-light)",
        "secondary-dark": "var(--secondary-color-dark)",
        "secondary-hover": "var(--secondary-color-hover)",
        "secondary-active": "var(--secondary-color-active)",

        // Light color variations
        "light-hover": "var(--light-color-hover)",
        "light-active": "var(--light-color-active)",

        // Semantic colors
        success: "var(--success-color)",
        warning: "var(--warning-color)",
        error: "var(--error-color)",
        info: "var(--info-color)",

        // Neutral colors
        "neutral-50": "var(--neutral-50)",
        "neutral-100": "var(--neutral-100)",
        "neutral-200": "var(--neutral-200)",
        "neutral-300": "var(--neutral-300)",
        "neutral-400": "var(--neutral-400)",
        "neutral-500": "var(--neutral-500)",
        "neutral-600": "var(--neutral-600)",
        "neutral-700": "var(--neutral-700)",
        "neutral-800": "var(--neutral-800)",
        "neutral-900": "var(--neutral-900)",
      },
    },
    plugins: [tailwindcssAnimate],
  },
} satisfies Config;
