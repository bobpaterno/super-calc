(function() {
  'use strict';

  $(document).ready(initialize);


  function initialize() {
    $('#title1').click(title);
    $('.number').click(display);
    $('.clear').click(clearDisplay);
    $('.decimal').click(addDecimal);
    $('.sign').click(changeSign);
  }

  function title() {
    var display = $('.calculator').css('display');
    if(display === 'none') {
      $('.calculator').fadeIn();
    } else {
      $('.calculator').fadeOut();
    }
  }

  function display() {
    var num = this.textContent;
    var output = $('#display').text();

    if(output === '0') {
      output = num;
    }
    else {
      output += num;
    }
    $('#display').text(output);
  }

  function clearDisplay() {
    var clearType = this.textContent;

    if(clearType === 'C') {
      $('#display').text(0);
    }
  }

  function changeSign() {
    var val = $('#display').text();
    $('#display').text(val*-1);
  }

  function addDecimal() {
    var num = $('#display').text();
    var nodecimal = num.indexOf('.') === -1;

    if(nodecimal) {
      $('#display').text(num + '.');
    }
  }

})();
