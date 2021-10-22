// my-domain.com/News

import { Fragment } from "react";
import Link from "next/link";

const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News page</h1>
      <ul>
        <li>
          <Link href="/News/nextjs-is-fun">NextJs is fun!</Link>
        </li>
        <li>
          <Link href="/News/nextjs-is-new-for-me">NextJs is new for me!</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
