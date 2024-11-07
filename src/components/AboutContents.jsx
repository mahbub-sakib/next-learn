import Link from 'next/link';
import React from 'react';

const AboutContents = () => {
    return (
        <div>
            <Link href="/about/history">History</Link>
            <Link href="/about/mission">Mission</Link>
        </div>
    );
};

export default AboutContents;