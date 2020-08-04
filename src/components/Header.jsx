import React from 'react';

export default function Header({ handleClickLink }) {
  const tabs = [
    { item: '임시제목', url: '/' },
    { item: 'About', url: '/about' },
  ];

  return (
    <div>
      <ul>
        {
          tabs.map((tab) => (
            <li key={tab.url}>
              <a href={tab.url} onClick={() => handleClickLink(tab.url)}>
                {tab.item}
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
