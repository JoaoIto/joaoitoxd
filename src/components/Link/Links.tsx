import React from 'react';
import { Card } from './index';

export const LinkList: React.FC = () => {
  return (
    <div>
      <h1>Links úteis</h1>
      <ul>
        <li>
          <Card url="https://www.google.com" title="Google" />
        </li>
        <li>
          <Card url="https://www.facebook.com" title="Facebook" />
        </li>
        <li>
          <Card url="https://www.github.com" title="GitHub" />
        </li>
      </ul>
    </div>
  );
};
