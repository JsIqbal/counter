import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.component";
import "bootstrap/dist/css/bootstrap.min.css";

const div = document.getElementById("root");
const root = ReactDOM.createRoot(div);
root.render(
    <div className="header">
        <div className="container">
            <div className="row">
                <App />
            </div>
        </div>
    </div>
);
