export default class Video {
    constructor({id, title, thumbnail, channelImage, channelName, views, date}) {
        this.id = id;
        this.title = title;
        this.thumbnail = thumbnail;
        this.channelImage = channelImage;
        this.channelName = channelName;
        this.views = views;
        this.date = date;
    }

    update({title = this.title, thumbnail = this.thumbnail, channelImage = this.channelImage, channelName = this.channelImage, views = this.views, date = this.date}) {
        this.title = title;
        this.thumbnail = thumbnail;
        this.channelImage = channelImage;
        this.channelName = channelName;
        this.views = views;
        this.date = date;
    }
    
    render() {
        const video = document.createElement('article');
        video.innerHTML = `
            <div class="yt-thumbnail">
                <img src="${this.thumbnail}" draggable="false" alt="Video Thumbnail">
            </div>
            <div class="yt-info">
                <div class="yt-channel-img">
                    <img src="${this.channelImage}" alt="Channel Image" draggable="false">
                </div>
                <div class="yt-video-details">
                    <h3>${this.title}</h3>
                    <p class="yt-channel-name">${this.channelName} &nbsp;</p>
                    <p class="yt-video-add-info">${this.views} • ${this.date}</p>
                </div>
            </div>
        `;
        return video;
    }
}