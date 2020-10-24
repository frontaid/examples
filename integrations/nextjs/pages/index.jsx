import Head from 'next/head';
import content from '../frontaid.content';

export default function Index() {
  return (
      <>
        <Head>
          <title>{content.title}</title>
        </Head>
        <h1>{content.index.title}</h1>
        <div dangerouslySetInnerHTML={{__html: content.index.content}}></div>
      </>
  );
}
