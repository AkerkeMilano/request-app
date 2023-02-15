import React from 'react';
import { RequestForm } from './containers/RequestForm/RequestForm';
import { SuccessInfo } from './containers/SuccessInfo/SuccessInfo';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<RequestForm />}>
            <Route path="success" element={<SuccessInfo />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
