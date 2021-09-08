import React from "react";
import { Bracket, RoundProps, Seed, SeedItem, SeedTeam, RenderSeedProps } from 'react-brackets';
import "../TournamentLadder/base.scss";

const rounds = [
    {
        title: 'Round one',
        seeds: [
            {
                id: 1,
                date: new Date().toDateString(),
                teams: [{ name: 'Team A' }, { name: 'Team B' }],
            },
            {
                id: 2,
                date: new Date().toDateString(),
                teams: [{ name: 'Team C' }, { name: 'Team D' }],
            },
            {
                id: 3,
                date: new Date().toDateString(),
                teams: [{ name: 'Team E' }, { name: 'Team F' }],
            },
            {
                id: 4,
                date: new Date().toDateString(),
                teams: [{ name: 'Team G' }, { name: 'Team H' }],

            },
        ],
    },
    {
        title: 'Round two',
        seeds: [
            {
                id: 5,
                date: new Date().toDateString(),
                teams: [{ name: 'Team A' }, { name: 'Team C' }],
            },
            {
                id: 6,
                date: new Date().toDateString(),
                teams: [{ name: 'Team F' }, { name: 'Team G' }],
            },
        ],
    },
    {
        title: 'Round three',
        seeds: [
            {
                id: 7,
                date: new Date().toDateString(),
                teams: [{ name: 'Team A' }, { name: 'Team G' }],
            },
        ],
    },
];


const CustomSeed = ({ seed }) => {

    var _a, _b;

    return (
        <Seed fontSize='14' >

            <SeedItem props='null'>
                <div props='null'>
                    <SeedTeam color='#ffffff' backgroundColor='#1d1d1d' border='0.5px solid #4A4A4A' borderRadius='0'>
                        {((_a = seed.teams[0]) === null || _a === void 0 ? void 0 : _a.name) || 'NO TEAM '} </SeedTeam >

                    <SeedTeam color='#ffffff' backgroundColor='#1d1d1d' border='0.5px solid #4A4A4A' borderRadius='0'>
                        {((_b = seed.teams[1]) === null || _b === void 0 ? void 0 : _b.name) || 'NO TEAM '} </SeedTeam >
                </div>
            </SeedItem>
        </Seed>
    );
};

const TournamentLadder = () => {
    return <Bracket rounds={rounds} renderSeedComponent={CustomSeed} />;
};

export default TournamentLadder;
