var start = function(){
  var input = prompt("Please enter the size of your grid (1-128)");

  if(input >= 1 && input <= 128) {
  	var size = $('.container').width()/input;
    console.log('done');
  	for(var i=1; i <= input; i++){
  		for(var j=1; j <= input; j++){
  			$('.container').append('<div class="grid"></div>');
  		}
  		$('.container').append('<div class="row"></div>');
  	}
  };

  $('.grid').css("width",size);
  $('.grid').css("height",size);

  $('.grid').mouseenter(function(){
    $(this).toggleClass('grid-hover');
  });

  $('.grid').mouseleave(function(){
    $(this).toggleClass('grid-hover');
  });
  console.log("done2");
};