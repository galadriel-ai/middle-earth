import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './App.tsx';
import './index.css';
import 'uplot/dist/uPlot.min.css';
import 'react-toastify/dist/ReactToastify.css';
import ConvexClientProvider from './components/ConvexClientProvider.tsx';
import { Web3ModalProvider } from './context/Web3Modal';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConvexClientProvider>
      <Web3ModalProvider>
        <Home />
      </Web3ModalProvider>
    </ConvexClientProvider>
  </React.StrictMode>,
);
