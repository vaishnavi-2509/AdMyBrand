export default function PricingCard({ title, price, features }: { title: string; price: string; features: string[] }) {
  return (
    <div className="bg-glass backdrop-blur-glass p-6 rounded-2xl border border-white/10 shadow-lg">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-3xl font-semibold mb-6">{price}</p>
      <ul className="space-y-2 mb-6 text-left">
        {features.map((f, i) => (
          <li key={i}>✔️ {f}</li>
        ))}
      </ul>
      <button className="bg-primary text-white px-6 py-2 rounded-full hover:opacity-90 transition">
        Select
      </button>
    </div>
  );
}