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
  			primary: "var(--primary-color)",
  			secondary: "var(--secondary-color)",
        "light-off-white": "var(--light-off-white-color)",
        "milk-white": "var(--milk-white-color)",
  	}
  },
  plugins: [tailwindcssAnimate],
  }
} satisfies Config;
