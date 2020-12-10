import React, {Component} from 'react';


class Post extends Component {

    render() {
        let {item, selectPost, isShowButton} = this.props;
        return (
            <div>
                {item.id} - {item.title}-{isShowButton && <button onClick={() => selectPost(item.id)}>choose</button>}

            </div>
        );
    }
}

export default Post;
