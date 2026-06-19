import React from "react";

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Dashboard General</h2>
        <p className="text-gray-500">Resumen financiero y estado del inventario.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric Cards */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Ingresos Totales (Mes)</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">$45,230</h3>
            </div>
            <div className="p-3 bg-emerald-50 rounded-lg text-emerald-600 text-xl">💰</div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-emerald-600 font-medium">📈 +12.5%</span>
            <span className="text-gray-400 ml-2">vs mes anterior</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Gastos (Mes)</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">$18,400</h3>
            </div>
            <div className="p-3 bg-red-50 rounded-lg text-red-600 text-xl">📉</div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-red-600 font-medium">⚠️ +4.2%</span>
            <span className="text-gray-400 ml-2">vs mes anterior</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Stock Frascos</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">124</h3>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg text-blue-600 text-xl">🫙</div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-amber-600 font-medium">⚠️ Bajo stock</span>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Stock Producción (Listos)</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">45</h3>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg text-purple-600 text-xl">📦</div>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            30 Pollo | 15 Carne
          </div>
        </div>
      </div>
      
      {/* Chart Section Placeholder */}
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mt-6 min-h-[400px] flex items-center justify-center">
        <p className="text-gray-400">El gráfico de Ingresos vs Gastos se renderizará aquí.</p>
      </div>
    </div>
  );
}
