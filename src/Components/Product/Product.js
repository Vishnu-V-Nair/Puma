function Product(props) {

    return (
        <li className="product">
        <img src= {props.product.image} alt="image of shoe"/>
          <h3> {props.product.title} </h3>
          <span>{props.product.price}</span>
        </li>    

        )
}    
    export default Product;