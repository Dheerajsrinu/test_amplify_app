import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AwsRum } from 'aws-rum-web';

try {
  const config = {
    sessionSampleRate: 1,
    identityPoolId: "ca-central-1:13478363-5f97-491e-be30-3f1bfb81ed82",
    endpoint: "https://dataplane.rum.ca-central-1.amazonaws.com",
    telemetries: ["performance","errors","http"],
    allowCookies: true,
    enableXRay: true
  };

  const APPLICATION_ID = 'ac3c4e32-69b4-4a17-a10c-aa4d9b1f6343';
  const APPLICATION_VERSION = '1.0.0';
  const APPLICATION_REGION = 'ca-central-1';

  const awsRum = new AwsRum(
    APPLICATION_ID,
    APPLICATION_VERSION,
    APPLICATION_REGION,
    config
  );
} catch (error) {
  // Ignore errors thrown during CloudWatch RUM web client initialization
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
