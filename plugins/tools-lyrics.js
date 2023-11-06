const getLyrics = require("./getLyrics");
const getSong = require("./getSong");

// Assuming messageText contains the WhatsApp message text
const messageText = ".lyrics baby"; // Example message

// Check if the message starts with ".lyrics"
if (messageText.startsWith(".lyrics")) {
  // Extract the song name using a regular expression
  const match = messageText.match(/\.lyrics\s+(.+)/);
  
  if (match && match[1]) {
    const songName = match[1];
    
    const options = {
      apiKey: '8MEkGlN9IxdyJlSdd14DamKGSraIil-2XV6h3RAMp-ce2vHMwPX150lYxuTyjPsf',
      title: songName, // Pass the extracted song name
      artist: '', // You can add artist extraction logic if needed
      optimizeQuery: true,
    };
    
    // Call the getLyrics and getSong functions with the modified options
    getLyrics(options)
      .then((lyrics) => console.log(lyrics))
      .catch((error) => console.error("Error fetching lyrics:", error));

    getSong(options)
      .then((song) => {
        console.log(`\n${song.lyrics}`);
        // Send the lyrics back to the user via WhatsApp
      })
      .catch((error) => console.error("Error fetching song:", error));
  } else {
    console.log("Invalid input. Please provide a song name after '.lyrics'.");
  }
}
