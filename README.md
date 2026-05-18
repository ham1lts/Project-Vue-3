# Cookin' Up - App de Receitas com Vue 3

Este é um projeto desenvolvido com **Vue 3**, **Vite** e **TypeScript**. O aplicativo permite que os usuários selecionem ingredientes disponíveis e descubram novas receitas que podem ser preparadas com eles.

## 🚀 Funcionalidades

- **Seleção de Ingredientes:** Os usuários podem navegar por categorias de ingredientes e selecioná-los para compor a sua lista.
- **Busca de Receitas:** Com base nos ingredientes escolhidos, o aplicativo exibe receitas correspondentes.
- **Consumo de API:** Os dados das categorias de ingredientes e das receitas são consumidos dinamicamente através de requisições HTTP (arquivos JSON hospedados via Gist).
- **Gerenciamento de Estado de UI:** Utilização do `<KeepAlive>` para manter o estado da lista de ingredientes durante a navegação entre a seleção e a visualização de receitas.
- **Componentização:** A aplicação é totalmente componentizada com recursos avançados do Vue 3, utilizando a Composition API e diretivas como `v-if`, `v-else-if`, `v-for`, eventos customizados (`$emit`), entre outros.

## 🛠️ Tecnologias Utilizadas

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)

## 📁 Estrutura do Projeto

A arquitetura de pastas está organizada da seguinte maneira:

- `src/components/`: Contém os componentes de UI como `Banner`, `MainContent`, `IngredientSelection`, `ShowRecipes`, `RecipeCard`, entre outros.
- `src/http/`: Fica responsável pela comunicação com a API (fetch de categorias e receitas).
- `src/interfaces/`: Tipagens TypeScript (`ICategory` e `IRecipe`) para garantir integridade dos dados consumidos.

## ⚙️ Configuração do Projeto

Para executar o projeto localmente, siga os passos abaixo:

### 1. Instale as dependências
```sh
npm install
```

### 2. Inicie o servidor de desenvolvimento
```sh
npm run dev
```

### 3. Compile para produção
```sh
npm run build
```

---
*Este template foi gerado a partir do create-vue.*