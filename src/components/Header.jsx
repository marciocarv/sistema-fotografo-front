export default function Header() {
  return (
    <header className="w-full h-16 bg-white shadow-sm px-4 flex items-center justify-between">
      <input
        className="bg-gray-100 px-3 py-2 rounded-lg w-64"
        placeholder="Search..."
      />
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-gray-300 rounded-full" />
      </div>
    </header>
  );
}