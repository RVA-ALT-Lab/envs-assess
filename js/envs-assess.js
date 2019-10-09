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



/**
 * Countable is a script to allow for live paragraph-, word- and character-
 * counting on an HTML element.
 *
 * @author   Sacha Schmid (<https://github.com/RadLikeWhoa>)
 * @version  3.0.1
 * @license  MIT
 * @see      <http://radlikewhoa.github.io/Countable/>
 */

/**
 * Note: For the purpose of this internal documentation, arguments of the type
 * {Nodes} are to be interpreted as either {NodeList} or {Element}.
 */

;(function (global) {
  'use strict'

  /**
   * @private
   *
   * `liveElements` holds all elements that have the live-counting
   * functionality bound to them.
   */

  let liveElements = []
  const each = Array.prototype.forEach

  /**
   * `ucs2decode` function from the punycode.js library.
   *
   * Creates an array containing the decimal code points of each Unicode
   * character in the string. While JavaScript uses UCS-2 internally, this
   * function will convert a pair of surrogate halves (each of which UCS-2
   * exposes as separate characters) into a single code point, matching
   * UTF-16.
   *
   * @see     <http://goo.gl/8M09r>
   * @see     <http://goo.gl/u4UUC>
   *
   * @param   {String}  string   The Unicode input string (UCS-2).
   *
   * @return  {Array}   The new array of code points.
   */

  function decode (string) {
    const output = []
  	let counter = 0
  	const length = string.length

  	while (counter < length) {
  		const value = string.charCodeAt(counter++)

  		if (value >= 0xD800 && value <= 0xDBFF && counter < length) {

  			// It's a high surrogate, and there is a next character.

  			const extra = string.charCodeAt(counter++)

  			if ((extra & 0xFC00) == 0xDC00) { // Low surrogate.
  				output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000)
  			} else {

  				// It's an unmatched surrogate; only append this code unit, in case the
  				// next code unit is the high surrogate of a surrogate pair.

  				output.push(value)
  				counter--
  			}
  		} else {
  			output.push(value)
  		}
  	}

  	return output
  }

  /**
   * `validateArguments` validates the arguments given to each function call.
   * Errors are logged to the console as warnings, but Countable fails
   * silently.
   *
   * @private
   *
   * @param   {Nodes|String}  targets   A (collection of) element(s) or a single
	 *                                    string to validate.
   *
   * @param   {Function}      callback  The callback function to validate.
   *
   * @return  {Boolean}       Returns whether all arguments are vaild.
   */

  function validateArguments (targets, callback) {
    const nodes = Object.prototype.toString.call(targets)
    const targetsValid = typeof targets === 'string' || ((nodes === '[object NodeList]' || nodes === '[object HTMLCollection]') || targets.nodeType === 1)
    const callbackValid = typeof callback === 'function'

    if (!targetsValid) console.error('Countable: Not a valid target')
    if (!callbackValid) console.error('Countable: Not a valid callback function')

    return targetsValid && callbackValid
  }

  /**
   * `count` trims an element's value, optionally strips HTML tags and counts
   * paragraphs, sentences, words, characters and characters plus spaces.
   *
   * @private
   *
   * @param   {Node|String}  target   The target for the count.
   *
   * @param   {Object}   	   options  The options to use for the counting.
   *
   * @return  {Object}       The object containing the number of paragraphs,
   *                         sentences, words, characters and characters
	 *                         plus spaces.
   */

  function count (target, options) {
    let original = '' + (typeof target === 'string' ? target : ('value' in target ? target.value : target.textContent))
    options = options || {}

    /**
     * The initial implementation to allow for HTML tags stripping was created
     * @craniumslows while the current one was created by @Rob--W.
     *
     * @see <http://goo.gl/Exmlr>
     * @see <http://goo.gl/gFQQh>
     */

    if (options.stripTags) original = original.replace(/<\/?[a-z][^>]*>/gi, '')

    if (options.ignore) {
        each.call(options.ignore, function (i) {
            original = original.replace(i, '')
        })
    }

    const trimmed = original.trim()

    /**
     * Most of the performance improvements are based on the works of @epmatsw.
     *
     * @see <http://goo.gl/SWOLB>
     */

    return {
      paragraphs: trimmed ? (trimmed.match(options.hardReturns ? /\n{2,}/g : /\n+/g) || []).length + 1 : 0,
      sentences: trimmed ? (trimmed.match(/[.?!…]+./g) || []).length + 1 : 0,
      words: trimmed ? (trimmed.replace(/['";:,.?¿\-!¡]+/g, '').match(/\S+/g) || []).length : 0,
      characters: trimmed ? decode(trimmed.replace(/\s/g, '')).length : 0,
      all: decode(original).length
    }
  }

  /**
   * This is the main object that will later be exposed to other scripts. It
   * holds all the public methods that can be used to enable the Countable
   * functionality.
   *
   * Some methods accept an optional options parameter. This includes the
   * following options.
   *
   * {Boolean}      hardReturns  Use two returns to seperate a paragraph
   *                             instead of one. (default: false)
   * {Boolean}      stripTags    Strip HTML tags before counting the values.
   *                             (default: false)
   * {Array<Char>}  ignore       A list of characters that should be removed
   *                             ignored when calculating the counters.
   *                             (default: )
   */

  const Countable = {

    /**
     * The `on` method binds the counting handler to all given elements. The
     * event is either `oninput` or `onkeydown`, based on the capabilities of
     * the browser.
     *
     * @param   {Nodes}     elements   All elements that should receive the
     *                                 Countable functionality.
     *
     * @param   {Function}  callback   The callback to fire whenever the
     *                                 element's value changes. The callback is
     *                                 called with the relevant element bound
     *                                 to `this` and the counted values as the
     *                                 single parameter.
     *
     * @param   {Object}    [options]  An object to modify Countable's
     *                                 behaviour.
     *
     * @return  {Object}    Returns the Countable object to allow for chaining.
     */

    on: function (elements, callback, options) {
      if (!validateArguments(elements, callback)) return

      if (!Array.isArray(elements)) {
          elements = [ elements ]
      }

      each.call(elements, function (e) {
          const handler = function () {
            callback.call(e, count(e, options))
          }

          liveElements.push({ element: e, handler: handler })

          handler()

          e.addEventListener('input', handler)
      })

      return this
    },

    /**
     * The `off` method removes the Countable functionality from all given
     * elements.
     *
     * @param   {Nodes}   elements  All elements whose Countable functionality
     *                              should be unbound.
     *
     * @return  {Object}  Returns the Countable object to allow for chaining.
     */

    off: function (elements) {
      if (!validateArguments(elements, function () {})) return

      if (!Array.isArray(elements)) {
          elements = [ elements ]
      }

      liveElements.filter(function (e) {
          return elements.indexOf(e.element) !== -1
      }).forEach(function (e) {
          e.element.removeEventListener('input', e.handler)
      })

      liveElements = liveElements.filter(function (e) {
          return elements.indexOf(e.element) === -1
      })

      return this
    },

    /**
     * The `count` method works mostly like the `live` method, but no events are
     * bound, the functionality is only executed once.
     *
     * @param   {Nodes|String}  targets   All elements that should be counted.
     *
     * @param   {Function}      callback   The callback to fire whenever the
     *                                     element's value changes. The callback
		 *                                     is called with the relevant element
		 *                                     bound to `this` and the counted values
		 *                                     as the single parameter.
     *
     * @param   {Object}        [options]  An object to modify Countable's
     *                                     behaviour.
     *
     * @return  {Object}    Returns the Countable object to allow for chaining.
     */

    count: function (targets, callback, options) {
      if (!validateArguments(targets, callback)) return

      if (!Array.isArray(targets)) {
          targets = [ targets ]
      }

      each.call(targets, function (e) {
          callback.call(e, count(e, options))
      })

      return this
    },

    /**
     * The `enabled` method checks if the live-counting functionality is bound
     * to an element.
     *
     * @param   {Node}     element  All elements that should be checked for the
     *                              Countable functionality.
     *
     * @return  {Boolean}  A boolean value representing whether Countable
     *                     functionality is bound to all given elements.
     */

    enabled: function (elements) {
      if (elements.length === undefined) {
        elements = [ elements ]
      }

      return liveElements.filter(function (e) {
          return elements.indexOf(e.element) !== -1
      }).length === elements.length
    }

  }

  /**
   * Expose Countable depending on the module system used across the
   * application. (Node / CommonJS, AMD, global)
   */

  if (typeof exports === 'object') {
    module.exports = Countable
  } else if (typeof define === 'function' && define.amd) {
    define(function () { return Countable })
  } else {
    global.Countable = Countable
  }
}(this));




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