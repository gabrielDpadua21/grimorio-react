export const STAGES = {
  segunda: {
    title: 'Fragmento I', sub: 'O Silêncio de Três Partes',
    attr: 'vinculo',
    story: [
      'Toda crônica começa num silêncio antes da primeira palavra. O seu começa aqui, nesta xícara, num dia comum que só parece comum.',
      'Você foi escolhida — não por sorte, mas porque quem escreve esta história a conhece bem demais para escolher outra pessoa.',
      'Esta semana, você não vai apenas viver os dias. Vai colecioná-los. Cada presente carrega um fragmento. Guarde todos — na sexta-feira, quando o silêncio se completar, vai precisar de todos os pedaços.'
    ],
    sig: '— Que comece a crônica.'
  },
  terca: {
    title: 'Fragmento II', sub: 'Os Nomes Têm Poder',
    attr: 'sabedoria',
    story: [
      'Na Universidade, dizem que conhecer o nome verdadeiro de uma coisa é ter poder sobre ela. Eu conheço o seu nome verdadeiro há muito tempo — não o que está no seu documento, mas o que você é quando ninguém está olhando.',
      'Este livro não é só um presente. Um dia você vai encontrar nele mais do que uma história.',
      'Guarde este fragmento com o primeiro. Faltam duas partes do mapa.'
    ],
    sig: '— A crônica continua.'
  },
  quarta: {
    title: 'Fragmento III', sub: 'A Luz no Underthing',
    attr: 'percepcao',
    story: [
      'Nem toda passagem secreta fica embaixo da terra. Algumas ficam dentro de quem amamos, e só se revelam quando alguém se importa o suficiente pra procurar.',
      'Esta luz é para os momentos em que o caminho parece escuro — inclusive sexta-feira de manhã, bem cedo, quando a crônica vai pedir que você acenda algo antes de seguir em frente.'
    ],
    sig: '— Terceiro fragmento. Só falta um.'
  }
}

export const QUEST = {
  sexta: {
    title: 'Fragmento IV', sub: 'O Fechamento da Crônica',
    story: [
      'Três dias, três fragmentos, três pedaços de um mapa que você guardou sem saber pra onde levava. Hoje o silêncio se completa — e como toda boa crônica, o final não estava no lugar que você esperava.',
      'Não existe mapa sem ponto de partida. Vá para onde a poeira da estrada é lavada antes de qualquer viagem recomeçar — onde as roupas descansam entre uma jornada e outra.'
    ],
    attr: 'coragem',
    accept: ['area de servico', 'area de serviço', 'lavanderia', 'servico', 'serviço'],
    hint: 'Onde a roupa suja vira roupa limpa antes de qualquer viagem.',
    next: 'area-servico', nextLabel: 'Área de Serviço'
  },
  'area-servico': {
    title: 'A Passagem', sub: 'Os Guardiões do Não-Mundo',
    story: [
      'Diz a lenda que certas criaturas guardam a fronteira entre o mundo que vemos e o que não vemos — e cobram um preço de quem tenta atravessar sem permissão.',
      'Os seus guardiões não pedem moedas nem enigmas. Só pedem que você continue procurando. Vá até onde eles espreitam, observam e nunca contam o que viram — algo com garras, entre o dentro e o fora de casa.'
    ],
    attr: 'percepcao',
    accept: ['arranhador', 'arranhador dos gatos', 'gatos', 'arranhador do gato'],
    hint: 'Onde os gatos afiam as garras.',
    next: 'arranhador', nextLabel: 'Arranhador dos Gatos'
  },
  arranhador: {
    title: 'Os Arquivos', sub: 'Onde a Memória Mora',
    story: [
      'Nos Arquivos, dizem que tudo o que já foi escrito ainda existe — só é preciso saber procurar no lugar certo, entre o que parece só trabalho e o que na verdade é memória.',
      'A próxima palavra da crônica está onde as outras palavras já moram — entre papéis, cadernos e a bagunça organizada de quem também escreve suas próprias histórias.'
    ],
    attr: 'vinculo',
    accept: ['escritorio', 'escritório', 'mesa do escritorio', 'mesa', 'mesa do escritório'],
    hint: 'Onde eu trabalho e você às vezes me rouba a cadeira.',
    next: 'escritorio', nextLabel: 'Mesa do Escritório'
  },
  escritorio: {
    title: 'O Nome do Fogo', sub: 'A Lição Mais Antiga',
    story: [
      'Existe uma lição muito antiga: quem aprende o nome verdadeiro de uma coisa aprende a controlá-la — mas o fogo nunca é fácil de nomear, porque ele muda a cada segundo que você olha pra ele.',
      'Vá para onde o fogo mora do lado de fora de casa.'
    ],
    attr: 'sabedoria',
    accept: ['churrasqueira', 'varanda', 'fogo', 'churrasqueira da varanda'],
    hint: 'Onde a carne assa nos domingos.',
    next: 'churrasqueira', nextLabel: 'Churrasqueira'
  },
  churrasqueira: {
    title: 'O Nome do Vento', sub: 'Onde Toda Crônica Deveria Terminar',
    final: true,
    story: [
      'Eu aprendi o seu nome verdadeiro faz tempo. E, diferente do fogo, o seu nome não muda — só fica mais forte a cada ano.',
      'A crônica termina onde ela sempre deveria terminar: perto de mim. Volte para dentro de casa, para o nosso quarto.',
      'Não procure onde o coração está desenhado. Ele só aponta o caminho — não é ele que guarda o tesouro.'
    ],
    sacredLine: 'E ele sabia o nome do vento — por isso o vento lhe obedecia',
    attr: 'coragem',
    closing: [
      'No fim, toda crônica é sobre a mesma coisa: alguém que vale a pena procurar até o fim do mapa.',
      'Você não precisou de simpatia, nem de magia da Universidade, pra encontrar isso — só precisou confiar que eu deixaria um caminho.',
      'Feliz aniversário. Nosso, e seu. Eu te amo, hoje e em toda crônica que ainda vamos escrever juntos.'
    ]
  }
}

export const ATTR_LABELS = { vinculo: 'Vínculo', sabedoria: 'Sabedoria', percepcao: 'Percepção', coragem: 'Coragem' }
export const ATTR_MAX = 2

export const CHEST_ORDER = [
  { id: 'segunda', label: 'Fragmento I — O Silêncio de Três Partes' },
  { id: 'terca', label: 'Fragmento II — Os Nomes Têm Poder' },
  { id: 'quarta', label: 'Fragmento III — A Luz no Underthing' },
  { id: 'sexta', label: 'Fragmento IV — O Fechamento da Crônica' },
  { id: 'area-servico', label: 'A Passagem' },
  { id: 'arranhador', label: 'Os Arquivos' },
  { id: 'escritorio', label: 'O Nome do Fogo' },
  { id: 'churrasqueira', label: 'O Nome do Vento' }
]

export function rankTitle(attrs) {
  const total = Object.values(attrs).reduce((a, b) => a + b, 0)
  if (total >= 8) return 'Nome Verdadeiro Encontrado'
  if (total >= 5) return 'Guardiã do Mapa'
  if (total >= 3) return 'Aprendiz da Crônica'
  if (total >= 1) return 'Recém-Chamada'
  return 'Antes da Primeira Página'
}

export function normalize(str) {
  return str.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9 ]/g, '')
    .trim()
}
