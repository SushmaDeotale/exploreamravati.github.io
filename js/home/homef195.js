(function($) {
    $(window).on("load", function() {
        $("#doct_search").mCustomScrollbar({
            theme: "dark"
        });
    });
})(jQuery)


$('.banner-slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
});

// $('#search_box').on('click', function () {
//      $('#doct_search').show()
//  });
//  $(document).mouseup(function (e) {
//      var popup = $("#doct_search");
//      if (!$('#search_box').is(e.target) && !popup.is(e.target) && popup.has(e.target).length == 0) {
//          popup.hide();
//      }
//  });

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 120 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #a5aebd}";
    document.body.appendChild(css);
};


$('.search-input').on('click', function() {
    $('.search_placeholder').hide()
});
$('.search_placeholder').on('click', function() {
    $(this).hide()
});

$('.search-input input').blur(function() {
    if (!$(this).val()) {
        $('.search_placeholder').show();
    }
});

$('.search-input input').focus(function() {
    $('.search_placeholder').hide();
});

$(document).ready(function() {

    $('#app_send').click(function(e) {
        e.preventDefault();
        $("#app_send").prop("disabled", true);
        var app_mobile = $('#app_mobile').val();
        var base_path = $('#base_path').val();
        var token = $('#token').val();
        var reg = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;

        if (app_mobile == "") {
            $('#app_ajax').html('Please enter your mobile no');
            $("#app_send").prop("disabled", false);
        } else if (reg.test(app_mobile) == false) {
            $('#app_ajax').html('Please enter valid mobile no');
            $("#app_send").prop("disabled", false);
        } else if (app_mobile.length > 10) {
            $('#app_ajax').html('Please enter valid mobile no');
            $("#app_send").prop("disabled", false);
        } else {
            $.ajax({
                type: 'POST',
                data: {
                    "app_mobile": app_mobile,
                    "_token": token
                },
                url: base_path + '/get_link_on_mobile',

                success: function(response) {
                    $("#app_send").prop("disabled", false);
                    if (response == 1) {
                        $('#app_ajax').html('We have sent you message for application download links');
                        $('#app_mobile').val('');
                    } else {
                        $('#app_ajax').html('Something went wrong, please try again');
                        $('#app_mobile').val('');
                    }
                }
            });
        }
    });

});

$("#search_box").keyup(function() {
    var base_path = $('#base_path').val();
    var token = $('#token').val();
    var keyword = $("input[name=main_search]").val();

    if (keyword.length >= 3) {
        $.ajax({
            type: 'GET',
            data: {
                "keyword": keyword
            },
            url: base_path + '/homemainsearch',

            success: function(response) {
                if (response == "") {
                    $('.doct_search').hide()
                } else {

                    var keyword = $("input[name=main_search]").val();

                    if (keyword.length >= 3) {
                        $('.doct_search').show()
                        $('.doct_search_inner').html("");
                        $('.doct_search_inner').html(response);
                    } else {
                        $('.doct_search').hide()
                    }
                }
            }
        });
    } else {
        $('.doct_search').hide()
        $('.doct_search_inner').html("");
    }
});