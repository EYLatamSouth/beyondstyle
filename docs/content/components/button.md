---
title: Buttons
---


`Button` is used for actions, like in forms, while `Link` is used for destinations, or moving from one page to another.

In special cases where you'd like to use a `<a>` styled like a Button, use `<Button as='a'>` and provide an `href`.

To create a button group, wrap `Button` elements in the `ButtonGroup` element. `ButtonGroup` gets the same props as `Box`.

## Default examples

```jsx live
<Button variant='contained' color='primary'>Button</Button>
```

## System props

`Button` and `ButtonGroup` components get `COMMON` and `LAYOUT` system props. Read our [System Props](/system-props) doc page for a full list of available props.

## Component props

Native `<button>` HTML attributes are forwarded to the underlying React `button` component and are not listed below.

### Button
| Prop name | Type | Default | Description |
| :- | :- | :-: | :- |
| as | String | `button` | sets the HTML tag for the component |
| fontSize | Number or String | | explicitly sets the font size for the Button text; overrides any value for the `variant` prop |
| variant | String | 'medium' | a value of `small`, `medium`, or `large` results in smaller or larger Button text size; no effect if `fontSize` prop is set |

### ButtonGroup
`ButtonGroup` has access to the same props as `Box`