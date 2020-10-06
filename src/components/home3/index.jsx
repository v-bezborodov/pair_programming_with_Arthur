import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";

import fetchPosts from '../../redux/fetch/post/fetchPosts'

import {setTitle, setBody} from "../../redux/actions";


class HomeComponent3 extends React.Component {

    state = {
        posts: []
    }

    componentDidMount() {
        this.props.fetchPosts()
    }

    // static getDerivedStateFromProps(nextProps) {
    //     return {
    //         posts: nextProps.posts || [],
    //     }
    // }

    // changeTitle = (event, i) => {
    //     let value = [...this.state.posts]
    //     value[i].title = event.target.value
    //     this.setState({posts: value})
    // }

    // changeBody = (event, i) => {
    //     let value = [...this.state.posts]
    //     value[i].body = event.target.value
    //     this.setState({posts: value})
    // }


    render() {

        let {posts} = this.state
        return (
            <div className="posts">
                <h2> All posts (done via classes and controlled inputs but update store):</h2>
                {this.props.posts &&
                this.props.posts.map((post, i) => (
                    <div className="post" key={i}>
                        <p>post: #{post.id}</p>
                        <p>
                            <input
                                type="text"
                                value={post.title}
                                onChange={event => this.props.changeTitle(event, i)}/>
                        </p>
                        <p>
                                <textarea
                                    rows="6"
                                    value={post.body}
                                    onChange={event => this.props.changeBody(event, i)}/>
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
    changeBody: setBody,
    changeTitle: setTitle
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent3)
