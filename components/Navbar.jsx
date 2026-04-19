export default function Navbar({ cartCount, onOpenCart }) {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-40 flex justify-between items-center px-8 py-4">
      <h1 className="text-3xl font-black tracking-tighter">kukido.</h1>
      <button 
        onClick={onOpenCart}
        className="relative bg-black text-white px-5 py-2 rounded-full font-medium hover:scale-105 transition-transform shadow-lg shadow-black/20"
      >
        Košík ({cartCount})
      </button>
    </nav>
  );
}
