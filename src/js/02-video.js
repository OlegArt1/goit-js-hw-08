const iframe = document.querySelector('iframe');

const player = new Vimeo.Player(iframe);

const LOCALSTORAGE_VIDEOPLAYER_KEY = "videoplayer-current-time";

let time = 0;

player.on('play', (() =>
{
    console.log('\nStart video!');
}));
player.on('timeupdate', function (time_update)
{
    time = time_update.seconds;

    console.log('\nTimeupdate - ', time + ' seconds; ' + time_update.percent + ' percent;');

    let saveTime = JSON.stringify(time);

    localStorage.setItem(LOCALSTORAGE_VIDEOPLAYER_KEY, saveTime);
});
player.on('pause', (() =>
{
    console.log('\nStop video!');

    console.log('\nSet current time - ', time + ' seconds;');
}));
player.setCurrentTime(time).then(() =>

{}).catch(function (error)
{
    switch (error.name)
    {
        case 'RangeError':
            
            console.log('\nRangeE error - one of the camera properties is out of range\n');

            break;

        default:

            console.log('\nError - ' + error.message + '\n');
            
            break;
    }
});