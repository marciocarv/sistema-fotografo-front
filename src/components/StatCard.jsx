export default function StatCard({
  title,
  value,
  percent,
  up,
  icon,
  subtitle = "than last month",
}) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md border flex flex-col gap-4">

      {/* Top: ícone + título */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700">
          {icon}
        </div>
        <span className="text-gray-600 text-sm">{title}</span>
      </div>

      {/* Valor */}
      <span className="text-3xl font-bold text-gray-800">{value}</span>

      {/* Percentual */}
      <span
        className={`text-sm font-semibold flex items-center gap-1 ${
          up ? "text-green-600" : "text-red-600"
        }`}
      >
        {up ? "▲" : "▼"} {percent}
        <span className="text-gray-500 font-normal">{subtitle}</span>
      </span>
    </div>
  );
}