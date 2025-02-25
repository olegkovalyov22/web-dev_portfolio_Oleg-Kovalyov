$(function(){
    
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
    
  });