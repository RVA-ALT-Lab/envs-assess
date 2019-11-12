import Countable from 'countable'
import {rate, grade } from 'flesch-kincaid';
import nlp from 'wink-nlp-utils'

export default class LanguageAnalysisService {
  static getFrequencyCounts (languageSample) {
    const result = {}
    const stringText = nlp.string.removeHTMLTags(languageSample)
    result.sentences = nlp.string.sentences(stringText)
    result.tokens = LanguageAnalysisService.getTokens(languageSample)
    return result
  }
   static getTokens (languageSample) {
    const tokens = nlp.string.tokenize(languageSample, true);
    const frequency = {}

    tokens.forEach(token => {
      if (frequency[token['tag']]){
        frequency[token['tag']]++
      } else {
        frequency[token['tag']] = 1
      }
    })

    return frequency
  }
  static getFleschKincaid (languageSample) {
    return {
      rate: rate(languageSample),
      grade: grade(languageSample)
    }
  }

}