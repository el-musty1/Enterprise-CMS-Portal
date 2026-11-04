import React, { useState } from 'react';
import { Layers, Database, Lock, Server, FileText, CheckCircle } from 'lucide-react';

export default function EnterpriseCMSApp() {
  const [queryTime, setQueryTime] = useState('12ms');
  const [isIndexed, setIsIndexed] = useState(true);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-6">
      <header className="pb-6 border-b border-slate-800 mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-amber-400">Enterprise Web Content & Portal System</h1>
          <p className="text-xs text-slate-400">Object-Oriented PHP | MySQL Query Optimizer | RBAC Admin</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg text-xs text-amber-300 font-mono">
          MySQL Query Latency: {isIndexed ? '12ms (Indexed)' : '185ms (Unindexed)'}
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <h3 className="text-sm font-bold text-slate-300 mb-3 flex items-center gap-2">
            <Database size={16} className="text-amber-400" /> Database Optimization Control
          </h3>
          <p className="text-xs text-slate-400 mb-4">Toggle MySQL B-Tree Indexing on `articles` and `permissions` tables to observe performance response times.</p>
          <button 
            onClick={() => setIsIndexed(!isIndexed)}
            className={`w-full py-2 rounded-lg text-xs font-bold ${isIndexed ? 'bg-amber-600 text-white' : 'bg-slate-800 text-slate-400'}`}
          >
            {isIndexed ? 'MySQL Indexing ACTIVE' : 'Enable MySQL B-Tree Indexing'}
          </button>
        </div>

        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-xl p-5">
          <h3 className="text-sm font-bold text-slate-300 mb-3 flex items-center gap-2">
            <FileText size={16} className="text-sky-400" /> Dynamic Content Modules
          </h3>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-slate-950 border border-slate-800 p-4 rounded-lg flex justify-between items-center">
                <div>
                  <h4 className="text-sm font-semibold text-slate-200">System Security & Access Audit Report #{i}</h4>
                  <p className="text-xs text-slate-500">Updated via PHP OOP Data Access Layer</p>
                </div>
                <span className="text-xs bg-emerald-950 text-emerald-400 border border-emerald-900 px-2 py-1 rounded">Published</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
