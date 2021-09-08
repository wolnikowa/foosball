import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

class InnerNav extends React.Component {
    render() {
        return (
            <div className='innerNav'>
                <div className='tournamentName'> Jit Euro (docelowo: tournament name)</div>
                <div className='innerTabs'>
                    <ul>
                        <li><Link to={'/Active-tournament/tournament-groups'}>Groups</Link></li>
                        <li><Link to={'/Active-tournament/tournament-group-results'}>Group results</Link></li>
                        <li><Link to={'/Active-tournament/tournament-table'}>Table</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default InnerNav