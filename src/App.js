import React, {Component} from 'react';
import {array} from './database/users/users';
import UserComponent from './components/user/userComponent';

class App extends Component {
    render() {
        return (
            <div>
               {
                   array.map((user, index)=> (<UserComponent item={user} key={index}/>))
               }

            </div>
        );
    }
}

export default App;