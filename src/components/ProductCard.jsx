function ProductCard({ product }) {
    return (
      <div className="border p-4 rounded shadow hover:shadow-md transition">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-600">${product.price.toFixed(2)}</p>
        <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
          Add to Cart
        </button>
      </div>
    );
  }
  
  export default ProductCard;
  