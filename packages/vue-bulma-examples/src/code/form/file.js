let code = {}

code.basic = `\
<vb-uploader label="Choose a file." icon="fa fa-upload"></vb-uploader>
`

code.modifiers = {}

code.modifiers.filtName = `\
<vb-uploader label="Choose a file">
  <vb-icon slot="icon" name="fa fa-upload"></vb-icon>

  <span slot="file-name">Screen Shot 2017-07-29 at 15.54.25.png</span>
</vb-uploader>
`

code.modifiers.CTAright = `\
<vb-uploader label="Choose a file" align="right">
  <vb-icon slot="icon" name="fa fa-upload"></vb-icon>

  <span slot="file-name">Screen Shot 2017-07-29 at 15.54.25.png</span>
</vb-uploader>
`

code.modifiers.expand = `\
<vb-uploader fullwidth label="Choose a file">
  <vb-icon slot="icon" name="fa fa-upload"></vb-icon>

  <span slot="file-name">Screen Shot 2017-07-29 at 15.54.25.png</span>
</vb-uploader>
`

code.modifiers.boxed = `\
<vb-uploader boxed label="Choose a file.">
  <vb-icon slot="icon" name="fa fa-upload"></vb-icon>
</vb-uploader>
`

code.modifiers.combine = `\
<vb-uploader boxed>
  <vb-icon slot="icon" name="fa fa-upload"></vb-icon>

  <span slot="label">Choose a file.</span>

  <span slot="file-name">Screen Shot 2017-07-29 at 15.54.25.png</span>
</vb-uploader>
`

code.alignment = {}

code.alignment.center = `\
<vb-uploader boxed color="success" align="centered" label="Upload File." name="Screen Shot 2017-07-29 at 15.54.25.png">
  <vb-icon slot="icon" name="fa fa-upload"></vb-icon>
</vb-uploader>
`

code.alignment.right = `\
<vb-uploader align="right" color="info" label="Upload File." name="Screen Shot 2017-07-29 at 15.54.25.png">
  <vb-icon slot="icon" name="fa fa-upload"></vb-icon>
</vb-uploader>
`

code.colors = `\
<vb-uploader color="primary" label="Primary">
  <vb-icon slot="icon" name="fa fa-upload"></vb-icon>
</vb-uploader>

<vb-uploader color="info" label="Info" name="Screen Shot 2017-07-29 at 15.54.25.png">
  <vb-icon slot="icon" name="fa fa-upload"></vb-icon>
</vb-uploader>

<vb-uploader boxed color="warning" label="Warning">
  <vb-icon slot="icon" name="fa fa-cloud-upload"></vb-icon>
</vb-uploader>

<vb-uploader boxed color="danger" label="Danger" name="Screen Shot 2017-07-29 at 15.54.25.png">
  <vb-icon slot="icon" name="fa fa-cloud-upload"></vb-icon>
</vb-uploader>

<vb-uploader color="white" label="Color white">
  <vb-icon slot="icon" name="fa fa-upload"></vb-icon>
</vb-uploader>

<vb-uploader color="light" label="Light" name="Screen Shot 2017-07-29 at 15.54.25.png">
  <vb-icon slot="icon" name="fa fa-upload"></vb-icon>
</vb-uploader>

<vb-uploader boxed color="dark" label="Dark">
  <vb-icon slot="icon" name="fa fa-cloud-upload"></vb-icon>
</vb-uploader>

<vb-uploader boxed color="black" label="Black" name="Screen Shot 2017-07-29 at 15.54.25.png">
  <vb-icon slot="icon" name="fa fa-cloud-upload"></vb-icon>
</vb-uploader>

<vb-uploader boxed color="link" label="Link" name="Screen Shot 2017-07-29 at 15.54.25.png">
  <vb-icon slot="icon" name="fa fa-cloud-upload"></vb-icon>
</vb-uploader>
`

code.sizes = {}

code.sizes.basic = `\
<vb-uploader size="small" label="Small file" icon="fa fa-upload"></vb-uploader>

<vb-uploader label="Normal file" icon="fa fa-upload"></vb-uploader>

<vb-uploader size="medium" label="Medium file" icon="fa fa-upload"></vb-uploader>

<vb-uploader size="large" label="Large file" icon="fa fa-upload"></vb-uploader>
`

code.sizes.filename = `\
<vb-uploader size="small" label="Small file" icon="fa fa-upload" :name="demoFilename"></vb-uploader>

<vb-uploader label="Normal file" icon="fa fa-upload" :name="demoFilename"></vb-uploader>

<vb-uploader size="medium" label="Medium file" icon="fa fa-upload" :name="demoFilename"></vb-uploader>

<vb-uploader size="large" label="Large file" icon="fa fa-upload" :name="demoFilename"></vb-uploader>
`

code.sizes.boxed = `\
<vb-uploader boxed size="small" label="Small file" icon="fa fa-upload"></vb-uploader>

<vb-uploader boxed label="Normal file" icon="fa fa-upload"></vb-uploader>

<vb-uploader boxed size="medium" label="Medium file" icon="fa fa-upload"></vb-uploader>

<vb-uploader boxed size="large" label="Large file" icon="fa fa-upload"></vb-uploader>
`

code.sizes.combined = `\
<vb-uploader boxed size="small" label="Small file" icon="fa fa-upload" :name="demoFilename"></vb-uploader>

<vb-uploader boxed label="Normal file" icon="fa fa-upload" :name="demoFilename"></vb-uploader>

<vb-uploader boxed size="medium" label="Medium file" icon="fa fa-upload" :name="demoFilename"></vb-uploader>

<vb-uploader boxed size="large" label="Large file" icon="fa fa-upload" :name="demoFilename"></vb-uploader>
`

code.events = `\
<template>
  <vb-uploader label="Uploader" icon="fa fa-upload" :name="name" @change="handleChange"></vb-uploader>
</template>

<script>
export default {
  name: 'File',
  data() {
    return {
      name: ''
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
`

export default code
