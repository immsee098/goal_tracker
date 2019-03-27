//form 구현
function listBtnClick() {
    $(".itemList").click(function() {
        var class_names = $(this).attr("class");
        var target_class = class_names.substr(
            class_names.indexOf("num_of_items")
        );
        var localStorage_key = $("." + target_class)
            .find(".item-name")
            .text();

        var content_string_load = localStorage.getItem(localStorage_key);
        content_dict = JSON.parse(content_string_load);
        for (var key in content_dict) {
            if (content_dict[key] === "") {
                delete content_dict[key];
            }
        }
        console.log(content_dict);
        console.log(typeof content_dict);
        var $list = $(".total_stamp").empty();
        for (i = 1; i <= content_dict.numbs; i++) {
            $(".total_stamp").append(
                '<div class="stamp_container ' +
                    i +
                    '">' +
                    '<p class="number">' +
                    i +
                    "</p>" +
                    '<img class="stamp" src="/sun.png" alt="">' +
                    "</div>"
            );
        }
        $(".stamp_container").click(function() {
            if (
                $(this)
                    .find(".stamp")
                    .hasClass("stamp_click")
            ) {
                $(this)
                    .find(".stamp")
                    .removeClass("stamp_click");
            } else {
                $(this)
                    .find(".stamp")
                    .addClass("stamp_click");
            }
        });
    });
}

function closebtn() {
    self.close();
}

$(".form").submit(function(e) {
    e.preventDefault();
});

$(".submitbtn").click(function(e) {
    if (
        document.getElementsByTagName("input").goals.value === "" &&
        document.getElementsByTagName("input").rewards.value === ""
    ) {
        alert("목표와 리워드를 입력해주세요");
        e.preventDefault();
    } else if (document.getElementsByTagName("input").goals.value === "") {
        alert("목표를 입력해주세요");
        e.preventDefault();
    } else if (document.getElementsByTagName("input").rewards.value === "") {
        alert("리워드를 입력해주세요");
        e.preventDefault();
    } else {
        var storage_key = $("#goals").val();
        for (var i = 0; i <= localStorage.length; i++) {
            if (localStorage.key(i) === storage_key) {
                alert("같은 이름의 목표가 있습니다.");
                return false;
            }
        }

        var content = {};
        content["goals"] = $("#goals").val();
        content["rewards"] = $("#rewards").val();
        content["numbs"] = $("#numbs").val();
        console.log(content);
        var content_string = JSON.stringify(content);

        form_content = decodeURIComponent(content_string);
        localStorage.setItem(storage_key, form_content);

        var content_string_load = localStorage.getItem(
            localStorage.key(localStorage.length - 1)
        );

        content_dict = JSON.parse(content_string_load);
        for (var key in content_dict) {
            if (content_dict[key] === "") {
                delete content_dict[key];
            }
        }
        console.log(content_dict);
        var $list = $(".goal_list");
        var $elem = $("#item-template")
            .clone()
            .removeAttr("id");

        $elem.find(".item-no").html("목표" + $(".itemList").length);
        $elem.find(".item-name").html(content_dict.goals);
        $elem.addClass("num_of_items" + $(".itemList").length);
        //$elem
        //    .find(".item-detail")
        //    .html(content_dict.numbs, content_dict.months);

        $list.append($elem);
        listBtnClick();

        for (i = 1; i <= content_dict.numbs; i++) {
            $(".total_stamp").append(
                '<div class="stamp_container ' +
                    i +
                    '">' +
                    '<p class="number">' +
                    i +
                    "</p>" +
                    '<img class="stamp" src="/sun.png" alt="">' +
                    "</div>"
            );
        }


        $(".stamp_container").click(function() {
            if (
                $(this)
                    .find(".stamp")
                    .hasClass("stamp_click")
            ) {
                $(this)
                    .find(".stamp")
                    .removeClass("stamp_click");
            } else {
                $(this)
                    .find(".stamp")
                    .addClass("stamp_click");
            }
        });
    }
});

$("#goalbtn").click(function() {
    $("#modalbtn").click();
});

$(document).ready(function() {
    $(".mdbt").hide();
});

$(document).ready(function() {
    $(".mdbt").hide();
});

// 목표 저장

var content_dict;

// 스탬프 변수 저장

$(function() {
    for (var i = 1; i <= localStorage.length; i++) {
        var content_string_load = localStorage.getItem(localStorage.key(i - 1));
        content_dict = JSON.parse(content_string_load);
        for (var key in content_dict) {
            if (content_dict[key] === "") {
                delete content_dict[key];
            }
        }
        console.log(content_dict);
        var $list = $(".goal_list");
        var $elem = $("#item-template")
            .clone()
            .removeAttr("id");

        $elem.find(".item-no").html("목표" + $(".itemList").length);
        $elem.find(".item-name").html(content_dict.goals);
        $elem.addClass("num_of_items" + $(".itemList").length);
        //$elem
        //    .find(".item-detail")
        //    .html(content_dict.numbs, content_dict.months);

        $list.append($elem);
    }

    listBtnClick();
});

// 배경화면 색 바꾸기
$(".pink").click(function() {
    $(".grid_sections2").attr("id", "pink");
});

$(".green").click(function() {
    $(".grid_sections2").attr("id", "green");
});

$(".yellow").click(function() {
    $(".grid_sections2").attr("id", "yellow");
});

$(".blue").click(function() {
    $(".grid_sections2").attr("id", "blue");
});

//  스탬프 바꾸기
$(".stamp_sun").click(function() {
    $(".stamp").attr("src", "/sun.png");
});

$(".stamp_monkey").click(function() {
    $(".stamp").attr("src", "/monkey.png");
});

$(".stamp_bear").click(function() {
    $(".stamp").attr("src", "/bear.png");
});

$(".stamp_ducky").click(function() {
    $(".stamp").attr("src", "/ducky.png");
});

$(".stamp_fox").click(function() {
    $(".stamp").attr("src", "/fox.png");
});

$(".stamp_hedgehog").click(function() {
    $(".stamp").attr("src", "/hedgehog.png");
});