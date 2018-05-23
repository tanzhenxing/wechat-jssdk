imgload();
$(window).scroll(function () { setTimeout(function () { imgload(); }, 200); });
//window.onscroll=(function (){setTimeout(function (){imgload();},200); });
function imgload() {
    var offsetPage = window.pageYOffset ? window.pageYOffset : window.document.documentElement.scrollTop;
    var offsetWindow = offsetPage + Number(window.innerHeight ? window.innerHeight : document.documentElement.clientHeight);
    var imgarr = document.images;
    for (var i = 0; i < imgarr.length; i++) {
        if (imgarr[i]) {
            postPage = imgarr[i].getBoundingClientRect().top + window.document.documentElement.scrollTop + window.document.body.scrollTop;
            postWindow = postPage + Number(imgarr[i].height);

            if (imgarr[i].src != imgarr[i].getAttribute("_src") && ((postPage > offsetPage && postPage < offsetWindow) || (postWindow > offsetPage && postWindow < offsetWindow))) {

                if (imgarr[i].getAttribute("_src") != null && imgarr[i].getAttribute("_src") != undefined) {
                    var _img = new Image();
                    _img.src = imgarr[i].getAttribute("_src");
                    //imgarr[i].height="200";
                    imgarr[i].src = _img.src;
                }
            } else {
                continue;
            }
        }
    }
}