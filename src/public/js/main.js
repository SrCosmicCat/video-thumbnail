import YTPage from "../components/yt-page.js";
import Range from "../components/range.js";
import Video from "../components/yt-video.js";
import { VIDEO_DEFAULT_INFO } from "../components/yt-page.js";

const ytPage = new YTPage(document.querySelector('#yt-page'));
const inpName = document.querySelector('#videoName');
const inpChannel = document.querySelector('#channelName');
const inpChannelImage = document.querySelector('#channelImage');

await ytPage.getVideos();
ytPage.render();

const range = new Range(document.querySelector('#numberThumbs'));

range.change(async (value) => {
    await ytPage.getVideos(Number(value) - 1);
    document.querySelector('label .counter').innerText = value;
    updateMyVideo();
});

inpName.addEventListener('input', () => {
    updateMyVideo();
});

inpChannel.addEventListener('input', () => {
    updateMyVideo();
});

function updateMyVideo() {
    const newVideo = new Video({
        ...VIDEO_DEFAULT_INFO
    });
    if (inpName.value != '') {
        console.log('aaaa')
        newVideo.title = inpName.value;
    }
    if (inpChannel.value != '') {
        newVideo.channelName = inpChannel.value;
    }

    ytPage.getMyVideo(newVideo);
    ytPage.render();
}
