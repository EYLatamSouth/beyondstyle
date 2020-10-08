Buttons allow users to take actions, and make choices, with a single tap.

* Dialogs
* Modal windows
* Forms
* Cards
* Toolbars

### Usage

Just import the `Button` component from BeyondStyle.

```js static
import { Button } from 'beyondstyle';
```

### Contained buttons

Contained buttons are high-emphasis, distinguished by their use of elevation and fill. They contain actions that are primary to your app.

```js padded
<Button variant="contained" color="primary">Primary</Button>
<Button variant="contained" color="secondary">Secondary</Button>
<Button variant="contained" color="tertiary">Tertiary</Button>
<Button variant="contained" disabled>Disabled</Button>
<Button variant="contained" color="primary" href="#">Link</Button>
```

### Outlined buttons

Outlined buttons are medium-emphasis buttons. They contain actions that are important, but aren’t the primary action in an app.

Outlined buttons are also a lower emphasis alternative to contained buttons, or a higher emphasis alternative to text buttons.

```js padded
<Button variant="outlined" color="primary">Primary</Button>
<Button variant="outlined" color="secondary">Secondary</Button>
<Button variant="outlined" color="tertiary">Tertiary</Button>
<Button variant="outlined" disabled>Disabled</Button>
<Button variant="outlined" color="primary" href="#">Link</Button>
```

### Text buttons

Text buttons are typically used for less-pronounced actions, including those located:

* In dialogs
* In cards

In cards, text buttons help maintain an emphasis on card content.

```js padded
<Button variant="text" color="primary">Primary</Button>
<Button variant="text" color="secondary">Secondary</Button>
<Button variant="text" color="tertiary">Tertiary</Button>
<Button variant="text" disabled>Disabled</Button>
<Button variant="text" color="primary" href="#">Link</Button>
```

### Handling clicks

All components accept an `onClick` handler that is applied to the root DOM element.

```js static
<Button onClick={() => { alert('clicked') }}>Click me</Button>
```

### Sizes

Fancy larger or smaller buttons? Use the size property.

```js padded
<Button variant="contained" color="primary" size="small">Small</Button>
<Button variant="contained" color="primary" size="medium">Medium</Button>
<Button variant="contained" color="primary" size="large">Large</Button>
```