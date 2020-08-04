import React from 'react';

import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <Link to="/tests">테스트하기</Link>
    </div>
  );
}
