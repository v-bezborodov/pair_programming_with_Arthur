import {setData} from '../../actions'
import axios from 'axios'


const fetchComments = () => {
    return dispatch => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/1/comments`)
            .then(response => {
                if (response.data) {
                    console.log('comments', response.data)
                    dispatch(setData({comments:response.data}))
                }
            })
            .catch(error => console.log(error))
    }
}

export default fetchComments

