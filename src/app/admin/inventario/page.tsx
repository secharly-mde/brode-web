import React from "react";

export default function InventarioPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Inventario y Producción</h2>
          <p className="text-gray-500">Gestión de stock de frascos, insumos y caldos terminados.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors">
          <span>➕</span>
          Registrar Lote de Producción
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Producto Terminado */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-gray-200 bg-gray-50 flex items-center gap-2">
            <span>📦</span>
            <h3 className="font-semibold text-gray-900">Stock Terminado (Caldos listos)</h3>
          </div>
          <div className="p-4">
            <ul className="space-y-4">
              <li className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <span className="font-medium text-gray-900">Caldo de Pollo</span>
                </div>
                <span className="text-lg font-bold text-gray-900">30</span>
              </li>
              <li className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-600"></div>
                  <span className="font-medium text-gray-900">Caldo de Carne</span>
                </div>
                <span className="text-lg font-bold text-gray-900">15</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Insumos */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-gray-200 bg-gray-50 flex items-center gap-2">
            <span>🫙</span>
            <h3 className="font-semibold text-gray-900">Stock de Insumos (Envases)</h3>
          </div>
          <div className="p-4">
            <ul className="space-y-4">
              <li className="flex justify-between items-center p-3 bg-amber-50 rounded-lg border border-amber-100">
                <div className="flex items-center gap-3">
                  <span>⚠️</span>
                  <span className="font-medium text-gray-900">Frascos Vacíos</span>
                </div>
                <span className="text-lg font-bold text-amber-700">124</span>
              </li>
              <li className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-gray-200 rounded-md"></div>
                  <span className="font-medium text-gray-900">Tapas Nuevas</span>
                </div>
                <span className="text-lg font-bold text-gray-900">350</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <button className="w-full text-center text-sm font-medium text-blue-600 hover:text-blue-700">
                + Registrar compra de envases
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
