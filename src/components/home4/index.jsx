import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import fetchPosts from "../../redux/fetch/post/fetchPosts";
import fetchComments from "../../redux/fetch/comments/fetchComments";
import {setPostsViaThunk} from "../../redux/actions";


export const HomeComponent4 = () => {

    const posts = useSelector(store => store.api.posts)
    const comments = useSelector(store => store.api.comments)
    const dispatch = useDispatch()

    useEffect(() => {
        // dispatch(fetchPosts())
        // dispatch(fetchComments())

        dispatch(setPostsViaThunk())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <>

        <div className="posts">
            <h2> All posts (done via Hooks):</h2>
            <div className="grid">
            <div>
                Posts
                {posts.length && posts.map((post, i) => (
                    <div className="post" key={i}>
                        <p>post: #{post.id}</p>
                        <p>
                            <input
                                type="text"
                                value={post.title}
                                onChange={event => this.props.changeTitle(event.target.value, i)}/>
                        </p>
                        <p>
                        <textarea
                            rows="6"
                            value={post.body}
                            onChange={event => this.props.changeBody(event.target.value, i)}/>
                        </p>
                    </div>
                ))
                }
            </div>
            <div>
                Comments
                {comments && comments.length && comments.map((comment, i) => (
                    <div className="post" key={i}>
                        <p><b>comment from:</b> #{comment.email}</p>
                        <p><b>user:</b> {comment.name}</p>
                        <p>{comment.body}</p>
                    </div>
                ))
                }
            </div>
            </div>
        </div>
        </>
    )
}


