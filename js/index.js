let font = '';
let paletteNumber = 'zero';
let quote = 1;
let skills = ["HTML","CSS","JavaScript","Bootstrap","jQuery","Angular","SCSS","TypeScript","Git & Github","Ecmascript 6","C# Basics","C# OOP","Advanced C#","SQL Server","LINQ"];
let skillsResult = "";
let ProjectsResult = "";
let Projects = [
 {name:"Angora",link:"https://github.com/IslamQodeara7/Angora",category:"c1"},
 {name:"ACME-Angular",link:"https://github.com/IslamQodeara7/ACME-Angular",category:"c2"},
 {name:"Bakery",link:"https://github.com/IslamQodeara7/Bakery",category:"c1"},
 {name:"Start Angular",link:"https://github.com/IslamQodeara7/StartAngular",category:"c2"},
 {name:"Bookmark",link:"https://github.com/IslamQodeara7/Bookmark",category:"c1"},
 {name:"Food Recipes",link:"https://github.com/IslamQodeara7/Food-Recipes",category:"c1"},
 {name:"Local Time Watch",link:"https://github.com/IslamQodeara7/local-time-watch",category:"c1"},
 {name:"Movies DB",link:"https://github.com/IslamQodeara7/MovieDB",category:"c1"},
 {name:"Alex Smith",link:"https://github.com/IslamQodeara7/AlexSmith",category:"c1"},
 {name:"Nice Slider",link:"https://github.com/IslamQodeara7/HandMadeSlider",category:"c1"},
 {name:"Qoute of The Day",link:"https://github.com/IslamQodeara7/QouteOfTheDay",category:"c1"},
 {name:"Simone",link:"https://github.com/IslamQodeara7/Simone",category:"c1"},
 {name:"Smart Login System",link:"https://github.com/IslamQodeara7/SmartLoginSystem",category:"c1"},
 {name:"Weather Forecast",link:"https://github.com/IslamQodeara7/WeatherAPI",category:"c1"},
 {name:"Chicken Farms",link:"https://github.com/IslamQodeara7/chickenFarms",category:"c1"},
 {name:"Morph",link:"https://github.com/IslamQodeara7/broklyn",category:"c1"},
 {name:"Angular Notes 1",link:"https://github.com/IslamQodeara7/AngularNotes1",category:"c2"},
 {name:"Angular Notes 2",link:"https://github.com/IslamQodeara7/AngularNotes2",category:"c2"},
 {name:"Movies Database",link:"https://github.com/IslamQodeara7/MoviesDatabase",category:"c2"},



]





$(".nav-link").click(function () {
    let Href = $(this).attr("linker")
    let sectionOffest = $(Href).offset().top
    $("body,html").animate({ scrollTop: sectionOffest }, 250)
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
        case 'four':
            document.documentElement.style.setProperty(color1, palette4.clr1);
            document.documentElement.style.setProperty(color2, palette4.clr2);
            document.documentElement.style.setProperty(color3, palette4.clr3);
            document.documentElement.style.setProperty(color4, palette4.clr4);
            break;
        case 'five':
            document.documentElement.style.setProperty(color1, palette5.clr1);
            document.documentElement.style.setProperty(color2, palette5.clr2);
            document.documentElement.style.setProperty(color3, palette5.clr3);
            document.documentElement.style.setProperty(color4, palette5.clr4);
            break;




    }
    AOS.init();

    Projects.forEach(item=>{
        switch(item.category){
            case "c1":
                ProjectsResult+=` <div class="col-md-4 item  text-center p-3 c1">
                <h5 class="text-center">
                  
                  <span>
                    <a target="_blank" class="mx-2" href=${item.link}>
                      ${item.name}</a>
                  </span>
                </h5>
              
              </div>`
              break;
              case "c2":
                ProjectsResult+=` <div class="col-md-4 item  text-center p-3 c2">
                <h5 class="text-center">
                  
                  <span>
                    <a target="_blank" class="mx-2" href=${item.link}>
                      ${item.name}</a>
                  </span>
                </h5>
              
              </div>`
              break;
        }
       
    })

    $(".videosItems").html(ProjectsResult);

    var mixer = mixitup(".videosItems", {
        selectors: {
            target: '.videosItems .item'
        },
        animation: {
            duration: 300
        }
    });
    hideLoading();
    skills.forEach(item=>{
        skillsResult+=`<li class="col-md-3 px-5" data-aos="fade-up">
              <div class="my-3 py-3">${item}</div>
            </li>`
    });

    
    $(".skillsItems").html(skillsResult);
    

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

let palette4 = {
    clr1: "#fff5e0",
    clr2: "#ff6969",
    clr3: "#bb2525",
    clr4: "#141e46"
}
let palette5 = {
    clr1: "#040d12",
    clr2: "#183d3d",
    clr3: "#5c8374",
    clr4: "#93b1a6"
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
$('.palette4').click(() => {

    localStorage.setItem('palette', 'four');
    document.documentElement.style.setProperty(color1, palette4.clr1);
    document.documentElement.style.setProperty(color2, palette4.clr2);
    document.documentElement.style.setProperty(color3, palette4.clr3);
    document.documentElement.style.setProperty(color4, palette4.clr4);

});
$('.palette5').click(() => {

    localStorage.setItem('palette', 'five');
    document.documentElement.style.setProperty(color1, palette5.clr1);
    document.documentElement.style.setProperty(color2, palette5.clr2);
    document.documentElement.style.setProperty(color3, palette5.clr3);
    document.documentElement.style.setProperty(color4, palette5.clr4);

});




setInterval(() => {
    quote++;
    if (quote > 3) {
        quote = 1;
    }
    $(`.myName${quote}`).css({ display: 'inline-block' });
    $(`.myName${quote}`).siblings().css({ display: 'none' });

}, 5000)