module.exports = {
  "env": {
    "browser": true,
    "node": false
  },
  "extends": "plugin:react/recommended",
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": ["react"],
  "rules": {
    "node/no-unsupported-features": 0,
    "node/shebang": 0,
    "react/forbid-prop-types": 0,
    "react/no-multi-comp": 1,
    "react/no-set-state": 2,
    "react/no-string-refs": 1,
    "react/prefer-es6-class": [1, "always"],
    "react/require-extension": 1,
    "react/self-closing-comp": 1,
    "react/sort-comp": 0,
    "react/sort-prop-types": 0,
    "react/wrap-multilines": [1, { assignment: true, declaration: true, return: true }],
    "react/jsx-boolean-value": [1, "never"],
    "react/jsx-closing-bracket-location": [1, "line-aligned"],
    "react/jsx-curly-spacing": [1, "never"],
    "react/jsx-equals-spacing": [1, "never"],
    "react/jsx-handler-names": 0,
    "react/jsx-indent-props": [1, 2],
    "react/jsx-indent": [1, 2],
    "react/jsx-key": 2,
    "react/jsx-max-props-per-line": [1, { "maximum": 5 }],
    "react/jsx-no-bind": [1, {
      "allowArrowFunctions": false,
      "allowBind": false,
      "ignoreRefs": false
    }],
    "react/jsx-no-literals": 0,
    "react/jsx-pascal-case": 1,
    "react/jsx-sort-props": 0,
    "react/jsx-space-before-closing": [1, "always"]
  }
};
