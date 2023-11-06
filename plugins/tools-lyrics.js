import fetch from 'node-fetch';
const getLyrics = require("../lib/getLyrics");
const getSong = require("../lib/getSong");

let handler = async (m, { conn, text }) => {
  let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : '';
  if (!teks) throw `🎯 Enter The Name Of The Song`;
  try {
    const options = {
      apiKey: '8MEkGlN9IxdyJlSdd14DamKGSraIil-2XV6h3RAMp-ce2vHMwPX150lYxuTyjPsf',
      title: teks,
      artist: '',
      optimizeQuery: true,
    };

    // Use the getLyrics function to fetch lyrics
    const lyrics = await getLyrics(options);

    // Use the getSong function to fetch song data
    const song = await getSong(options);

    // Display the song information and lyrics
    const message = `
▢ *${song.title}*
*${song.author}*\n
${lyrics}
    `;

    conn.sendFile(m.chat, song.thumbnail, null, message, m);
    m.react('🎵'); // You can use the desired emoji for reactions

  } catch (e) {
    m.react('❌'); // You can use the desired emoji for error reactions
    console.error(e);
  }
};

handler.help = ['lyrics'];
handler.tags = ['tools'];
handler.command = ['letra', 'lyrics', 'letras'];

export default handler;
