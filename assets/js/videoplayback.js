$('.videoplay').on('click', function () {
    var vid = $(this).attr('videoid');
    var videoURL = $(vid).prop('src');
    videoURL = videoURL.replace("&autoplay=1", "");
    $(vid).prop('src','');
    $(vid).prop('src',videoURL);
    $(vid)[0].src += "&autoplay=1";
});

$('.spl_videoplay').on('click', function () {
    var vid = $(this).attr('videoid');
    var videoURL = $(vid).prop('src');
    // $(spl).click()
    videoURL = videoURL.replace("&autoplay=1", "");
    $(vid).prop('src','');
    $(vid).prop('src',videoURL);
    $(vid)[0].src += "&autoplay=1";
});

$('.spl_videoplay2').on('click', function () {
    var vid = $(this).attr('videoid');
    var videoURL = $(vid).prop('src');
    $(spl).click()
    videoURL = videoURL.replace("&autoplay=1", "");
    $(vid).prop('src','');
    $(vid).prop('src',videoURL);
    $(vid)[0].src += "&autoplay=1";
});

$('.videostop').on('click', function () {
    var vid = $(this).attr('videoid');
    var videoURL = $(vid).prop('src');
    videoURL = videoURL.replace("&autoplay=1", "");
    $(vid).prop('src','');
    $(vid).prop('src',videoURL);
});

$('.spl_videostop').on('click', function () {
    var vid = $(this).attr('videoid');
    var videoURL = $(vid).prop('src');
    var temp = document.getElementById("spl")
    temp.nextElementSibling.style.display = 'none'
    temp.style.display = 'block'
    videoURL = videoURL.replace("&autoplay=1", "");
    $(vid).prop('src','');
    $(vid).prop('src',videoURL);
});