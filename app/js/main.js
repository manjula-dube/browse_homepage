(function(){
	var imageList = [
		'img/bg1.jpg' , 'img/bg2.jpg' , 'img/bg3.jpg'
	];

	function initImageChange(){
		var _counter = 0 ;
		setInterval(function(){
			$("#container-images").find("img").attr('src' , imageList[_counter]);
			_counter++;
			_counter = _counter % imageList.length;
		},3000);
	}

	initImageChange();

})();