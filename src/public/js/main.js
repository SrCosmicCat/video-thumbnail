import YTPage from "../components/yt-page.js";
import Range from "../components/range.js";
import InputFile from "../components/input-file.js";
import Video from "../components/yt-video.js";
import { VIDEO_DEFAULT_INFO } from "../components/yt-page.js";

const ytPage = new YTPage(document.querySelector('#yt-page'));
const inpName = document.querySelector('#videoName');
const inpChannel = document.querySelector('#channelName');
const inpChannelImage = document.querySelector('#channelImage');
const channelImageAdd = document.querySelector('#channelImageAdd');

await ytPage.loadVideos();
ytPage.render();

const range = new Range(document.querySelector('#numberThumbs'));
const inputFile = new InputFile(document.querySelector('#channelImage'));

range.onChange(async (value) => {
    await ytPage.loadVideos(Number(value) - 1);
    document.querySelector('label .counter').innerText = value;
    updateMyVideo();
});

inputFile.onChange(({ file, fileURL }) => {
    console.log(file, fileURL);
    channelImageAdd.innerHTML = `<img src="${fileURL}">`;
    
    updateMyVideo();
});


inpName.addEventListener('input', updateMyVideo);
inpChannel.addEventListener('input', updateMyVideo);

function updateMyVideo() {
    const newVideo = new Video({
        ...VIDEO_DEFAULT_INFO
    });
    if (inpName.value != '') {
        newVideo.title = inpName.value;
    }
    if (inpChannel.value != '') {
        newVideo.channelName = inpChannel.value;
    }
    if (inputFile.file != null) {
        newVideo.channelImage = inputFile.fileURL;
    }

    ytPage.loadMyVideo(newVideo);
    ytPage.render();
}
