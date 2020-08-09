import React from 'react';

import ReactMarkdown from 'react-markdown';

import retrospective from '../data/retrospective';

export default function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <div>
        <ReactMarkdown source={retrospective} />
      </div>
    </>
  );
}
