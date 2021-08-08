import './product-card.component.scss';

function ProductCardComponent({ product }) {
  return (
    <div className="product-card">
      <img src={ product.imgSrc } />
      <span className="product-name">{ product.name }</span>
      <span className="product-price">{ product.price }</span>
    </div>
  );
}

export default ProductCardComponent;
