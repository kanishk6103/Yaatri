// tailwind.config.js

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}", "./screens/**/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./components/**/**/*.{js,jsx,ts,tsx}",
    "./navigation/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      width: {
        button: "36px",
      },
      padding: {
        findTrainsButton: "8px 12px",
      },
      colors: {
        Background: "#000000",
        Primary: "#2475EE",
        Dark: "#1D1F24",
        LightDark: "#292A2F",
        Light: "#BBBBBD",
        OffWhite: "#EDEDED",
        Success: "#24903C",
        Rejection: "#D84F4F",
        SecondaryFont: "#8F8F8F",
        PlaceholderColor: "#A8A8A8",
        InputBG: "#282B32",
        textWhite: "#FFFFFF",
        borderColor: "#282B32"
      },
      fontFamily: {
        poppins: ['Poppins'],
      },
      animation: {
        fade: 'fadeOut .5s ease-in-out',
      },

      keyframes: {
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}