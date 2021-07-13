import React, { Component } from 'react';
import image1 from './Images/pizza 3.jpg'
import image2 from './Images/pizza 2.jpg' 


class Carousel extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                        {/*<!-- Indicators -->*/}
                        <ol className="carousel-indicators">
                        <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                        </ol>
                    
                        {/*<!-- Wrapper for slides -->*/}
                        <div className="carousel-inner carousel-content" role="listbox">
                        <div className="item active">
                            <img src={image1} alt="pizza"/>
                        </div>
                        <div className="item">
                            <img src={image2} alt="pizza"/>
                        </div>
                        </div>
                    
                        {/*<!-- Controls -->*/}
                        <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
      );
    }
}

export default Carousel;
