import { useState } from 'react';
import Head from 'next/head';
import productsData from '../data/products.json';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import Cart from '../components/Cart';

export default function Home() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setIsCartOpen(true); // Automaticky otevře košík po přidání
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-blue-200">
      <Head>
        <title>kukido. | To co právě frčí</title>
      </Head>

      <Navbar cartCount={cart.length} onOpenCart={() => setIsCartOpen(true)} />
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} cartItems={cart} />

      <header className="pt-32 pb-16 px-8 max-w-6xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          To, co právě <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">frčí.</span>
        </h2>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          Prémiové vychytávky, chytrá elektronika a trendy kousky, které posunou tvůj lifestyle na další level.
        </p>
      </header>

      <main className="max-w-6xl mx-auto px-8 pb-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {productsData.map((product) => (
          <ProductCard key={product.id} product={product} onAdd={addToCart} />
        ))}
      </main>

      <footer className="bg-white border-t border-gray-200 py-12 text-center">
        <h3 className="text-2xl font-black mb-6">kukido.</h3>
        <div className="flex justify-center gap-8 mb-6">
          <a href="mailto:ahoj@kukido.cz" className="text-gray-500 hover:text-black font-medium transition-colors">ahoj@kukido.cz</a>
          <a href="https://wa.me/420777123456" target="_blank" rel="noreferrer" className="text-green-600 hover:text-green-500 font-bold flex items-center gap-1 transition-colors">
            💬 WhatsApp Podpora
          </a>
        </div>
        <p className="text-sm text-gray-400">© 2026 kukido. Vytvořeno v top moderním stacku.</p>
      </footer>
    </div>
  );
}
