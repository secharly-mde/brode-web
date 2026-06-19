import React from "react";

export default function PedidosPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Registro de Pedidos</h2>
          <p className="text-gray-500">Gestiona las ventas retail y mayoristas.</p>
        </div>
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors">
          <span>➕</span>
          Nuevo Pedido
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex gap-4">
          <div className="relative flex-1">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2">🔍</span>
            <input 
              type="text" 
              placeholder="Buscar por cliente..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium">
            <span>⚙️</span>
            Filtros
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-sm font-medium text-gray-500">
                <th className="p-4">Fecha</th>
                <th className="p-4">Cliente</th>
                <th className="p-4">Tipo</th>
                <th className="p-4">Frascos</th>
                <th className="p-4">Devoluciones</th>
                <th className="p-4">Total</th>
                <th className="p-4">Estado</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="p-4 text-gray-900">01 May 2026</td>
                <td className="p-4 font-medium text-gray-900">Madre Tierra Portal</td>
                <td className="p-4"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">Mayorista</span></td>
                <td className="p-4 text-gray-900">20</td>
                <td className="p-4 text-gray-500">0</td>
                <td className="p-4 font-medium text-gray-900">$4,900</td>
                <td className="p-4"><span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-xs font-medium">Pagado</span></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 text-gray-900">02 May 2026</td>
                <td className="p-4 font-medium text-gray-900">Juan Pérez</td>
                <td className="p-4"><span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">Retail</span></td>
                <td className="p-4 text-gray-900">4</td>
                <td className="p-4 text-gray-500">2 (-$40)</td>
                <td className="p-4 font-medium text-gray-900">$1,380</td>
                <td className="p-4"><span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-xs font-medium">Pagado</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
