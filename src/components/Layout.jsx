import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex pt-10">
      {/* Sidebar recebe open e setOpen */}
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      <div className="flex-1 flex flex-col">
        {/* Header recebe a função setSidebarOpen */}
        <Header setSidebarOpen={setSidebarOpen} />

        <main className="p-4 pt-20 space-y-4">
          {children}
        </main>
      </div>
    </div>
  );
}