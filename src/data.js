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
      'Três dias, três fragmentos, um mapa que você guardou sem saber pra onde levava. Hoje o silêncio se completa — e o final não está onde você espera.',
      'Não existe mapa sem ponto de partida. Vá para onde moram os produtos que deixam a casa limpa — e a ração de quem vigia nossas fronteiras peludas.'
    ],
    attr: 'coragem',
    accept: ['area de servico', 'area de serviço', 'servico', 'serviço'],
    hint: 'Onde ficam o sabão em pó e a ração dos gatos.',
    next: 'area-servico', nextLabel: 'Área de Serviço'
  },
  'area-servico': {
    title: 'A Passagem', sub: 'Os Guardiões do Não-Mundo',
    story: [
      'Você resolveu o primeiro mistério — os guardiões já sabem que está por perto.',
      'Agora procure o móvel que eles arranham todos os dias, onde afiam as garras e brincam sem parar.'
    ],
    attr: 'percepcao',
    accept: ['arranhador', 'arranhador dos gatos', 'gatos', 'arranhador do gato'],
    hint: 'É o arranhador de gatos.',
    next: 'arranhador', nextLabel: 'Arranhador dos Gatos'
  },
  arranhador: {
    title: 'Os Arquivos', sub: 'Onde a Memória Mora',
    story: [
      'Nos Arquivos, dizem que tudo o que já foi escrito ainda existe — inclusive o código que ninguém mais lembra por que funciona.',
      'A próxima palavra da crônica está onde eu escrevo as minhas: entre teclado, monitor e linhas de código que só fazem sentido às 2 da manhã.'
    ],
    attr: 'vinculo',
    accept: ['escritorio', 'escritório', 'mesa do escritorio', 'mesa', 'mesa do escritório'],
    hint: 'Onde eu resolvo bugs e escrevo commits.',
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
