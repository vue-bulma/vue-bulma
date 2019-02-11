let code = `\
<template>
  <div>
    <vb-radio-group v-model="horizontal">
      <vb-radio :label="true">Horizontal</vb-radio>
      <vb-radio :label="false">Vertical</vb-radio>
    </vb-radio-group>

    <vb-form :horizontal="horizontal">
      <vb-form-item label="From">
        <vb-form-item message="Name required.">
          <vb-input prefix="fa fa-user" placeholder="Name"></vb-input>
        </vb-form-item>

        <vb-form-item message="Email required.">
          <vb-input color="primary" value="alex@smith.com">
            <i slot="prefix" class="fa fa-envelope" aria-hidden="true"></i>
            <i slot="suffix" class="fa fa-check" aria-hidden="true"></i>
          </vb-input>
        </vb-form-item>
      </vb-form-item>

      <vb-form-item addons>
        <vb-button state="static">+44</vb-button>
        <vb-input type="tel" placeholder="Your phone number" expanded></vb-input>

        <p slot="message" class="help">Do not enter the first zero</p>
      </vb-form-item>

      <vb-form-item label="Department">
        <vb-select value="Marketing">
          <option>Business development</option>
          <option>Marketing</option>
          <option>Sales</option>
        </vb-select>
      </vb-form-item>

      <vb-form-item label="Already a member?">
        <vb-radio-group v-model="already">
          <vb-radio :label="1">Yes</vb-radio>
          <vb-radio :label="0">No</vb-radio>
        </vb-radio-group>
      </vb-form-item>

      <vb-form-item label="Subject" message="This field is required" color="danger">
        <vb-input placeholder="e.g. Partnership opportunity" color="danger"></vb-input>
      </vb-form-item>

      <vb-form-item label="Question">
        <vb-textarea placeholder="Explain how we can help you"></vb-textarea>
      </vb-form-item>

      <vb-form-item>
        <vb-checkbox-group v-model="shared">
          <vb-checkbox label="twitter">
            <vb-icon name="fa fa-twitter"></vb-icon>
          </vb-checkbox>
          <vb-checkbox label="facebook">
            <vb-icon name="fa fa-facebook"></vb-icon>
          </vb-checkbox>
          <vb-checkbox label="github">
            <vb-icon name="fa fa-github"></vb-icon>
          </vb-checkbox>
        </vb-checkbox-group>
      </vb-form-item>

      <vb-form-item grouped>
        <vb-button color="primary">Send message</vb-button>
        <vb-button color="light" type="reset">Reset</vb-button>
      </vb-form-item>
    </vb-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      horizontal: true,
      shared: [],
      already: 1
    }
  }
}
</script>
`

export default code
