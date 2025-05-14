import React from 'react';
import { createRoot } from 'react-dom/client'; // 注意新導入方式
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);