!(function() {
    var click_cnt = 0;
    jQuery(document).ready(function($) {
        $("html").click(function(e) {
            var n = 18;
            var $i;
            click_cnt++;
            if (click_cnt == 10) {
                $i = $("<b></b>").text("OωO");
            } else if (click_cnt == 20) {
                $i = $("<b></b>").text("(๑•́ ∀ •̀๑)");
            } else if (click_cnt == 30) {
                $i = $("<b></b>").text("(๑•́ ₃ •̀๑)");
            } else if (click_cnt == 40) {
                $i = $("<b></b>").text("(๑•̀_•́๑)");
            } else if (click_cnt == 50) {
                $i = $("<b></b>").text("（￣へ￣）");
            } else if (click_cnt == 60) {
                $i = $("<b></b>").text("(╯°口°)╯(┴—┴");
            } else if (click_cnt == 70) {
                $i = $("<b></b>").text("૮( ᵒ̌皿ᵒ̌ )ა");
            } else if (click_cnt == 80) {
                $i = $("<b></b>").text("╮(｡>口<｡)╭");
            } else if (click_cnt == 90) {
                $i = $("<b></b>").text("( ง ᵒ̌皿ᵒ̌)ง⁼³₌₃");
            } else if (click_cnt >= 100 && click_cnt <= 105) {
                $i = $("<b></b>").text("(ꐦ°᷄д°᷅)");
            } else {
                $i = $("<b></b>").text("(*^__^*)");
                n = Math.round(Math.random() * 14 + 6)
            }
            var x = e.pageX,
                y = e.pageY;
            $i.css({
                "z-index": 9999,
                "top": y - 20,
                "left": x,
                "position": "absolute",
                "color": "#199475",
                "font-size": n,
                "-moz-user-select": "none",
                "-webkit-user-select": "none",
                "-ms-user-select": "none"
            });
            $("body").append($i);
            $i.animate({
                "top": y - 180,
                "opacity": 0
            }, 1500, function() {
                $i.remove();
            });
        });
    });
})();