export default function Button({ text }: { text: string }) {
  return (
    <button className="bg-primary text-white text-sm md:text-base px-4 md:px-6 py-2 md:py-3 rounded-full border-2 border-white/50 hover:border-white transition-shadow shadow-sm hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-primary/50">
      {text}
    </button>
  );
}
