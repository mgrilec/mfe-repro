module.exports = {
  name: 'host',
  remotes: ['remote-a'],
  shared: (name, config) => {
    console.log(name)
  }
};
