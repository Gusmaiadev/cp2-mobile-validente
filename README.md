# 🎬 MovieDB App - React Native

[![React Native](https://img.shields.io/badge/React%20Native-0.72-blue)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-49.0-orange)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)

Aplicativo de catálogo de filmes integrado à API do TMDB. Desenvolvido com React Native, TypeScript e Expo.

![Movie List Preview](screenshots/list.png) ![Details Preview](screenshots/details.png)

## 📋 Visão Geral

Projeto profissional para exibição de filmes populares com:
- Listagem em grid
- Detalhes completos dos filmes
- Sistema de busca integrado
- Tratamento de erros
- UI moderna e responsiva

## ✨ Funcionalidades Principais

### 🎞️ Tela de Listagem de Filmes
- Grid de 2 colunas responsivo
- Cartões com poster e título
- Sistema de paginação
- Indicador de avaliação (0-10)
- Ano de lançamento

### 🎥 Tela de Detalhes do Filme
- Poster em alta resolução
- Sinopse completa
- Duração do filme
- Gêneros em tags
- Data de lançamento formatada
- Botão de retry em caso de erro

### ⚙️ Funcionalidades Técnicas
- Tipagem TypeScript rigorosa
- Cache de requisições
- Tratamento de offline
- Variáveis de ambiente seguras
- Componentes reutilizáveis

## 🚀 Instalação

### Pré-requisitos
- Node.js 18+
- Expo CLI (`npm install -g expo-cli`)
- Chave API TMDB

### Passo a Passo
```bash
# Clonar repositório
git clone https://github.com/seu-usuario/app-filmes.git

# Instalar dependências
npm install

# Configurar ambiente
cp .env.example .env

# Iniciar aplicativo
npx expo start
