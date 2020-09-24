# BeyondStyle

Library of shared components of BeyondLabs.

[![NPM](https://img.shields.io/npm/v/beyondstyle.svg)](https://www.npmjs.com/package/beyondstyle) ![Publish NPM Package](https://github.com/EYLatamSouth/beyondstyle/workflows/Publish%20NPM%20Package/badge.svg)

## Install

```bash
npm install --save beyondstyle
```

## Font

Add EYInterstate font files in the public folder.
```
- public
 - fonts
  - ey-interstate
    ...files
```

## Usage

```jsx
import React from 'react'
import { PirateButton } from 'beyondstyle';

const MyApp = () => {
  return (
    <PirateButton />
  );
};

export default MyApp;
```
