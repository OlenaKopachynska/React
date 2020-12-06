import React, {Component} from 'react';
import {styles} from './styles'


class Post extends Component {

    render() {
        let {item, selectPost, isShowButton} = this.props;
        return (
            <div>
                {item.id} - {item.title}
                { isShowButton && <button onClick={() => selectPost(item.id)} style={styles.btn}>choose</button>}

            </div>
        );
    }
}

export default Post;