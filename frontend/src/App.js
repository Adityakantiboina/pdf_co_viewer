// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import AdminView from './components/Adminview';
import ViewerPage from './components/Viewer';
import PDFViewerPage from './components/pdfviewer';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminView />} />
        <Route path="/viewer" element={<ViewerPage />} />
        <Route path="/page" element={<PDFViewerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
