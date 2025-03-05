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
                // Если элемент выходит из экрана, убираем класс animate
                // entry.target.classList.remove('animate');
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
        threshold: 1.0 // 70% элемента должно быть видно
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
  
    console.log("Секции найдены:", sections);
  });
  
