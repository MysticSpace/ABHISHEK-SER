const getLyrics=require("./getLyrics")
const getSong=require("./getSong")
const options={

    apiKey:'8MEkGlN9IxdyJlSdd14DamKGSraIil-2XV6h3RAMp-ce2vHMwPX150lYxuTyjPsf',
    title:'baby',
    artist:'justin bieber',
    optimizeQuery:true
}
getLyrics(options).then((lyrics)=> console.log(lyrics) );
getSong(options).then((song)=> 
    console.log('\n${song.lyrics}')
    

)