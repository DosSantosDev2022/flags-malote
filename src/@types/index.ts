// src/types/index.ts

// Define o formato de cada objeto no nosso arquivo de dados
export interface ComarcaInfo {
  nome: string;
  rota: string;
  endereco: string;
}

// Define o formato dos dados que o formulário nos envia
export interface FormData {
  comarca: string;
  rota: string;
  endereco: string;
  numeroInicial: string;
}

// Define o formato de uma flag gerada
export interface FlagData extends ComarcaInfo {
  id: number;
  numero: string;
}