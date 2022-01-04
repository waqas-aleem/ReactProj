import React, { Component } from "react";
import image3 from "../assets/image 3.jpg";

class MikaPortion extends Component {
  render() {
    return (
      <div>
        <div className="container mt-5 mb-5">
          <div className="row border-top border-dark">
            <div className="col-md-1 text-md-end">
              <img src={image3} alt="" className="rounded-circle mt-3" />
            </div>
            <div className="col-md-8 mt-3">
              <span className="sfpro">Mika MAtikainen</span>
              <br />
              <span className="sfproCustom my-0">Apr 15, 2020. 4 min read</span>
            </div>

            {/* <div className="col-md-1  shadow    mt-5 bg-body "></div>
            <div className="col-md-1 shadow   mt-5 bg-body "></div>
            <div className="col-md-1 shadow    mt-5 bg-body ">
             
            </div> */}
          </div>
        </div>

        <div className="container">
          <div className="row  justify-content-center">
              
            <div className="col-md-8">
              <div  >
                <p className="newyorkmedium">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  eu velit tempus erat egestas efficitur. In hac habitasse
                  platea dictumst. Fusce a nunc eget ligula suscipit finibus.
                  Aenean pharetra quis lacus at viverra 
                </p>
                <p className="newyorkmedium">
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Aliquam quis posuere ligula.
                  In eu dui molestie, molestie lectus eu, semper lectus 
                </p>
              </div>
            <div className="sfpro1 mt-5 mb-5 fw-bold"> 
            
           <p>Next on the pipeline</p>
          
           
        </div>
        <p className="newyorkmedium mt-5">Duis eu velit tempus erat egestas efficitur. In hac
            habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
          <p class="newyorkmedium mt-5"  >Morbi efficitur auctor metus, id mollis lorem pellentesque
            id. Nullam posuere maximus dui et fringilla. </p>

            </div>
           
          </div>
        </div>
      </div>
    );
  }
}

export default MikaPortion;
