import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import { HomePage } from './pages/home/index';
import { BlogPage } from './pages/blog/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/blog" element={<BlogPage/>}/>
        <Route path="/blog/:id" element={<BlogPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
