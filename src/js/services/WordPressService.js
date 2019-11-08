import axios from 'axios'
export default class WordPressService {

  static async getPostsByPage(url, page = null) {

    const postsUrl = page !== null ? `${url}/wp-json/wp/v2/posts?page=${page}` : `${url}/wp-json/wp/v2/posts`
    try {
      const response = await axios.get(postsUrl)
      return response
    } catch(error) {
      return error
    }
  }


}