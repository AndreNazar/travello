let begin_bg = document.querySelector('.begin_bg');
let search = document.querySelector('.search_block .search');
let photo = document.querySelector('.img_block .photo img');
let curated_block = document.querySelector('.curated_block');
let curated_block_listener = document.querySelector('.curated_block .container .cur_header');
let deals_block_listener = document.querySelector('.deals_block');
let deals_block1 = document.querySelector('.deals_block .container');
let deals_block2 = document.querySelector('.deals_block .blocks');
let info_block = document.querySelector('.contacts_block .container .info_block');
let bbfing_listener = document.querySelector('.between_block_footer .blocks.container');
let bbfing = document.querySelectorAll('.between_block_footer .blocks.container img');
let footer_block = document.querySelector('.footer_block');
let map = document.querySelector('.about_us_block .map');
let open_mob_menu = document.querySelector('.open_mob_menu');
let quit = document.querySelector('.quit');
let mobile = document.querySelector('.mobile');
let desktop_menu = document.querySelectorAll('.desktop_menu a');
let links__mobile = document.querySelectorAll('.links__mobile a');
let header = document.querySelector('header');
let about_us_block = document.querySelector('.about_us_block');
let deals_block = document.querySelector('.deals_block');
let contacts_block = document.querySelector('.contacts_block');


setTimeout(() => {
    begin_bg.style.opacity = 0;
    setTimeout(() => {
        begin_bg.style.display = 'none';
    }, 1000)
}, 1000)
new Swiper('.city_bl_cont', {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
    breakpoints: {
        2000: {
            slidesPerView: 4.5,
            centeredSlides: false,
            spaceBetween: 30
        },
        1700: {
            slidesPerView: 3.5,
            centeredSlides: false,
            spaceBetween: 30
        },
        1400: {
            slidesPerView: 3,
            centeredSlides: false,
            spaceBetween: 30
        },
        1300: {
            slidesPerView: 2.85,
            centeredSlides: false,
            spaceBetween: 30
        },
        1200: {
            slidesPerView: 2.7,
            centeredSlides: false,
            spaceBetween: 30
        },
        870: {
            slidesPerView: 2.4,
            centeredSlides: false,
            spaceBetween: 30
        },
        750: {
            slidesPerView: 2.1,
            centeredSlides: false,
            spaceBetween: 30
        },
        650: {
            slidesPerView: 2.05,
            centeredSlides: false,
            spaceBetween: 30
        },
        565: {
            slidesPerView: 1.8,
            centeredSlides: false,
            spaceBetween: 30
        },
        490: {
            slidesPerView: 1.5,
            centeredSlides: false,
            spaceBetween: 30
        },
        435: {
            slidesPerView: 1.4,
            centeredSlides: true,
            spaceBetween: 30
        },
        395: {
            slidesPerView: 1.3,
            centeredSlides: true,
            spaceBetween: 30
        },
        0: {
            slidesPerView: 1.2,
            centeredSlides: true,
            spaceBetween: 30
        }
    }
})
new Swiper('.deals_bl_cont', {
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
        2000: {
            slidesPerView: 5.5,
            centeredSlides: false,
            spaceBetween: 30
        },
        1700: {
            slidesPerView: 4.5,
            centeredSlides: false,
            spaceBetween: 30
        },
        1400: {
            slidesPerView: 3.7,
            centeredSlides: false,
            spaceBetween: 30
        },
        1300: {
            slidesPerView: 3.6,
            centeredSlides: false,
            spaceBetween: 30
        },
        1200: {
            slidesPerView: 3.5,
            centeredSlides: false,
            spaceBetween: 30
        },
        1100: {
            slidesPerView: 3.4,
            centeredSlides: false,
            spaceBetween: 30
        },
        750: {
            slidesPerView: 3,
            centeredSlides: false,
            spaceBetween: 30
        },
        650: {
            slidesPerView: 2.6,
            centeredSlides: false,
            spaceBetween: 30
        },
        565: {
            slidesPerView: 2.3,
            centeredSlides: false,
            spaceBetween: 30
        },
        490: {
            slidesPerView: 2,
            centeredSlides: false,
            spaceBetween: 30
        },
        435: {
            slidesPerView: 1.8,
            centeredSlides: true,
            spaceBetween: 30
        },
        395: {
            slidesPerView: 1.65,
            centeredSlides: true,
            spaceBetween: 30
        },
        0: {
            slidesPerView: 1.5,
            centeredSlides: true,
            spaceBetween: 30
        }
    }
})


function showBlocks(block, zone_block, version) {
    if (block.getBoundingClientRect().top <= zone_block) {
        switch (version) {
            case 1:
                block.style.marginTop = 0;
                block.style.opacity = 1;
                break;

            case 2:
                block.style.animation = 'block1_anim 1.5s 0s linear 1 forwards';
                break;

            case 3:
                curated_block.style.opacity = 1;
                break;
            case 4:
                deals_block1.style.opacity = 1;
                deals_block2.style.opacity = 1;
                break;
            case 5:
                block.style.opacity = 1;
                break;
            case 6:
                let item = 0;
                bbfing[0].style.opacity = 1;
                let timeanim = setInterval(() => {
                    item++;
                    if (item >= bbfing.length) {
                        clearInterval(timeanim);
                    } else {
                        bbfing[item].style.opacity = 1;
                    }
                }, 100);
                break;
            case 7:
                block.style.opacity = 1
                break;

            default:
                break;
        }

    }
}

function openMenu(button, menu, act) {
    button.addEventListener('click', function () {
        if (act === 1) menu.style.transform = "translateX(0)"
        if (act === 0) menu.style.transform = "translateX(-200%)"
    })
}

function swipeLinks(link, block) {
    link.addEventListener('click', function () {
        mobile.style.transform = "translateX(-200%)"
        block.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

openMenu(open_mob_menu, mobile, 1);
openMenu(quit, mobile, 0);

/* ДЕСКТОПНЫЕ ССЫЛКИ */
swipeLinks(desktop_menu[0], header);
swipeLinks(desktop_menu[1], about_us_block);
swipeLinks(desktop_menu[2], curated_block);
swipeLinks(desktop_menu[3], deals_block);
swipeLinks(desktop_menu[4], contacts_block);

/* МОБИЛЬНЫЕ ССЫЛКИ */
swipeLinks(links__mobile[0], header);
swipeLinks(links__mobile[1], about_us_block);
swipeLinks(links__mobile[2], curated_block);
swipeLinks(links__mobile[3], deals_block);
swipeLinks(links__mobile[4], contacts_block);


window.addEventListener('mousemove', function (e) {
    var w = window.innerWidth;
    var h = window.innerHeight;

    var offsetX = e.screenX * 20 / w;
    var offsetY = e.screenY * 20 / h;

    map.style.transform = 'translate(' + offsetX + 'px, ' + offsetY + 'px)';
})

window.addEventListener('scroll', function () {

    showBlocks(search, 500, 1);
    showBlocks(photo, 500, 2);
    showBlocks(curated_block_listener, 500, 3);
    showBlocks(deals_block_listener, 500, 4);
    showBlocks(info_block, 300, 5);
    showBlocks(bbfing_listener, 500, 6);
    showBlocks(footer_block, 500, 7);

});