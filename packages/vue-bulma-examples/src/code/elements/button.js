let code = {}
code.basic = `\
<vb-button>Button</vb-button>
`
code.colors = `\
<vb-button color="primary">Primary</vb-button>

<vb-button color="link">Link</vb-button>

<vb-button color="info">Info</vb-button>

<vb-button color="success">Success</vb-button>

<vb-button color="warning">Warning</vb-button>

<vb-button color="danger">Danger</vb-button>

<vb-button color="white">White</vb-button>

<vb-button color="light">Light</vb-button>

<vb-button color="dark">Dark</vb-button>

<vb-button color="black">Black</vb-button>

<vb-button color="text">Text</vb-button>
`

code.size = `\
<vb-button size="small">Small</vb-button>

<vb-button>Default</vb-button>

<vb-button size="medium">Medium</vb-button>

<vb-button size="large">Large</vb-button>
`

code.displays = `\
<vb-button fullwidth>Fullwidth</vb-button>
`

code.outlined = `\
<vb-button outlined>Outlined</vb-button>

<vb-button color="primary" outlined>Outlined</vb-button>

<vb-button color="link" outlined>Outlined</vb-button>

<vb-button color="info" outlined>Outlined</vb-button>

<vb-button color="warning" outlined>Outlined</vb-button>

<vb-button color="success" outlined>Outlined</vb-button>

<vb-button color="danger" outlined>Outlined</vb-button>
`
code.invert = `\
<vb-button color="primary" inverted>Invert</vb-button>

<vb-button color="link" inverted>Invert</vb-button>

<vb-button color="info" inverted>Invert</vb-button>

<vb-button color="success" inverted>Invert</vb-button>

<vb-button color="danger" inverted>Invert</vb-button>
`

code.invertedOutlined = `\
<vb-button color="primary" inverted outlined>Invert Outlined</vb-button>

<vb-button color="link" inverted outlined>Invert Outlined</vb-button>

<vb-button color="info" inverted outlined>Invert Outlined</vb-button>

<vb-button color="success" inverted outlined>Invert Outlined</vb-button>

<vb-button color="danger" inverted outlined>Invert Outlined</vb-button>
`

code.rounded = `\
<vb-button rounded>Outlined</vb-button>

<vb-button color="primary" rounded>Invert Outlined</vb-button>

<vb-button color="link" rounded>Invert Outlined</vb-button>

<vb-button color="info" rounded>Invert Outlined</vb-button>

<vb-button color="success" rounded>Invert Outlined</vb-button>

<vb-button color="danger" rounded>Invert Outlined</vb-button>
`

code.states = `\
<vb-button state="hovered">Hover</vb-button>

<vb-button state="focused">Focus</vb-button>

<vb-button state="active">Active</vb-button>

<vb-button state="loading">Loading</vb-button>

<vb-button state="static">Static</vb-button>
`

code.disabled = `\
<vb-button disabled>Disable</vb-button>

<vb-button color="primary" disabled>Disable</vb-button>

<vb-button color="link" disabled>Disable</vb-button>

<vb-button color="info" disabled>Disable</vb-button>

<vb-button color="success" disabled>Disable</vb-button>

<vb-button color="danger" disabled>Disable</vb-button>
`

code.icons = `\
<vb-button>
  <vb-icon name="fa fa-bold"></vb-icon>
</vb-button>

<vb-button>
  <vb-icon name="fa fa-italic"></vb-icon>
</vb-button>

<vb-button>
  <vb-icon name="fa fa-underline"></vb-icon>
</vb-button>

<vb-button color="primary">
  <vb-icon name="fa fa-twitter"></vb-icon>
  <span>Twitter</span>
</vb-button>

<vb-button color="success">
  <vb-icon name="fa fa-check"></vb-icon>
  <span>Save</span>
</vb-button>

<vb-button color="danger" outlined>
  <span>Delete</span>
  <vb-icon name="fa fa-times"></vb-icon>
</vb-button>

<vb-button size="small">
  <vb-icon name="fa fa-github"></vb-icon>
  <span>Github</span>
</vb-button>

<vb-button>
  <vb-icon name="fa fa-github"></vb-icon>
  <span>Github</span>
</vb-button>

<vb-button size="medium">
  <vb-icon name="fa fa-github"></vb-icon>
  <span>Github</span>
</vb-button>

<vb-button size="large">
  <vb-icon name="fa fa-github"></vb-icon>
  <span>Github</span>
</vb-button>

<vb-button size="small">
  <vb-icon name="fa fa-header"></vb-icon>
</vb-button>

<vb-button>
  <vb-icon name="fa fa-header" size="small"></vb-icon>
</vb-button>
<vb-button>
  <vb-icon name="fa fa-header fa-lg"></vb-icon>
</vb-button>

<vb-button size="medium">
  <vb-icon name="fa fa-header" size="small"></vb-icon>
</vb-button>

<vb-button size="medium">
  <vb-icon name="fa fa-header fa-lg"></vb-icon>
</vb-button>

<vb-button size="medium">
  <vb-icon name="fa fa-header fa-2x"></vb-icon>
</vb-button>

<vb-button size="large">
  <vb-icon name="fa fa-header" size="small"></vb-icon>
</vb-button>

<vb-button size="large">
  <vb-icon name="fa fa-header fa-lg"></vb-icon>
</vb-button>

<vb-button size="large">
  <vb-icon name="fa fa-header fa-2x" size="medium"></vb-icon>
</vb-button>
`

code.group = `\
<vb-button-group>
  <vb-button color="primary">Save</vb-button>
  <vb-button>Cancel</vb-button>
  <vb-button color="danger">Delete</vb-button>
</vb-button-group>
`

code.addons = `\
<vb-button-addons>
  <vb-button>
    <vb-icon name="fa fa-align-left"></vb-icon>
    <span>left</span>
  </vb-button>

  <vb-button>
    <vb-icon name="fa fa-align-center"></vb-icon>
    <span>center</span>
  </vb-button>

  <vb-button>
    <vb-icon name="fa fa-align-right"></vb-icon>
    <span>right</span>
  </vb-button>
</vb-button-addons>
`

code.list = `\
<vb-buttons-List>
  <vb-button>Save changes</vb-button>
  <vb-button>Save and continue</vb-button>
  <vb-button>Cancel</vb-button>
</vb-buttons-List>
`

code.listAddonsLeft = `\
<vb-buttons-List addons>
  <vb-button color="success">Save changes</vb-button>
  <vb-button>Save and continue</vb-button>
  <vb-button>Cancel</vb-button>
</vb-buttons-List>
`

code.listAddonsCentered = `\
<vb-buttons-List addons align="centered">
  <vb-button>Save changes</vb-button>
  <vb-button color="info">Save and continue</vb-button>
  <vb-button>Cancel</vb-button>
</vb-buttons-List>
`

code.listAddonsRight = `\
<vb-buttons-List addons align="right">
  <vb-button>Save changes</vb-button>
  <vb-button>Save and continue</vb-button>
  <vb-button color="danger">Cancel</vb-button>
</vb-buttons-List>
`
export default code
