import React, { Component } from "react";
import "./style.css";
import googlePlayBadge from "../../../src/img/google-play-badge.svg";
import appStoreBadge from "../../../src/img/app-store-badge.svg";

export const AppDownloadComponent = props => {
  return (
    <section className="download bg-primary text-center" id="download">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h2 className="section-heading">
              The free*, cloud-based asset management tool!
            </h2>
            <p>Download now to get started!</p>
            <div className="badges">
              <a className="badge-link" href="#">
                <img src={googlePlayBadge} alt="" />
              </a>
              <a className="badge-link" href="#">
                <img src={appStoreBadge} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
