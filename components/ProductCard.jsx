export default function ProductCard({ product, onAdd }) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all flex flex-col justify-between group border border-gray-50">
      <div className="text-7xl text-center mb-6 group-hover:scale-110 transition-transform cursor-default">
        {product.image}
      </div>
      <div>
        <h3 className="font-bold text-lg leading-tight mb-2">{product.name}</h3>
        <div className="flex justify-between items-center mt-4">
          <span className="font-extrabold text-xl">{product.price} Kč</span>
          <button 
            onClick={() => onAdd(product)}
            className="bg-gray-100 hover:bg-black hover:text-white px-4 py-2 rounded-full font-bold transition-colors"
          >
            + Přidat
          </button>
        </div>
      </div>
    </div>
  );
}
