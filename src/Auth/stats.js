export const app_id='481202';
export const perms=[
    "basic_access","email","offline_access","manage_library","manage_community","delete_library","listening_history"
];
export const url="https://deezerclone.herokuapp.com/https://api.deezer.com/"
export const callbackURL="https://spotify-clone-opal.vercel.app/loading";
export const loginURL=`https://connect.deezer.com/oauth/auth.php?app_id=${app_id}&redirect_uri=${callbackURL}&perms=${perms}`;
export const md5 = require('md5');
export const secret='c07d137e2a0dfc3d1fa0a3a11a3f9148';
