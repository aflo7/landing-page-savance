import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import light from './assets/light.png';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Divider from '@mui/material/Divider';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav>
        <div className="top-nav">
          <div className="flex-with-gap-10">
            <div className="flex-with-gap-10">
              <PhoneIphoneIcon />
              <div>(248) 478 2555</div>
            </div>
            <Divider orientation="vertical" flexItem />
            <div className="flex-with-gap-10">
              <EmailIcon />
              <div>sales@savance.com</div>
            </div>
          </div>
          <div className="flex-with-gap-10">
            <FacebookIcon style={{ cursor: 'pointer' }} />
            <LinkedInIcon style={{ cursor: 'pointer' }} />
            <YouTubeIcon style={{ cursor: 'pointer' }} />
          </div>
        </div>
      </nav>
      <div className="second-nav">
        <div
          style={{
            width: '1000px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <div>
            <img
              src="https://test.savance.com/wp-content/uploads/2019/07/savance-logo.png"
              style={{ height: '60px' }}
            />
          </div>
          <div className="right-nav-buttons">
            <div>Solutions</div>
            <div>Company</div>
            <div>Contact</div>
            <div>Careers</div>
            <div>Free Demo</div>
          </div>
        </div>
      </div>
      <main>
        <div>
          <img src={light} className="light" />
          <div style={{ padding: '40px' }}>
            <div style={{ color: 'white' }}>
              <div className="declutter-text" style={{ fontSize: '2rem' }}>
                Remade by Andres Flores
              </div>
              <div className="optimize-text">Optimize work life.</div>
            </div>
            <p style={{ color: 'whitesmoke' }}>
              A responsive website made with Javascript, HTML, and CSS. A recreation of the Savance website.
            </p>
          </div>
        </div>
      </main>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'rgb(34,40,45)',
          color: 'white',
          padding: '10px',
          fontSize: '0.88rem'
        }}
      >
        <div style={{ width: '1000px', textAlign: 'center' }}>
          VISITOR MANAGEMENT, EMERGENCY MUSTERING, ELECTRONIC IN/OUT BOARD,
          HEALTH SCREENING, WHOLESALE DISTRIBUTION ERP & MORE
        </div>
      </div>
    </>
  );
}

export default App;
