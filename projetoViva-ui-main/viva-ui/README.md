# VivaUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.7.

Tabelas de conteúdo
-------------
<!--ts-->

- [Sobre](#sobre)
- [Tecnologias](#tecnologias)
- [Instalação](#instalação)
- [Uso](#uso)
- [Padrões](#padrões)
  - [Arquitetura](#arquitetura)
  - [Código](#código)
  - [Criação de branch](#criação-de-branch)
  - [Commits](#commits)
  - [Code Review](#code-review)
  - [Merge](#merge)

<!--te-->

## Sobre

O Viva é uma aplicação Web para controle de eventos e divulgação das ações do Grupo VIVA : Voluntários Interdependentes Vivendo Amor, uma associação sem fins lucrativos que leva refeições prontas para consumo a quase 70 pessoas em condição de rua todos os dias em Araraquara-SP.

As seguintes ferramentas foram usadas na construção do projeto:

* [Node.js](https://nodejs.org/en/)
* [Angular](https://angular.io/)

Instalação
-----------

Após realizar o clone do Viva-ui deverá ser feita a instalação das dependências usando o comando abaixo:

```bash
# Instalação das dependências

$ npm i
```

Uso
-----------

Para rodar o projeto utilize o comando abaixo:

$ ng serve -o

# O servidor será inicializado na porta <http://localhost:4200>
```

Padrões
====
Arquitetura
-----------

<b>Estrutura das pastas de arquivos utilitários</b>

* Components - Nessa pasta ficam todos os componentes que são utilizados pela aplicação.
* Routes - Nessa pasta ficam todos os arquivos que gerenciam as rotas da aplicação.
* Services - Nessa pasta ficam todos os arquivos responsáveis por consumir serviços.

Código
-----------

* Todas as variáveis e nomes de arquivos devem ser em inglês.
* Todas as variáveis devem seguir o padrão camelCase.
* Todas as urls devem seguir o padrão kebab-case

Criação de branch
-----------

* Antes de começar a trabalhar em uma nova tarefa, lembre-se de criar uma branch para desenvolver. Não trabalhe na branch master.

* As branches criadas devem seguir a estrutura:

EMW-<nome-da-tarefa-do-trello>
```

Exemplo:

EMW-tela-de-login
```

Commits
-----------

* [ATENÇÃO] Evite realizar commits direto na master

Todos as mensagens de commit devem seguir o padrão abaixo:

<tipo>: assunto
```

Exemplo:


feat: add button component
```

`<tipo>` pode ser uma dessas opções:

* feat (Nova feature)
* fix (Correção de bugs)
* docs (Adicionando/mundando documentação)
* style (Mudança de CSS)
* refactor (Refatoração)
* perf (Melhoria de performance)
* test (Adicionando testes)
* revert (Revertendo alguma tarefa)
* chore (Outras tarefas)
* ci (Configuração de integração contínua)

Code Review
-----------
* O link do Pull Request (PR) deve ser anexado ao card do Trello.
* Todas as correções ou sugestões de mellhoria devem ser comentadas no PR.
* É necessário a aprovação de dois revisores no PR para que esse seja liberado para mergear.

Merge
-----------

Para dar merge  do Pull Request:

* [ATENCÃO] Ao fazer o merge de develop para master não excluir a branch develop.
* Ao mergear o PR escolha a opção Squash e exclua a branch utilizada, caso não seja a develop.

Endpoint Mapeados
-----------

## Autores
Meiri Bernardina
Mariana Valerio


Deploys por README: .
