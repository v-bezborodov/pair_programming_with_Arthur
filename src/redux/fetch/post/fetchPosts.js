import {setPosts} from '../../actions'
import axios from 'axios'


const fetchPosts = ()=>{
        return dispatch => {
          axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
            console.log('response.data', response.data)
            if(response.data){
            console.log('response.data', response.data)
                dispatch(setPosts(response.data))
            }
            })
            .catch(error => console.log(error))
          }
  }

export default fetchPosts

