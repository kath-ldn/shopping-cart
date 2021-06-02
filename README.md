# Shopping Cart wth ReactJS V2.1

## About

This is a simple website with a shopping cart for an online store that I made using ReactJS. The purpose of this was to practice using react-router and routes, as well as hooks/ReactJS more broadly. I developed it for [The Odin Project, Full Stack Javascript course, Javascript Module (React Projects)](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/shopping-cart).

As the user moves through the site, they can add and subtract different items to their cart. When they are finished, they visit a checkout screen (by clicking on the cart), which displays all the items selected and their total cost.

### Live Demo

[GitHub Pages](https://kath-ldn.github.io/shopping-cart-ReactJS/)

DEMO NOTE: Browser Router in React does not work well with Github Pages because GP does not support browser history. You can navigate across the pages using the nav as usual. Please do not click refresh or your browser back button, this will result in a 404 from GH pages.

There was a bug that I fixed where the Home component would not show on first load - I think I have fixed this by adding an additional route with the GH pages path. If it crops up, to simulate what the website would look like on a regular website - click the page title in the top-left corner. This takes you to the Home page.

I am going to experiment with switching to Hash Router.

### Built with

* HTML
* CSS
* Javascript
* ReactJS

## Prerequisites & Installation

* A laptop/desktop - this project is not yet mobile responsive
* [ReactJS](https://reactjs.org/docs/getting-started.html)

## Contributing

For any significant changes - please open an issue first.

## Licence

Copyright (c) 2021 Kath Turner

## Contact

Kath Turner - [@kath_ldn](https://twitter.com/home) - kath.develops@gmail.com

## Roadmap

For the next version I will:
* Continue to refactor - some areas of duplication in JS & styles;
* Re-examine at data structures - whether particularly CartContext is stored in most efficient way (particularly when passing to Checkout);
* Add mobile/device responsiveness (currently just Web);
* 'Back' feature/navigation;
* Add item descriptions.
* Switch to Hash Router so that the Github Pages demo works

### Known Issues

* Not responsive/suited to all devices.
* Known ReactJS [issue with Opacity](https://github.com/facebook/react-native/issues/3183) - previously used this for hover events and have removed. Replace with other subtle effect for user interaction.

## Acknowledgements

* React/Facebook
* Google Fonts
* Meyerweb (reset css)
* Favicon by [Vandelay Design @ Iconfinder](https://www.iconfinder.com/iconsets/flat-line-valentine-1)
* Cart icon by [Cole Bemis @ Iconfinder](https://www.iconfinder.com/colebemis)
* GitHub Pages
