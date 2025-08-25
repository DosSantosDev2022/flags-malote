
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { comarcasInfo } from '@/config/comarcas';
import type { FormData } from '@/@types/index';
import { useGeradorForm } from '@/hooks/useGeradorForm';

interface GeradorFormProps {
  onGenerate: (formData: FormData) => void;
}

export function GeradorForm({ onGenerate }: GeradorFormProps) {
  // 2. Chamamos o hook, passando a função onGenerate
  // e pegamos tudo o que precisamos de volta
  const {
    comarcaSelecionada,
    rota,
    endereco,
    numeroInicial,
    handleComarcaChange,
    handleNumeroInicialChange,
    handleSubmit,
  } = useGeradorForm({ onGenerate });

  // 3. O componente agora é apenas JSX (a parte visual)
  return (
    <Card className="w-4xl">
      <CardHeader>
        <CardTitle>Gerador de Flags de Malote</CardTitle>
        <CardDescription>
          Selecione a comarca para preencher os dados.
        </CardDescription>
      </CardHeader>
      {/* Usamos a função handleSubmit do hook */}
      <form onSubmit={handleSubmit}>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            {/* Campo de Seleção da Comarca */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="comarca">Comarca</Label>
              {/* Usamos o state e a função do hook */}
              <Select onValueChange={handleComarcaChange} value={comarcaSelecionada}>
                <SelectTrigger className="w-full" id="comarca">
                  <SelectValue placeholder="Selecione a comarca..." />
                </SelectTrigger>
                <SelectContent position="popper">
                  {comarcasInfo.map((info) => (
                    <SelectItem key={info.nome} value={info.nome}>
                      {info.nome}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Campo Rota (Automático e Desabilitado) */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="rota">Rota</Label>
              <Input 
                id="rota" 
                value={rota}
                readOnly
                placeholder="Preenchido automaticamente..."
              />
            </div>

            {/* Campo Endereço (Automático e Desabilitado) */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="endereco">Endereço</Label>
              <Input 
                id="endereco" 
                value={endereco}
                readOnly
                placeholder="Preenchido automaticamente..."
              />
            </div>
            
            {/* Campo Número Inicial da Flag (Editável) */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="numero-inicial">Número da Flag Inicial</Label>
              <Input 
                id="numero-inicial" 
                placeholder="Ex: GSOFML001812" 
                value={numeroInicial}
                onChange={handleNumeroInicialChange} // Usamos a nova função do hook
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full mt-4">Gerar Flags</Button>
        </CardFooter>
      </form>
    </Card>
  );
}