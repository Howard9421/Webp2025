import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// 1. 先獲取 root DOM 元素
const container = document.getElementById('root');

// 2. 建立 root
const root = createRoot(container);

// 3. 渲染應用程式
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);