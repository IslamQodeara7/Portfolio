let font = '';
let paletteNumber = 'zero';
let quote = 1;
$(".nav-link").click(function () {
    let Href = $(this).attr("linker")
    let sectionOffest = $(Href).offset().top
    $("body,html").animate({ scrollTop: sectionOffest }, 500)
    // $(this).addClass('linkActive')
    // $(this).parent().siblings().find('a').removeClass("linkActive")
});
$(document).ready(() => {
 
    $(`.myName1`).css({ display: 'inline-block' });
    $(`.myName1`).siblings().css({ display: 'none' });
    // $(`.myName1`).siblings().css({display:'none'});
    
    paletteNumber = localStorage.getItem('palette');

    switch (paletteNumber) {
        case 'one':
            document.documentElement.style.setProperty(color1, palette1.clr1);
            document.documentElement.style.setProperty(color2, palette1.clr2);
            document.documentElement.style.setProperty(color3, palette1.clr3);
            document.documentElement.style.setProperty(color4, palette1.clr4);
            break;
        case 'two':
            document.documentElement.style.setProperty(color1, palette2.clr1);
            document.documentElement.style.setProperty(color2, palette2.clr2);
            document.documentElement.style.setProperty(color3, palette2.clr3);
            document.documentElement.style.setProperty(color4, palette2.clr4);
            break;
        case 'three':
            document.documentElement.style.setProperty(color1, palette3.clr1);
            document.documentElement.style.setProperty(color2, palette3.clr2);
            document.documentElement.style.setProperty(color3, palette3.clr3);
            document.documentElement.style.setProperty(color4, palette3.clr4);
            break;
     

    }
    AOS.init();
   
    var mixer = mixitup(".videosItems", {
        selectors: {
            target: '.videosItems .item'
        },
        animation: {
            duration: 300
        }
    });
    hideLoading();

})
function showLoading() {
    $('body').css({ 'overflow-y': 'hidden' });
    $('.loading').css({ 'display': 'flex' });
}
function hideLoading() {
    setTimeout(() => {
        $('.loading').fadeOut(500, () => {
            $('body').css({ 'overflow-y': 'auto' })
        });
    }, 3000);
}

let palette1 = {
    clr1: "#0c134f",
    clr2: "#1d267d",
    clr3: "#5c469c",
    clr4: "#d4adfc"
}
let palette2 = {
    clr1: "#40128b",
    clr2: "#9336b4",
    clr3: "#dd58d6",
    clr4: "#ffe79b"
}
let palette3 = {
    clr1: "#2e0249",
    clr2: "#570a57",
    clr3: "#a91079",
    clr4: "#f806cc"
}



const color1 = "--clr1";
const color2 = "--clr2";
const color3 = "--clr3";
const color4 = "--clr4";






$('.palette1').click(() => {
    
    localStorage.setItem('palette', 'one');
    document.documentElement.style.setProperty(color1, palette1.clr1);
    document.documentElement.style.setProperty(color2, palette1.clr2);
    document.documentElement.style.setProperty(color3, palette1.clr3);
    document.documentElement.style.setProperty(color4, palette1.clr4);
    
});
$('.palette2').click(() => {
   
    localStorage.setItem('palette', 'two');
    document.documentElement.style.setProperty(color1, palette2.clr1);
    document.documentElement.style.setProperty(color2, palette2.clr2);
    document.documentElement.style.setProperty(color3, palette2.clr3);
    document.documentElement.style.setProperty(color4, palette2.clr4);
    
});
$('.palette3').click(() => {

    localStorage.setItem('palette', 'three');
    document.documentElement.style.setProperty(color1, palette3.clr1);
    document.documentElement.style.setProperty(color2, palette3.clr2);
    document.documentElement.style.setProperty(color3, palette3.clr3);
    document.documentElement.style.setProperty(color4, palette3.clr4);
    
});


setInterval(() => {
    quote++;
    if (quote > 6) {
        quote = 1;
    }
    $(`.myName${quote}`).css({ display: 'inline-block' });
    $(`.myName${quote}`).siblings().css({ display: 'none' });

}, 5000)