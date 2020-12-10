import React, {Component} from 'react';

import {withRouter} from 'react-router-dom';

class Post extends Component {

    render() {
        let {item} = this.props;
        console.log(this.props);
        return (
            <div>
                {item.title}
            </div>
        );
    }
}

export default withRouter(Post);
