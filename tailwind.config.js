module.exports = {
  purge: [
    "./public/**/*.html",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  mode: "jit",
  darkMode: "media",
  theme: {
    fontFamily: {
      body: ["Inter"],
    },
    colors: {
      fg: "var(--color-fg)",
      bg: "var(--color-bg)",
      "gray-1": "var(--color-gray-1)",
      "gray-2": "var(--color-gray-2)",
      "gray-3": "var(--color-gray-3)",
      "gray-4": "var(--color-gray-4)",
      "gray-5": "var(--color-gray-5)",
    },
    fill: {
      fg: "var(--color-fg)",
      bg: "var(--color-bg)",
      "gray-1": "var(--color-gray-1)",
      "gray-2": "var(--color-gray-2)",
      "gray-3": "var(--color-gray-3)",
      "gray-4": "var(--color-gray-4)",
      "gray-5": "var(--color-gray-5)",
    },
    extend: {
      fontSize: {
        xxs: "0.7rem",
      },
    },
  },
  plugins: [],
};
