<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo :code="code.basic">
        <vb-select :value="model">
          <option>Select dropdown</option>
          <option>With options</option>
        </vb-select>
      </demo>
    </example-section-item>

    <example-section-item title="Multiple">
      <demo :code="code.multiple">
        <vb-select multiple lines="8" :value="['Bolivia', 'Chile']">
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
      </demo>
    </example-section-item>

    <example-section-item title="Colors">
      <demo :code="code.colors">
        <div class="block">
          <vb-select color="primary" value="Primary">
            <option>Primary</option>
            <option>With options</option>
          </vb-select>
        </div>
        <div class="block">
          <vb-select color="info" value="Info">
            <option>Info</option>
            <option>With options</option>
          </vb-select>
        </div>
        <div class="block">
          <vb-select color="success" value="Success">
            <option>Success</option>
            <option>With options</option>
          </vb-select>
        </div>
        <div class="block">
          <vb-select color="warning" value="Warning">
            <option>Warning</option>
            <option>With options</option>
          </vb-select>
        </div>
        <div class="block">
          <vb-select color="danger" value="Danger">
            <option>Danger</option>
            <option>With options</option>
          </vb-select>
        </div>
        <div class="block">
          <vb-select color="white" value="White">
            <option>White</option>
            <option>With options</option>
          </vb-select>
        </div>
        <div class="block">
          <vb-select color="light" value="Light">
            <option>Light</option>
            <option>With options</option>
          </vb-select>
        </div>
        <div class="block">
          <vb-select color="dark" value="Dark">
            <option>Dark</option>
            <option>With options</option>
          </vb-select>
        </div>
        <div class="block">
          <vb-select color="black" value="Black">
            <option>Black</option>
            <option>With options</option>
          </vb-select>
        </div>
        <div class="block">
          <vb-select color="link" value="Link">
            <option>Link</option>
            <option>With options</option>
          </vb-select>
        </div>
      </demo>
    </example-section-item>

    <example-section-item title="Styles">
      <demo :code="code.styles">
        <vb-select rounded value="Rounded">
          <option>Rounded</option>
          <option>With options</option>
        </vb-select>
      </demo>
    </example-section-item>

    <example-section-item title="Sizes">
      <demo :code="code.sizes">
        <div class="block">
          <vb-select size="small" value="Small dropdown">
            <option>Small dropdown</option>
            <option>With options</option>
          </vb-select>
        </div>
        <div class="block">
          <vb-select value="Default dropdown">
            <option>Default dropdown</option>
            <option>With options</option>
          </vb-select>
        </div>
        <div class="block">
          <vb-select size="medium" value="Medium dropdown">
            <option>Medium dropdown</option>
            <option>With options</option>
          </vb-select>
        </div>
        <div class="block">
          <vb-select size="large" value="Large dropdown">
            <option>Large dropdown</option>
            <option>With options</option>
          </vb-select>
        </div>
      </demo>
    </example-section-item>

    <example-section-item title="States">
      <demo :code="code.states">
        <div class="block">
          <vb-select value="Normal dropdown">
            <option>Normal dropdown</option>
            <option>With options</option>
          </vb-select>
        </div>
        <div class="block">
          <vb-select state="hovered" value="Hover dropdown">
            <option>Hover dropdown</option>
            <option>With options</option>
          </vb-select>
        </div>
        <div class="block">
          <vb-select state="focused" value="Focused dropdown">
            <option>Focused dropdown</option>
            <option>With options</option>
          </vb-select>
        </div>
        <div class="block">
          <vb-select loading value="Loading dropdown">
            <option>Loading dropdown</option>
            <option>With options</option>
          </vb-select>
        </div>
      </demo>
    </example-section-item>

    <example-section-item title="With icons">
      <vb-subtitle size="6"
        >The size of the select will define the size of the icon
        container.</vb-subtitle
      >
      <demo :code="code.icons.basic">
        <div class="block">
          <vb-select
            size="small"
            icon="fa fa-home"
            value="Small dropdown with Small icon"
          >
            <option>Small dropdown with Small icon</option>
            <option>With options</option>
          </vb-select>
        </div>
        <div class="block">
          <vb-select
            icon="fa fa-home"
            value="Default dropdown with Default icon"
          >
            <option>Default dropdown with Default icon</option>
            <option>With options</option>
          </vb-select>
        </div>
        <div class="block">
          <vb-select
            size="medium"
            icon="fa fa-home"
            value="Medium dropdown with Medium icon"
          >
            <option>Medium dropdown with Medium icon</option>
            <option>With options</option>
          </vb-select>
        </div>
        <div class="block">
          <vb-select
            size="large"
            icon="fa fa-home"
            value="Large dropdown with Large icon"
          >
            <option>Large dropdown with Large icon</option>
            <option>With options</option>
          </vb-select>
        </div>
      </demo>
    </example-section-item>

    <example-section-item title="Style icon">
      <vb-subtitle size="6"
        >The color of the select will define the color of the icon.</vb-subtitle
      >
      <demo :code="code.icons.style">
        <div class="block">
          <vb-select
            color="primary"
            icon="fa fa-home"
            value="Primary color icon"
          >
            <option>Primary color icon</option>
            <option>With options</option>
          </vb-select>
        </div>
        <div class="block">
          <vb-select color="info" icon="fa fa-home" value="Info color icon">
            <option>Info color icon</option>
            <option>With options</option>
          </vb-select>
        </div>
        <div class="block">
          <vb-select color="success" value="Custom icon style">
            <vb-icon slot="icon" name="fa fa-home" color="warning"></vb-icon>
            <option>Custom icon style</option>
            <option>With options</option>
          </vb-select>
        </div>
      </demo>
    </example-section-item>

    <example-section-item title="Events">
      <demo :code="code.events.normal">
        <div class="block" slot="control">
          Selection: <strong>{{ value }}</strong>
          <br />
          This Select on: <strong>{{ placeholder }}</strong
          >!
        </div>

        <vb-select v-model="value" @focus="handleFocus" @blur="handleBlur">
          <option
            v-for="item in options"
            :key="item.value"
            :value="item.value"
            >{{ item.label }}</option
          >
        </vb-select>
      </demo>

      <demo :code="code.events.multiples">
        <div class="block" slot="control">
          Selection: <strong>{{ multiple }}</strong>
        </div>

        <vb-select multiple v-model="multiple">
          <option
            v-for="item in options"
            :key="item.value"
            :value="item.value"
            >{{ item.label }}</option
          >
        </vb-select>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
import code from '@/code/form/select.js'

export default {
  name: 'Select',
  data() {
    return {
      code,
      model: 'Select dropdown',
      placeholder: 'Blurred',
      value: 1,
      multiple: [],
      options: [{ label: 'Beijing', value: 1 }, { label: 'Shanghai', value: 2 }]
    }
  },
  methods: {
    change(value) {
      this.value = value
    },
    handleFocus() {
      this.placeholder = 'Focused'
    },
    handleBlur() {
      this.placeholder = 'Blurred'
    }
  }
}
</script>
