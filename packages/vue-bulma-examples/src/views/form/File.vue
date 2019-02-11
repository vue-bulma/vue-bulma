<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo :code="code.basic">
        <vb-uploader label="Choose a file." icon="fa fa-upload"></vb-uploader>
      </demo>
    </example-section-item>

    <example-section-item title="Modifiers">
      <vb-subtitle size="6">Selected file name</vb-subtitle>
      <demo :code="code.modifiers.filtName">
        <vb-uploader label="Choose a file">
          <vb-icon slot="icon" name="fa fa-upload"></vb-icon>

          <span slot="file-name">{{ demoFilename }}</span>
        </vb-uploader>
      </demo>

      <vb-subtitle size="6">Expand file name</vb-subtitle>
      <demo :code="code.modifiers.expand">
        <vb-uploader fullwidth label="Choose a file">
          <vb-icon slot="icon" name="fa fa-upload"></vb-icon>

          <span slot="file-name">{{ demoFilename }}</span>
        </vb-uploader>
      </demo>

      <vb-subtitle size="6">Boxed</vb-subtitle>
      <demo :code="code.modifiers.boxed">
        <vb-uploader boxed label="Choose a file.">
          <vb-icon slot="icon" name="fa fa-upload"></vb-icon>
        </vb-uploader>
      </demo>

      <vb-subtitle size="6">Combine filename and boxed</vb-subtitle>
      <demo :code="code.modifiers.combine">
        <vb-uploader boxed>
          <vb-icon slot="icon" name="fa fa-upload"></vb-icon>

          <span slot="label">Choose a file.</span>

          <span slot="file-name">{{ demoFilename }}</span>
        </vb-uploader>
      </demo>
    </example-section-item>

    <example-section-item title="Colors">
      <demo :code="code.colors">
        <div class="block">
          <vb-uploader color="primary" label="Primary">
            <vb-icon slot="icon" name="fa fa-upload"></vb-icon>
          </vb-uploader>
        </div>
        <div class="block">
          <vb-uploader color="info" label="Info" :name="demoFilename">
            <vb-icon slot="icon" name="fa fa-upload"></vb-icon>
          </vb-uploader>
        </div>
        <div class="block">
          <vb-uploader boxed color="warning" label="Warning">
            <vb-icon slot="icon" name="fa fa-cloud-upload"></vb-icon>
          </vb-uploader>
        </div>
        <div class="block">
          <vb-uploader boxed color="danger" label="Danger" :name="demoFilename">
            <vb-icon slot="icon" name="fa fa-cloud-upload"></vb-icon>
          </vb-uploader>
        </div>
        <div class="block">
          <vb-uploader color="white" label="Color white">
            <vb-icon slot="icon" name="fa fa-upload"></vb-icon>
          </vb-uploader>
        </div>
        <div class="block">
          <vb-uploader color="light" label="Light" :name="demoFilename">
            <vb-icon slot="icon" name="fa fa-upload"></vb-icon>
          </vb-uploader>
        </div>
        <div class="block">
          <vb-uploader boxed color="dark" label="Dark">
            <vb-icon slot="icon" name="fa fa-cloud-upload"></vb-icon>
          </vb-uploader>
        </div>
        <div class="block">
          <vb-uploader boxed color="black" label="Black" :name="demoFilename">
            <vb-icon slot="icon" name="fa fa-cloud-upload"></vb-icon>
          </vb-uploader>
        </div>
        <div class="block">
          <vb-uploader boxed color="link" label="Link" :name="demoFilename">
            <vb-icon slot="icon" name="fa fa-cloud-upload"></vb-icon>
          </vb-uploader>
        </div>
      </demo>
    </example-section-item>

    <example-section-item title="Sizes">
      <demo :code="code.sizes.basic">
        <div class="block">
          <vb-uploader
            size="small"
            label="Small file"
            icon="fa fa-upload"
          ></vb-uploader>
        </div>
        <div class="block">
          <vb-uploader label="Normal file" icon="fa fa-upload"></vb-uploader>
        </div>
        <div class="block">
          <vb-uploader
            size="medium"
            label="Medium file"
            icon="fa fa-upload"
          ></vb-uploader>
        </div>
        <div class="block">
          <vb-uploader
            size="large"
            label="Large file"
            icon="fa fa-upload"
          ></vb-uploader>
        </div>
      </demo>

      <demo :code="code.sizes.filename">
        <div class="block">
          <vb-uploader
            size="small"
            label="Small file"
            icon="fa fa-upload"
            :name="demoFilename"
          ></vb-uploader>
        </div>
        <div class="block">
          <vb-uploader
            label="Normal file"
            icon="fa fa-upload"
            :name="demoFilename"
          ></vb-uploader>
        </div>
        <div class="block">
          <vb-uploader
            size="medium"
            label="Medium file"
            icon="fa fa-upload"
            :name="demoFilename"
          ></vb-uploader>
        </div>
        <div class="block">
          <vb-uploader
            size="large"
            label="Large file"
            icon="fa fa-upload"
            :name="demoFilename"
          ></vb-uploader>
        </div>
      </demo>

      <demo :code="code.sizes.boxed">
        <div class="block">
          <vb-uploader
            boxed
            size="small"
            label="Small file"
            icon="fa fa-upload"
          ></vb-uploader>
        </div>
        <div class="block">
          <vb-uploader
            boxed
            label="Normal file"
            icon="fa fa-upload"
          ></vb-uploader>
        </div>
        <div class="block">
          <vb-uploader
            boxed
            size="medium"
            label="Medium file"
            icon="fa fa-upload"
          ></vb-uploader>
        </div>
        <div class="block">
          <vb-uploader
            boxed
            size="large"
            label="Large file"
            icon="fa fa-upload"
          ></vb-uploader>
        </div>
      </demo>

      <demo :code="code.sizes.combined">
        <div class="block">
          <vb-uploader
            boxed
            size="small"
            label="Small file"
            icon="fa fa-upload"
            :name="demoFilename"
          ></vb-uploader>
        </div>
        <div class="block">
          <vb-uploader
            boxed
            label="Normal file"
            icon="fa fa-upload"
            :name="demoFilename"
          ></vb-uploader>
        </div>
        <div class="block">
          <vb-uploader
            boxed
            size="medium"
            label="Medium file"
            icon="fa fa-upload"
            :name="demoFilename"
          ></vb-uploader>
        </div>
        <div class="block">
          <vb-uploader
            boxed
            size="large"
            label="Large file"
            icon="fa fa-upload"
            :name="demoFilename"
          ></vb-uploader>
        </div>
      </demo>
    </example-section-item>

    <example-section-item title="Alignment">
      <demo :code="code.alignment.center">
        <vb-uploader
          boxed
          color="success"
          align="centered"
          label="Upload File."
          :name="demoFilename"
        >
          <vb-icon slot="icon" name="fa fa-upload"></vb-icon>
        </vb-uploader>
      </demo>
      <demo :code="code.alignment.right">
        <vb-uploader
          color="info"
          align="right"
          label="Upload File."
          :name="demoFilename"
        >
          <vb-icon slot="icon" name="fa fa-upload"></vb-icon>
        </vb-uploader>
      </demo>
    </example-section-item>

    <example-section-item title="Events">
      <demo :code="code.events">
        <vb-uploader
          label="Uploader"
          icon="fa fa-upload"
          :name="name"
          @change="handleChange"
        ></vb-uploader>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
import code from '@/code/form/file.js'

export default {
  name: 'File',
  data() {
    return {
      code,
      name: '',
      demoFilename: 'Screen Shot 2017-07-29 at 15.54.25.png'
    }
  },
  methods: {
    handleChange(event) {
      const { files } = event.target

      if (files[0]) {
        this.name = files[0].name
      }
    }
  }
}
</script>
