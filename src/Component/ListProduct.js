import React, { Component } from 'react'
import Product from './Product'
import { connect } from 'react-redux'
class ListProduct extends Component {
  render() {
    let {products} =this.props;
    let elementProduct = products.map((item,index)=>{
      return <Product key={index} renderProduct={item}/>
    })
    return (
      <div>
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h1 className="panel-title">List Products</h1>
          </div>
          <div className="panel-body" id="list-product">
            {/* PRODUCT : START */}
            {/* <Product /> */}
            {elementProduct}
            {/* PRODUCT : END */}
            {/* PRODUCT : START */}
            <div className="media product">
              <div className="media-left">
                <a href="#">
                  <img
                    className="media-object"
                    src="images/aplus-media.jpg"
                    alt="charmander"
                  />
                </a>
              </div>
              <div className="media-body">
                <h4 className="media-heading">aplus media</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                  dicta asperiores veniam repellat unde debitis quisquam magnam
                  magni ut deleniti!
                </p>
                <span className="price"> 12 USD</span>
              </div>
            </div>
            {/* PRODUCT : END */}
          </div>
        </div>
      </div>
    )
  }
}
//mapStateToProps: kết nối state trong store của app với props trên component
const mapStateToProps = (state) => {
  return {
    products: state.listproduct,
  }
}

export default connect(mapStateToProps,null) (ListProduct);