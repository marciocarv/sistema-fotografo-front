import StatCard from "../components/StatCard";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <StatCard title="Customers" value="3,782" percent="11.01" up />
      <StatCard title="Orders" value="5,359" percent="9.05" />
      <div className="bg-white p-6 rounded-xl shadow-sm">
        Target UI Aqui depois
      </div>
    </div>
  );
}