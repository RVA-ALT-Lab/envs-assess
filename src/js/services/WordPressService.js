import axios from 'axios'
import LanguageAnalysisService from '../services/LanguageAnalysisService'
export default class WordPressService {

  static async getPostsByPage(url, page = null) {

    const postsUrl = page !== null ? `${url}/wp-json/wp/v2/posts?page=${page}` : `${url}/wp-json/wp/v2/posts`
    try {
      const response = await axios.get(postsUrl)
      const postsResponse = {
        posts: response.data.map(post => {
          post.fleschKincaid = LanguageAnalysisService.getFleschKincaid(post.content.rendered)
          post.frequencyCounts = LanguageAnalysisService.getFrequencyCounts(post.content.rendered)
          return post
        }),
        totalPosts: response.headers['x-wp-total'],
        totalPages: response.headers['x-wp-totalpages']
      }
      return postsResponse
    } catch(error) {
      return error
    }
  }

  static async getCategories(baseUrl) {

    const categoriesUrl = `${baseUrl}/wp-json/wp/v2/categories`
    try {
      const response = await axios.get(categoriesUrl)
      const categoriesResponse = response.data
      return categoriesResponse
    } catch(error) {
      return error
    }
  }

  static async getStudentInformation (url) {
    // const baseUrl = `${url}/wp-json`
    // const response = await axios.get(baseUrl)
    // const student = {
    //   name:   response.data.envs.student_name,
    //   portUrl:response.data.url,
    //   pic :   response.data.envs.bio_pic.thumbnail,
    //   grad :  response.data.envs.graduation_date,
    //   major : response.data.envs.majors,
    //   minor : response.data.envs.minors,
    //   postCount: response.data.post_count,
    //   pageCount: response.data.page_count.publish,
    //   created : response.data.created.substring(0,10),
    //   lastUpdate : data.last_updated.substring(0,10)
    // }

    try {
      const data = {
        student:{
        name: 'Jeff Everhart',
        pic : 'https://learnrva.org/wp-content/uploads/sites/24118/2018/09/Screen-Shot-2018-09-19-at-12.31.06-PM.png',
        grad : 2019,
        major : 'English',
        minor : 'Teaching',
        postCount : 100,
        pageCount : 1,
        created : 'Today',
        lastUpdate : 'Tomorrow'
      }
    }
      return data
    } catch(error) {
      return error
    }
  }

  reformatWordPressPosts(posts) {
    return posts.map(post => {

    })
  }



}