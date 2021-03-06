void( /*Void used to prevent odd Chrome behavior with javascript bookmarklets*/
	(function(){
		var gitFile = "ExampleUser/ExampleRepo/master/Example.js"; /*Change to the file you wish to load */
		
		var request = new XMLHttpRequest();
		request.onreadystatechange = function() {
			if (request.readyState === 4) {
				if (request.status === 200) {
					var run;
					try{
						run = new Function(request.responseText);
					}catch(err){
						alert(("Could not run GitHub code: ").concat(String(err)));
					}finally{
						if (typeof run == "function"){
							run();
						}
					}
				} else {
					alert(("Could not complete GitHub pull: error ").concat(String(request.status)));
				}
			}
		};
		request.open("GET", ("https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/").concat(encodeURIComponent(gitFile)),true);
		request.setRequestHeader("Origin","https://www.github.com");
		request.send(null);
	}())
);
