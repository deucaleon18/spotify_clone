export const url=" http://ws.audioscrobbler.com/2.0/";
export const APIKey="f03b8c9f7b186b3d4fa0b8073e9b0285";
export const callbackUrl="http://localhost:3000/i";
export const md5 = require('md5');
export const API =require('last-fm');
export const api = new API('f03b8c9f7b186b3d4fa0b8073e9b0285');
export const loginURL =`http://www.last.fm/api/auth/?api_key=${APIKey}&cb=${callbackUrl}`;
export const secret='295d7281934658920b354e1bcb493dcc';