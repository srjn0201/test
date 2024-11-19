import React from "react";

export default function test_navbar() {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'transparent', border: '3px solid rgba(255, 255, 255, 0.5)' }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Sharjeel</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Resume</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Servises</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Playground
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Live Simulation</a></li>
                  <li><a className="dropdown-item" href="/">Training Results</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="/">Other Project</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/">Comming Soon</a>
              </li>
            </ul>
          </div>
        </div>
      </nav> 
    );
}

