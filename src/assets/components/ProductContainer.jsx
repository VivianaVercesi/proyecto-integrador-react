import "../styles/productContainer.css"
import Card from "./ProductCard";

function ProductContainer({ products }) {
    return (
        <div className="products-container product-list">
            {products.map((product) => (
                <Card key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductContainer;