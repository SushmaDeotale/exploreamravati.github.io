var $ = jQuery.noConflict();
jQuery(document).ready(function() {
    $('.enumenu_ul').responsiveMenu({
        'menuIcon_text': '',
        onMenuopen: function() {}
    });

});

new WOW().init();

jQuery('select.lang-select').selectpicker();


$(document).ready(function() {
    $("#accordion").accordion({
        heightStyle: 'content',
        collapsible: true
    });
    $(".accordion").accordion({
        heightStyle: 'content',
        collapsible: true
    });
});

$(document).ready(function() {
    $(".tab-head").click(function() {
        $(this).addClass('open').siblings().removeClass('open');

    });
    $(".current").addClass("active");
});




/*SIDE BAR JS*/

$(document).ready(function() {
    if (screen.width <= 1023) {
        $(".list-mnu").show();
    }
    $(".side-menu-wrap > h3").click(function() {
        if (screen.width <= 1023) {
            $(".list-mnu").slideToggle();
        }
        return false
    });
});

jQuery('select.speciality-select').selectpicker();
jQuery('select.department-select').selectpicker();
jQuery('select.lastname-select').selectpicker();

$('.title-slider').slick({
    dots: false,
    infinite: true,
    arrows: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
});

/*END SIDE BAR JS*/

$(document).ready(function() {

    $('#send_email').click(function(e) {
        e.preventDefault();
        $("#send_email").prop("disabled", true);
        var email = $('#email').val();
        var base_path = $('#base_path').val();
        var token = $('#token').val();
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;


        if (email == "") {
            $('#return_ajax').html('Please enter your email address');
            $("#send_email").prop("disabled", false);
        } else if (reg.test(email) == false) {
            $('#return_ajax').html('Please enter valid email address');
            $("#send_email").prop("disabled", false);
        } else {

            $.ajax({
                type: 'POST',
                data: {
                    "email": email,
                    "_token": token
                },
                url: base_path + '/email_check',

                success: function(response) {
                    $("#send_email").prop("disabled", false);

                    if (response == 0) {
                        $('#return_ajax').html('You are already subscribed! Stay tuned for KDAH newsletters!');
                    } else if (response == 1) {
                        $('#return_ajax').html('Thanks for your subscription!');
                        $('#email').val('');
                    }
                }
            });
        }
    });
});




/*Discover logo*/
$(document).ready(function() {
    $("#frag-1").click(function() {
        $("#fragment-1").show();
        $("#fragment-2,#fragment-3,#fragment-4,#fragment-5,#fragment-6,#fragment-7,#fragment-8,#fragment-9,#fragment-10,#fragment-11,#fragment-12").hide();
    });
    $("#frag-2").click(function() {
        $("#fragment-2").show();
        $("#fragment-1,#fragment-3,#fragment-4,#fragment-5,#fragment-6,#fragment-7,#fragment-8,#fragment-9,#fragment-10,#fragment-11,#fragment-12").hide();
    });
    $("#frag-3").click(function() {
        $("#fragment-3").show();
        $("#fragment-2,#fragment-1,#fragment-4,#fragment-5,#fragment-6,#fragment-7,#fragment-8,#fragment-9,#fragment-10,#fragment-11,#fragment-12").hide();
    });
    $("#frag-4").click(function() {
        $("#fragment-4").show();
        $("#fragment-2,#fragment-3,#fragment-1,#fragment-5,#fragment-6,#fragment-7,#fragment-8,#fragment-9,#fragment-10,#fragment-11,#fragment-12").hide();
    });
    $("#frag-5").click(function() {
        $("#fragment-5").show();
        $("#fragment-2,#fragment-3,#fragment-4,#fragment-1,#fragment-6,#fragment-7,#fragment-8,#fragment-9,#fragment-10,#fragment-11,#fragment-12").hide();
    });
    $("#frag-6").click(function() {
        $("#fragment-6").show();
        $("#fragment-2,#fragment-3,#fragment-4,#fragment-5,#fragment-1,#fragment-7,#fragment-8,#fragment-9,#fragment-10,#fragment-11,#fragment-12").hide();
    });
    $("#frag-7").click(function() {
        $("#fragment-7").show();
        $("#fragment-2,#fragment-3,#fragment-4,#fragment-5,#fragment-6,#fragment-1,#fragment-8,#fragment-9,#fragment-10,#fragment-11,#fragment-12").hide();
    });
    $("#frag-8").click(function() {
        $("#fragment-8").show();
        $("#fragment-2,#fragment-3,#fragment-4,#fragment-5,#fragment-6,#fragment-7,#fragment-1,#fragment-9,#fragment-10,#fragment-11,#fragment-12").hide();
    });
    $("#frag-9").click(function() {
        $("#fragment-9").show();
        $("#fragment-2,#fragment-3,#fragment-4,#fragment-5,#fragment-6,#fragment-7,#fragment-8,#fragment-1,#fragment-10,#fragment-11,#fragment-12").hide();
    });
    $("#frag-10").click(function() {
        $("#fragment-10").show();
        $("#fragment-2,#fragment-3,#fragment-4,#fragment-5,#fragment-6,#fragment-7,#fragment-8,#fragment-9,#fragment-1,#fragment-11,#fragment-12").hide();
    });
    $("#frag-11").click(function() {
        $("#fragment-11").show();
        $("#fragment-2,#fragment-3,#fragment-4,#fragment-5,#fragment-6,#fragment-7,#fragment-8,#fragment-9,#fragment-10,#fragment-1,#fragment-12").hide();
    });
    $("#frag-12").click(function() {
        $("#fragment-12").show();
        $("#fragment-2,#fragment-3,#fragment-4,#fragment-5,#fragment-6,#fragment-7,#fragment-8,#fragment-9,#fragment-10,#fragment-11,#fragment-1").hide();
    });
});


/*End Discover logo*/

function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,ar,hi,ru,ur,bn,fr',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
    }, 'google_translate_element');
}