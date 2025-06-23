import type { Config } from "tailwindcss";
import myTheme from "./theme";
import daisyui from "daisyui";
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: myTheme.colors,
      fontFamily: myTheme.fontFamily,
      fontSize: myTheme.fontSize,
      boxShadow: myTheme.boxShadow,
      borderRadius: myTheme.borderRadius,
    },
  },
  plugins: [
    daisyui,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function ({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        ".no-scrollbar": {
          "-ms-overflow-style": "none", // IE 10+
          "scrollbar-width": "none", // Firefox
        },
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none", // Safari and Chrome
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
} satisfies Config;
