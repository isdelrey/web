import NextHead from "next/head";

const Head = () => {
  return (
    <NextHead>
      <title>Ivo Sequeros del Rey</title>
      <meta
        name="theme-color"
        content="#fff"
        // @ts-ignore
        media="(prefers-color-scheme: light)"
      />
      <meta
        name="theme-color"
        content="#1e1e1e"
        // @ts-ignore
        media="(prefers-color-scheme: dark)"
      />
    </NextHead>
  );
};

export default Head;
