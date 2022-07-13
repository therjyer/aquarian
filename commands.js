const { add } = require("./data/adm/add");
const { apg } = require("./data/adm/apg");
const { ban } = require("./data/adm/ban");
const { dmt } = require("./data/adm/dmt");
const { lkgp } = require("./data/adm/lkgp");
const { prmt } = require("./data/adm/prmt");
const { sair } = require("./data/adm/sair");
const { tgall } = require("./data/adm/tgall");
const { trms } = require("./data/adm/trms");
const { atz } = require("./data/autorization/atz");
const { datz } = require("./data/autorization/datz");
const { yt } = require("./data/download/yt");
const { admls } = require("./data/general/admls");
const { clima } = require("./data/general/clima");
const { dono } = require("./data/general/dono");
const { moeda } = require("./data/general/moeda");
const { mynmr } = require("./data/general/mynmr");
const { nome } = require("./data/search/nome");
const { readme } = require("./data/general/readme");
const { rmvm } = require("./data/general/rmvm");
const { menu } = require("./data/help/menu");
const { cell } = require("./data/search/cell");
const { cep } = require("./data/search/cep");
const { cpf } = require("./data/search/cpf");
const { cred } = require("./data/search/cred");
const { s } = require("./data/sticker/s");
const { toimg } = require("./data/sticker/toimg");
const { tsal } = require("./data/tts/tsal");
const { tsch } = require("./data/tts/tsch");
const { tsen } = require("./data/tts/tsen");
const { tses } = require("./data/tts/tses");
const { tsfr } = require("./data/tts/tsfr");
const { tsja } = require("./data/tts/tsja");
const { tsko } = require("./data/tts/tsko");
const { tspt } = require("./data/tts/tspt");
const { tsru } = require("./data/tts/tsru");

const commands = {}

// Comandos administrativos
    // Adicionar membro
        commands.add = (client, message) => add(client, message);
        commands.adicionar = (client, message) => add(client, message);

    // Apagar uma mensagem enviada pelo bot
        commands.apg = (client, message) => apg(client, message);
        commands.ers = (client, message) => apg(client, message);
        commands.erase = (client, message) => apg(client, message);
        commands.apagar = (client, message) => apg(client, message);

    // Remover membro
        commands.ban = (client, message) => ban(client, message);
        commands.kick = (client, message) => ban(client, message);

    // Rebaixar membro
        commands.dmt = (client, message) => dmt(client, message);
        commands.demote = (client, message) => dmt(client, message);
        commands.rebaixar = (client, message) => dmt(client, message);

    // Mandar o link do grupo
        commands.lkgp = (client, message) => lkgp(client, message);
        commands.linkgroup = (client, message) => lkgp(client, message);
        commands.linkdogrupo = (client, message) => lkgp(client, message);

    // Promover membro
        commands.prmt = (client, message) => prmt(client, message);
        commands.promote = (client, message) => prmt(client, message);
        commands.promover = (client, message) => prmt(client, message);

    // Sair do grupo
        commands.sair = (client, message) => sair(client, message);

    // Marcar todos
        commands.tgall = (client, message) => tgall(client, message);
        commands.tagall = (client, message) => tgall(client, message);
        commands.mencionartodos = (client, message) => tgall(client, message);

    // Avisar a todos do grupo
        commands.trms = (client, message) => trms(client, message);
        commands.transmissão = (client, message) => trms(client, message);
        commands.avisartodos = (client, message) => trms(client, message);
        commands.transmission = (client, message) => trms(client, message);

// Comandos de autorização
    // Autorizar o bot
       commands.atz = (client, message) => atz(client, message);
       commands.autorizar = (client, message) => atz(client, message);
       commands.autorizarbot = (client, message) => atz(client, message);

    // Desautorizar o bot
        commands.datz = (client, message) => datz(client, message);
        commands.desautorizar = (client, message) => datz(client, message);
        commands.desautorizarbot = (client, message) => datz(client, message);

// Comandos de download
    // Baixar do youtube
        commands.yt = (client, message) => yt(client, message);
        commands.ytb = (client, message) => yt(client, message);
        commands.mp3 = (client, message) => yt(client, message);
        commands.mp4 = (client, message) => yt(client, message);
        commands.youtube = (client, message) => yt(client, message);

// Comandos gerais
    // Consultar a lista de administradores
        commands.admls = (client, message) => admls(client, message);
        commands.listadm = (client, message) => admls(client, message);
        commands.listadmin = (client, message) => admls(client, message);
        commands.listaradms = (client, message) => admls(client, message);
        commands.adminlista = (client, message) => admls(client, message);
        
    // Consultar o clima
        commands.tempo = (client, message) => clima(client, message);
        commands.clima = (client, message) => clima(client, message);

    // Consultar o dono do grupo
        commands.dono = (client, message) => dono(client, message);
        commands.donogp = (client, message) => dono(client, message);
        commands.donodogp = (client, message) => dono(client, message);
        commands.donodogrupo = (client, message) => dono(client, message);

    // Consultar a cotação de uma moeda
        commands.moeda = (client, message) => moeda(client, message);

    // Ver o próprio número
        commands.mynmr = (client, message) => mynmr(client, message);
        commands.numero = (client, message) => mynmr(client, message);
        commands.meunumero = (client, message) => mynmr(client, message);

    // Ver a descrição do bot
        commands.leia = (client, message) => readme(client, message);
        commands.leiame = (client, message) => readme(client, message);
        commands.readme = (client, message) => readme(client, message);
        
    // Fazer o bot banir o solicitante
        commands.rmvm = (client, message) => rmvm(client, message);
        commands.kickme = (client, message) => rmvm(client, message);
        commands.removame = (client, message) => rmvm(client, message);
        
// Comandos de ajuda
    // Consultar o menu
        commands.bot = (client, message) => menu(client, message);
        commands.menu = (client, message) => menu(client, message);
        commands.help = (client, message) => menu(client, message);
        
// Comandos de consulta
    // Buscar nome
        commands.nome = (client, message) => nome(client, message);
        
    // Buscar telefone
        commands.cell = (client, message) => cell(client, message);
        commands.telefone = (client, message) => cell(client, message);

    // Consultar o cep
        commands.cep = (client, message) => cep(client, message);

    // Buscar cpf    
        commands.cpf = (client, message) => cpf(client, message);

    // Consultar créditos
        commands.cred = (client, message) => cred(client, message);
        commands.creditos = (client, message) => cred(client, message);

// Comandos de figurinhas
    // Fazer figurinhas
        commands.s = (client, message) => s(client, message);
        commands.f = (client, message) => s(client, message);
        commands.fig = (client, message) => s(client, message);
        commands.stiker = (client, message) => s(client, message);
        commands.sticker = (client, message) => s(client, message);
        
    // Transformar figurinhas em imagens
        commands.i = (client, message) => toimg(client, message);
        commands.img = (client, message) => toimg(client, message);
        commands.toimg = (client, message) => toimg(client, message);
        commands.primg = (client, message) => toimg(client, message);
        commands.paraimg = (client, message) => toimg(client, message);

// Comandos de tradução
    // Falar em alemão
        commands.al = (client, message) => tsal(client, message);
        commands.tsal = (client, message) => tsal(client, message);
        commands.ttsal = (client, message) => tsal(client, message);

    // Falar em chinês
        commands.ch = (client, message) => tsch(client, message);
        commands.tsch = (client, message) => tsch(client, message);
        commands.ttsch = (client, message) => tsch(client, message);

    // Falar em inglês
        commands.en = (client, message) => tsen(client, message);
        commands.tsen = (client, message) => tsen(client, message);
        commands.ttsen = (client, message) => tsen(client, message);

    // Falar em espanhol
        commands.es = (client, message) => tses(client, message);
        commands.tses = (client, message) => tses(client, message);
        commands.ttses = (client, message) => tses(client, message);

    // Falar em francês
        commands.fr = (client, message) => tsfr(client, message);
        commands.tsfr = (client, message) => tsfr(client, message);
        commands.ttsfr = (client, message) => tsfr(client, message);

    // Falar em japonês
        commands.ja = (client, message) => tsja(client, message);
        commands.tsja = (client, message) => tsja(client, message);
        commands.ttsja = (client, message) => tsja(client, message);

    // Falar em coreano
        commands.ko = (client, message) => tsko(client, message);
        commands.tsko = (client, message) => tsko(client, message);
        commands.ttsko = (client, message) => tsko(client, message);

    // Falar em português
        commands.pt = (client, message) => tspt(client, message);
        commands.tspt = (client, message) => tspt(client, message);
        commands.ttspt = (client, message) => tspt(client, message);

    // Falar em russo
        commands.ru = (client, message) => tsru(client, message);
        commands.tsru = (client, message) => tsru(client, message);
        commands.ttsru = (client, message) => tsru(client, message);

module.exports = commands;