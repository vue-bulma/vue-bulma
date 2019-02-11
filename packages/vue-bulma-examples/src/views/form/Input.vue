<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo :code="code.basic">
        <vb-input></vb-input>
      </demo>
    </example-section-item>

    <example-section-item title="Colors">
      <demo :code="code.colors">
        <div class="block">
          <vb-input color="primary" placeholder="Primary"></vb-input>
        </div>
        <div class="block">
          <vb-input color="info" placeholder="Info"></vb-input>
        </div>
        <div class="block">
          <vb-input color="success" placeholder="Success"></vb-input>
        </div>
        <div class="block">
          <vb-input color="warning" placeholder="Warning"></vb-input>
        </div>
        <div class="block">
          <vb-input color="danger" placeholder="Danger"></vb-input>
        </div>
        <div class="block">
          <vb-input color="white" placeholder="White"></vb-input>
        </div>
        <div class="block">
          <vb-input color="light" placeholder="Light"></vb-input>
        </div>
        <div class="block">
          <vb-input color="dark" placeholder="Dark"></vb-input>
        </div>
        <div class="block">
          <vb-input color="black" placeholder="Black"></vb-input>
        </div>
        <div class="block">
          <vb-input color="link" placeholder="Link"></vb-input>
        </div>
      </demo>
    </example-section-item>

    <example-section-item title="Sizes">
      <demo :code="code.sizes">
        <div class="block">
          <vb-input size="small" placeholder="Small"></vb-input>
        </div>
        <div class="block">
          <vb-input placeholder="Normal"></vb-input>
        </div>
        <div class="block">
          <vb-input size="medium" placeholder="Medium"></vb-input>
        </div>
        <div class="block">
          <vb-input size="large" placeholder="Large"></vb-input>
        </div>
      </demo>
    </example-section-item>

    <example-section-item title="Rounded">
      <demo :code="code.rounded">
        <vb-input rounded placeholder="Rounded"></vb-input>
      </demo>
    </example-section-item>

    <example-section-item title="States">
      <demo :code="code.states">
        <div class="block">
          <vb-input placeholder="Normal"></vb-input>
        </div>
        <div class="block">
          <vb-input state="hovered" placeholder="Hovered"></vb-input>
        </div>
        <div class="block">
          <vb-input state="focused" placeholder="Focus"></vb-input>
        </div>
        <div class="block">
          <vb-input placeholder="Loading" loading></vb-input>
        </div>
        <div class="block">
          <vb-input placeholder="Disabled" disabled></vb-input>
        </div>
        <div class="block">
          <vb-input
            value="This text is readonly"
            placeholder="Disabled"
            readonly
          ></vb-input>
        </div>
        <div class="block">
          <vb-input value="Static: me@example.com" static readonly></vb-input>
        </div>
      </demo>
    </example-section-item>

    <example-section-item title="With Font Awesome icons">
      <vb-content
        >The size of the input will define the size of the icon
        container.</vb-content
      >
      <demo :code="code.icon">
        <div class="block">
          <vb-input
            prefix="fa fa-envelope"
            suffix="fa fa-check"
            placeholder="Small"
            size="small"
          ></vb-input>
        </div>
        <div class="block">
          <vb-input
            prefix="fa fa-envelope"
            suffix="fa fa-check"
            placeholder="Normal"
          ></vb-input>
        </div>
        <div class="block">
          <vb-input
            prefix="fa fa-envelope"
            suffix="fa fa-check"
            placeholder="Medium"
            size="medium"
          ></vb-input>
        </div>
        <div class="block">
          <vb-input
            prefix="fa fa-envelope"
            suffix="fa fa-check"
            placeholder="Large"
            size="large"
          ></vb-input>
        </div>

        <div class="block">
          <vb-input placeholder="Style icon" size="large">
            <vb-icon slot="prefix" color="info" name="fa fa-envelope"></vb-icon>
            <vb-icon
              size="large"
              color="success"
              slot="suffix"
              name="fa fa-check"
            ></vb-icon>
          </vb-input>
        </div>
      </demo>
    </example-section-item>

    <example-section-item title="Event">
      <demo :code="code.events">
        <div class="block" slot="control">
          Value:
          <strong>{{ value }}</strong>
          <br />State:
          <strong>{{ placeholder }}</strong>
        </div>

        <vb-input
          v-model="value"
          @focus="handleFocus"
          @blur="handleBlur"
        ></vb-input>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
import code from '@/code/form/input.js'

export default {
  name: 'Input',
  data() {
    return {
      code,
      value: '',
      placeholder: 'Input blured!'
    }
  },
  methods: {
    change(value) {
      this.value = value
    },
    handleFocus() {
      this.placeholder = 'Input focused!'
    },
    handleBlur() {
      this.placeholder = 'Input blurred!'
    }
  }
}
</script>
