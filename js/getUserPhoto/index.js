window.onload = function() {
    const video = document.getElementById('video');
    const canvas = document.getElementById('my_canvas');
    const btn = document.getElementById('btn');
    const getMedia = navigator.mediaDevices.getUserMedia;

    const handleStream = (stream) => {
        video.srcObject = stream;
        video.onloadedmetadata = () => {
            video.play()

        }



    }
    btn.addEventListener('click', () => {
        const ctx = canvas.getContext('2d');
        console.log(video)
        ctx.drawImage(video, 0, 0, 100, 100);
        const image = canvas.toDataURL('image/png');
        const img = new Image();
        img.src = image;
        document.body.append(img);
        console.log(img.src);
    })
    if (getMedia) {
        const mediaOpt = {
            video: true,
            audio: false,
        }

        const promise = navigator.mediaDevices.getUserMedia(mediaOpt);
        promise.then((res) => {
            handleStream(res)
        }).catch();
    }


    // function promiseDemo() {

    // }
}