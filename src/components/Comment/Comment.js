import React, {Component} from 'react';

import {withRouter} from 'react-router-dom';

class Comment extends Component {

    render() {
        let {item} = this.props;
        console.log(this.props);
        return (
            <div>
                {item.email}

            </div>
        );
    }
}

export default withRouter(Comment);
