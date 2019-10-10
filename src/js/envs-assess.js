import Countable from 'countable';
import {rate, grade } from 'flesch-kincaid';

console.log('envs-assess')
console.log(port.url)

let portfolioJson = port.url+'/wp-json'

console.log(portfolioJson)

envsBasicContent()
function envsBasicContent(){
	//wp-json/wp/v2/comments?post=5198
	let url = port.url+'/wp-json';

	  jQuery.get( url, function( data ) {
         jQuery( '#bio-data' )

         //get data
         let name = data.envs.student_name;
         let portUrl = data.url;
         let pic = data.envs.bio_pic.thumbnail;
         let grad = data.envs.graduation_date;
         let major = assessArrayData(data.envs.majors,'Major');
         let minor = assessArrayData(data.envs.minors,'Minor');
         let postCount = data.post_count;
         let pageCount = data.page_count.publish;
         let created = data.created.substring(0,10);
         let lastUpdate = data.last_updated.substring(0,10);

		 //get destinations
		 let nameDestination = document.getElementById('bioModalLabel');
		 let picDestination = document.getElementById('stu-photo');
		 let gradDestination = document.getElementById('stu-grad');
		 let majorDestination = document.getElementById('stu-majors');
		 let minorDestination = document.getElementById('stu-minors');
		 let postDestination = document.getElementById('stu-post-count');
		 let pageDestination = document.getElementById('stu-page-count');
		 let createdDestination = document.getElementById('stu-created');
		 let updateDestination = document.getElementById('stu-last-update');

		 //set data to destinations
		 nameDestination.innerHTML = `<a href="${portUrl}">${name}</a>`;
		 picDestination.src = pic;
		 gradDestination.innerHTML = `<h3>Graduation</h3> <p>${grad}</p>`;
         majorDestination.innerHTML = major;
         minorDestination.innerHTML = minor;
         postDestination.innerHTML = `<p>${postCount} Posts</p>`;
		 pageDestination.innerHTML = `<p>${pageCount} Pages</p>`;
		 createdDestination.innerHTML = `<p>Created on ${created}</p>`;
		 updateDestination.innerHTML = `<p>Updated on ${lastUpdate}</p>`;
        },
    "json" );

}

function assessArrayData(array,term){
	console.log(array.length)
	if (array.length > 1){
	 	term = term+'s'
	}
	let data = array.join(', ');
	return `<div class="${term.toLowerCase()}"><h3>${term}</h3><p>${data}</p></div>`;
}

console.log('foo')

var str = "The quick brown fox jumped over the lazy dogs";
console.log( rate( str ) ); // 84.90000000000003

var str = "The quick brown fox jumped over the lazy dogs";
console.log( grade( str ) ); // 3.653333333333336




// const area = document.getElementById('content-12')
// const callback = counter => console.log(counter)

// Countable.on(area, callback)

envsAssessPosts()
function envsAssessPosts(){
	//wp-json/wp/v2/comments?post=5198
	let url = port.url+'/wp-json/wp/v2/posts';
	 jQuery(".spinner-image").show();
	  jQuery.get( url, function( data ) {
       data.forEach(function(post){
       		jQuery('#envs-post-data').append(envsPostTitle(post));
       		const text = post.content.rendered
			Countable.count(text, counter => envsCounterStats(counter))
       })
       },
    "json" );
}


function envsPostTitle(post){
	let title = post.title.rendered;
	let link = post.guid.rendered;
	return `<h2><a href="${link}">${title}</a></h2><a class="rubric-button" href="http://192.168.33.10/wordpress/envs-assess/rubric-one/?assess-source=${link}">Rubric 1</a><a class="rubric-button" href="http://192.168.33.10/wordpress/envs-assess/rubric-two/?assess-source=${link}">Rubric 2</a>`;
}

function envsCounterStats(counter){
	let p = counter.paragraphs;
	let s = counter.sentences;
	let w = counter.words;
	return jQuery('#envs-post-data').append(`<div class="envs-post-stats">${p} paragraphs<br> ${s} sentences<br> ${w} words</div>`);

}