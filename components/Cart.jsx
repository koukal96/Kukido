import { useState } from 'react';

export default function Cart({ isOpen, onClose, cartItems }) {
  const [zasilkovnaPoint, setZasilkovnaPoint] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  const openZasilkovna = () => {
    setZasilkovnaPoint("Výdejní místo: AlzaBox, Praha (ID: 12345)");
  };

  // 🚀 TADY JE TVŮJ NOVÝ MOZEK!
  const handleCheckout = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch('https://hook.eu1.make.com/yjttc46lyr5vqfg4ckk82kobzqlyp4rj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: cartItems,
          totalPrice: cartTotal,
          shippingInfo: zasilkovnaPoint || "Nevybrána pobočka"
        })
      });

      if (response.ok) {
        alert("🎉 Super! Data úspěšně dorazila do Make.com!");
      } else {
        alert("Něco se pokazilo při odesílání.");
      }
    } catch (error) {
      console.error(error);
      alert("Chyba připojení.");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full shadow-2xl p-8 flex flex-col overflow-y-auto animate-fade-in-right">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-black">Tvůj košík</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-black text-2xl font-bold">✕</button>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center mt-20 font-medium">Zatím tu nic není. Běž něco ulovit! 🛒</p>
        ) : (
          <div className="flex-1 flex flex-col gap-4">
            {cartItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <span className="text-3xl">{item.image}</span>
                <span className="font-medium flex-1 px-4 leading-tight">{item.name}</span>
                <span className="font-bold whitespace-nowrap">{item.price} Kč</span>
              </div>
            ))}
          </div>
        )}

        {cartItems.length > 0 && (
          <div className="mt-8 border-t border-gray-100 pt-8">
            <div className="mb-6">
              <h3 className="font-bold mb-3 text-gray-800">Doprava</h3>
              <button 
                onClick={openZasilkovna}
                className="w-full border-2 border-red-500 text-red-600 font-bold py-3 rounded-2xl hover:bg-red-50 transition-colors flex items-center justify-center gap-2"
              >
                🔴 Vybrat Zásilkovnu
              </button>
              {zasilkovnaPoint && <p className="text-sm mt-3 text-green-600 font-bold bg-green-50 p-3 rounded-xl">✓ {zasilkovnaPoint}</p>}
            </div>

            <div className="flex justify-between items-center text-2xl font-black mb-6">
              <span>Celkem:</span>
              <span>{cartTotal} Kč</span>
            </div>

            <button 
              onClick={handleCheckout}
              disabled={isSubmitting}
              className="w-full bg-blue-500 text-white font-black text-lg py-4 rounded-2xl hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/30 disabled:bg-gray-400"
            >
              {isSubmitting ? 'Zpracovávám...' : '💳 Zaplatit přes GoPay'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
