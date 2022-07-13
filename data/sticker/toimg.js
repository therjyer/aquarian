const { decryptMedia } = require('@open-wa/wa-decrypt');

exports.toimg = async function toimg(client, message) {
    const { id, from, body, sender, isGroupMsg, chat, caption, isMedia, mimetype , type, quotedMsg } = message;

    const uaOverride = 'WhatsApp/2.2029.4 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36';

    const mediaDataSticker = await decryptMedia(message.quotedMsg, uaOverride);
				const imageBase64Sticker = `data:${message.quotedMsg.mimetype};base64,${mediaDataSticker.toString('base64')}`;
				await client.sendImage(from, imageBase64Sticker, 'Imagem do stick','Toma ai o imagem do stick', id)
}