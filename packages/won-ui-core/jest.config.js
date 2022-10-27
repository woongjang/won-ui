module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    nanoid: require.resolve('nanoid'),
  }
}