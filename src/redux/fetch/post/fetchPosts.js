import {setPosts} from '../../actions'
import axios from 'axios'


const fetchPosts = ()=>{
        return dispatch => {
          axios('https://jsonplaceholder.typicode.com/posts')
            .then(response => {

            console.log('response', response.data)
            if(response.data){
            dispatch(setPosts(response.data))
            }

            })
            .catch(error => console.log(error))
          }
  }

export default fetchPosts

