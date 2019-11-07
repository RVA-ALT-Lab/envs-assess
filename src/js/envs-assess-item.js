console.log('assess item')
console.log(getUrlVars()['assess-source'])

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

let fullUrl = getUrlVars()['assess-source']
let chopMark = fullUrl.indexOf('?p=')
console.log(chopMark)
console.log(fullUrl.length)
let postId = fullUrl.substring((chopMark+3))
let baseUrl = fullUrl.substring(0, chopMark)
console.log(baseUrl)
console.log(postId)
envsBasicContent(baseUrl, postId)
///wp-json/wp/v2/posts/123

// function envsBasicContent(baseUrl, postId){
// 	let url = baseUrl+'/wp-json/wp/v2/posts/'+ postId;
// 	let destination =  document.getElementById('to-eval')
// 	  jQuery.get( url, function( data ) {
// 	  	console.log(data)
// 	  	destination.innerHTML = '<h2>' + data.title.rendered + '</h2>' + data.content.rendered
// 	  	})
//   }

export const envsBasicContent =  function(baseUrl, postId){
	let url = baseUrl+'/wp-json/wp/v2/posts/'+ postId;
	let destination =  document.getElementById('to-eval')
	  jQuery.get( url, function( data ) {
	  	console.log(data)
	  	destination.innerHTML = '<h2>' + data.title.rendered + '</h2>' + data.content.rendered
	  	})
  };
