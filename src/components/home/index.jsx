import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";

import fetchPosts from '../../redux/fetch/post/fetchPosts'


class HomeComponent extends React.Component {

    componentDidMount() {
        this.props.fetchPosts()
    }


    render() {
        return (
            <div className="posts">
                <h2> All posts (done via classes):</h2>
                {this.props.posts &&
                this.props.posts.map((post, i) => (
                    <div className="post" key={i}>
                        <p>post: #{post.id}</p>
                        <p><b>{post.title}</b></p>
                        <p>
                            <pre>{post.body}</pre>
                        </p>
                    </div>
                ))
                }
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        posts: store.api.posts,
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchPosts: fetchPosts,
    // fetchProducts: fetchProductsAction,
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent)
