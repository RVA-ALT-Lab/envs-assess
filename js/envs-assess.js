console.log('envs-assess')
console.log(port.url)

let portfolioJson = port.url+'/wp-json'

console.log(portfolioJson)

envsAssessContent()
function envsAssessContent(){
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
         let created = data.created;
         let lastUpdate = data.last_updated;
		 
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
		 updateDestination.innerHTML = `<p>Last Updated on ${lastUpdate}</p>`;
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

//var fleschKincaid = require('flesch-kincaid')

/*FROM https://github.com/daveross/flesch-kincaid*/

/*eslint prefer-const: "error", sourceType: "module" */
/*eslint-env es6*/

const syllables = x => {
    /*
     * basic algortithm: each vowel-group indicates a syllable, except for: final
     * (silent) e 'ia' ind two syl @AddSyl and @SubSyl list regexps to massage the
     * basic count. Each match from @AddSyl adds 1 to the basic count, each
     * @SubSyl match -1 Keep in mind that when the regexps are checked, any final
     * 'e' will have been removed, and all '\'' will have been removed.
     */
    const subSyl = [
        /cial/,
        /tia/,
        /cius/,
        /cious/,
        /giu/, // belgium!
        /ion/,
        /iou/,
        /sia$/,
        /.ely$/, // absolutely! (but not ely!)
        /sed$/, // doused, housed, used
    ]

    const addSyl = [
        /ia/,
        /riet/,
        /dien/,
        /iu/,
        /io/,
        /ii/,
        /[aeiouym]bl$/, // -Vble, plus -mble
        /[aeiou]{3}/, // agreeable
        /^mc/,
        /ism$/, // -isms
        /([^aeiouy])\1l$/, // middle twiddle battle bottle, etc.
        /[^l]lien/, // // alien, salient [1]
        /^coa[dglx]./, // [2]
        /[^gq]ua[^auieo]/, // i think this fixes more than it breaks
        /dnt$/, // couldn't
    ]

    // (comments refer to titan's /usr/dict/words)
    // [1] alien, salient, but not lien or ebbullient...
    // (those are the only 2 exceptions i found, there may be others)
    // [2] exception for 7 words:
    // coadjutor coagulable coagulate coalesce coalescent coalition coaxial

    const xx = x.toLowerCase().replace(/'/g, '').replace(/e\b/g, '')
    const scrugg = xx.split(/[^aeiouy]+/).filter(Boolean) // '-' should be perhaps added?

    return (undefined === x || null === x || '' === x) ? 0 :
           (1 === xx.length) ? 1 :
           subSyl.map(r => (xx.match(r) || []).length).reduce((a, b) => a - b) +
           addSyl.map(r => (xx.match(r) || []).length).reduce((a, b) => a + b) +
           scrugg.length - ((scrugg.length > 0 && '' === scrugg[0]) ? 1 : 0) +
           // got no vowels? ("the", "crwth")
           xx.split(/\b/).map(x => x.trim()).filter(Boolean).filter(x => !x.match(/[.,'!?]/g)).map(x => x.match(/[aeiouy]/) ? 0 : 1).reduce((a, b) => a + b)

}

const words = x => (x.split(/\s+/) || ['']).length
const sentences = x => (x.split('. ') || ['']).length
const syllablesPerWord = x => syllables(x) / words(x)
const wordsPerSentence = x => words(x) / sentences(x)

const rate = x => 206.835 - 1.015 * wordsPerSentence(x) - 84.6 * syllablesPerWord(x)
const grade = x => 0.39 * wordsPerSentence(x) + 11.8 * syllablesPerWord(x) - 15.59

console.log('foo')

var str = "The quick brown fox jumped over the lazy dogs";
console.log( rate( str ) ); // 84.90000000000003

var str = "The quick brown fox jumped over the lazy dogs";
console.log( grade( str ) ); // 3.653333333333336

