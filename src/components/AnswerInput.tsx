import { Check, Plus, AlertCircle } from 'lucide-react';
import { Textarea } from "@/components/ui/textarea";
import { cn } from '@/lib/utils';

interface AnswerInputProps {
  type: 'wrong' | 'correct';
  value: string;
  onChange: (value: string) => void;
}

export function AnswerInput({ type, value, onChange }: AnswerInputProps) {
  const isWrong = type === 'wrong';
  
  return (
    <div className={cn(
      "bg-zinc-900 p-6 rounded-lg border border-yellow-500/20",
      "transition-all duration-300 hover:border-yellow-500/40",
      "group relative"
    )}>
      <div className="flex items-center gap-2 mb-4">
        {isWrong ? (
          <Plus className="h-5 w-5 text-yellow-500" />
        ) : (
          <Check className="h-5 w-5 text-yellow-500" />
        )}
        <h3 className="font-medium text-yellow-500">
          {isWrong ? 'Resposta Incorreta da IA' : 'Resposta Correta'}
        </h3>
      </div>
      
      <Textarea
        placeholder={isWrong 
          ? "Cole aqui a resposta incorreta que a IA forneceu..."
          : "Digite aqui a resposta correta..."
        }
        className={cn(
          "min-h-[200px] bg-black/50 border-yellow-500/20",
          "transition-all duration-300",
          "focus:ring-yellow-500/50"
        )}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      
      {value.length === 0 && (
        <div className="absolute -top-2 -right-2 bg-yellow-500 text-black p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <AlertCircle className="h-4 w-4" />
        </div>
      )}
    </div>
  );
}