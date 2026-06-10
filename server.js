const express = require("express")
const cors = require("cors")

const app = express()

// A porta vem da variável de ambiente (Render define automaticamente).
// Em container/local usamos 5000 como padrão.
const port = process.env.PORT || 5000

// ----------------------------------------------------------------------------
// Configuração de CORS
// Libera o acesso à API somente para as origens conhecidas do front-end.
// >>> AJUSTE as URLs abaixo com as suas após publicar na Vercel / abrir o Codespaces.
// ----------------------------------------------------------------------------
const allowedOrigins = [
  "https://projeto-front-sigma.vercel.app",      // front publicado na Vercel
  "https://seu-codespace-8080.app.github.dev",   // front no Codespaces (porta 8080)
]

// Permite adicionar uma origem extra sem editar o código (ex.: no Render/Codespaces).
if (process.env.FRONTEND_URL) {
  allowedOrigins.push(process.env.FRONTEND_URL)
}

const corsOptions = {
  origin: allowedOrigins,
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization",
}

app.use(cors(corsOptions))

// ----------------------------------------------------------------------------
// Rotas
// ----------------------------------------------------------------------------

// Rota base
app.get("/", (req, res) => {
  res.json({
    message: "API online. Use a rota /v1 para a resposta versionada.",
    status: "ok",
  })
})

// Rota versionada v1 — retorna mensagem + data/hora da chamada
app.get("/v1", (req, res) => {
  const chamada_em = new Date().toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
  })

  res.json({
    message: "Api v1 respondendo no container docker...",
    chamada_em: chamada_em,
  })
})

// ----------------------------------------------------------------------------
// Inicialização
// ----------------------------------------------------------------------------
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
