# O Grimório do Vento

App React (Vite) da caça ao tesouro RPG. Rotas via `HashRouter` (`#/segunda`, `#/sexta`, `#/area-servico` etc.) — funciona em qualquer host estático, sem precisar configurar rewrites no servidor.

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`. Navegue direto pelas rotas, ex: `http://localhost:5173/#/segunda`.

## Estrutura

```
src/
  data.js              # todo o conteúdo narrativo: fragmentos, charadas, respostas aceitas
  useGameState.js       # estado do jogo (nome, atributos, progresso) persistido em localStorage
  App.jsx                # rotas
  components/
    Sheet.jsx            # ficha da cronista (tela inicial)
    StagePage.jsx         # fragmentos I, II, III (segunda/terça/quarta)
    QuestPage.jsx          # charadas de sexta + 4 locais físicos
    NameGate.jsx            # pede o nome antes de liberar qualquer conteúdo
    Admin.jsx                 # gera os QR codes reais (rota /admin)
```

Pra editar o texto das charadas, respostas aceitas ou dicas: tudo está em `src/data.js`, nada de HTML/JS espalhado.

## Deploy na Vercel

**Opção 1 — CLI (mais rápido, sem precisar de GitHub):**
```bash
npm install -g vercel
vercel
```
Segue o prompt (aceita as opções padrão). Ele builda e te dá uma URL pública em segundos. Rodar `vercel --prod` depois promove pra URL de produção definitiva.

**Opção 2 — GitHub + painel da Vercel:**
1. Sobe esse projeto pra um repo no GitHub
2. Em vercel.com → New Project → importa o repo
3. A Vercel detecta Vite automaticamente (build command `vite build`, output `dist`) — não precisa mexer em nada
4. Deploy

## Gerando os QR codes

Depois do deploy, acesse `SUA-URL.vercel.app/#/admin`, cole a URL base no campo (geralmente já vem preenchida certa) e os 8 QR codes aparecem prontos pra imprimir — cada um aponta pra rota certa.

## Ajustando depois

Qualquer alteração no texto das charadas (`src/data.js`) não quebra os QR codes já impressos, contanto que os IDs das rotas (`segunda`, `sexta`, `area-servico`...) não mudem de nome.
