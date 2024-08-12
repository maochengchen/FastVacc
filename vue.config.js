module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://59.120.83.25:8990/xHisAPI", // 目标服务器的地址
        changeOrigin: true, // 允许跨域
        pathRewrite: {
          "^/api": "", // 重写路径，将/api去掉
        },
      },
    },
  },
};
