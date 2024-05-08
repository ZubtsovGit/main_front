/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f7f7f7",
        "brand-primary": "#303030",
        black: "#000",
        "brand-secondary": "#fff",
        darkslategray: "#494949",
        "gray-gray50": "#a2a2a2",
        royalblue: "#006cdc",
        gray: "#121212",
        "table-border": "#b9b9b9",
        "text-secondary": "rgba(0, 0, 0, 0.6)",
        "text-disabled": "rgba(0, 0, 0, 0.38)",
        "components-input-outlined-enabledborder": "rgba(0, 0, 0, 0.23)",
        "text-primary": "rgba(0, 0, 0, 0.87)",
        "primary-main": "#2196f3",
      },
      spacing: {},
      fontFamily: {
        "paragraph-p1-bold": "'Source Sans Pro'",
        "heading-h3": "Raleway",
        inherit: "inherit",
        inter: "Inter",
        roboto: "Roboto",
      },
      borderRadius: {
        "3xs": "10px",
        "41xl": "60px",
        borderradius: "4px",
      },
    },
    fontSize: {
      xl: "20px",
      "13xl": "32px",
      "5xl": "24px",
      "21xl": "40px",
      lg: "18px",
      "37xl": "56px",
      sm: "14px",
      base: "16px",
      mini: "15px",
      xs: "12px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
