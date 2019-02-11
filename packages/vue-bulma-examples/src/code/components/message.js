let code = {}

code.basic = `\
<vb-message title="Hello World" showClose>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
  Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
  Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula,
  id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
</vb-message>
`

code.colors = `\
<vb-message title="Dark" color="dark" showClose>
  <p>This is the content</p>
</vb-message>

<vb-message title="Primary" color="primary" showClose>
  <p>This is the content</p>
</vb-message>

<vb-message title="Link" color="link" showClose>
  <p>This is the content</p>
</vb-message>

<vb-message title="Info" color="info" showClose>
  <p>This is the content</p>
</vb-message>

<vb-message title="Success" color="success" showClose>
  <p>This is the content</p>
</vb-message>

<vb-message title="Warning" color="warning" showClose>
  <p>This is the content</p>
</vb-message>

<vb-message title="Danger" color="danger" showClose>
  <p>This is the content</p>
</vb-message>
`

code.bodyOnly = `\
<vb-message>
  <p>Default</p>
</vb-message>

<vb-message color="dark">
  <p>Dark</p>
</vb-message>

<vb-message color="primary">
  <p>Primary</p>
</vb-message>

<vb-message color="link">
  <p>Link</p>
</vb-message>

<vb-message color="info">
  <p>Info</p>
</vb-message>

<vb-message color="success">
  <p>Success</p>
</vb-message>

<vb-message color="warning">
  <p>Warning</p>
</vb-message>

<vb-message color="danger">
  <p>Danger</p>
</vb-message>
`

code.sizes = `\
<vb-message title="Small message" size="small" showClose>
  <p>This is the content</p>
</vb-message>

<vb-message title="Normal message" showClose>
  <p>This is the content</p>
</vb-message>

<vb-message title="Medium message" size="medium" showClose>
  <p>This is the content</p>
</vb-message>

<vb-message title="Large message" size="large" showClose>
  <p>This is the content</p>
</vb-message>
`

export default code
