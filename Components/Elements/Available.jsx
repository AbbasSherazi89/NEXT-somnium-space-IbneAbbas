import React from "react";
const Available = () => {
  return (
    <>
      <section className="available">
        <div className="container">
        <div className="row ">
          <div className="col-md-3 align-item-center justify-content-center">
            <h1 className="mt-3">Available Now</h1>
          </div>
          <div className="col-md-6 d-flex align-item-center justify-content-between">
            <img src="assets/window.png" alt="" />
            <img src="assets/oculus.png" alt="" />
            <img src="assets/vive.png" alt="" />
            <img src="assets/steam.png" alt="" />
          </div>
          <div className="col-md-3 d-flex align-item-center justify-content-center">
            <h1 className="mt-3">Ready to Play</h1>
          </div>
        </div>

        </div>
      </section>
    </>
  );
};

export default Available;
