module.exports = {
  purge: ["./public/**/*.html", "./pages/*.{ts,tsx}", "./components/*.{ts,tsx}"],
  mode: 'jit',
  darkMode: "media",
  theme: {
    fontFamily: {
      body: ["Inter"]
    },
    stroke: {
      fg: "var(--color-fg)",
      bg: "var(--color-bg)",
      gray: "var(--color-gray)"
    },
    placeholderColor: {
      fg: "var(--color-fg)",
      bg: "var(--color-bg)",
      gray: "var(--color-gray)"
    },
    borderColor: {
      transparent: "transparent",
      fg: "var(--color-fg)",
      gray: "var(--color-gray)",
    },
    backgroundColor: {
      transparent: "transparent",
      fg: "var(--color-fg)",
      bg: "var(--color-bg)",
      gray: "var(--color-gray)"
    },
    textColor: {
      fg: "var(--color-fg)",
      bg: "var(--color-bg)",
      gray: "var(--color-gray)"
    }
  },
  plugins: [],
};
