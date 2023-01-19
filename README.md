# nextjs

##  Create Next App
- Create Folder ```My-Next-Project-Name```
- Open CMD ```npx create-next-app@latest ./```


## Run App

```bash
npm run dev
```

## Install React-Bootstrap on NextJS
- ```npm i react-bootstrap bootstrap```

#### _app.js
Import bootstrap styles in your _app.js:
```js
import 'bootstrap/dist/css/bootstrap.min.css';
```

```js
import {Container, Row, Col} from 'react-bootstrap';
        
const MyComponent = () => (
  <>
    <Container fluid>
      <Row>
        <Col md={4}>Im Col 4</Col>
        <Col md={8}>Im Col 8</Col>
      </Row>
    </Container>
  </>
);
        
export default MyComponent;
```
