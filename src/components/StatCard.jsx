export default function StatCard({ title, value, percent, up }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col gap-2">
      <span className="text-gray-500">{title}</span>

      <span className="text-3xl font-bold">{value}</span>

      <span
        className={`text-sm font-medium ${
          up ? "text-green-600" : "text-red-600"
        }`}
      >
        {up ? "↑" : "↓"} {percent}%
      </span>
    </div>
  );
}