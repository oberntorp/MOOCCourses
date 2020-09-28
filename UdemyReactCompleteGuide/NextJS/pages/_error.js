import React from 'react';
import Link from 'next/link';

const errorPage = () => (
    <div>
        <h1>Oh gosh, that page does not exist!</h1>
        <p>Try <Link href="/"><a>Going back</a></Link></p>
        </div>
);

export default errorPage;