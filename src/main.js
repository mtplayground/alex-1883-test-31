import './style.css';
import { bootstrapClockView } from './clockView.js';

const appTitle = import.meta.env.VITE_APP_TITLE || 'alex-1883-test-31';

const startClock = () => {
  bootstrapClockView({
    root: document.querySelector('#app'),
    appTitle,
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startClock, { once: true });
} else {
  startClock();
}
