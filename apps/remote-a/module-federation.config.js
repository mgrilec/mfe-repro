module.exports = {
  name: 'remote-a',
  exposes: {
    './Module': 'apps/remote-a/src/app/remote-entry/entry.module.ts',
  },
  shared: (name, config) => {
    console.log(name)
  }
};
