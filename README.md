
### This project implements a temperature calculator and demonstrates the use of react-bootstrap

The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app); i.e. `npx crete-react-app <app_name>`
#### Great react-bootstrap tutorial can be found [here](https://react-bootstrap.github.io/getting-started/introduction/) and [here](https://www.w3schools.com/bootstrap/default.asp)


#### To use react-bootstrap:
- Install react-bootstrap dependency:
  ```
  npm install react-bootstrap
  ```
- Add react-bootstrap CSS's to index.html <head> element:
  ```
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
  ```  
- Import the items you'd like to use:
  ```
  import { Button } from 'react-bootstrap';
  ```
- Use the items in your Render() function:
  ```
  <Button bsStyle="info">Click Me!</Button>
  ```
#### To start working on this project:
- `git clone` to clone the project
- `cd` to the app folder
- `npm install` to install all dependencies into the app folder
- `npm start` to start the server on http://localhost:3000
- open the project using Atom or any other IDE
