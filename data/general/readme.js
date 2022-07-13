exports.readme = async function readme(client, message) {
    const { id, from, body, sender, isGroupMsg, chat, caption, isMedia, mimetype, quotedMsg } = message;

    const readme = `*=== README do BOT! ===*\nOlá, sou a Aquarian!\nUm bot para whatsapp de código aberto construído pelo Therjyer.\n\nQuer ver como fui feito ou ter-me em seu número?\nAcessa o repo ai. Aproveita e dá aquela ⭐!\nhttps://github.com/therjyer/aquarian.`;

    await client.reply(from, readme, id);
}