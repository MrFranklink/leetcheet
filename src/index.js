import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import './index.css';
import NavScrollExample from './NavbAR/navbar';
import { ChakraProvider } from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterWithSocialLinks from './Container/footer';
import MyRoute from './Landing Page/Landing';
import Array from './Problem_Landing/Problem';
import Stackes from './Problem_Landing/Stack';
import Linked from './Problem_Landing/LinkedList';
import ProfileLand from './Landing Page/Profilelanding';
import ContestLand from './Landing Page/contestland';

const App = () => {
  const location = useLocation();

  const shouldDisplayFooter = location.pathname !== '/Contest'  && location.pathname !== '/profile';
  

  return (
    <React.StrictMode>
      <ChakraProvider>
        <NavScrollExample />
        <Routes>
          <Route exact path="/" element={<MyRoute />} />
          <Route path="/Array" element={<Array />} />
          <Route path="/linked-list" element={<Linked />} />
          <Route path="/stack" element={<Stackes />} />
          <Route path="/Contest" element={<ContestLand />} />
          <Route path="/profile" element={<ProfileLand />} />
        </Routes>
        {shouldDisplayFooter && <FooterWithSocialLinks />}
      </ChakraProvider>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);
