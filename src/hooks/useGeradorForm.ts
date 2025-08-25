// src/hooks/useGeradorForm.ts

import { useState } from 'react';
import { comarcasInfo } from '@/config/comarcas'; // Usamos os dados aqui
import type { FormData } from '@/@types/index';

// O hook recebe as mesmas props que o componente recebia para a lógica
interface UseGeradorFormProps {
  onGenerate: (formData: FormData) => void;
}

export const useGeradorForm = ({ onGenerate }: UseGeradorFormProps) => {
  // 1. Toda a lógica de estado é movida para cá
  const [comarcaSelecionada, setComarcaSelecionada] = useState<string>('');
  const [rota, setRota] = useState<string>('');
  const [endereco, setEndereco] = useState<string>('');
  const [numeroInicial, setNumeroInicial] = useState<string>('');

  // 2. As funções de manipulação de eventos também vêm para o hook
  const handleComarcaChange = (nomeComarca: string) => {
    const info = comarcasInfo.find(item => item.nome === nomeComarca);
    if (info) {
      setComarcaSelecionada(info.nome);
      setRota(info.rota);
      setEndereco(info.endereco);
    } else {
      setComarcaSelecionada('');
      setRota('');
      setEndereco('');
    }
  };

  // Handler para o input de número inicial para manter o padrão
  const handleNumeroInicialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumeroInicial(e.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onGenerate({
      comarca: comarcaSelecionada,
      rota,
      endereco,
      numeroInicial,
    });
  };

  // 3. O hook retorna tudo que o componente precisa para renderizar e funcionar
  return {
    comarcaSelecionada,
    rota,
    endereco,
    numeroInicial,
    handleComarcaChange,
    handleNumeroInicialChange,
    handleSubmit,
  };
};