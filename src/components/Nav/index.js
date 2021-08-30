import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (
            <div className='nav'>
                <div className='tabs'>
                    <ul>
                        <li><Link to={'/'}>Main</Link></li>
                        <li><Link to={'/Active-tournament'}>Active tournament</Link></li>
                        <li><Link to={'/Calendar'}>Calendar</Link></li>
                        <li><Link to={'Statistics'}>Statistics</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Nav