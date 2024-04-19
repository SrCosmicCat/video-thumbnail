import Video from './yt-video.js';
import { importJSON } from '../js/json-importer.js';
import { randomizeArray } from '../js/array-randomizer.js';

export const VIDEO_DEFAULT_INFO = {
    id: 0,
    title: 'Titulo del video',
    thumbnail: 'default.png',
    channelImage: 'default.png',
    channelName: 'Nombre del canal',
    views: '6 K vistas',
    date: 'Justo ahora'
};
export const VIDEO_DEFAULT_COUNT = 5;

export default class YTPage {
    constructor(HTMLelement) {
        this.HTMLelement = HTMLelement;
        this.videos;
        this.count;
    }

    async loadVideos(number = VIDEO_DEFAULT_COUNT) {
        this.count = number;
        this.videos = await importJSON({
            path: '../data/thumb-info.json',
            number: this.count
        });

        this.videos.push(VIDEO_DEFAULT_INFO);
        randomizeArray(this.videos);
    }

    loadMyVideo(video) {
        video.id = 0;
        this.videos.find((vd, i) => {
            if (vd.id === video.id) {
                this.videos[i] = video;
            }
        });
    }

    render() {
        this.HTMLelement.innerHTML = '';
        this.videos.forEach(video => {
            this.HTMLelement.appendChild(
                new Video(new Video({
                    id: video.id,
                    title: video.title,
                    thumbnail: video.id !== 0 || video.thumbnail === 'default.png' ? './img/thumbs/' + video.thumbnail : video.thumbnail,
                    channelImage: video.id !== 0 || video.channelImage === 'default.png' ? './img/channels/' + video.channelImage : video.channelImage,
                    channelName: video.channelName,
                    views: video.views,
                    date: video.date
                })).render()
            );
        });
    }
}