# ToyShop PWA

PWA toy shop example. Check the **demo** here: https://komlew.github.io/toyshop/

To install the app on your local machine use following commands in the terminal:

```bash
git clone git@github.com:komlew/toyshop.git
cd toyshop
npm install
npm start
```

And check this url http://localhost:3000/ in your browser of choice.

## Preview (initial state)

![Screenshot of the app, initial state](https://komlew.github.io/toyshop/01.png)

## Preview (selected item)

![Screenshot of the app, selected item](https://komlew.github.io/toyshop/02.png)

## Functionality

<img align="right" width="300" src="https://komlew.github.io/toyshop/03.png" alt="Screenshot of the app, mobile version" />

When user first opens the app it sends the request to an API and renders overview page. It contains navigation bar (only as a placeholder, it's not active) and list of the products. Each product has title, thumbnail image and the price. Next to the list of items user might see a note to choose one of the elements in the list to see the details. When user selects a product the app renders details view next to the list of items for desktop version and an overlay with details in mobile version. Details view contains title, price, product description, specification and an image gallery. User might click on a thumbnail image to see its bigger version.

## Solutions

This app is build with React, React Router, Redux, Redux Saga, Flow, Prettier and ESLint. Flow types applied to all JS files and total coverage is about 95%. The app is build according to mobile-first principle and it's planned as PWA (progressive web app).

## Limitations

At the current version user can't leave comments. Frontend doesn't handle errors at the moment. Also the app isn't covered by unit tests or UI tests.

The app is tested on desktop device using the latest version of Google Chrome and Firefox. Mobile and tablet support is tested using Chrome dev tools.
