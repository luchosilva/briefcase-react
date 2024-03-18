/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  darkMode: "class",
  plugins: [require('flowbite/plugin'), require('daisyui')],
  daisyui: {
    // https://daisyui.com/docs/colors/
    themes: [
      {
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          "base-100": "#16181C",
          "base-200": "#1a1d22",
          "base-300": "#21242a",
          primary: "#6f4cb7",
          "primary-focus": "#6443a9",
          "primary-content": "#fff",
          secondary: "#2474B8",
          "secondary-focus": "#1A67A0",
          "secondary-content": "#ffffff",
          accent: "#E2C221",
          neutral: "rgba(130,124,153,1)",
          "base-content": "#fff",
          "*": { "border-color": "#2c2c2c" },
          success: "#75B943",
          "success-content": "#fff",
          warning: "#FBBF11",
          error: "#E94539",
          "error-content": "#fff",
          ".btn": {
            "text-transform": "uppercase !important",
          },
        },
      },
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          "base-100": "#FFFFFF",
          "base-200": "#F2F2F2",
          "base-300": "#E5E6E6",
          primary: "#3E266E",
          "primary-focus": "#311E60",
          "primary-content": "#ffffff",
          secondary: "#2474B8",
          "secondary-focus": "#1A67A0",
          "secondary-content": "#ffffff",
          accent: "#E2C221",
          neutral: "rgba(130,124,153,1)",
          "*": { "border-color": "#e5e7eb" },
          success: "#75B943",
          "success-content": "#fff",
          warning: "#FBBF11",
          error: "#E94539",
          "error-content": "#fff",
          ".btn": {
            "text-transform": "uppercase !important",
          },
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--app-font-family)", ...require("tailwindcss/defaultTheme").fontFamily.sans],
      },
      boxShadow: {
        md: [
          "0 9px 6px -5px rgba(0, 0, 0, 0.02)",
          "0 8px 4px -6px rgba(0, 0, 0, 0.05)",
        ],
        xl: [
          "0 20px 25px -5px rgba(0, 0, 0, 0.02)",
          "0 8px 10px -6px rgba(0, 0, 0, 0.05)",
        ],
      },
    },
  },
};
