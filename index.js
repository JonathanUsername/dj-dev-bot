var spotify = require('spotify-node-applescript');
var req = require('request-promise');
var secrets = require('./secrets.private.json');

var lastTrack = '';

setInterval(checkTrack, 5000);

function api(method, args) {
    var params = {}
    params.uri = 'https://slack.com/api/' + method + '?token=' + secrets.token;
    params.method = 'POST'
    params.form = args
    return req(params)
}


function checkTrack() {
    spotify.getTrack(function(err, track) {

        if (err) throw err;

        if (lastTrack === track.id) return;

        lastTrack = track.id;

        var text = `Now up: ${track.name} by ${track.artist} from the album ${track.album}.`;

        api('chat.postMessage', {
            'token': secrets.token,
            'channel': "#music",
            'text': text,
            'username': "DJ DevBot",
            'as_user': false,
            'icon_url': "http://ngmnexpo.com/cliparts/2015/11/67734.jpeg"
        }).then(console.dir).catch(console.dir);
            /*
            track = {
                artist: 'Bob Dylan',
                album: 'Highway 61 Revisited',
                disc_number: 1,
                duration: 370,
                played count: 0,
                track_number: 1,
                starred: false,
                popularity: 71,
                id: 'spotify:track:3AhXZa8sUQht0UEdBJgpGc',
                name: 'Like A Rolling Stone',
                album_artist: 'Bob Dylan',
                spotify_url: 'spotify:track:3AhXZa8sUQht0UEdBJgpGc' }
            }
            */

    });
}
