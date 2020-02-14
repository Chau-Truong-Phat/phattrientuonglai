// module.exports = {
//     devServer:{
//         port: 8080
//     },
//     axios: {
//         baseURL: "https://localhost:44351"
//     },
//     env: {

//     }
// }
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/phattrienungdung/' // Thay tên repository của các bạn vào đây nhé
      : '/'
}