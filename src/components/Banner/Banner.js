import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner d-flex align-items-center justify-content-center">
      <div className="d-flex flex-column align-items-center">
        <h2>Best food waitting for you</h2>
        <div class="input-container p-1 bg-light rounded rounded-pill shadow-sm mb-4">
          <div className="input-group">
            <input
              type="search"
              placeholder="Search food item"
              aria-describedby="search-button"
              className="form-control border-0 bg-light search-input"
            />
            <div className="input-group-append">
              <button id="search-button" type="submit" className="btn">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
