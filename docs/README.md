# Beyondstule Style Guide

This style guide was build to allow developers and designers to access our Design System and explore the components.

It was build on Gatsby framework with the Docz theme customization.

### Prerequisites

The base of the style guide relays in Gatsby, so you can create a new one using ```npx``` specifying the template name.

```sh
npx create-docz-app docz-app-gatsby --example gatsby
```

### Installing

To run the style guide install before all depedencies.

```sh
npm install
```

## Basic usage_optional

Gatasby provides a local instance to access the documentation. You can use the ```gastsby develop``` or just use our NPM command:

```sh
npm run test
```

## Customizations

In case you need to customize behaviours, components, logos, etc. you need to shadow the original files in ```src``` folder.

For instance, to include the logo, create in ```src``` folder, the following one ```gatsyby-theme-docz/components/Logo``` then create a new file ```index.js``` with the code:

```js
import React from 'react';
import logo from './logo.png';

export const Logo = () => <img src={logo} alt="That's my logo" />;
```

Any file or structure could be shadowed. Check the ```node_modules/gatsyby-theme-docz/components/``` to review all components that you want to customize.

More info regarding the customizations (using shadowing) check the [official documentation](
https://github.com/doczjs/docz/tree/master/core/gatsby-theme-docz)

Some customizations can be done directly in ```doczrc.js``` file, including:

* title
* colors
* mode (dark or light by default)

For the detailed list of all configurations check the [doc](https://www.docz.site/docs/project-configuration).



## Deployment

You can deploy in any Static Web Site structure just like GitHub Pages, AWS S3 or Azure Static Web App.

Just run first:

```sh
npm run build
```

Then copy the folder ```public``` to root of your desirable platform.

## Built With

* [Gatsby](https://www.gatsbyjs.com/) - The react framework for content management
* [Docz](https://www.docz.site/ - Template for Style Guide for Gatsby
* [BeyondStyle](https://www.npmjs.com/package/beyondstyle) - The BeyondLabs Design System 😍

## Contributing

Please read our contribution guidelines for details on our code of conduct, and the process for submitting pull requests to us.


## Authors

* **Michel Fernandes** - *Initial work* - [michelpf](https://github.com/michelpf)
* **Eduardo Basso** - *Initial work* - [michelpf](https://github.com/eduardobasso)
  
See also the list of [contributors](https://github.com/EYLatamSouth/beyondstylecontributors) who participated in this project.

