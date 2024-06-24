/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit", // Just-in-Time mode for faster build times (recommended)
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".bgPrimary": {
            "background-color": "#0F172A",
          },
          ".primary": {
            color: "#0F172A",
          },
          ".ghost-border": {
            "border-color": "#E2E8F0",
          },
          ".form-checkbox": {
            appearance: "none",
            display: "inline-block",
            height: "20px",
            width: "20px",
            "background-color": "transparent",
            "background-image": "none",
            "border-width": "2px",
            "border-radius": "4px",
            "border-color": "#ccc",
            "background-color": "transparent",
          },
          ".form-checkbox:checked": {
            "background-color": "black",
            "border-color": "black",
          },
          ".form-checkbox:checked:after": {
            content: '""',
            display: "block",
            width: "6px",
            height: "12px",
            border: "solid white",
            "border-width": "0 2px 2px 0",
            transform: "rotate(45deg)",
            position: "absolute",
            left: "7px",
            top: "4px",
            "border-radius": "2px",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
