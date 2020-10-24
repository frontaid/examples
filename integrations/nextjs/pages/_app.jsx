import Link from 'next/link';
import React from 'react';
import content from '../frontaid.content';

export default function MyApp({Component, pageProps}) {
  return (
      <>
        <nav>
          <ul>
            <li><Link href="/"><a>{content.index.title}</a></Link></li>
            {content.pages.map(page =>
                <li key={page.path}>
                  <Link href="[...slug]" as={page.path}><a>{page.title}</a></Link>
                </li>,
            )}
          </ul>
        </nav>
        <main>
          <Component {...pageProps} />
        </main>
      </>
  );
}
