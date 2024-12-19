// src/api.ts
import axios from 'axios';

const API_KEY = 'YOUR_API_KEY'; // Substitua pela sua chave de API da OpenAI

export const sendToOpenAI = async (wrongAnswer: string, correctAnswer: string) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions', // Endpoint da OpenAI
      {
        model: 'gpt-3.5-turbo', // Ou o modelo que você deseja usar
        messages: [
          { role: 'user', content: `Resposta incorreta: ${wrongAnswer}. Resposta correta: ${correctAnswer}.` }
        ],
      },
      {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data; // Retorna a resposta da API
  } catch (error) {
    console.error("Erro ao enviar dados para a API:", error);
    throw error; // Lança o erro para ser tratado no componente
  }
};