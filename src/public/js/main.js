import YTPage from "../components/yt-page.js";
import Video from "../components/yt-video.js";
import { VIDEO_DEFAULT_INFO } from "../components/yt-page.js";
import ThumbnailList from "../components/thumbnail-list.js";
import Thumbnail from "../components/thumbnail.js";
import Range from "../components/range.js";
import InputFile from "../components/input-file.js";

const ytPage = new YTPage(document.querySelector('#yt-page'));
const inpName = document.querySelector('#videoName');
const inpChannel = document.querySelector('#channelName');
const range = new Range(document.querySelector('#numberThumbs'));
const channelImage = new InputFile(document.querySelector('#channelImage'));
const thumbnailAdd = new InputFile(document.querySelector('#thumbnailAdd'));
const channelImageAdd = document.querySelector('#channelImageAdd');
const thumbnailList = new ThumbnailList(document.querySelector('#thumbnail-list'));

const myVideo = new Video({
    ...VIDEO_DEFAULT_INFO
});

await ytPage.loadVideos();
ytPage.render();

range.onChange(async (value) => {
    await ytPage.loadVideos(Number(value) - 1);
    document.querySelector('label .counter').innerText = value;
    updateMyVideo();
});

channelImage.onChange(({ file, fileURL }) => {
    channelImageAdd.innerHTML = `<img src="${fileURL}">`;
    updateMyVideo();
});

thumbnailAdd.onChange(({ file, fileURL }) => {
    const thumb = new Thumbnail(fileURL);
    thumb.onClick(thumbnailClickHandler);
    thumbnailList.addThumbnail(thumb);
    thumbnailList.render();
});

function thumbnailClickHandler(src) {
    myVideo.thumbnail = src;
    ytPage.loadMyVideo(myVideo);
    ytPage.render();
} 


inpName.addEventListener('input', updateMyVideo);
inpChannel.addEventListener('input', updateMyVideo);

function updateMyVideo() {
    myVideo.title = inpName.value != '' ? inpName.value : VIDEO_DEFAULT_INFO.title;
    myVideo.channelName = inpChannel.value != '' ? inpChannel.value : VIDEO_DEFAULT_INFO.channelName;
    myVideo.channelImage = channelImage.file != null ? channelImage.fileURL : VIDEO_DEFAULT_INFO.channelImage;

    ytPage.loadMyVideo(myVideo);
    ytPage.render();
}
