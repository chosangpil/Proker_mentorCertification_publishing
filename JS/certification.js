const nextPageButton = document.getElementById("nextButton");
const checkButtons = document.querySelectorAll(".checkButton");
const submitButton = document.getElementById("submitButton");
const field = document.getElementById("field");
const process = document.getElementById("process");
const job = document.getElementById("job");
const link = document.getElementById("link");
const file = document.getElementById("file");
const information = document.getElementById("information");

// 페이지 swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    // loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    allowTouchMove: false,
    mousewheel: true,
    speed: 800,
});


// 파일 이름 표출
$(document).ready(function () {
    var fileTarget = $('.fileBox .inputFile');

    fileTarget.on('change', function () {
        if (window.FileReader) {
            var filename = $(this)[0].files[0].name;
        }
        else {
            var filename = $(this).val().split('/').pop().split('\\').pop();
        }

        $(this).siblings('.upload-name').val(filename);
    })
})


$('#field').keypress(function (event) {
    if (event.which == 13) {
        $('#fieldCheck').click();
        console.log("hi1");
        return false;
    }
});
$('#process').keypress(function (event) {
    if (event.which == 13) {
        $('#processCheck').click();
        console.log("hi2");
        return false;
    }
});
$('#job').keypress(function (event) {
    if (event.which == 13) {
        $('#jobCheck').click();
        console.log("hi3");
        return false;
    }
});
$('#link').keypress(function (event) {
    if (event.which == 13) {
        $('#linkCheck').click();
        console.log("hi4");
        return false;
    }
});
$('#information').keypress(function (event) {
    if (event.which == 13) {
        $('#informationCheck').click();
        console.log("hi5");
        return false;
    }
});


// 확인버튼 클릭시 다음페이지 이동
[].forEach.call(checkButtons, function (checkButton) {
    checkButton.addEventListener("click", moveNextPage, false);
})

function moveNextPage(e) {
    nextPageButton.click();
}

// 제출 버튼 조건
function submitMentorApply() {
    if (field.value == "" || process.value == "" || job.value == "" || link.value == "" || information.value == "") {
        alert("필수입력정보가 누락되어있습니다.");
    } else if (file.value == "파일을 등록해주세요.") {
        alert("인증서류파일을 등록해주세요.");
    } else {
        console.log("submit success");
    }
}

submitButton.addEventListener("click", submitMentorApply);