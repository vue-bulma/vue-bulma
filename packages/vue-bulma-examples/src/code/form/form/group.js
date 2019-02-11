let code = {}

code.alignment = `\
<vb-form-item grouped>
  <vb-button color="info">Submit</vb-button>
  <vb-button color="light">Cancel</vb-button>
</vb-form-item>

<vb-form-item grouped align="centered">
  <vb-button color="info">Submit</vb-button>
  <vb-button color="light">Cancel</vb-button>
</vb-form-item>

<vb-form-item grouped align="right">
  <vb-button color="info">Submit</vb-button>
  <vb-button color="light">Cancel</vb-button>
</vb-form-item>
`

code.expanded = `\
<vb-form-item grouped>
  <vb-input placeholder="Find a repository" expanded></vb-input>
  <vb-button color="info">Search</vb-button>
</vb-form-item>
`

code.multiline = `\
<vb-form-item grouped multiline>
  <vb-button>One</vb-button>
  <vb-button>Two</vb-button>
  <vb-button>Three</vb-button>
  <vb-button>Four</vb-button>
  <vb-button>Five</vb-button>
  <vb-button>Size</vb-button>
  <vb-button>Seven</vb-button>
  <vb-button>Eight</vb-button>
  <vb-button>Nine</vb-button>
  <vb-button>Ten</vb-button>
</vb-form-item>
`

export default code
