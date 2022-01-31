import NextHead from "next/head";

const Head = () => {
  return (
    <NextHead>
      <title>Ivo Sequeros del Rey</title>
      <meta
        name="theme-color"
        content="#fff"
        media="(prefers-color-scheme: light)"
      />
      <meta
        name="theme-color"
        content="#1e1e1e"
        media="(prefers-color-scheme: dark)"
      />
    </NextHead>
  );
};

export default Head;
