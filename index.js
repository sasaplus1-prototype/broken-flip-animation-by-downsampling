(function(){

  'use strict';

  function setDeviceSize() {
    document.getElementById('device-size').innerHTML = [
      'device-width: ' + Math.min(window.innerWidth, document.documentElement.clientWidth),
      'device-height: ' + Math.min(window.innerHeight, document.documentElement.clientHeight),
    ].join(' - ');
  }
  setDeviceSize();

  window.addEventListener('resize', setDeviceSize, false);

  //----------------------------------------------------------------------------

  var anime1 = new AnimationFrame(12),
      image1 = document.getElementById('image1'),
      data1 = document.getElementById('data1');

  var canvas1, context1, frame1, x1, y1, count1;

  function animation1() {
    if (count1 >= 63) {
      count1 = 0;
    }

    context1.drawImage(
      image1,
      0, count1 * 432, 768, 432,
      0, 0, 768, 432
    );

    count1++;

    frame1 = anime1.request(animation1);
  }

  document.getElementById('start1').addEventListener('click', function() {
    if (frame1) {
      return;
    }

    canvas1 = document.getElementById('canvas1');
    context1 = canvas1.getContext('2d');

    x1 = 0;
    y1 = 0;
    count1 = 0;

    data1.innerHTML = [
      'w:' + image1.width,
      'h:' + image1.height,
      'nw:' + image1.naturalWidth,
      'nh:' + image1.naturalHeight,
    ].join(' - ');

    animation1();
  }, false);
  document.getElementById('stop1').addEventListener('click', function() {
    anime1.cancel(frame1);

    frame1 = null;
  }, false);

  //----------------------------------------------------------------------------

  var anime2 = new AnimationFrame(12),
      image2 = document.getElementById('image2'),
      data2 = document.getElementById('data2');

  var canvas2, context2, frame2, x2, y2, count2;

  function animation2() {
    if (count2 >= 63) {
      count2 = 0;
    }

    x2 = count2 % 8 || 8;
    y2 =
      (count2 >=  1 && count2 <=  8) ? 0 :
      (count2 >=  9 && count2 <= 16) ? 1 :
      (count2 >= 17 && count2 <= 24) ? 2 :
      (count2 >= 25 && count2 <= 32) ? 3 :
      (count2 >= 33 && count2 <= 40) ? 4 :
      (count2 >= 41 && count2 <= 48) ? 5 :
      (count2 >= 49 && count2 <= 56) ? 6 : 7;

    context2.drawImage(
      image2,
      x2 * 768, y2 * 432, 768, 432,
      0, 0, 768, 432
    );

    count2++;

    frame2 = anime2.request(animation2);
  }

  document.getElementById('start2').addEventListener('click', function() {
    if (frame2) {
      return;
    }

    canvas2 = document.getElementById('canvas2');
    context2 = canvas2.getContext('2d');

    x2 = 0;
    y2 = 0;
    count2 = 0;

    data2.innerHTML = [
      'w:' + image2.width,
      'h:' + image2.height,
      'nw:' + image2.naturalWidth,
      'nh:' + image2.naturalHeight,
    ].join(' - ');

    animation2();
  }, false);
  document.getElementById('stop2').addEventListener('click', function() {
    anime2.cancel(frame2);

    frame2 = null;
  }, false);

  //----------------------------------------------------------------------------

  var anime3 = new AnimationFrame(12),
      image3_1 = document.getElementById('image3_1'),
      image3_2 = document.getElementById('image3_2'),
      data3_1 = document.getElementById('data3_1'),
      data3_2 = document.getElementById('data3_2');

  var canvas3, context3, frame3, x3, y3, count3;

  function animation3() {
    if (count3 >= 63) {
      count3 = 0;
    }

    if (count3 >= 32) {
      y3 = count3 - 32;
    } else {
      y3 = count3;
    }

    context3.drawImage(
      (count3 >= 32) ? image3_2 : image3_1,
      0, y3 * 432, 768, 432,
      0, 0, 768, 432
    );

    count3++;

    frame3 = anime3.request(animation3);
  }

  document.getElementById('start3').addEventListener('click', function() {
    if (frame3) {
      return;
    }

    canvas3 = document.getElementById('canvas3');
    context3 = canvas3.getContext('2d');

    x3 = 0;
    y3 = 0;
    count3 = 0;

    data3_1.innerHTML = [
      'w:' + image3_1.width,
      'h:' + image3_1.height,
      'nw:' + image3_1.naturalWidth,
      'nh:' + image3_1.naturalHeight,
    ].join(' - ');
    data3_2.innerHTML = [
      'w:' + image3_2.width,
      'h:' + image3_2.height,
      'nw:' + image3_2.naturalWidth,
      'nh:' + image3_2.naturalHeight,
    ].join(' - ');

    animation3();
  }, false);
  document.getElementById('stop3').addEventListener('click', function() {
    anime3.cancel(frame3);

    frame3 = null;
  }, false);

  //----------------------------------------------------------------------------

  var anime4 = new AnimationFrame(12),
      image4 = document.getElementById('image4'),
      data4 = document.getElementById('data4');

  var offCanvas4 = document.createElement('canvas'),
      offContext4 = offCanvas4.getContext('2d');

  var canvas4, context4, frame4, x4, y4, count4;

  function animation4() {
    if (count4 >= 63) {
      count4 = 0;
    }

    context4.drawImage(
      offCanvas4,
      0, count4 * 432, 768, 432,
      0, 0, 768, 432
    );

    count4++;

    frame4 = anime4.request(animation4);
  }

  document.getElementById('start4').addEventListener('click', function() {
    if (frame4) {
      return;
    }

    offCanvas4.width = image4.naturalWidth;
    offCanvas4.height = image4.naturalHeight;

    offContext4.drawImage(image4, 0, 0);

    canvas4 = document.getElementById('canvas4');
    context4 = canvas4.getContext('2d');

    x4 = 0;
    y4 = 0;
    count4 = 0;

    data4.innerHTML = [
      'w:' + image4.width,
      'h:' + image4.height,
      'nw:' + image4.naturalWidth,
      'nh:' + image4.naturalHeight,
    ].join(' - ');

    animation4();
  }, false);
  document.getElementById('stop4').addEventListener('click', function() {
    anime4.cancel(frame4);

    frame4 = null;
  }, false);

}());
