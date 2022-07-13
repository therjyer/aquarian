exports.menu = async function menu(client, message) {
  const { id, from, body, sender, isGroupMsg, chat, caption, isMedia, mimetype, quotedMsg } = message;

  const commands = caption || body || "";
  const args = commands.split(" ");

  const helpMode = args[1];
  const showAll = `*Quer ver tudo?*\nEntão manda um _.menu_ aí`;

  let help;

  switch (helpMode) {
    case 'adm':
    case 'admin':
    case 'ademiro':
    case 'administração':
        help = `==========「 *Administração do BOT* 」==========\n\nOlá 👋, esta é a parte administrativa do BOT 🔥:\n\n◪ *Autorizar o BOT:*\n├─ ❏ 「 .atz 」「 !atz 」「 /atz 」\n├─ ❏ 「 .autorizar 」「 !autorizar 」「 /autorizar 」\n└─ ❏ 「 .autorizarbot 」「 !autorizarbot 」「 /autorizarbot 」\n\n◪ *Desautorizar o BOT:*\n├─ ❏ 「 .datz 」「 !datz 」「 /datz 」\n├─ ❏ 「 .desautorizar 」「 !desautorizar 」「 /desautorizar 」\n└─ ❏ 「 .desautorizarbot 」「 !desautorizarbot 」「 /desautorizarbot 」\n\n◪ *Adicionar um membro ao grupo:*\n├─ ❏ 「 .add 」「 !add 」「 /add 」\n└─ ❏ 「 .adicionar 」「 !adicionar 」「 /adicionar 」\n\n◪ *Apagar uma mensagem do BOT: *\n├─ ❏ 「 .apg 」「 !apg 」「 /apg 」\n├─ ❏ 「 .ers 」「 !ers 」「 /ers 」\n├─ ❏ 「 .erase 」「 !erase 」「 /erase 」\n└─ ❏ 「 .apagar 」「 !apagar 」「 /apagar 」.\n\n◪ *Remover um membro do grupo:*\n├─ ❏ 「 .ban 」「 !ban 」「 /ban 」\n├─ ❏ 「 .kick 」「 !kick 」「 /kick 」\n└─ ❏ 「 .remover 」「 !remover 」「 /remover 」\n\n◪ *Rebaixar um administrador a membro:*\n├─ ❏ 「 .dmt 」「 !dmt 」「 /dmt 」\n├─ ❏ 「 .demote 」「 !demote 」「 /demote 」\n└─ ❏ 「 .rebaixar 」「 !rebaixar 」「 /rebaixar 」\n\n◪ *Mandar o link do grupo:*\n├─ ❏ 「 .lkgp 」「 !lkgp 」「 /lkgp 」\n├─ ❏ 「 .linkgroup 」「 !linkgroup 」「 /linkgroup 」\n└─ ❏ 「 .linkdogrupo 」「 !linkdogrupo 」「 /linkdogrupo 」\n\n◪ *Promover um membro a administrador:*\n├─ ❏ 「 .prmt 」「 !prmt 」「 /prmt 」\n├─ ❏ 「 .promote 」「 !promote 」「 /promote 」\n└─ ❏ 「 .promover 」「 !promover 」「 /promover 」\n\n◪ *Mandar o BOT sair do grupo:*\n├─ ❏ 「 .exit 」「 !exit 」「 /exit 」\n└─ ❏ 「 .sair 」「 !sair 」「 /sair 」\n\n◪ *Mencionar todos os membros do grupo:*\n├─ ❏ 「 .tgall 」「 !tgall 」「 /tgall 」\n├─ ❏ 「 .tagall 」「 !tagall 」「 /tagall 」\n└─ ❏ 「 .mencionartodos 」「 !mencionartodos 」「 /mencionartodos 」\n\n◪ *Avisar algo a todos os membros do grupo:*\n├─ ❏ 「 .trms 」「 !trms 」「 /trms 」\n├─ ❏ 「 .transmissão 」「 !transmissão 」「 /transmissão 」\n├─ ❏ 「 .avisartodos 」「 !avisar 」「 /avisar 」\n└─ ❏ 「 .transmission 」「 !transmission 」「 /transmission 」\n\n${showAll}`;
    break
    
    case 'download':
    case 'downloads':
    case 'downloader':
        help = `==========「 *Downloader do BOT* 」==========\n\nOlá 👋, esta é a parte de download do BOT 🔥:\n\n◪ *Fazer download de uma música do youtube:*\n├─ ❏ 「 .yt 」「 !yt 」「 /yt 」\n├─ ❏ 「 .ytb 」「 !ytb 」「 /ytb 」\n├─ ❏ 「 .mp3 」「 !mp3 」「 /mp3 」\n├─ ❏ 「 .mp4 」「 !mp4 」「 /mp4 」\n└─ ❏ 「 .youtube 」「 !youtube 」「 /youtube 」\n\n${showAll}`;
    break

    case 'geral':
    case 'gerais':
        help = `==========「 *Comandos Gerais do BOT* 」==========\n\nOlá 👋, esta é a parte de comandos gerais do BOT 🔥:\n\n◪ *Ver a lista de administradores:*\n├─ ❏ 「 .admls 」「 !admls 」「 /admls 」\n├─ ❏ 「 .listadm 」「 !listadm 」「 /listadm 」\n├─ ❏ 「 .listadmin 」「 !listadmin 」「 /listadmin 」\n├─ ❏ 「 .listaradms 」「 !listaradms 」「 /listaradms 」\n└─ ❏ 「 .adminlista 」「 !adminlista 」「 /adminlista 」\n\n◪ *Consultar o clima:*\n├─ ❏ 「 .tempo 」「 !tempo 」「 /tempo 」\n└─ ❏ 「 .clima 」「 !clima 」「 /clima 」\n\n◪ *Ver quem é o dono do grupo:*\n├─ ❏ 「 .dono 」「 !dono 」「 /dono 」\n├─ ❏ 「 .donogp 」「 !donogp 」「 /donogp 」\n├─ ❏ 「 .donodogp 」「 !donodogp 」「 /donodogp 」\n└─ ❏ 「 .donodogrupo 」「 !donodogrupo 」「 /donodogrupo 」\n\n◪ *Ver a cotação de uma moeda:*\n└─ ❏ 「 .moeda 」「 !moeda 」「 /moeda 」\n\n◪ *Ver o próprio número:*\n├─ ❏ 「 .mynmr 」「 !mynmr 」「 /mynmr 」\n├─ ❏ 「 .numero 」「 !numero 」「 /numero 」\n└─ ❏ 「 .meunumero 」「 !meunumero 」「 /meunumero 」\n\n◪ *Ver a descrição do bot:*\n├─ ❏ 「 .leia 」「 !leia 」「 /leia 」\n├─ ❏ 「 .leiame 」「 !leiame 」「 /leiame 」\n└─ ❏ 「 .readme 」「 !readme 」「 /readme 」\n\n◪ *Pedir ao bot para banir o solicitante:*\n├─ ❏ 「 .rmvm 」「 !rmvm 」「 /rmvm 」\n├─ ❏ 「 .kickme 」「 !kickme 」「 /kickme 」\n└─ ❏ 「 .removame 」「 !removame 」「 /removame 」\n\n${showAll}`;
    break
    
    case 'consulta':
    case 'consultas':
        help = `==========「 *Consulta do BOT* 」==========\n\nOlá 👋, esta é a parte de consulta do BOT 🔥:\n\n◪ *Consultar nome:*\n└─ ❏ 「 .nome 」「 !nome 」「 /nome 」\n\n◪ *Consultar telefone:*\n├─ ❏ 「 .cell 」「 !cell 」「 /cell 」\n└─ ❏ 「 .telefone 」「 !telefone 」「 /telefone 」\n\n◪ *Consultar o CEP:*\n└─ ❏ 「 .cep 」「 !cep 」「 /cep 」\n\n◪ *Consultar o CPF:*\n└─ ❏ 「 .cpf 」「 !cpf 」「 /cpf 」\n\n◪ *Consultar seus créditos atuais:*\n├─ ❏ 「 .cred 」「 !cred 」「 /cred 」\n└─ ❏ 「 .creditos 」「 !creditos 」「 /creditos 」\n\n${showAll}`;
    break
    
    case 's':
    case 'f':
    case 'fig':
    case 'figs':
    case 'stiker':
    case 'sticker':
    case 'stikers':
    case 'stickers':
    case 'figurinha':
    case 'figurinhas':
        help = `==========「 *Figurinhas do BOT* 」==========\n\nOlá 👋, esta é a parte de comandos de figurinhas do BOT 🔥:\n\n◪ *Transformar imagem em figurinha:*\n├─ ❏ 「 .s 」「 !s 」「 /s 」\n├─ ❏ 「 .f 」「 !f 」「 /f 」\n├─ ❏ 「 .fig 」「 !fig 」「 /fig 」\n├─ ❏ 「 .stiker 」「 !stiker 」「 /stiker 」\n└─ ❏ 「 .sticker 」「 !sticker 」「 /sticker 」\n\n◪ *Transformar figurinha em imagem:*\n├─ ❏ 「 .i 」「 !i 」「 /i 」\n├─ ❏ 「 .img 」「 !img 」「 /img 」\n├─ ❏ 「 .toimg 」「 !toimg 」「 /toimg 」\n├─ ❏ 「 .primg 」「 !primg 」「 /primg 」\n└─ ❏ 「 .paraimg 」「 !paraimg 」「 /paraimg 」\n\n${showAll}`;
    break

    case 'ts':
    case 'tts':
    case 'tspt':
        help = `==========「 *Comandos de  do BOT* 」==========\n\nOlá 👋, esta é a parte de comandos de voz do BOT 🔥:\n\n◪ *Pedir ao bot para falar em alemão:*\n├─ ❏ 「 .al 」「 !al 」「 /al 」\n├─ ❏ 「 .tsal 」「 !tsal 」「 /tsal 」\n└─ ❏ 「 .ttsal 」「 !ttsal 」「 /ttsal 」\n\n◪ *Pedir ao bot para falar em chinês:*\n├─ ❏ 「 .ch 」「 !ch 」「 /ch 」\n├─ ❏ 「 .tsch 」「 !tsch 」「 /tsch 」\n└─ ❏ 「 .ttsch 」「 !ttsch 」「 /ttsch 」\n\n◪ *Pedir ao bot para falar em inglês:*\n├─ ❏ 「 .en 」「 !en 」「 /en 」\n├─ ❏ 「 .tsen 」「 !tsen 」「 /tsen 」\n└─ ❏ 「 .ttsen 」「 !ttsen 」「 /ttsen 」\n\n◪ *Pedir ao bot para falar em espanhol:*\n├─ ❏ 「 .es 」「 !es 」「 /es 」\n├─ ❏ 「 .tses 」「 !tses 」「 /tses 」\n└─ ❏ 「 .ttses 」「 !ttses 」「 /ttses 」\n\n◪ *Pedir ao bot para falar em francês:*\n├─ ❏ 「 .fr 」「 !fr 」「 /fr 」\n├─ ❏ 「 .tsfr 」「 !tsfr 」「 /tsfr 」\n└─ ❏ 「 .ttsfr 」「 !ttsfr 」「 /ttsfr 」\n\n◪ *Pedir ao bot para falar em japonês:*\n├─ ❏ 「 .ja 」「 !ja 」「 /ja 」\n├─ ❏ 「 .tsja 」「 !tsja 」「 /tsja 」\n└─ ❏ 「 .ttsja 」「 !ttsja 」「 /ttsja 」\n\n◪ *Pedir ao bot para falar em coreano:*\n├─ ❏ 「 .ko 」「 !ko 」「 /ko 」\n├─ ❏ 「 .tsko 」「 !tsko 」「 /tsko 」\n└─ ❏ 「 .ttsko 」「 !ttsko 」「 /ttsko 」\n\n◪ *Pedir ao bot para falar em português:*\n├─ ❏ 「 .pt 」「 !pt 」「 /pt 」\n├─ ❏ 「 .tspt 」「 !tspt 」「 /tspt 」\n└─ ❏ 「 .ttspt 」「 !ttspt 」「 /ttspt 」\n\n◪ *Pedir ao bot para falar em russo:*\n├─ ❏ 「 .ru 」「 !ru 」「 /ru 」\n├─ ❏ 「 .tsru 」「 !tsru 」「 /tsru 」\n└─ ❏ 「 .ttsru 」「 !ttsru 」「 /ttsru 」\n\n${showAll}`;
    break
    
    default:
        help = `==========「 *Aquarian BOT* 」==========\n\nOlá 👋, sou a Aquarian bot e estou aqui para te ajudar 🦾, escolha uma das categorias e veja o que posso fazer por você 🔥:\n\n◪ *INFO*\n├─ ❏ Prefixos: 「 . 」「 ! 」「 / 」\n└─ ❏ Criador: Therjyer 🪖\n\n◪ *ADMINISTRAÇÃO 👑*\n└─ ❏ Para ver os comandos administrativos, envie .menu adm 👸.\n\n◪ *FIGURINHAS 🪄*\n└─ ❏ Para ver os comandos de figurinas, envie .menu fig 🎱.\n\n◪ *GERAIS 🔎*\n└─ ❏ Para ver os comandos gerais, envie .menu geral 🕵️.\n\n◪ *TRADUÇÃO 🔮*\n└─ ❏ Para ver os comandos de fala do bot, envie .menu tts 🔍.\n\n◪ *CONSULTAS 📚*\n└─ ❏ Para ver os comandos de consulta, envie .menu consultas 📖.\n\n◪ *DOWNLOADERS 📲*\n└─ ❏ Para ver os comandos de download, envie .menu download 📱`;
    break
  }

  await client.reply(from, help, id);
}