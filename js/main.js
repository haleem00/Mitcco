

let mybuttt = document.getElementById("goup");
// let navbar = document.getElementById("nav");
let navbar = document.querySelector(".bg-dark");

window.onscroll = function () {
// change backgroud of navbar
    if (window.pageYOffset > 10) {
        navbar.style.setProperty("background-color", "#00b5e1", "important")

    }else {
        navbar.style.setProperty("background-color", "transparent ", "important")
    }

// hide the arrow which scroll up
    if (window.pageYOffset >= 500) {
        
        mybuttt.style.display = "block";

        mybuttt.onclick = function () {
    
        
            window.scrollTo({top: 0, behavior: 'smooth'});
        
        }
        } else {
        mybuttt.style.display = "none";
        
        }
        // console.log(window.pageYOffset)
}



// how to make class active in nav bars on scroll /

window.addEventListener("scroll" ,event => {


    let mYnavBar = document.querySelectorAll(".nav ul li .nav-link"),
        fromTop = window.scrollY;
    
        mYnavBar.forEach(link => {
    
            let nameHash = document.querySelector(link.hash);
    
            if (nameHash.offsetTop - 200<= fromTop && 
                nameHash.offsetTop + nameHash.offsetHeight - 200> fromTop) {
    
                    link.classList.add("active");
            } else {
                    link.classList.remove("active");
            }
        
        });
        
    });

    // imges array
    let imagesARry = ['3M.png','ABB.png','ALLEN BRADLEY.png','AMETEK.png','ANSELL.png','APEX.png','ASCO.png',
        'BAKER HUGHES.png','BALDOR.png','BALLUFF.png','BENTLY NEVADA.png','BISON.png','BLACK+ DECKER.png',
        'BOSCH.png','BRIGGS-STRATTON.png',
        'BROOK CROMPTON.png','BUSSMANN.png','CAT.png','CISCO.png','CONDUCTIX WAMPFLER.png','CONTINENTAL.png',
        'CROMPTON CONTROLS.png','CROSBY.png','DAIKIN.png','DANFOSS.png','DAYTON.png','DEWALT.png','DICKSON.png','DONALDSON.png',
        'EATON.png','EBM-PAPST.png','ELLIWELL.png','EMERSON.png','ENDRESS + HAUSER.png','ENERPAC.png',
        'ERICSON.png','ESAB.png','FACOM.png','FISCHER.png','FLEXIDUCT.png','FLOWSERVE.png','FLUKE.png',
        'FRANKLIN ELECTRIC.png','FUJI.png','GAC.png','GAZELLE.png','GENERAL-ELECTRIC.png','GEWISS.png','HARRIS.png',
        'HAWK.png','HEMPEL.png','HITACHI.png','HONDA.png','HONEYWELL.png','HYDAC.png','INSIZE.png',
        'IRWIN.png','KARCHER.png','KEYENCE.png','KHIMJI PAINTS.png','KING TONY.png',
        'KNIPEX.png','LEGRAND.png','LINCOLN.png','LOGITECH.png','LOVATO ELECTRIC.png','MAKITA.png',
        'MERLIN GERIN.png','MILANO.png','MILWAUKEE.png','MITSUBISHI ELECTRIC.png',
        'MOELLER.png','MOHAWK.png','MOTREC.png','NATIONAL PAINTS.png','NORGREN.png','NORTON.png',
        'NTN.png','OMRON.png','OSRAM.png','PANASONIC.png','PARKER.png','PHILIPS.png',
        'REXROTH.png','RIDGID.png','RITTAL.png','ROCKWELL AUTOMATION.png','ROSEMOUNT.png',
        'RS COMPONENTS.png','SAMSUNG.png','SCHNEIDER.png','SEIMENS.png','SELEX.png','SELTEC.png',
        'SHARP.png','SKF.png','SNAP ON.png','STANLEY.png','TECO.png','TEMPCO.png',
        'TIMKEN.png','TOTAL.png','USAG.png','WEIDMULLER.png','WEILER.png','WERNER.png',
        'WIEGMANN.png','WIKA.png','YASKAWA.png',"OSRAM - Copy.png", "RITTAL - Copy.png",'STANLEY - Copy.png','SCHNEIDER - Copy.png',
        'ROSEMOUNT - Copy.png','ROCKWELL AUTOMATION - Copy.png','OMRON - Copy.png','NATIONAL PAINTS - Copy.png',
        'MOHAWK - Copy.png','MERLIN GERIN - Copy.png','LOVATO ELECTRIC - Copy.png'
        ]


    let brands = document.querySelector(".brand  .carousel-inner")
    let listchildern = brands.children
    let carouselIndicators = document.getElementsByClassName("carousel-indicators")


function Brands() {
    
    // to create all div
    for (let i = 0 ; i <= 4 ; i++) {
        let carouselTtem = document.createElement("div")
        carouselTtem.className = "carousel-item "
        brands.appendChild(carouselTtem);


        listchildern[1].classList.add("active") 


        let row = document.createElement("div");
        row.className = "row"
        carouselTtem.appendChild(row)

        for(let n = 0 ; n <= 23 ; n++) {
            let col = document.createElement("div")
            col.className = "col-lg-2 col-sm-3 content-box";
            row.appendChild(col);

            let imgBox = document.createElement("div");
            imgBox.className= "img-box";
            col.appendChild(imgBox)

            let images = document.createElement("img");
            images.className = "imgs"

            imgBox.appendChild(images)
        }
    }

    let currentImage = 0;
    let imgs = document.querySelectorAll(".imgs")
    imgs.forEach(img => {

        img.src = "images/Brands-Logos/" + imagesARry[currentImage++];
        img.alt = imagesARry[currentImage - 1];
    })
}
Brands();

