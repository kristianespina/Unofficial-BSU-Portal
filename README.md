# Unofficial BSU Portal (ReactJS + GraphQL)
[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/kristianespina/Unofficial-BSU-Portal/blob/master/LICENSE)

## 🧀 Live Demo

[View Live Demo on Heroku](https://unofficial-bsu-portal.herokuapp.com/)


## 🍖 Project Details

An unofficial portal for checking student's grades using publicly accessible batstate-u.edu.ph endpoints. Uses **GraphQL** under REST API for the backend and **ReactJS** + Bulma.io for the frontend

## 🌦 Requirements
- node.js
- create-react-app
- graphql
- apollo-client
- apollo-server

## 📂 Project Structure

```
.
├── LICENSE
├── README.md
├── bsu-portal-graphql-server
│   ├── README.md
│   ├── package-lock.json
│   ├── package.json
│   └── src
│       ├── datasources
│       │   └── BSUAPI.js
│       ├── index.js
│       └── schema.js
└── bsu-portal-react-frontend
    ├── README.md
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── favicon.ico
    │   ├── index.html
    │   ├── manifest.json
    │   └── robots.txt
    └── src
        ├── API
        │   └── client.js
        ├── App.css
        ├── App.js
        ├── App.test.js
        ├── Assets
        │   ├── 2.svg
        │   └── rocket.svg
        ├── components
        │   ├── Grades.js
        │   └── Name.js
        ├── index.css
        ├── index.js
        └── serviceWorker.js
```

## 🚀 Usage
### To launch both the back-end and the front-end:

```bash
npm start
```

### To launch the **Back-End Server**: 

```bash
cd bsu-portal-graphql-server
npm start
```

### To launch the **Front-End Server**:

```bash
cd bsu-portal-react-frontend
npm start
```

## ⚙ Installation

```bash
npm run postinstall
```

## 👊 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## 🧑 Author

- **Kristian Espina**
  

## 📄 License

This project is licensed under [MIT](https://choosealicense.com/licenses/mit/)


