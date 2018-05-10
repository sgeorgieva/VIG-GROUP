$(document).ready(function(){
    $(window).load(function() {
        $(".multiple-items > ul.slick-dots").css("bottom", 25 + "%");
        $(".news-items > ul.slick-dots").css("bottom", 100 + "%");
    });

	$('.multiple-items').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.news-items').slick({
        dots: true,
        arrows: false,
        slidesToShow: 3,
        fade: false,
        // slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2700,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $(document).ready(function() {
        var docHeight = $(window).height();
        var footerHeight = $('footer').height();
        var footerTop = $('footer').position().top + footerHeight;
        if (footerTop < docHeight) {
            $('footer').css('margin-top', 10 + (docHeight - footerTop) + 'px');
        }
    });

    //hide-show text with click on link
    $('#gas-food').click(function(){
        $('#description1').empty();
        let header = $('<h3>Газове с приложение в хранително-вкусовата промишленост</h3>');

        let img1 = $('<span class="img1"></span>');

        let img2 = $('<span class="img2"></span>');

        let img3 = $('<span class="img3"></span>');

        let p = $('<p>Air Liquide е пионер в разработването на газове за хранителни продукти и в съответствие с международните и местните разпоредби за безопасност. Днес хиляди клиенти се доверяват на високите ни постижения и надежността на продуктите ни. Ние предлагаме широка гама от газове използвани в хранително-вкусовата промишленост.</p>');

        let p2 = $('<p>Като отправна точка в индустрията, нашите продукти на ALIGAL ™ отговарят на стандартите HACCP (Анализ на опасността Критична контролна точка) за производство и логистика на всички течности, свързани с хранително-вкусовата промишленост. ALIGAL ™ надхвърля изискваните критерии при придържането към строги спецификации в допълнение към осигуряването на гарантирана проследимост по време на производствения цикъл. Основните ни продукти са:</p>');

        let p3 = $('<p id="little-font">… и още много други. За въпроси свързани с приложението на техническите газове в обработката на храни, не се притеснявайте да се свържете с нас през контактната форма или на посочените телефони.</p>');

        let div = $('<div class="main-text text-left">');

        div.attr('style', 'margin-bottom:20px', 'text-align:left');
        header.attr('style', 'margin-top:0; margin-bottom: 30px;');
        div.append(header);
        div.append(img1);
        div.append(p);
        div.append(p2);

        let divP = $('p class="col-md-12 text-left"></p>');
        let a = $('<a href="pdf/ALIGAL_15_Europe_BG.pdf" target="blank" class="pdf">aligal 15</a>');
        let b = $('<a href="pdf/ALIGAL_27_Europe_BG.pdf" target="blank" class="pdf">aligal 27</a>');

        div.append(divP);
        divP.append(a);
        divP.append(b);
        div.append(p3);
        div.append(img2);
        div.append(img3);

        $('#description1').append(div);
    });
    $('#gas-metal').click(function(){
        $('#description1').empty();
        let header = $('<h3>Газове с приложение в обработката на метали</h3>');

        let img4 = $('<span class="img4"></span>');

        let img5 = $('<span class="img5"></span>');

        let img6 = $('<span class="img6"></span>');

        let p = $('<p>През 2013 г. в световен мащаб са използвани близо 1500 милиона тона стомана. Повече от една трета от тях са били предназначени за производството на метални изделия, което е много разнообразен пазар във всеки един смисъл. Производствените процеси се простират от основно заваряване до специализирано лазерно рязане.</p>');

        let p2 = $('<p>Тъй като индустрията за производство на метали е разнообразна, Air Liquide е наясно, че производителите се нуждаят от доверен доставчик на газ, способен да се справи със сложността на производствените проекти и цикъл на всеки индивидуален  клиент. В Air Liquide постигаме това с водеща гама премиум газове, които отговарят на всяко стриктно изискване за безопасност, качество, производителност и ефективност на разходите.</p>');

        let p3 = $('<p>Рязането на метални суровини е процес, при който производителят превръща листове, тръби, намотки и други в различни по размер или форма изделия. В Air Liquide се предлагат решения за рязане въз основа на предпочитания източник на енергия на нашите клиенти:</p>')

        let p4 = $('<p>Заваряването е основният фокус на металообработването. В този етап формовани и изработени части се сглобяват, заваряват на място и след това се проверяват за точност. Именно за тази дейност, ние предлагаме ARCAL ™ - водещата ни марка защитни газове (аргон и смеси на аргон), отговарящи на ISO стандартите. Най-подходящ за процесите на MIG-MAG и TIG.</p>');

        let p5 = $('<p>Основните ни продукти за обработка на метали са:</p>')

        let p6 = $('<p id="little-font">… и още много други. За въпроси свързани с приложението на техническите газове в обработката на храни, не се притеснявайте да се свържете с нас през контактната форма или на посочените телефони.</p>');

        let ul = $('<ul class="normal_list"><li>Пламък, използващ FLAMAL ™ - гама от кислородни и горивни газове, които подобряват процесите на рязане по отношение на безопасността, качеството и производителността;</li><li>Лазер, използващ LASAL ™ - който подобрява производителността и надеждността на специализираните лазерни машини.</li></ul>')
        let div = $('<div class="main-text text-left">');

        div.attr('style', 'margin-bottom:20px', 'text-align:left');
        header.attr('style', 'margin-top:0; margin-bottom: 30px;');
        div.append(header);
        div.append(img4);
        div.append(p);
        div.append(p2);
        div.append(p3);
        div.append(ul);
        div.append(p4);
        div.append(p5);

        let divP = $('p class="col-md-12 text-left"></p>');
        let a = $('<a href="pdf/OXYGEN Europe BG.pdf" target="blank" class="pdf">OXYGEN</a>');
        let b = $('<a href="pdf/ACETYLENE Europe _BG_2016.pdf" target="blank" class="pdf">ACETYLENE</a>');
        let c = $('<a href="pdf/ALPHAGAZ 1 ARGON Europe BG.pdf" target="blank" class="pdf">ALPHAGAZ 1 ARGON</a>');
        let d = $('<a href="pdf/ALPHAGAZ 1 HELIUM Europe BG.pdf" target="blank" class="pdf">ALPHAGAZ 1 HELIUM</a>');
        let e = $('<a href="pdf/ARCAL 1 V2.pdf" target="blank" class="pdf">ARCAL 1</a>');
        let f = $('<a href="pdf/ARCAL 1 Europe BG_jan2011.pdf" target="blank" class="pdf hide">Техническа документация за ARCAL 1</a>');
        let g = $('<a href="pdf/ARCAL 5 V1.pdf" target="blank" class="pdf">ARCAL 5 </a>');
        let h = $('<a href="pdf/ARCAL 5 Europe BG.pdf" target="blank" class="pdf hide">Техническа документация за ARCAL 5</a>');
        let i = $('<a href="pdf/ARCAL 12 V1.pdf" target="blank" class="pdf">ARCAL 12</a>');
        let k = $('<a href="pdf/ARCAL 12 Europe BG.pdf" target="blank" class="pdf hide">Техническа документация за ARCAL 12</a>');
        let l = $('<a href="pdf/ARCAL 21 V1.pdf" target="blank" class="pdf">ARCAL 21</a>');
        let m = $('<a href="pdf/ARCAL 21 Europe BG.pdf" target="blank" class="pdf hide">Техническа документация за ARCAL 21</a>');

        div.append(divP);
        divP.append(a);
        divP.append(b);
        divP.append(c);
        divP.append(d);
        divP.append(e);
        divP.append(f);
        divP.append(g);
        divP.append(h);
        divP.append(i);
        divP.append(k);
        divP.append(l);
        divP.append(m);
        div.append(p6);
        div.append(img5);
        div.append(img6);

        $('#description1').append(div);
        var arrSubLinks = [e, g, i, l];

        $.each(arrSubLinks , function(){
            $(this).on("click", function(){
                $(this).next().toggleClass('hide shown');
            });
        });
    });

    //set font-weight on active links in menu
    $(function(){
        var current_page_URL = location.href;
        $("a").each(function() {
            if ($(this).attr("href") !== "#") {
                var target_URL = $(this).prop("href");
                if (target_URL == current_page_URL) {
                    $('.nav li a').removeClass('active');
                    $(this).addClass('active');
                    return false;
                }
            }
        });
    });

    //active class for gas-products
    $( ".collapsed").click(function() {
        $(this).toggleClass('shown');
    });

//validation emails
    $('#btn-submit').click(function() {

        $(".error").hide();
        var hasError = false;
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var emailblockReg =
        /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

        var emailaddressVal = $("#UserEmail").val();
        if(emailaddressVal == '') {
            $("#UserEmail").after('<span class="error">Моля, въведете вашия имейл адрес.</span>');
            hasError = true;
        }

        else if(!emailReg.test(emailaddressVal)) {
            $("#UserEmail").after('<span class="error">Въведете валиден имейл адрес.</span>');
            hasError = true;
        }

        if(hasError == true) {
            return false;
        }
    });
});

//Set Google API for contact
function initMap() {
    var options = {
        zoom: 13,
        center: {lat:43.832306, lng:25.946863}
    };
    //New map
    var map = new google.maps.Map(document.getElementById('map'), options);
    //Add marker
    var marker = new google.maps.Marker({
        position:{lat:43.832306, lng:25.946863},
        map: map
    });

    var infoWindow = new google.maps.InfoWindow({
        content: '<h5>Русе</h5><p>Русе, "Ви Ай Джи Груп" ООД ул. Д. Басарбовски 13 <br>(територия на бивша кожена фабрика)</p><p>‎+ 359 886 333 020</p><p>+ 359 898 506 199</p><a href="https://www.google.bg/maps/place/%22%D0%92%D0%B8+%D0%90%D0%B9+%D0%94%D0%B6%D0%B8+%D0%93%D1%80%D1%83%D0%BF%22%D0%9E%D0%9E%D0%94/@43.8323099,25.9446742,17z/data=!3m1!4b1!4m5!3m4!1s0x40ae6066a3157d69:0xf5c19cf11e9b737a!8m2!3d43.8323061!4d25.9468629">Виж в Google Maps</a>'
    });

    marker.addListener('click', function(){
        infoWindow.open(map, marker);
    });
}
