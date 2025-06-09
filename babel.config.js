module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  env: {
    test: {
      presets: ['module:metro-react-native-babel-preset'],
    },
  },
};
