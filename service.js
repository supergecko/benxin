// // 管理账号信息
// const USERS_KEY = 'USERS_KEY';
// const STATE_KEY = 'STATE_KEY';

// const getUsers = function () {
//     let ret = '';
//     ret = uni.getStorageSync(USERS_KEY);
//     if (!ret) {
//         ret = '[]';
//     }
//     return JSON.parse(ret);
// }

// const addUser = function (userInfo) {
//     let users = getUsers();
//     users.push({
//         account: userInfo.account,
//         password: userInfo.password
//     });
//     uni.setStorageSync(USERS_KEY, JSON.stringify(users));
// }

// export default {
//     getUsers,
//     addUser
// }
// 管理账号信息
const api_baseurl = 'http://47.104.101.222:16060';//线上

const api_lists = {
	"resulContent":'/app/cesuan',//登录
}

export default {
	api_baseurl,
	api_lists
}
