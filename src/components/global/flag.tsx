import Barcode from 'react-barcode';


interface FlagProps {
  rota: string;
  nome: string;
  endereco: string;
  numero: string;
}

// O componente recebe as informações de cada flag como "props"
export function Flag({ rota, nome, endereco, numero }:FlagProps) {
  return (
    <div className="bg-white p-2 border-2 border-dashed border-gray-300 break-inside-avoid">
      {/* --- FRENTE DA FLAG --- */}
      <div className="w-[500px] h-[300px] p-4 border border-black flex flex-col items-center justify-between text-black">
        {/* Cabeçalho com logos e Rota */}
        <header className="w-full flex justify-between items-center">
          <img src="/brasão.webp" alt="Brasão SP" className="h-12 w-12" />
          <span className="text-3xl font-bold">ROTA {rota}</span>
          <img src="/brasão.webp" alt="Brasão SP" className="h-12 w-12" />
        </header>

        {/* Informações Centrais */}
        <div className="text-center">
          <p className="text-3xl font-bold">{nome}</p>
          <p className="text-base">{endereco}</p>
        </div>

        {/* Número da Flag e Código de Barras */}
        <footer className="w-full flex flex-col items-center">
          <p className="text-4xl font-bold font-mono tracking-wider">{numero}</p>
          <Barcode 
            value={numero} 
            width={2.5} 
            height={40} 
            displayValue={false} 
            margin={0}
          />
        </footer>
      </div>

      {/* --- VERSO DA FLAG --- */}
      <div className="w-[500px] h-[300px] mt-2 p-4 border border-black flex flex-col items-center justify-between text-black">
        {/* Logo Iron Mountain */}
        <header className="w-full flex justify-center">
          <img src="/iron-mountain-logo.png" alt="Iron Mountain" className="h-12" />
        </header>

        {/* Informações Centrais */}
        <div className="text-center">
          <p className="text-3xl font-bold">{nome}</p>
          <p className="text-5xl font-bold underline my-4">COLETA</p>
        </div>

        {/* Número da Flag e Código de Barras */}
        <footer className="w-full flex flex-col items-center">
          <p className="text-2xl font-bold font-mono tracking-widest">*{numero}*</p>
          <Barcode 
            value={numero} 
            width={2.5} 
            height={40} 
            displayValue={false} 
            margin={0}
          />
        </footer>
      </div>
    </div>
  );
}