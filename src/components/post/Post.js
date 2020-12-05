import React, {Component} from 'react';

class Post extends Component {

    render() {
        let {item, selectPost} = this.props;
        return (
            <div>
                {item.id} - {item.title}
                <button  onClick={() => selectPost(item.id)}>chose</button>
                
            </div>
        );
    }
}

export default Post;