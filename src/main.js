import './style.css';

const appTitle = import.meta.env.VITE_APP_TITLE || 'alex-1883-test-31';

document.querySelector('#app').innerHTML = `
  <section class="hello">
    <p class="eyebrow">Vite is running</p>
    <h1>Hello from ${appTitle}</h1>
    <p>Start editing <code>src/main.js</code> to build the app.</p>
  </section>
`;
