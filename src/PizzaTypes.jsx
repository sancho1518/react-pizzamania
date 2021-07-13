import React, { Component } from 'react';
import image3 from './Images/pizza 5.jpg'
import image4 from './Images/pizza 8.jpg'
import image5 from './Images/pizza 9.jpg'
import image6 from './Images/pizza 6.jpg'

class PizzaTypes extends Component {
    render() {
        return (
            <div>
                <div class="containr">
        <div class="row pic-content">
            <h3 class="text-center">Pizza Types</h3>

            <div class="col-md-3">
                <div class="thumbnail">
                    <img src={image3} alt="Neapolitan"/>
                    <div class="caption">
                      <h3>Neapolitan Pizza</h3>
                      <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                          Sunt soluta laboriosam magni harum maxime. 
                          Dolores magnam officia ipsum
                          dolorum ex impedit eligendi, laboriosam ratione
                          iure nesciunt illum veritatis totam est.
                      </p>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
              <div class="thumbnail ">
                <img src={image4} alt="Chicago"/>
                <div class="caption">
                  <h3>Chicago Pizza</h3>
                  <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Sunt soluta laboriosam magni harum maxime. 
                      Dolores magnam officia ipsum
                      dolorum ex impedit eligendi, laboriosam ratione
                      iure nesciunt illum veritatis totam est.
                  </p>
                </div>
            </div>
            </div>
            <div class="col-md-3">
              <div class="thumbnail">
                <img src={image5} alt="Sicilian"/>
                <div class="caption">
                  <h3>Sicilian Pizza</h3>
                  <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Sunt soluta laboriosam magni harum maxime. 
                      Dolores magnam officia ipsum
                      dolorum ex impedit eligendi, laboriosam ratione
                      iure nesciunt illum veritatis totam est.
                  </p>
                </div>
            </div>
            </div>
            <div class="col-md-3">
              <div class="thumbnail">
                <img src={image6} alt="Greek"/>
                <div class="caption">
                  <h3>Greek  Pizza</h3>
                  <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Sunt soluta laboriosam magni harum maxime. 
                      Dolores magnam officia ipsum
                      dolorum ex impedit eligendi, laboriosam ratione
                      iure nesciunt illum veritatis totam est.
                  </p>
                </div>
            </div>
            </div>
        </div>
    </div>
            </div>
        );
    }
}

export default PizzaTypes;
