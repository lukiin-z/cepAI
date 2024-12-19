import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Header } from './components/Header';
import { AnswerInput } from './components/AnswerInput';
import { Stats } from './components/Stats';
import { Toaster } from "@/components/ui/toaster";

function App() {
  const [wrongAnswer, setWrongAnswer] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const { toast } = useToast();

  const handleSubmit = () => {
    if (!wrongAnswer || !correctAnswer) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha ambas as respostas antes de salvar.",
        variant: "destructive"
      });
      return;
    }

    // Here you would implement the logic to save to your AI's memory
    toast({
      title: "Sucesso!",
      description: "As respostas foram salvas na memória da IA.",
      className: "bg-yellow-500 text-black border-yellow-600"
    });

    // Reset fields after submission
    setWrongAnswer('');
    setCorrectAnswer('');
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black text-white">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Description */}
          <div className="mb-8 text-center">
            <h2 className="text-xl font-semibold mb-2">Sistema de Treinamento da IA</h2>
            <p className="text-gray-400">
              Ajude a melhorar as respostas da IA inserindo as correções necessárias
            </p>
          </div>

          <Stats />

          {/* Input Areas */}
          <div className="grid md:grid-cols-2 gap-6">
            <AnswerInput
              type="wrong"
              value={wrongAnswer}
              onChange={setWrongAnswer}
            />
            <AnswerInput
              type="correct"
              value={correctAnswer}
              onChange={setCorrectAnswer}
            />
          </div>

          {/* Submit Button */}
          <div className="mt-8 text-center">
            <Button
              onClick={handleSubmit}
              className={`
                bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-8 py-2
                transform transition-all duration-300
                hover:scale-105 active:scale-95
                shadow-[0_0_15px_rgba(234,179,8,0.5)]
                hover:shadow-[0_0_25px_rgba(234,179,8,0.6)]
              `}
            >
              Salvar na Memória da IA
            </Button>
          </div>
        </div>
      </main>
      <Toaster />
    </div>
  );
}

export default App;