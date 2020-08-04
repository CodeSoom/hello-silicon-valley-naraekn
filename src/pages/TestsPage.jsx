import React from 'react';

import { Link } from 'react-router-dom';

export default function TestsPage() {
  return ((
    <div>
      <h1>테스트 설명</h1>
      <Link to="/tests/1">테스트 시작하기</Link>
    </div>
  ));
}
