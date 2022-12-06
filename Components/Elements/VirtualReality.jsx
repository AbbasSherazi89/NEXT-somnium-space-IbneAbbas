import React from "react";
const VirtualReality = () => {
  return (
    <>
      <section className="virtual-reality">
        <div className="container">
          <div className="row1">
            <h3>SOMNIUM SPACE IS A</h3>
            <h1>VIRTUAL REALITY WORLD</h1>
            <h3>Open, Social & Persistent</h3>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="col1">
                <p>
                  We are creating an Open, Social, Virtual Reality world. A
                  world with its own economy and its own currency. A VR world
                  with its own Marketplace, Games, Social experiences and
                  Virtual Land ownership.
                </p>
                <div>
                  <img
                    className="pcClient img-fluid"
                    src="assets/PC_client.png"
                    alt=""
                  />
                  <div className="text-right">
                    <p>Chat, Build,</p>
                    <p>Trade in dedicated Somnium PC client</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img className="img-fluid" src="assets/VRmode.png" alt="" />
              <div className="text-center">
                <p>PC VR Mode</p>
                <p>Live Inside Somnium World</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="col2">
                <p>
                  A VR world which is fully interconnected and seamless. Fully
                  accessible from any device: PC & VR clients for user's Desktop
                  or an immersive VR experience on mobile devices.
                </p>
                <div className="mt-5">
                  <img
                    className="doorbeen-img img-fluid"
                    src="assets/doorbeen.png"
                    alt=""
                    width={400}
                  />
                  <div className="text-center mt-3">
                    <p>Oculus Quest</p>
                    <p>Compatible</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VirtualReality;
