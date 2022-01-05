import React, { Component } from 'react'

  class singup extends Component {
    render() {
        return (
            <div>
        <div className="container mt-5 mb-5">
    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8 col-sm-12 cutommymainfont" >
          {/* style="margin-top: 50px;" */}

        <div className="mymainfont ">
          <p>Sign up for the newsletter</p>
          <p className="customsfpro">
            If you want relevant updates occasionally, sign up for the private newsletter. Your email is never shared.
          </p>
      
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">


              <div className="content">

                <div className="input-group">
                  <input type="email" className="form-control" placeholder="Enter your email..."/>
                  <span className="input-group-btn">
                    <button className="btn mycustombtn" type="submit">SIGN UP</button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>





      </div>



    </div>
  </div>
            </div>
        )
    }
}

export default singup
