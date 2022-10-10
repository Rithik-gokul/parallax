
import './index.css';
import App from "./app.js"
import React from 'react'
import {createRoot} from "react-dom/client";

export default function Page() {
  return (
    <div>
    <App />
    </div>
  )
}

const root = createRoot(document.getElementById('root'));
root.render(<Page />);

