# 🎓 API Alunos

API REST simples em **Node.js** com **Express**, para cadastro de alunos
(CRUD completo). Os dados ficam em memória, sem banco de dados.

## 🛠️ Tecnologias

- Node.js
- Express
- uuid (geração de IDs)
- nodemon (reinício automático em desenvolvimento)

## 📁 Estrutura

```
ApiAlunos/
├── server.js                      # Configuração do Express e das rotas
├── repositories/
│   └── alunosRepository.js        # Lógica de criação, atualização, remoção e listagem
└── package.json
```

## ▶️ Como executar

```bash
npm install
npm start
```

O servidor sobe em `http://localhost:3000`.

## 📋 Rotas disponíveis

| Método | Rota           | Descrição                  |
|--------|----------------|-----------------------------|
| POST   | `/alunos`      | Cria um novo aluno          |
| GET    | `/alunos`      | Lista todos os alunos       |
| PUT    | `/alunos/:id`  | Atualiza um aluno existente |
| DELETE | `/alunos/:id`  | Remove um aluno             |

Corpo esperado para `POST` e `PUT`:

```json
{
  "nome": "Nome do aluno",
  "email": "email@exemplo.com",
  "nome_curso": "Nome do curso"
}
```
