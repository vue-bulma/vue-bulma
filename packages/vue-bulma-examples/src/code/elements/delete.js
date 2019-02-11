let code = {}

code.basic = `\
<vb-delete></vb-delete>
`

code.size = `\
<vb-delete size="small"></vb-delete>

<vb-delete></vb-delete>

<vb-delete size="medium"></vb-delete>

<vb-delete size="large"></vb-delete>
`

code.combinations = `\
<vb-tag color="success">
  Hello World<vb-delete size="small"></vb-delete>
</vb-tag>

<vb-notification color="danger">
  <vb-delete></vb-delete>Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit
</vb-notification>

<vb-message title="info" color="info" showClose>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
    Nullam gravida purus diam, et dictum felis venenatis efficitur.
    Aenean ac eleifend lacus, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula,
    id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
  </p>
</vb-message>
`

export default code
