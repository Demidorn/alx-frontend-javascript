# ES6 Data Manipulation

### Resources
- [Array](https://intranet.alxswe.com/rltoken/KDAVab6oKKsFBXJc2-ll-A)
- [Typed Array](https://intranet.alxswe.com/rltoken/kpoPupbBdDmukQkcKlvwnw)
- [Set Data Structure](https://intranet.alxswe.com/rltoken/C8x3dhHo0p3uE7S9-EyP9Q)
- [Map Data Structure](https://intranet.alxswe.com/rltoken/XR-ql9v9-PWcXnvTc749gw)
- [WeakMap](https://intranet.alxswe.com/rltoken/NEy8fk2QRytajR8hgXkCog)

## ## Requirements
> - All your files will be executed on Ubuntu 18.04 LTS<br>using NodeJS 12.11.x
> - Allowed editors: __vi__, __vim__, __emacs__, __Visual Studio Code__.
> - All your files should end with a new line.
> - A **README.md** file, at the root of the folder of the<br> project, is mandatory.
> - Your code should use the _js_ extension.
> - Your code will be tested using Jest and the command <br>**npm run test**.
> - Your code will be verified against lint using _ESLint_.
> - Your code needs to pass all the tests and lint. You can<br> verify the entire project running **npm run full-test**
> - All of your functions must be exported.

| NO | TASKS | DESCRIPTION |
|----- |---------- |--------|
|Basic list of objects | Create a function named getListStudents that returns <br>an array of objects | Each object should have three attributes: *id*(Number), <br>*firstName* (String), and *location* (String).<br>The array contains the following students in order:<br>- Guillaume, id: 1, in San Francisco<br>- James, id: 2, in Columbia<br>- Serena, id: 5, in San Francisco |

## Setup
1. **Install NodeJS 12.11.x** in your home directory
```
    curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
    sudo bash nodesource_setup.sh
    sudo apt install nodejs -y 
```
2. **Install Jest, Babel, and ESLint**
in your project directory, install Jest, <br>Babel and ESList by using the supplied package.json and run npm install.

*NOTE:* Don’t forget to run $ npm install when you have the package.json
