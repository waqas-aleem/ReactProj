import React, { Component } from "react";
import image3 from "../assets/image 3.jpg";
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 
import content from '../assets/content.jpg'
class MikaPortion extends Component {
  render() {
    return (
      <div>
        <div className="container mt-5 mb-5">
          <div className="row border-top border-dark">
            <div className="col-lg-2 col-xl-1 col-md-1 text-xlg-end">
              <img src={image3} alt="" className="rounded-circle mt-3" />
            </div>
            <div className="col-lg-6 col-xl-8 col-md-6 mt-3">
              <span className="sfpro">Mika MAtikainen</span>
              <br />
              <span className="sfproCustom my-0">Apr 15, 2020. 4 min read</span>
            </div >
            <div className="col-lg-4 col-md-5 col-xl-3  mt-5">
              <div>
                
              
              <div className="m-auto ">
              <span className="shadow p-3">
            <i className="fa fa-twitter shadow "></i>
            </span>
            <span className="shadow p-3">
            <span className="social">
            <i className="fa fa-facebook  "></i>
            </span>
            </span>
            <span className="shadow p-3 ">
            <span className="social2">
            <i className="fa fa-whatsapp  "></i>
            </span>
            </span>
            </div>
              </div>
              </div>
            
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
          <p className="newyorkmedium mt-5"  >Morbi efficitur auctor metus, id mollis lorem pellentesque
            id. Nullam posuere maximus dui et fringilla. </p>

            </div>
           
          </div>
        </div>
        <div className="container text-center">
          <div className="row">
            <div className="col-md-12">

            <img src={content} alt="" className="w-100" />      
            </div>
            
          </div>
          <div className="row">
            <div className="col-md-3">
              
            </div>
            <div className="col-md-6">
            <p className="  mikaFigureCaption " >
        
          Image caption centered this way and I'll make this a bit longer to indicate the amount of line-height.
        </p>
            </div>
            
          </div>
        </div>
          
       
      </div>
    );
  }
}

export default MikaPortion;
