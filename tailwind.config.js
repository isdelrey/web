module.exports = {
  mode: 'jit',
  purge: ["./public/**/*.html", "./pages/*.{ts,tsx}", "./components/*.{ts,tsx}"],
  darkMode: "media",
  theme: {
    fontFamily: {
      body: ["Inter"]
    },
    stroke: {
      fg: "var(--color-fg)",
      bg: "var(--color-bg)",
      gray: "var(--color-gray)",
      lightgray: "var(--color-lightgray)"
    },
    placeholderColor: {
      fg: "var(--color-fg)",
      bg: "var(--color-bg)",
      gray: "var(--color-gray)",
      lightgray: "var(--color-lightgray)"
    },
    fill: {
      fg: "var(--color-fg)",
      bg: "var(--color-bg)",
      gray: "var(--color-gray)",
      lightgray: "var(--color-lightgray)"
    },
    borderColor: {
      transparent: "transparent",
      fg: "var(--color-fg)",
      gray: "var(--color-gray)",
      lightgray: "var(--color-lightgray)",
    },
    backgroundColor: {
      transparent: "transparent",
      fg: "var(--color-fg)",
      bg: "var(--color-bg)",
      gray: "var(--color-gray)",
      lightgray: "var(--color-lightgray)"
    },
    textColor: {
      fg: "var(--color-fg)",
      bg: "var(--color-bg)",
      gray: "var(--color-gray)",
      lightgray: "var(--color-lightgray)"
    }
  },
  plugins: [],
};
