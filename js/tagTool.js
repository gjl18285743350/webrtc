let app = document.getElementById("app");

function createVideoTag(socketId) {

    let div = document.createElement("div");
    div.setAttribute("id", `div-${socketId}`);
    div.setAttribute("style", "display: flex;align-items: flex-start;");
    app.appendChild(div);

    let video = document.createElement("video");
    video.setAttribute("autoplay", "autoplay");
    video.setAttribute("playsinline", "true");
    video.setAttribute("id", `video-${socketId}`);
    video.setAttribute("style", "width: 20vw;");
    div.appendChild(video);

    let btn = document.createElement("button");
    btn.innerHTML = "显示连接信息";
    div.appendChild(btn);
    btn.addEventListener('click', function(event) {
        let text = event.currentTarget.innerText;
        let changeText = "";
        let flag = 'block';
        if (text === "显示连接信息") {
            changeText = "隐藏连接信息";
            flag = 'block';
        } else {
            changeText = "显示连接信息";
            flag = 'none';
        }
        message.setAttribute("style", `display:${flag};`)
        event.currentTarget.innerText = changeText;


    });


    let message = document.createElement("div");
    message.setAttribute("id", `message-${socketId}`);
    message.setAttribute("style", "display:none;")
    div.appendChild(message);
    return video;
}

function deleteVideoTag(socketId) {
    let div = document.getElementById(`div-${socketId}`)
    if (div != null) {
        app.removeChild(div);
    }

}

export { createVideoTag, deleteVideoTag }