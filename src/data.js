export const STAGES = {
  segunda: {
    title: 'Fragmento I', sub: 'O Silêncio de Três Partes',
    attr: 'vinculo',
    story: [
      'Toda grande crônica começa do mesmo jeito: um dia comum, um café de sempre, e um chamado que muda tudo. O seu começa agora — hoje, 12 de agosto.',
      'Hoje não é uma data escolhida à toa: faz exatamente dois anos e seis meses que a nossa história começou. E antes do seu aniversário chegar de vez, no dia 21, eu quis antecipar essa parte pra juntar as duas coisas que mais importam: você, e nós dois.',
      'A partir de agora, cada coisa que eu te der carrega um fragmento de uma história. Guarda cada um — em poucos minutos, quando os três se completarem, a crônica vira caçada de verdade.'
    ],
    sig: '— Que comece a jornada.'
  },
  terca: {
    title: 'Fragmento II', sub: 'Os Nomes Têm Poder',
    attr: 'sabedoria',
    story: [
      'Na Universidade, dizem que conhecer o nome verdadeiro de uma coisa é ter poder sobre ela. Eu aprendi o seu nome verdadeiro faz dois anos e meio — não o que está no seu documento, mas o que você é quando ninguém está olhando.',
      'Este livro guarda mais do que uma leitura. Guarda o segundo fragmento — falta só mais um pra crônica se completar.'
    ],
    sig: '— A história continua.'
  },
  quarta: {
    title: 'Fragmento III', sub: 'A Luz no Underthing',
    attr: 'percepcao',
    story: [
      'Nem toda luz vem de fora. Às vezes a gente só precisa de uma vela, e de alguém disposto a acender o que for preciso.',
      'Terceiro fragmento — e com ele, os três estão completos. A manhã ainda não acabou, e a crônica já está prestes a virar outra coisa.'
    ],
    sig: '— Agora sim.'
  }
}

export const QUEST = {
  sexta: {
    title: 'Fragmento IV', sub: 'O Fechamento da Crônica',
    story: [
      'Três presentes, três fragmentos — tudo isso numa manhã só, porque algumas coisas não aguentam esperar uma semana inteira, nem chegar exatamente no dia certo.',
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
      'Hoje fazemos dois anos e seis meses juntos — e eu não quis esperar até o dia 21 pra te mostrar isso. Aquele a gente ainda comemora do jeito certo, saindo por aí. Mas essa parte eu quis antecipar.',
      'Feliz aniversário de namoro. E, adiantado, feliz aniversário de vida. Eu te amo, hoje e em toda crônica que a gente ainda vai escrever juntos.'
    ]
  }
}

export const PRIZE = {
  eyebrow: 'A Última Página',
  title: 'Seu Prêmio Está à Sua Espera',
  caption: 'Um retrato, feito só pra guardar você do jeito que eu vejo.'
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
