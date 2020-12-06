import React, {Component} from 'react';

class UserComponent extends Component {
    render() {

        let {item} = this.props
        return (
            <div>{item.name} - {item.age}</div>
            //<div>Hello</div>

        );
    }
}

export default UserComponent;