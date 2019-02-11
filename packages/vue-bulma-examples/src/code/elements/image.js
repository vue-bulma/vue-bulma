let code = {}

code.basic = `\
<template>
  <vb-image :src="localImage" size="128x128"></vb-image>
  // <vb-image :src="image" size="128x128"></vb-image>
</template>

<script>
export default {
  data() {
    return {
      localImage: require('../../assets/images/128x128.png'),
      // image: 'https://bulma.io/images/placeholders/128x128.png'
    }
  }
}
</script>
`

code.rounded = `\
<vb-image :src="image" size="128x128" rounded></vb-image>
`

code.size = `\
<vb-image :src="image" size="16x16"></vb-image>

<vb-image :src="image" size="24x24"></vb-image>

<vb-image :src="image" size="32x32"></vb-image>

<vb-image :src="image" size="48x48"></vb-image>

<vb-image :src="image" size="64x64"></vb-image>

<vb-image :src="image" size="96x96"></vb-image>

<vb-image :src="image" size="128x128"></vb-image>
`

code.responsive = `\
<vb-image :src="image" size="square"></vb-image>

<vb-image :src="image" size="1by1"></vb-image>

<vb-image :src="image" size="5by4"></vb-image>

<vb-image :src="image" size="4by3"></vb-image>

<vb-image :src="image" size="3by2"></vb-image>

<vb-image :src="image" size="5by3"></vb-image>

<vb-image :src="image" size="16by9"></vb-image>

<vb-image :src="image" size="2by1"></vb-image>

<vb-image :src="image" size="3by1"></vb-image>

<vb-image :src="image" size="4by5"></vb-image>

<vb-image :src="image" size="3by4"></vb-image>

<vb-image :src="image" size="2by3"></vb-image>

<vb-image :src="image" size="3by5"></vb-image>

<vb-image :src="image" size="9by16"></vb-image>

<vb-image :src="image" size="1by2"></vb-image>

<vb-image :src="image" size="1by3"></vb-image>
`
export default code
