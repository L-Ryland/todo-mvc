/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "text-black": "#222222",
        "text-gray": "#717171",
        "bg-gray": "#EBEBEB",
        shadow: "#F7F7F7",
        accent: "#FF385C",
        "border-shadow": "#DDDDDD",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("flowbite/plugin")],
};
