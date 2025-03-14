$(function() {
        // === ТЁМНАЯ ТЕМА | СВЕТЛАЯ ТЕМА ===

        const themeToggle = $("#theme-toggle");
        const body = $("body");
    
        // Проверка темы ОС и установить её, если пользователь не менял вручную
        if (!localStorage.getItem("theme")) {
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                body.addClass("dark-theme");
            }
        } else {
            // Если тема уже выбрана вручную, применить её
            if (localStorage.getItem("theme") === "dark") {
                body.addClass("dark-theme");
            }
        }
    
        // Переключение темы при клике на кнопку
        themeToggle.on("click", function() {
            body.toggleClass("dark-theme");

            // Сохраняем выбор в localStorage
            if (body.hasClass("dark-theme")) {
                localStorage.setItem("theme", "dark");
            } else {
                localStorage.setItem("theme", "light");
            }
        });
    });


$(function() {

    // const themeToggle = document.getElementById("theme-toggle");
    // const body = document.body;

    // // Проверка, была ли уже выбрана тёмная тема
    // if (localStorage.getItem("theme") === "dark") {
    //     body.classList.add("dark-theme");
    // }

    // // Переключение темы при клике на кнопку
    // themeToggle.addEventListener("click", () => {
    //     body.classList.toggle("dark-theme");

    //     // Сохраняем выбор в localStorage
    //     if (body.classList.contains("dark-theme")) {
    //         localStorage.setItem("theme", "dark");
    //     } else {
    //         localStorage.setItem("theme", "light");
    //     }
    // });


    



    
    var header = $("#header"),
        introHeight = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop(),

        projColOne = $("#projColOne"),
        projectItemOneHeight = $("#projectItemOne").innerHeight(),
        scrollAnimateProjectOne = $(window).scrollTop();

    // Header -> fixed header
    cheakScroll(scrollOffset);

    $(window).on("scroll", function() {
        // console.log(introHeight);
        // console.log(scrollOffset);
        
        scrollOffset = $(this).scrollTop();

        cheakScroll(scrollOffset);
    });

    function cheakScroll(scrollOffset) {
        if(scrollOffset >= introHeight) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    };







    // Header -> smooth scroll
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#navbar a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });


    // Header -> Menu nav toggle
    $("#nav-toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#navbar").toggleClass("active");
    });



    // Header -> Menu nav toggle -> сворачивание после выбора "пути"
    $("#navbar a").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active", false);
        $("#navbar").toggleClass("active", false);
        $("#nav-toggle").toggleClass("active", false);
    });







    // Intro -> when appearing on screen
    // Intro Animate - ia / IA

    // Получаем все элементы, которые которые будут подвергаться анимации
    const itemsIA = document.querySelectorAll('.--intAnim');

    // Опции для наблюдателя
    const optionsIA = {
        root: null, // Относительно окна браузера
        threshold: 1.0 // 100% элемента должно быть видно
    };

    // Функция обратного вызова для наблюдателя
    const callbackIA = (entries, observerIA) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Если элемент полностью на экране, добавляем класс animate для анимации
                if (entry.target.classList.contains('pht__img')) {
                    entry.target.classList.add('int-anim'); // (1) анимируется project__item
                } else if (entry.target.classList.contains('photo__info')) {
                    entry.target.classList.add('int-anim'); // (2) анимируется project__column 1
                } else if (entry.target.classList.contains('photo__social')) {
                    entry.target.classList.add('int-anim'); // (3) анимируется project__column 2
                
                } else if (entry.target.classList.contains('rope')) {
                    entry.target.classList.add('int-anim'); // (4) анимируется project__photo
                } else if (entry.target.classList.contains('r_i--one')) {
                    entry.target.classList.add('int-anim'); // (5) анимируется pj__photo 01
                } else if (entry.target.classList.contains('r_i--two')) {
                    entry.target.classList.add('int-anim'); // (5) анимируется pj__photo 02
                } else if (entry.target.classList.contains('r_i--three')) {
                    entry.target.classList.add('int-anim'); // (5) анимируется pj__photo 02
                } else if (entry.target.classList.contains('r_i--four')) {
                    entry.target.classList.add('int-anim'); // (5) анимируется pj__photo 02
                } else if (entry.target.classList.contains('r_i--five')) {
                    entry.target.classList.add('int-anim'); // (5) анимируется pj__photo 02
                
                } else if (entry.target.classList.contains('title__after')) {
                    entry.target.classList.add('int-anim'); // (5) анимируется pj__photo 02
                } else if (entry.target.classList.contains('t_l--one')) {
                    entry.target.classList.add('int-anim'); // (5) анимируется pj__photo 02
                } else if (entry.target.classList.contains('t_l--two')) {
                    entry.target.classList.add('int-anim'); // (5) анимируется pj__photo 02
                
                } else if (entry.target.classList.contains('borders')) {
                    entry.target.classList.add('int-anim'); // (5) анимируется pj__photo 02
                } else if (entry.target.classList.contains('b_a--one')) {
                    entry.target.classList.add('int-anim'); // (5) анимируется pj__photo 02
                } else if (entry.target.classList.contains('b_a--two')) {
                    entry.target.classList.add('int-anim'); // (5) анимируется pj__photo 02
                } else if (entry.target.classList.contains('b_a--three')) {
                    entry.target.classList.add('int-anim'); // (5) анимируется pj__photo 02
                } else if (entry.target.classList.contains('b_a--four')) {
                    entry.target.classList.add('int-anim'); // (5) анимируется pj__photo 02
                
                } else if (entry.target.classList.contains('tt_l--one')) {
                    entry.target.classList.add('int-anim'); // (5) анимируется pj__photo 02
                } else if (entry.target.classList.contains('tt_l--two')) {
                    entry.target.classList.add('int-anim'); // (5) анимируется pj__photo 02
                } else if (entry.target.classList.contains('tt_l--three')) {
                    entry.target.classList.add('int-anim'); // (5) анимируется pj__photo 02
                } else if (entry.target.classList.contains('tt_l--four')) {
                    entry.target.classList.add('int-anim'); // (5) анимируется pj__photo 02
                } else if (entry.target.classList.contains('tt_l--five')) {
                    entry.target.classList.add('int-anim'); // (5) анимируется pj__photo 02
                } else if (entry.target.classList.contains('tt_l--six')) {
                    entry.target.classList.add('int-anim'); // (5) анимируется pj__photo 02
                } else if (entry.target.classList.contains('tt_l--seven')) {
                    entry.target.classList.add('int-anim'); // (5) анимируется pj__photo 02
                
                } else if (entry.target.classList.contains('int__btn')) {
                    entry.target.classList.add('int-anim'); // (5) анимируется pj__photo 02
                }

            // } else {
                // Если элемент выходит из экрана, убираем класс animate
                // entry.target.classList.remove('animate');
            }
        });
    };

    // Создаём наблюдатель для каждого элемента
    const observerIA = new IntersectionObserver(callbackIA, optionsIA);

    // Наблюдаем за каждым элементом
    itemsIA.forEach(item => {
        observerIA.observe(item);
    });
    
    // });
    




    







// Projects -> starting animation while scrolling

        // version.01
            // cheakScrollToProject(scrollAnimateProjectOne);

            // $(window).on("scroll", function() {
            //     // console.log(introHeight);
            //     // console.log(scrollOffset);
                
            //     scrollAnimateProjectOne = $(this).scrollTop();

            //     cheakScrollToProject(scrollAnimateProjectOne);
            // });

            // function cheakScrollToProject(scrollAnimateProjectOne) {
            //     if(scrollAnimateProjectOne >= projectItemOneHeight) {
            //         projColOne.addClass("active");
            //     } else {
            //         projColOne.removeClass("active");
            //     }
            // };
    



        // version.02
    // Получаем элемент секции
    // const section = document.getElementById('projColOne');

    // // Опции для наблюдателя
    // const options = {
    //     root: null, // Относительно всего окна браузера
    //     threshold: 0.5 // Когда 50% элемента видны на экране
    // };
    
    // // Функция обратного вызова для наблюдателя
    // const callback = (entries, observer) => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             // Если секция появилась на экране, добавляем класс для анимации
    //             entry.target.classList.add('active');
    //         } else {
    //             // Если секция покидает экран, можно убрать класс (опционально)
    //             entry.target.classList.remove('active');
    //         }
    //     });
    // };
    
    // // Создаём наблюдатель
    // const observer = new IntersectionObserver(callback, options);
    
    // // Наблюдаем за секцией
    // observer.observe(section);



    
    
        // version.03
    // Получаем все элементы, которые которые будут подвергаться анимации
    const items = document.querySelectorAll('.project__column');

    // Опции для наблюдателя
    const options = {
        root: null, // Относительно окна браузера
        threshold: 0.7 // 70% элемента должно быть видно
    };

    // Функция обратного вызова для наблюдателя
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Если элемент на экране, добавляем класс animate для анимации
                entry.target.classList.add('animate');
            } else {
                // Если элемент выходит из экрана, убираю класс animate (по желанию)
                entry.target.classList.remove('animate');
            }
        });
    };

    // Создаём наблюдатель для каждого элемента
    const observer = new IntersectionObserver(callback, options);

    // Наблюдаем за каждым элементом
    items.forEach(item => {
        observer.observe(item);
    });









        // version for future project
        // future project - fp / FP

    // Получаем все элементы, которые которые будут подвергаться анимации
    const itemsFP = document.querySelectorAll('.--futrProj');

    // Опции для наблюдателя
    const optionsFP = {
        root: null, // Относительно окна браузера
        threshold: 1.0 // 100% элемента должно быть видно
    };

    // Функция обратного вызова для наблюдателя
    const callbackFP = (entries, observerFP) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Если элемент полностью на экране, добавляем класс animate для анимации
                if (entry.target.classList.contains('pj_it--animate')) {
                    entry.target.classList.add('animate--pj_it'); // (1) анимируется project__item
                } else if (entry.target.classList.contains('pj_col-1--animate')) {
                    entry.target.classList.add('animate--pj_col-1'); // (2) анимируется project__column 1
                } else if (entry.target.classList.contains('pj_col-2--animate')) {
                    entry.target.classList.add('animate--pj_col-2'); // (3) анимируется project__column 2
                } else if (entry.target.classList.contains('pj_pht--animate')) {
                    entry.target.classList.add('animate--pj_pht'); // (4) анимируется project__photo
                } else if (entry.target.classList.contains('pj_ph1--animate')) {
                    entry.target.classList.add('animate--pj_ph1'); // (5) анимируется pj__photo 01
                } else if (entry.target.classList.contains('pj_ph2--animate')) {
                    entry.target.classList.add('animate--pj_ph2'); // (5) анимируется pj__photo 02
                } else if (entry.target.classList.contains('pj_ph3--animate')) {
                    entry.target.classList.add('animate--pj_ph3'); // (5) анимируется pj__photo 03

                } else if (entry.target.classList.contains('pj_in--animate')) {
                    entry.target.classList.add('animate--pj_in'); // (6) анимируется project__info
                } else if (entry.target.classList.contains('pj_tit--animate')) {
                    entry.target.classList.add('animate--pj_tit'); // (7) анимируется project__title
                } else if (entry.target.classList.contains('pj_sub--animate')) {
                    entry.target.classList.add('animate--pj_sub'); // (8) анимируется project__subtitle

                } else if (entry.target.classList.contains('pj_ic--animate')) {
                    entry.target.classList.add('animate--pj_ic'); // (9) анимируется project__icon
                } else if (entry.target.classList.contains('pj_tex--animate')) {
                    entry.target.classList.add('animate--pj_tex'); // (10) анимируется project__text
                } else if (entry.target.classList.contains('pj_bttn--animate')) {
                    entry.target.classList.add('animate--pj_bttn'); // (11) анимируется project__btn
                } else if (entry.target.classList.contains('pj_btn--animate')) {
                    entry.target.classList.add('animate--pj_btn'); // (12) анимируется btn
                
                } else if (entry.target.classList.contains('sect--animate')) {
                    entry.target.classList.add('animate--sect'); // (00) анимируется section

                } else if (entry.target.classList.contains('pj_tx_item1--animate')) {
                    entry.target.classList.add('animate--pj_tx_item1'); // (14) анимируется proj__text item 01
                } else if (entry.target.classList.contains('pj_tx_item2--animate')) {
                    entry.target.classList.add('animate--pj_tx_item2'); // (14) анимируется proj__text item 02
                } else if (entry.target.classList.contains('pj_tx_item3--animate')) {
                    entry.target.classList.add('animate--pj_tx_item3'); // (14) анимируется proj__text item 03
                } else if (entry.target.classList.contains('pj_tx_item4--animate')) {
                    entry.target.classList.add('animate--pj_tx_item4'); // (14) анимируется proj__text item 04
                } else if (entry.target.classList.contains('pj_tx_item5--animate')) {
                    entry.target.classList.add('animate--pj_tx_item5'); // (14) анимируется proj__text item 05

                } else if (entry.target.classList.contains('pj_titOne--animate')) {
                    entry.target.classList.add('animate--pj_titOne'); // (14) анимируется project__titleOne
                } else if (entry.target.classList.contains('pj_titTwo--animate')) {
                    entry.target.classList.add('animate--pj_titTwo'); // (15) анимируется project__titleTwo

                } else if (entry.target.classList.contains('pj_b_text--animate')) {
                    entry.target.classList.add('animate--pj_b_text'); // (16) анимируется pj_btn_text

                } else if (entry.target.classList.contains('pj_it--animate')) {
                    entry.target.classList.add('animate--pj_it'); // (14) анимируется project__-----
                } else if (entry.target.classList.contains('pj_it--animate')) {
                    entry.target.classList.add('animate--pj_it'); // (15) анимируется project__-----
                } else if (entry.target.classList.contains('pj_it--animate')) {
                    entry.target.classList.add('animate--pj_it'); // (16) анимируется project__-----
                }



            // } else {
                // Если элемент выходит из экрана, убираем класс animate
                // entry.target.classList.remove('animate');
            }
        });
    };

    // Создаём наблюдатель для каждого элемента
    const observerFP = new IntersectionObserver(callbackFP, optionsFP);

    // Наблюдаем за каждым элементом
    itemsFP.forEach(item => {
        observerFP.observe(item);
    });
    
  });





// Header -> active link

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".sect");
    const menuLinks = document.querySelectorAll(".nav__link");
  
    const observerOptions = {
        root: null,
        threshold: 0.3, // 50% секции в видимой области
    };
  
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                menuLinks.forEach((link) => {
                    link.classList.remove("active");
                    if (link.getAttribute("href").substring(1) === entry.target.id) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }, observerOptions);
  
    sections.forEach((section) => observer.observe(section));
  
    // console.log("Секции найдены:", sections);
  });
  



// LAZY LOADING

// document.addEventListener("DOMContentLoaded", () => {
//     const sections = document.querySelectorAll(".lazy-section");
//     const images = document.querySelectorAll(".lazy-img");

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add("loaded");

//                 // Если это секция, загружаем все изображения внутри неё
//                 const imgs = entry.target.querySelectorAll(".lazy-img");
//                 imgs.forEach(img => {
//                     img.src = img.dataset.src; // Подставляем src из data-src
//                     img.classList.add("loaded");
//                 });

//                 observer.unobserve(entry.target);
//             }
//         });
//     });

//     sections.forEach(section => observer.observe(section));
// });

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".lazy-section");
    const images = document.querySelectorAll(".lazy-img");
    const bgElements = document.querySelectorAll(".lazy-bg");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("loaded");

                // Для изображений <img>
                if (entry.target.tagName === "IMG" && entry.target.dataset.src) {
                    entry.target.src = entry.target.dataset.src;
                    entry.target.classList.add("loaded");
                }

                // Для фоновых изображений
                if (entry.target.classList.contains("lazy-bg") && entry.target.dataset.bg) {
                    entry.target.style.backgroundImage = `url(${entry.target.dataset.bg})`;
                    entry.target.classList.add("loaded");
                }

                observer.unobserve(entry.target); // Остановить наблюдение после загрузки
            }
        });
    });

    sections.forEach(section => observer.observe(section));
    images.forEach(img => observer.observe(img));
    bgElements.forEach(bg => observer.observe(bg));
});







// About -> slider

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".about__content");
    const buttons = document.querySelectorAll(".slider__item");
  
    // Проверяем, есть ли слайды
    if (slides.length === 0 || buttons.length === 0) {
        console.error("Слайды или кнопки не найдены!");
        return;
    }
  
    buttons.forEach((btn, index) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
  
            // Убираем активные классы
            slides.forEach(slide => slide.classList.remove("active"));
            buttons.forEach(button => button.classList.remove("active"));
  
            // Добавляем активный класс к нужному слайду и кнопке
            if (slides[index]) {
                slides[index].classList.add("active");
                // console.log("Активный слайд: ", slides[index]); // проверка актив слайда
            }
            btn.classList.add("active");
        });
    });
  
    // Делаем первый слайд активным по умолчанию
    slides[0].classList.add("active");
    buttons[0].classList.add("active");
  });




// About -> change photo

// версия для одного набора изображений

// document.addEventListener("DOMContentLoaded", () => {
//     const images = [
//         "assets/media/images/20220402_125013.jpg",
//         "assets/media/images/20220304_091322.jpg",
//         "assets/media/images/20220304_153144.jpg",
//         "assets/media/images/20220307_092252.jpg"];
//     let currentIndex = 0;
//     let intervalId;
//     const imgElement = document.getElementById("changingImage");

//     function startImageRotation() {
//         if (!intervalId) {
//             intervalId = setInterval(() => {
//                 currentIndex = (currentIndex + 1) % images.length;
//                 imgElement.style.opacity = "0"; // Анимация исчезновения
//                 setTimeout(() => {
//                     imgElement.src = images[currentIndex];
//                     imgElement.style.opacity = "1"; // Анимация появления
//                 }, 700);
//             }, 5000);
//         }
//     }

//     function stopImageRotation() {
//         clearInterval(intervalId);
//         intervalId = null;
//     }

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 startImageRotation();
//             } else {
//                 stopImageRotation();
//             }
//         });
//     }, { threshold: 0.5 });

//     observer.observe(document.querySelector(".section--about"));
// });


  
document.addEventListener("DOMContentLoaded", () => {
    // Разные наборы изображений
    const imagesDesktop = [
        "assets/media/images/about/desktop/about_desktop-001-20220304_084348.png",
        "assets/media/images/about/desktop/about_desktop-003-20220304_091322.png",
        "assets/media/images/about/desktop/about_desktop-004-20220304_091324.png",
        "assets/media/images/about/desktop/about_desktop-005-20220304_153144.png",
        "assets/media/images/about/desktop/about_desktop-006-20220307_103557.png",
        "assets/media/images/about/desktop/about_desktop-007-20220311_104529.png",
        "assets/media/images/about/desktop/about_desktop-008-20220312_085643.png",
        "assets/media/images/about/desktop/about_desktop-009-20220312_085715.png",
        "assets/media/images/about/desktop/about_desktop-010-20220321_200150.png",
        "assets/media/images/about/desktop/about_desktop-011-20220321_200156.png",
        "assets/media/images/about/desktop/about_desktop-012-20220323_090331.png",
        "assets/media/images/about/desktop/about_desktop-013-20220331_073813.png",
        "assets/media/images/about/desktop/about_desktop-014-20220402_125013.png",
        "assets/media/images/about/desktop/about_desktop-015-20220409_062507.png",
        "assets/media/images/about/desktop/about_desktop-016-20220413_084709.png",
        "assets/media/images/about/desktop/about_desktop-019-20220413_090427.png",
        "assets/media/images/about/desktop/about_desktop-020-20220413_090439.png",
        "assets/media/images/about/desktop/about_desktop-021-20220413_090449.png",
        "assets/media/images/about/desktop/about_desktop-022-20220413_090536.png",
        "assets/media/images/about/desktop/about_desktop-023-20220413_090620.png",
        "assets/media/images/about/desktop/about_desktop-025-20220421_163130.png",
        "assets/media/images/about/desktop/about_desktop-027-20220422_160438.png",
        "assets/media/images/about/desktop/about_desktop-028-20220426_200049.png",
        "assets/media/images/about/desktop/about_desktop-030-20220430_133826.png",
        "assets/media/images/about/desktop/about_desktop-031-20220520_205056.png"];
    const imagesMobile = [
        "assets/media/images/about/mobile/about_mobile-001-20220304_084348.png",
        "assets/media/images/about/mobile/about_mobile-002-20220304_090241.png",
        "assets/media/images/about/mobile/about_mobile-005-20220304_091324.png",
        "assets/media/images/about/mobile/about_mobile-007-20220307_103557.png",
        "assets/media/images/about/mobile/about_mobile-008-20220311_104529.png",
        "assets/media/images/about/mobile/about_mobile-010-20220312_085715.png",
        "assets/media/images/about/mobile/about_mobile-011-20220321_200150.png",
        "assets/media/images/about/mobile/about_mobile-012-20220321_200156.png",
        "assets/media/images/about/mobile/about_mobile-014-20220331_073813.png",
        "assets/media/images/about/mobile/about_mobile-015-20220402_125013.png",
        "assets/media/images/about/mobile/about_mobile-016-20220409_062507.png",
        "assets/media/images/about/mobile/about_mobile-017-20220413_084709.png",
        "assets/media/images/about/mobile/about_mobile-019-20220413_085611.png",
        "assets/media/images/about/mobile/about_mobile-021-20220413_090439.png",
        "assets/media/images/about/mobile/about_mobile-024-20220413_090620.png",
        "assets/media/images/about/mobile/about_mobile-025-20220413_092401.png",
        "assets/media/images/about/mobile/about_mobile-027-20220421_163133.png",
        "assets/media/images/about/mobile/about_mobile-028-20220422_160438.png",
        "assets/media/images/about/mobile/about_mobile-030-20220426_200120.png",
        "assets/media/images/about/mobile/about_mobile-031-20220430_133826.png",
        "assets/media/images/about/mobile/about_mobile-032-20220520_205056.png"];

    let currentImages = imagesDesktop; // Начальный набор
    let currentIndex = 0;
    let intervalId;
    const imgElement = document.getElementById("changingImage");

    function updateImageSet() {
        if (window.matchMedia("(max-width: 768px)").matches) {
            currentImages = imagesMobile; // Если экран узкий
        } else {
            currentImages = imagesDesktop; // Если экран широкий
        }
        currentIndex = 0;
        imgElement.src = currentImages[currentIndex]; // Меняется изображение сразу
    }

    function startImageRotation() {
        if (!intervalId) {
            intervalId = setInterval(() => {
                currentIndex = (currentIndex + 1) % currentImages.length;
                imgElement.style.opacity = "0"; // Исчезновение
                setTimeout(() => {
                    imgElement.src = currentImages[currentIndex];
                    imgElement.style.opacity = "1"; // Появление
                }, 500);
            }, 4000);
        }
    }

    function stopImageRotation() {
        clearInterval(intervalId);
        intervalId = null;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startImageRotation();
            } else {
                stopImageRotation();
            }
        });
    }, { threshold: 0.5 });

    observer.observe(document.querySelector(".section--about"));

    // Отслеживание изменения ширины экрана
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    mediaQuery.addEventListener("change", updateImageSet);

    // Вызов сразу, чтобы применить правильный набор изображений при загрузке
    updateImageSet();
});
