// Vimeo player

let time = 0;

const iframe = document.querySelector('iframe');

const player = new Vimeo.Player(iframe);

const widthContainer = (window.innerWidth - 640) / 2;

const heightContainer = (window.innerHeight - 360 - 80) / 2;

const LOCALSTORAGE_VIDEOPLAYER_KEY = "videoplayer-current-time";

iframe.style.marginTop = heightContainer + 'px';

iframe.style.marginLeft = widthContainer + 'px';

player.on('play', (() =>
{
    console.log('\nStart video!');
}));
player.on('timeupdate', function (time_update)
{
    time = time_update.seconds;

    //let save_time = JSON.stringify({ 'seconds: ' : time + '; ', 'percent: ' : time_update.percent + ';' });

    let save_time = JSON.stringify(time);

    localStorage.setItem(LOCALSTORAGE_VIDEOPLAYER_KEY, save_time);

    console.log("\nTimeupdate = ", time + " seconds; " + time_update.percent + " percent;");

    console.log("\nDownload server - ", localStorage.getItem(LOCALSTORAGE_VIDEOPLAYER_KEY));
});
player.on('pause', (() =>
{
    console.log('\nStop video!');

    console.log('\nSet current time = ', time + ' seconds;');
}));
player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_VIDEOPLAYER_KEY)).then(() =>
{
    console.log(time);

}).catch(function (error)
{
    switch (error.name)
    {
        case 'RangeError':
            
            console.log('\nRange error - one of the camera properties is out of range\n');

            break;

        default:

            console.log('\nError name - ' + error.name + '\n');
            
            console.log('\nError - ' + error.message + '\n');

            break;
    }
});