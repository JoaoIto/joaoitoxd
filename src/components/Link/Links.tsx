import React from 'react';
import Link from './index';

const LinkList: React.FC = () => {
  return (
    <div>
      <h1>Links úteis</h1>
      <ul>
        <li>
          <Link url="https://www.google.com" title="Google" />
        </li>
        <li>
          <Link url="https://www.facebook.com" title="Facebook" />
        </li>
        <li>
          <Link url="https://www.github.com" title="GitHub" />
        </li>
      </ul>
    </div>
  );
};

export default LinkList;
