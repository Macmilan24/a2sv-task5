import React from 'react';
import ContactForm from './components/ContactForm';
import './App.css'; 

const App: React.FC = () => {
  return (
    <div className="App" style={{ backgroundColor: '#f0f2f5', minHeight: '100vh', paddingTop: '50px' }}>
      <ContactForm />
    </div>
  );
};

export default App;