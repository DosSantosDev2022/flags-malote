// src/hooks/useFlagGenerator.ts

import { useState } from 'react';
import { type FlagData, type FormData } from '@/@types/index';
import { toast } from 'sonner';

export const useFlagGenerator = () => {
  const [generatedFlags, setGeneratedFlags] = useState<FlagData[]>([]);

  const generateFlags = (formData: FormData) => {
    const { comarca, rota, endereco, numeroInicial } = formData;

    // --- VALIDAÇÃO ABRANGENDO OS TRÊS FORMATOS ---
    // A barra vertical `|` funciona como um "OU" na expressão regular.
    const formatoValidoRegex = /^(GSOFML\d{5}|GSOFMLSPI\d{2}|GSOFMLCJU\d{2})$/i;

    if (!formatoValidoRegex.test(numeroInicial)) {
      toast.error("Formato inválido. Use GSOFML+5 dígitos, GSOFMLSPI+2 ou GSOFMLCJU+2.");
      return;
    }

    // --- LÓGICA DE GERAÇÃO CONDICIONAL ---
    let prefixo = '';
    let numeroBaseStr = '';
    let padding = 0; // Quantidade de zeros para preencher

    // Identifica qual formato foi usado para extrair os dados corretamente
    if (/^GSOFML\d{5}$/i.test(numeroInicial)) {
      prefixo = "GSOFML";
      numeroBaseStr = numeroInicial.slice(6);
      padding = 5;
    } else if (/^GSOFMLSPI\d{2}$/i.test(numeroInicial)) {
      prefixo = "GSOFMLSPI";
      numeroBaseStr = numeroInicial.slice(9);
      padding = 2;
    } else if (/^GSOFMLCJU\d{2}$/i.test(numeroInicial)) {
      prefixo = "GSOFMLCJU";
      numeroBaseStr = numeroInicial.slice(9);
      padding = 2;
    }

    const numeroBase = parseInt(numeroBaseStr);

    if (isNaN(numeroBase)) {
      toast.error("Erro ao processar a parte numérica da flag.");
      return;
    }

    const flags: FlagData[] = [];
    for (let i = 0; i < 4; i++) {
      const novoNumero = numeroBase + i;
      // O 'padding' agora é dinâmico (5 ou 2)
      const numeroFormatado = String(novoNumero).padStart(padding, '0');
      
      flags.push({
        id: i,
        nome: comarca,
        rota,
        endereco,
        numero: `${prefixo}${numeroFormatado}`,
      });
    }
    
    setGeneratedFlags(flags);
    toast.success("4 flags geradas com sucesso!");
  };

  const clearFlags = () => {
    setGeneratedFlags([]);
  }

  return {
    generatedFlags,
    generateFlags,
    clearFlags
  };
};