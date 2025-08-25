import { GeradorForm } from '@/components/global/gerador-form';
import { Flag } from '@/components/global/flag';
import { Button } from './components/ui/button';
import { useFlagGenerator } from './hooks/useFlagGenerator';
import type { FlagData } from './@types';
import { Toaster } from './components/ui/sonner';

function chunkArray<T>(array: T[], size: number): T[][] {
  const chunkedArr: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArr.push(array.slice(i, i + size));
  }
  return chunkedArr;
}


function App() {
  const { generatedFlags, generateFlags,clearFlags } = useFlagGenerator();

  const handlePrint = () => {
    window.print();
  };

  const flagPairs = chunkArray(generatedFlags, 2)

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      {/* Container do Formulário - será escondido na impressão */}
      <div className="max-w-4xl mx-auto print:hidden">
        <GeradorForm onGenerate={generateFlags} />
      </div>

      {/* Container das Flags Geradas */}

      {flagPairs.length > 0 && (
        <div className="mt-8">
          <div className="flex items-center gap-2.5 justify-center text-center print:hidden mb-4">
            <Button onClick={handlePrint}>Imprimir Flags</Button>
            <Button variant={'destructive'} onClick={clearFlags}>Limpar Flags</Button>
          </div>
          
          {/* Mapeamos os PARES de flags */}
          <div className="max-w-4xl mx-auto">
            {flagPairs.map((pair, index) => (
              // Cada par fica em uma div. A classe 'print:break-after-page'
              // força uma quebra de página DEPOIS de cada par ao imprimir.
              <div key={index} className="flex justify-center gap-4 mb-4 print:mb-0 print:break-after-page">
                {/* Mapeamos as flags DENTRO do par */}
                {pair.map((flag: FlagData) => (
                  <Flag
                    key={flag.id}
                    rota={flag.rota}
                    nome={flag.nome}
                    endereco={flag.endereco}
                    numero={flag.numero}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
       <Toaster position="top-center"  richColors/>
    </main>
  );
}

export default App;