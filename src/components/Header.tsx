import { Bot } from 'lucide-react';

export function Header() {
  return (
    <header className="border-b border-yellow-500/20 p-4 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center gap-2">
        <Bot className="h-8 w-8 text-yellow-500" />
        <h1 className="text-2xl font-bold text-yellow-500">Cresci e Perdi</h1>
      </div>
    </header>
  );
}