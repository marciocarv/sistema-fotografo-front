import { AiOutlineHome, AiOutlineCalendar, AiOutlineUser } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";

export default function Sidebar({ open, setOpen }) {
  return (
    <>
      {/* --- SIDEBAR MOBILE --- */}
      <aside
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-sm border-r border-gray-400 rounded-r-xl p-4 transform transition-transform duration-300 z-50 md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="p-6 border-gray-400">
          <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
        </div>

        {/* Menu */}
        <nav className="flex-1 p-4 space-y-2">
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-800 hover:text-white text-gray-700 font-medium transition">
            <AiOutlineHome className="text-xl" />
            Home
          </a>

          <a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-800 hover:text-white text-gray-700 font-medium transition">
            <BiCategory className="text-xl" />
            Serviços
          </a>

          <a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-800 hover:text-white text-gray-700 font-medium transition">
            <AiOutlineCalendar className="text-xl" />
            Agenda
          </a>

          <a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-800 hover:text-white text-gray-700 font-medium transition">
            <AiOutlineUser className="text-xl" />
            Clientes
          </a>
        </nav>

        <div className="p-6 border-t text-gray-500 text-sm">v1.0.0</div>
      </aside>

      {/* --- OVERLAY MOBILE (fora do aside!) --- */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* --- SIDEBAR DESKTOP --- */}
      <aside className="hidden md:flex w-64 h-screen bg-white shadow-sm border-r border-gray-400 rounded-xl flex-col">
        <div className="p-6 border-gray-400">
          <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-800 hover:text-white text-gray-700 font-medium transition">
            <AiOutlineHome className="text-xl" />
            Home
          </a>

          <a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-800 hover:text-white text-gray-700 font-medium transition">
            <BiCategory className="text-xl" />
            Serviços
          </a>

          <a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-800 hover:text-white text-gray-700 font-medium transition">
            <AiOutlineCalendar className="text-xl" />
            Agenda
          </a>

          <a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-800 hover:text-white text-gray-700 font-medium transition">
            <AiOutlineUser className="text-xl" />
            Clientes
          </a>
        </nav>

        <div className="p-6 border-t text-gray-500 text-sm">v1.0.0</div>
      </aside>
    </>
  );
}