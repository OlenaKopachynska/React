import React, {Component} from 'react';
import Post from '../post/Post';
import {styles} from '../post/styles'

class AllPosts extends Component {

    state = {posts: [], selected: null};


    selectPost = (id) => {
        this.setState({selected: this.state.posts.find(value => value.id === id)});
    }

    render() {
        let {posts, selected} = this.state;


        return (


            <div>

                {
                    posts.map(post => <Post item={post} key={post.id} selectPost={this.selectPost} isShowButton={true}/>)
                }
                {
                    selected && <h2 style={styles.selected}><Post item={selected} isShowButton={false}/></h2>
                }
                
            </div>
        );
    };

    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(posts => this.setState({posts}))
    }
}

export default AllPosts;