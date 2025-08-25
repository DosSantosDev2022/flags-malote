# Gerador de Flags de Malote

Este projeto é uma aplicação web desenvolvida para otimizar e padronizar o processo de criação de flags (etiquetas) de malotes. A ferramenta permite que usuários gerem, de forma rápida e segura, sequências de flags prontas para impressão, com base em dados pré-definidos de Comarcas, Rotas e Endereços, garantindo consistência e eliminando erros manuais.

## 📸 Screenshot

![Screenshot da Aplicação](/public/preview.png)


## ✨ Funcionalidades Principais

* **Geração de Sequências:** Gera automaticamente uma sequência de 4 flags a partir de um número inicial.
* **Formulário Inteligente:** Selecione uma Comarca e os campos de Rota e Endereço são preenchidos automaticamente.
* **Validação Robusta:** Valida o formato do número da flag para aceitar múltiplos padrões (`GSOFML+5`, `GSOFMLSPI+2`, `GSOFMLCJU+2`).
* **Visualização Completa:** Renderiza o componente visual da flag com frente e verso, incluindo logos e códigos de barras.
* **Otimizado para Impressão:** O layout de impressão é configurado para gerar 2 flags por folha, em modo paisagem, otimizando o uso de papel.
* **Interface Moderna:** Construído com uma interface limpa e responsiva, utilizando componentes de alta qualidade.
* **Ciclo de Uso Completo:** Permite gerar, imprimir e limpar as flags para iniciar uma nova operação facilmente.

## 🚀 Tecnologias Utilizadas

* **Frontend:** [React](https://react.dev/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
* **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
* **Componentes UI:** [Shadcn/UI](https://ui.shadcn.com/)
* **Notificações:** [Sonner](https://sonner.emilkowal.ski/)
* **Código de Barras:** [react-barcode](https://github.com/kciter/react-barcode)

## ⚙️ Instalação e Execução

Siga os passos abaixo para configurar e rodar o projeto em seu ambiente local.

**Pré-requisitos:**
* [Node.js](https://nodejs.org/) (versão 18 ou superior)
* [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

**Passos:**

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd nome-do-repositorio
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Adicione os logos:**
    * Certifique-se de ter os arquivos `sp-logo.png` e `iron-mountain-logo.png` dentro da pasta `public/`.

5.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

6.  **Abra no navegador:**
    * A aplicação estará disponível em `http://localhost:5173` (ou outra porta indicada no seu terminal).