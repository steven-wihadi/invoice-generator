import './product-card.component.scss';

function ProductCardComponent({ product }) {
  return (
    <a href={ '/buyer-add-transaction/' + product.id } className="product-card">
      <img src={ product.imgSrc } />
      <span className="product-name">{ product.name }</span>
      <span className="product-price">{ product.price }</span>
    </a>
  );
}

export default ProductCardComponent;
