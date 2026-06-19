import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-50 text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold tracking-tight">Brode<span className="text-emerald-600">Admin</span></h1>
          <p className="text-sm text-gray-500 mt-1">Gestión interna</p>
        </div>
        
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          <Link href="/admin" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 text-gray-700">
            <span>📊</span>
            Dashboard
          </Link>
          <Link href="/admin/pedidos" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 text-gray-700">
            <span>🛒</span>
            Pedidos
          </Link>
          <Link href="/admin/gastos" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 text-gray-700">
            <span>🧾</span>
            Gastos
          </Link>
          <Link href="/admin/inventario" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 text-gray-700">
            <span>📦</span>
            Inventario & Prod
          </Link>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <button className="flex items-center gap-3 w-full px-3 py-2 text-sm font-medium rounded-md hover:bg-red-50 text-red-600 transition-colors">
            <span>🚪</span>
            Cerrar sesión
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}
