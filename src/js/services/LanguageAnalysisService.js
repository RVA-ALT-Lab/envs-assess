import Countable from 'countable'
import {rate, grade } from 'flesch-kincaid';

export default class LanguageAnalysisService {
  static getFrequencyCounts (languageSample) {
    return Countable.count(languageSample, counter => counter)
  }
  static getFleschKincaid (languageSample) {
    return {
      rate: rate(languageSample),
      grade: grade(languageSample)
    }
  }

}