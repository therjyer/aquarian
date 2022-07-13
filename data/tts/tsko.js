const googleTTS = require('google-tts-api');
const path = require('path');
const urlParse = require('url').parse;
const http = require('http');
const https = require('https');
const fs = require('fs-extra');

async function downloadFile(url, dest) {
    return new Promise((resolve, reject) => {
        const info = urlParse(url);
        const httpClient = info.protocol === 'https:' ? https : http;
        const options = {
            host: info.host,
            path: info.path,
            headers: {
                'user-agent': 'WHAT_EVER',
            },
        };

        httpClient
            .get(options, (res) => {
                // check status code
                if (res.statusCode !== 200) {
                    const msg = `request to ${url} failed, status code = ${res.statusCode} (${res.statusMessage})`;
                    reject(new Error(msg));
                    return;
                }
                const file = fs.createWriteStream(dest);
                file.on('finish', function () {
                    // close() is async, call resolve after close completes.
                    file.close(resolve);
                });
                file.on('error', function (err) {
                    // Delete the file async. (But we don't check the result)
                    fs.unlink(dest);
                    reject(err);
                });
                res.pipe(file);
            })
            .on('error', reject)
            .end();
    });
}

exports.tsko = async function tsko(client, message) {
    const { id, from, body, sender, isGroupMsg, chat, caption, isMedia, mimetype, quotedMsg } = message;

    const commands = caption || body || "";
    const args = commands.split(" ");

    if (args.length === 1) return client.reply(from, 'Sou um bot, não uma adivinha, qual o texto?', id);
    let string = commands.split(' ').slice(1).join(' ');
    if (string.length >= 200) {
        return client.reply(from, `Não poderei fazer, pois o seu texto excedeu o limite de caracteres.`, id);
    }
    const url = googleTTS.getAudioUrl(`${string}`, {
        lang: 'ko',
        slow: false,
        host: 'https://translate.google.com',
    });

    const dest = await path.resolve(__dirname, '../../media/translate.mp3');
    await downloadFile(url, dest);
    await client.sendPtt(from, dest, 'translate', 'AAAAAAAAAUHHH', id);
}