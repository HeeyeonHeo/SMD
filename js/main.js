// main.js

$(function () {
  // 배너 이미지 배열
  let bgArr = [
    "./img/main_banner_1.jpg",
    "./img/main_banner_2.jpg",
    "./img/main_banner_3.jpg",
    "./img/main_banner_4.jpg",
  ];

  // 이미지 번호
  let bg_img_num = 0;

  // 배경 이미지 변경
  // $("#main-banner .container").css({
  //   "background-image": `url(${bgArr[bg_img_num]})`
  // });

  // 배경 재생
  setInterval(function () {
    bg_img_num++; // 이미지 번호 증가
    if (bg_img_num >= bgArr.length) {
      bg_img_num = 0;
    }
    console.log(bg_img_num);
    $("#main-banner .container").css({
      "background-image": `url(${bgArr[bg_img_num]})`,
    });
  }, 5000);
});
