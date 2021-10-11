const axios = require('axios');
import * as URLS from './url.txt'

// const express = require('express');
// const app = express();
// app.use(express.json());

// const host = process.env.HOST || '0.0.0.0'
// const port = process.env.PORT || '8080'
// const contextPath = process.env.CONTEXT_PATH === '/' ? '' : process.env.CONTEXT_PATH || ''
// app.use(`${contextPath}/`, express.static('build'));


// class Backend {
    export const getAllTeams=axios.get(URLS.allTeams)
// }



//Passy
// Host
// 	ec2-54-73-152-36.eu-west-1.compute.amazonaws.com
// 	Database
// 	d9q8gclnofkp79
// 	User
// 	mhyuynunrskhrv
// 	Port
// 	5432
// 	Password
// 	9db0fe20dd347a52d6f3ca38a68b123520606bab9770133c4829b048b551e160