//require the ffmpeg package so we can use ffmpeg using JS
const _ffmpeg = require('fluent-ffmpeg');
//Get the paths to the packaged versions of the binaries we want to use
const ffmpegPath = require('ffmpeg-static').replace(
  'app.asar',
  'app.asar.unpacked'
);
const ffprobePath = require('ffprobe-static').path.replace(
  'app.asar',
  'app.asar.unpacked'
);
//tell the ffmpeg package where it can find the needed binaries.
_ffmpeg.setFfmpegPath(ffmpegPath);
_ffmpeg.setFfprobePath(ffprobePath);

const ffmpeg = _ffmpeg();




ffmpeg.ffprobe("C:/Users/maizo/Videos/Videos/crybaby.mp3", (err, data) => {
  console.log(data);
})

ffmpeg.ffprobe("C:/Users/maizo/Videos/Videos/crybaby-2.mp3", (err, data) => {
  console.log(data);
})


function changeMetadata(metadata) {
  ffmpeg.addInput(metadata.input)
    .outputOptions('-codec', 'copy')
    .outputOptions('-metadata', `title=${metadata.title}`)
    .outputOptions('-metadata', `artist=${metadata.artist}`)
    .outputOptions('-metadata', `album_artist=${metadata.album_artist}`)
    .outputOptions('-metadata', `album=${metadata.album}`)
    .outputOptions('-metadata', `date=${metadata.date}`)
    .outputOptions('-metadata', `track=${metadata.track}`)
    .outputOptions('-metadata', `genre=${metadata.genre}`)
    .outputOptions('-metadata', `publisher=${metadata.publisher}`)
    .outputOptions('-metadata', `encoded_by=${metadata.encoded_by}`)
    .outputOptions('-metadata', `copyright=${metadata.copyright}`)
    .outputOptions('-metadata', `composer=${metadata.composer}`)
    .outputOptions('-metadata', `performer=${metadata.performer}`)
    .outputOptions('-metadata', `language=${metadata.language}`)
    .save('C:/Users/maizo/Videos/Videos/crybaby-2.mp3')
    .on('start', function (cmdline) {
      console.log('Command line: ' + cmdline);
    });
}

function deleteMetadata(file, out) {
  ffmpeg.addInput(file)
    .outputOptions('-map', "0:a")
    .outputOptions('-c:a', "copy")
    .outputOptions('-map_metadata', -1)
    .save(out)
    .on('start', function (cmdline) {
      console.log('Command line: ' + cmdline);
    });
}

// changeMetadata({
//   input: "C:/Users/maizo/Videos/Videos/crybaby.mp3",
//   title: "",
//   artist: "",
//   album_artist: "",
//   album: "",
//   date: "",
//   track: "",
//   genre: "",
//   publisher: "",
//   encoded_by: "",
//   copyright: "",
//   composer: "",
//   performer: "",
//   language: ""
// })

// deleteMetadata("C:/Users/maizo/Videos/Videos/crybaby.mp3", "C:/Users/maizo/Videos/Videos/crybaby-2.mp3")

// ffmpeg -i crybaby.mp3 -y -map_metadata -1 crybaby.mp3
// ffmpeg -i in.mp3 -i test.png -map 0:0 -map 1:0 -c copy -id3v2_version 3 -metadata:s:v title="Album cover" -metadata:s:v comment="Cover (front)" out.mp3