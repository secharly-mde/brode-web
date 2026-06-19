import React from "react";

export default function GastosPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Registro de Gastos</h2>
          <p className="text-gray-500">Controla los costos operativos y de producción.</p>
        </div>
        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors">
          <span>➕</span>
          Nuevo Gasto
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex gap-4">
          <div className="relative flex-1">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2">🔍</span>
            <input 
              type="text" 
              placeholder="Buscar por descripción..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
            />
          </div>
          <select className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-red-500 outline-none">
            <option value="">Todas las categorías</option>
            <option value="cocina">Cocina - Ingredientes</option>
            <option value="local">Local</option>
            <option value="admin">Administración y Comercial</option>
            <option value="reparto">Reparto</option>
            <option value="personal">Personal</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium">
            <span>⚙️</span>
            Más Filtros
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-sm font-medium text-gray-500">
                <th className="p-4">Fecha</th>
                <th className="p-4">Categoría</th>
                <th className="p-4">Subcategoría</th>
                <th className="p-4">Descripción</th>
                <th className="p-4">Monto</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="p-4 text-gray-900">03 May 2026</td>
                <td className="p-4"><span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-medium">Cocina</span></td>
                <td className="p-4 text-gray-900">Pollo Carnivery</td>
                <td className="p-4 text-gray-500">Compra de 10kg</td>
                <td className="p-4 font-medium text-gray-900">$2,400</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 text-gray-900">05 May 2026</td>
                <td className="p-4"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">Local</span></td>
                <td className="p-4 text-gray-900">UTE</td>
                <td className="p-4 text-gray-500">Factura Abril</td>
                <td className="p-4 font-medium text-gray-900">$3,150</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
