import React, {Component} from 'react';

import {withRouter} from 'react-router-dom';

class FullPost extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                full post
            </div>
        );
    }
}

export default withRouter(FullPost);