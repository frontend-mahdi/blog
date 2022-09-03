import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="UTF-8" />
        <link rel="icon" href="./favicon.ico" />
        <title>{title}</title>
      </Head>
    </>
  );
};
Meta.defaultProps = {
  title: "news blog",
  keywords: "web development, blog, news",
  description: "test blog created by next js",
};

export default Meta;
