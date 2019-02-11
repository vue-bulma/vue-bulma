let code = {}

code.basic = `\
<vb-form-item addons>
  <vb-button color="info">Confirm</vb-button>
  <vb-button color="warning">Reset</vb-button>
</vb-form-item>

<vb-form-item addons>
  <vb-input placeholder="Find a repository"></vb-input>
  <vb-button color="info">Search</vb-button>
</vb-form-item>

<vb-form-item addons>
  <vb-input placeholder="Your email"></vb-input>
  <vb-button color="info" state="static">@gmail.com</vb-button>
</vb-form-item>
`

code.expanded = `\
<vb-form-item addons>
  <vb-select value="€">
    <option>$</option>
    <option>£</option>
    <option>€</option>
  </vb-select>
  <vb-input placeholder="Amount of money"></vb-input>
  <vb-button>Transfer</vb-button>
</vb-form-item>

<vb-form-item addons>
  <vb-select value="€">
    <option>$</option>
    <option>£</option>
    <option>€</option>
  </vb-select>

  <vb-input expanded placeholder="Amount of money"></vb-input>

  <vb-button>Transfer</vb-button>
</vb-form-item>

<vb-form-item addons>
  <vb-select name="country" value="Argentina" fullWidth>
    <option value="Argentina">Argentina</option>
    <option value="Bolivia">Bolivia</option>
    <option value="Brazil">Brazil</option>
    <option value="Chile">Chile</option>
    <option value="Colombia">Colombia</option>
    <option value="Ecuador">Ecuador</option>
    <option value="Guyana">Guyana</option>
    <option value="Paraguay">Paraguay</option>
    <option value="Peru">Peru</option>
    <option value="Suriname">Suriname</option>
    <option value="Uruguay">Uruguay</option>
    <option value="Venezuela">Venezuela</option>
  </vb-select>
  <vb-button>Choose</vb-button>
</vb-form-item>
`

code.alignment = `\
<vb-form-item addons>
  <vb-select value="€">
    <option>$</option>
    <option>£</option>
    <option>€</option>
  </vb-select>
  <vb-input placeholder="Amount of money"></vb-input>
  <vb-button color="primary">Transfer</vb-button>
</vb-form-item>

<vb-form-item addons align="centered">
  <vb-select value="€">
    <option>$</option>
    <option>£</option>
    <option>€</option>
  </vb-select>
  <vb-input placeholder="Amount of money"></vb-input>
  <vb-button color="primary">Transfer</vb-button>
</vb-form-item>

<vb-form-item addons align="right">
  <vb-select value="€">
    <option>$</option>
    <option>£</option>
    <option>€</option>
  </vb-select>
  <vb-input placeholder="Amount of money"></vb-input>
  <vb-button color="primary">Transfer</vb-button>
</vb-form-item>
`

export default code
