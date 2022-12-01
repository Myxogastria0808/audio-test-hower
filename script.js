import { Howl, Howler } from 'howler';

var sound = new Howl({
    src: [
        'audio.mp3',
    ]
});

document.querySelector("button").addEventListener("click", e => sound.play() );
