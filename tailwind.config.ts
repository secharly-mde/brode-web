import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F8F5F0", // Lighter, cleaner cream
        "deep-brown": "#1A1412", // Almost black for stark contrast (like Babs)
        "saddle-brown": "#8C4A23", // Rich terracotta/brown
        "warm-tan": "#D9B89A", // Soft accent
        "off-white": "#FFFFFF",
        "stone-grey": "#EFEBE4", // For subtle background sections
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-1": ["5rem", { lineHeight: "1", letterSpacing: "-0.03em" }],
        "display-2": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        h2: ["2.75rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        h3: ["1.75rem", { lineHeight: "1.3" }],
        "body-lg": ["1.125rem", { lineHeight: "1.8" }],
        body: ["1rem", { lineHeight: "1.7" }],
        small: ["0.875rem", { lineHeight: "1.5", letterSpacing: "0.05em" }],
      },
    },
  },
  plugins: [],
};
export default config;
