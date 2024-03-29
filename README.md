# Lista De Lembretes

Implementação de uma lista de lembretes ordenados cronologicamente pela data de cada lembrete.

- 💻 Deploy: https://reminderlist-fernanda.netlify.app/
- 🎯 Scrum Board: https://trello.com/invite/b/4VzL1nti/ATTIb5640c51c174381770f08eb71e5cfb44607251BF/lista-de-lembretes

# :hammer: Funcionalidades do projeto

- `Adicionar lembrete`: Preenchendo os campos de Nome e Data, um novo lembrete será inserido na lista de lembretes.
- `Remover lembrete`: Ao clicar no icone da lixeira, o lembrete será removida da lista de lembretes.

# 📁 Acesso ao projeto

Você pode baixar uma pasta zip com os arquivos ou clonar o repositório.

# 🛠️ Rodar o projeto

Após abrir o projeto em sua IDE, abra o terminal e execute os seguintes comandos para instalar as dependências e iniciar o servidor:

```bash
  npm install
```

```bash
  npm run dev
```

# ✔️ Tecnologias utilizadas

- React 18.2.0
- Styled-components
- Visual Studio Code

# 📋 Premissas do projeto

- Deverá ser possível adicionar um novo lembrete, informando o nome e a data do lembrete.
    - Ao clicar em “Criar”, os campo deverão ser validados seguindo as regras:
        - O campo “Nome” deverá estar preenchido;
        - O campo “Data” deverá estar preenchido, com uma data válida, e essa data tem de estar no futuro;
    - Caso os valores dos campos sejam válidos, o novo lembrete deverá ser exibido na seção “Lista de lembretes”
- Deverá ser possível deletar um lembrete anteriormente adicionado, clicando no icone da lixeira.
- Ao adicionar um novo lembrete, caso a sua data já exista, ele deverá aparecer dentro da lista referente àquele dia; caso não, um novo dia deverá ser exibido, contendo aquele novo lembrete.
- Os dias da lista de lembretes deverão ser exibidos em ordem cronológica.
