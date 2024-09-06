import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './app';
import './styles/index.less';

// 获取你的 HTML 文件中的根 DOM 元素
const container = document.getElementById('root');

// 非空断言，确保 container 不是 null
if (container !== null) {
	createRoot(container).render(<App />);
} else {
	console.error('Failed to find the root element');
}
