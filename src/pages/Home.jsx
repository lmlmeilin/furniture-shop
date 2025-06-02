import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: 'Wooden Chair', price: 49.99 },
  { id: 2, name: 'Modern Sofa', price: 299.99 },
  { id: 3, name: 'Glass Table', price: 129.99 },
];

function Home() {
  return (
    <>
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default Home;
