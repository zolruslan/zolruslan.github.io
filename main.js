$(function(){

	$('#button1').click(function (){
		var File = "1.txt";
		request(File);
	})
	$('#button2').click(function (){
		var File = "2.txt";
		request(File);
	})
	function request (data){
		$.ajax({
			url:data,
			sucsess:function(data){
				$('#text').text(data);
			}
		})
	}
})