# projeto-back

API back-end em **Node.js + Express**, conteinerizada com **Docker**, publicada no **Render**.
Projeto Segundo Bimestre — Parte 2 (Conteinerização, Nginx e Integração Final).

## Rotas

| Método | Rota  | Retorno |
|--------|-------|---------|
| GET    | `/`   | JSON com status da API |
| GET    | `/v1` | JSON com `message` e `chamada_em` (data/hora) |

Exemplo da rota `/v1`:

```json
{
  "message": "Api v1 respondendo no container docker...",
  "chamada_em": "22/05/2026, 18:45:30"
}
```

## Variáveis de ambiente

| Variável       | Padrão | Descrição |
|----------------|--------|-----------|
| `PORT`         | `5000` | Porta da aplicação (o Render define automaticamente). |
| `FRONTEND_URL` | —      | (Opcional) origem extra liberada no CORS. |

## Rodar localmente (sem Docker)

```bash
npm install
npm start
# http://localhost:5000/  e  http://localhost:5000/v1
```

## Rodar com Docker / Docker Compose (Codespaces)

```bash
docker compose up --build
```

A API sobe na porta **5000**. No Codespaces, abra a porta 5000 encaminhada
(aba **PORTS**) para testar `/` e `/v1` no navegador.

## CORS

As origens liberadas ficam em `server.js` (array `allowedOrigins`).
Após publicar o front na Vercel e/ou abrir o Codespaces na porta 8080,
atualize as URLs lá.

## Deploy (Render)

- Build Command: `npm install`
- Start Command: `npm start`
- A porta é lida de `process.env.PORT` (definida pelo Render).

## Versão

`v1.1.0` — evolução da Parte 1 com conteinerização (Docker + Docker Compose).
