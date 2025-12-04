import { AiOutlineMenu } from "react-icons/ai";

export default function Header({ setSidebarOpen }) {
  return (
    <header className="w-full h-16 bg-white shadow-sm px-4 flex items-center justify-between fixed top-0 left-0 z-40">
      
      {/* Botão Hamburguer - aparece só no mobile */}
      <button
        className="md:hidden text-2xl mr-3"
        onClick={() => setSidebarOpen(true)}
      >
        <AiOutlineMenu />
      </button>

      {/* Campo de busca */}
      <input
        className="bg-gray-100 px-3 py-2 rounded-lg w-64"
        placeholder="Search..."
      />

      {/* Avatar */}
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-gray-300 rounded-full" />
      </div>
    </header>
  );
}