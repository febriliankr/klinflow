import Head from "next/head";
import ReactMarkdown from "react-markdown";

export default function Home() {
  const input = "# Hello `febrilian`, is a header\n\nAnd this is a paragraph";

  return (
    <>
      <Head>
        <title>Hello</title>
      </Head>
      <ReactMarkdown className="markdown_text" source={input} />
    </>
  );
}
