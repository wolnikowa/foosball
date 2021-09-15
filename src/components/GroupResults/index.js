import React from "react";
import './style.scss';
import won from '../../assets/won.png';
import failed from '../../assets/failed.png';
import remis from '../../assets/remis.png';


const GroupResults = () => (
    <div>

        <table>
            <thead>
                <tr className="tableHead">
                    <th className="longName"></th>
                    <th>RM</th>
                    <th>W</th>
                    <th>R</th>
                    <th>P</th>
                    <th>BZ</th>
                    <th>BS</th>
                    <th>RB</th>
                    <th>Pkt</th>
                    <th className="longName">Mecze</th>
                </tr>
            </thead>
            <tbody className="tableBody">
                <tr>
                    <th>FC Devops</th>
                    <td>2</td>
                    <td>2</td>
                    <td>0</td>
                    <td>0</td>
                    <td>4</td>
                    <td>0</td>
                    <td>4</td>
                    <td>6</td>
                    <td>
                        <img src={won} className="icon" />
                        <img src={won} className="icon" />

                    </td>
                </tr>
                <tr>
                    <th>One Handers</th>
                    <td>2</td>
                    <td>0</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>3</td>
                    <td>1</td>
                    <td>1</td>
                    <td>
                        <img src={failed} className="icon" />
                        <img src={remis} className="icon" />
                    </td>
                </tr>
                <tr>
                    <th>Piłkarze z Oslo</th>
                    <td>2</td>
                    <td>0</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>3</td>
                    <td>1</td>
                    <td>1</td>
                    <td>
                        <img src={failed} className="icon" />
                        <img src={remis} className="icon" />
                    </td>
                </tr>


            </tbody>
        </table>

        <button className="addResult">ADD RESULT</button>
    </div>
)

export default GroupResults