import Countable from 'countable'
import {rate, grade } from 'flesch-kincaid';
import nlp from 'wink-nlp-utils'

export default class LanguageAnalysisService {
  static getFrequencyCounts (languageSample) {
    const result = {}
    const stringText = nlp.string.removeHTMLTags(languageSample)
    result.sentences = nlp.string.sentences(stringText)
    result.tokens = LanguageAnalysisService.getTokens(languageSample)
    console.log(result)
    return result
  }
   static getTokens (languageSample) {
    const urls = LanguageAnalysisService.getURLs(languageSample)
    const tokens = nlp.string.tokenize(nlp.string.removeHTMLTags(languageSample), true)
    const words = tokens.filter(token => token.tag === 'word').map(token => token.value)
    const frequency = nlp.tokens.bagOfWords(nlp.tokens.removeWords(words))
    return {
      urls: {
        count: urls.length,
        tokens: urls
      },
      words: {
        count: words.length,
        tokens: words,
        frequency: frequency
      }
    }
  }
  static getURLs (languageSample) {
    const tokens = nlp.string.tokenize(languageSample, true);
    const urls = tokens.filter(token => token.tag === 'url').map(token => token.value)
    return urls
  }
  static getFleschKincaid (languageSample) {
    languageSample = nlp.string.removeHTMLTags(languageSample)
    return {
      rate: rate(languageSample),
      grade: grade(languageSample)
    }
  }

}