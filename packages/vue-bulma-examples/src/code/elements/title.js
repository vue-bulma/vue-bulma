let code = {}
code.basic = `\
<vb-title>Title</vb-title>

<vb-subtitle>Subtitle</vb-subtitle>
`

code.size = {}

code.size.title = `\
<vb-title size="1">Title 1</vb-title>
<vb-title size="2">Title 2</vb-title>
<vb-title size="3">Title 3 (default size)</vb-title>
<vb-title size="4">Title 4</vb-title>
<vb-title size="5">Title 5</vb-title>
<vb-title size="6">Title 6</vb-title
`

code.size.subtitle = `\
<vb-subtitle size="1">Subtitle 1</vb-subtitle>
<vb-subtitle size="2">Subtitle 2</vb-subtitle>
<vb-subtitle size="3">Subtitle 3</vb-subtitle>
<vb-subtitle size="4">Subtitle 4</vb-subtitle>
<vb-subtitle size="5">Subtitle 5 (default size)</vb-subtitle>
<vb-subtitle size="6">Subtitle 6</vb-subtitle>
`

code.combinations = `\
<vb-title>Title</vb-title>
<vb-subtitle>Subtitle</vb-subtitle>

<vb-title size="1">Title 1</vb-title>
<vb-subtitle size="3">Subtitle 3</vb-subtitle>
`

code.spaced = `\
<vb-title spaced>Title</vb-title>

<vb-subtitle>Subtitle</vb-subtitle>
`
export default code
