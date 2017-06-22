module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "extends": "airbnb",
    "plugins": [
        "react", "jsx-a11y", "import"
    ],
    "ecmaFeatures": {
        "arrowFunctions": true,
        "binaryLiterals": true,
        "blockBindings": true,
        "classes": true,
        "defaultParams": true,
        "destructuring": true,
        "forOf": true,
        "generators": true,
        "modules": true,
        "objectLiteralComputedProperties": true,
        "objectLiteralDuplicateProperties": true,
        "objectLiteralShorthandMethods": true,
        "objectLiteralShorthandProperties": true,
        "octalLiterals": true,
        "regexUFlag": true,
        "regexYFlag": true,
        "spread": true,
        "superInFunctions": true,
        "templateStrings": true,
        "unicodeCodePointEscapes": true,
        "globalReturn": true,
        "jsx": true
    },
    "rules": {
        "react/jsx-quotes": 0,
        "react/jsx-filename-extension": 0,
        "import/no-extraneous-dependencies": 0,
        "react/jsx-curly-spacing": 0,
        "react/sort-comp": 0,
        "react/forbid-prop-types": 0,
        "react/no-unused-prop-types": 0,
        "jsx-quotes": [2, "prefer-double"],
        "no-extra-semi": 2,
        "semi": [2, "never"]
    }
}