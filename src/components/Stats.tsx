import { Brain, Clock, Star } from 'lucide-react';

export function Stats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {[
        { icon: Brain, label: 'Memórias Adicionadas', value: 'Mudar em Stats.tsx' },
        { icon: Star, label: 'Precisão da IA', value: 'Mudar em Stats.tsx' },
        { icon: Clock, label: 'Última Atualização', value: 'Mudar em Stats.tsx' },
      ].map(({ icon: Icon, label, value }) => (
        <div key={label} className="bg-zinc-900/50 p-4 rounded-lg border border-yellow-500/10 flex items-center gap-3">
          <Icon className="h-8 w-8 text-yellow-500/80" />
          <div>
            <p className="text-sm text-gray-400">{label}</p>
            <p className="text-lg font-semibold text-yellow-500">{value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}