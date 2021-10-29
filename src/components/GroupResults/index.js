import React from "react";
import './style.scss';
import won from '../../assets/won.svg';
import failed from '../../assets/failed.svg';
import remis from '../../assets/remis.svg';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const GroupResults = () => {

    const [group, setGroup] = React.useState('');

    const handleChange = (event) => {
        setGroup(event.target.value);
    };

    return (
        <div>
            <div class="groupSelect">
                <Box sx={{ minWidth: 120, maxWidth: 300 }} >
                    <FormControl fullWidth>
                        <InputLabel id="group-select-label">Group</InputLabel>
                        <Select
                            labelId="group-select-label"
                            id="group-select"
                            value={group}
                            label="Group"
                            onChange={handleChange}
                        >
                            <MenuItem id="item-select" value={1}>Group 1</MenuItem>
                            <MenuItem id="item-select" value={2}>Group 2</MenuItem>
                            <MenuItem id="item-select" value={3}>Group 3</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>
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
        </div>
    );
}

export default GroupResults