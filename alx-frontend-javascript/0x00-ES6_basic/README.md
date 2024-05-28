ALX FRONTEND 

### Resources
- [ECMAScript 6 - ECMAScript 2015](https://intranet.alxswe.com/rltoken/HRvh-7X2k2JmPu2XMuvlnQ)
- [Statements and declarations](https://intranet.alxswe.com/rltoken/bu6OK8Wbzzxr04Si-qup-w)
- [Arrow functions](https://intranet.alxswe.com/rltoken/kn70en_i7XsVl9PUhAK1fQ)
- [Default parameters](https://intranet.alxswe.com/rltoken/e1-hBHivLFWOip87Lc4Jfw)
- [Rest parameter](https://intranet.alxswe.com/rltoken/TB_tbhDM8tPkVIS4_Tw_rw)
- [Demystifying ES6 Iterables & Iterators](https://intranet.alxswe.com/rltoken/MyAmrYqmTSHF66QmE5D8bA)


## Requirements
- All your files will be executed on Ubuntu 18.04 LTS<br>using NodeJS 12.11.x
- Allowed editors: __vi__, __vim__, __emacs__, __Visual Studio Code__.
- All your files should end with a new line.
- A **README.md** file, at the root of the folder of the<br> project, is mandatory.
- Your code should use the _js_ extension.
- Your code will be tested using Jest and the command <br>**npm run test**.
- Your code will be verified against lint using _ESLint_.
- Your code needs to pass all the tests and lint. You can<br> verify the entire project running **npm run full-test**
- All of your functions must be exported.

## Setup
*Make sure NodeJS 12.11.x in your home directory is installed*
```bash 
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

### Also install  Jest, Babel, and ESLint
*Configuration files*

**package.json**
```bash
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
```

**babel.config.js**
``` bash
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```

**.eslintrc.js**
``` bash 
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};
```
After **run npm install** to install packages.
To check version
```npm -v```
```nodejs -v ``` or ```node -v```