import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        lg: "80px",
      },
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      animation: {
        gradientText: "gradientText 3s ease infinite", // Add gradient animation
      },
      keyframes: {
        gradientText: {
          "0%": {
            backgroundPosition: "0% 50%",
            backgroundImage: "linear-gradient(to right, #6EE7B7, #3B82F6, #9333EA)",
          },
          "100%": {
            backgroundPosition: "100% 50%",
            backgroundImage: "linear-gradient(to right, #9333EA, #3B82F6, #6EE7B7)",
          },
        },
      },
      scale: {
        "102": "1.02",
      },
    },
  },
  plugins: [],
};

export default config;
