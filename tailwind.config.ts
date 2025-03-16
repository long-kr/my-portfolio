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
  			
  			primary: {
  				DEFAULT: '#999999',
  			},
  			secondary: {
  				DEFAULT: '#666666',
  			}
  			
  	}
  },
  plugins: [tailwindcssAnimate],
  }
} satisfies Config;
