export default function Button({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <button
      className="w-full py-3 rounded-full bg-blue-600 text-white font-bold text-base hover:bg-blue-700 transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-md"
      onClick={onPress}
    >
      {label}
    </button>
  );
}
