export default function Sidebar() {
  return (
    <aside className="hidden md:flex w-64 bg-white border-r flex-col p-4">
      <div className="text-2xl font-bold mb-6">TailAdmin</div>

      <nav className="flex flex-col gap-2">
        <button className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
          Dashboard
        </button>
        <button className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
          eCommerce
        </button>
      </nav>
    </aside>
  );
}