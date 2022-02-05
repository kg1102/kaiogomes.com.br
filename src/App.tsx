import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import { Homepage } from './pages/home/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
