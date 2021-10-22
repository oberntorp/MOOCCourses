// my-domain.com/News/someIdOrElse

import { useRouter } from "next/router";

const DetailsPage = () => {
  const router = useRouter();
  return <h1>The details page, of {router.query.newsId}</h1>;
};

export default DetailsPage;
