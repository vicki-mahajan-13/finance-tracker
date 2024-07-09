module.exports = {
  presets: [
    "@babel/preset-env"
  ],
  plugins: [
    "babel-plugin-macros",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-transform-destructuring",
    [
      "@babel/plugin-proposal-class-properties",
      {
        "loose": true
      }
    ],
    [
      "@babel/plugin-proposal-object-rest-spread",
      {
        "useBuiltIns": true
      }
    ],
    [
      "@babel/plugin-proposal-private-methods",
      {
        "loose": true
      }
    ],
    [
      "@babel/plugin-proposal-private-property-in-object",
      {
        "loose": true
      }
    ],
    [
      "@babel/plugin-transform-runtime",
      {
        "helpers": false
      }
    ],
    [
      "@babel/plugin-transform-regenerator",
      {
        "async": false
      }
    ]
  ]
};
