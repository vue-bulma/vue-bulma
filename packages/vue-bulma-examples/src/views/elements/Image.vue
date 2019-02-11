<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo :code="code.basic">
        <vb-image :src="imageUrl(7)" size="128x128"></vb-image>
      </demo>
    </example-section-item>

    <example-section-item title="Rounded">
      <demo :code="code.rounded">
        <vb-image :src="imageUrl(7)" size="128x128" rounded></vb-image>
      </demo>
    </example-section-item>

    <example-section-item title="Size">
      <demo :code="code.size">
        <vb-image :src="imageUrl(1)" size="16x16"></vb-image>
        <vb-image :src="imageUrl(2)" size="24x24"></vb-image>
        <vb-image :src="imageUrl(3)" size="32x32"></vb-image>
        <vb-image :src="imageUrl(4)" size="48x48"></vb-image>
        <vb-image :src="imageUrl(5)" size="64x64"></vb-image>
        <vb-image :src="imageUrl(6)" size="96x96"></vb-image>
        <vb-image :src="imageUrl(7)" size="128x128"></vb-image>
      </demo>
    </example-section-item>

    <example-section-item title="Responsive images with ratios">
      <demo class="paddingRight" :code="code.responsive">
        <vb-columns view="mobile">
          <vb-column size="4">
            <vb-image :src="imageUrl(8)" size="square"></vb-image>
            <vb-image :src="imageUrl(8)" size="1by1"></vb-image>
            <vb-image :src="imageUrl(9)" size="5by4"></vb-image>
            <vb-image :src="imageUrl(10)" size="4by3"></vb-image>
            <vb-image :src="imageUrl(11)" size="3by2"></vb-image>
            <vb-image :src="imageUrl(12)" size="5by3"></vb-image>
            <vb-image :src="imageUrl(13)" size="16by9"></vb-image>
            <vb-image :src="imageUrl(14)" size="2by1"></vb-image>
            <vb-image :src="imageUrl(15)" size="3by1"></vb-image>
            <vb-image :src="imageUrl(16)" size="4by5"></vb-image>
            <vb-image :src="imageUrl(17)" size="3by4"></vb-image>
            <vb-image :src="imageUrl(18)" size="2by3"></vb-image>
            <vb-image :src="imageUrl(19)" size="3by5"></vb-image>
            <vb-image :src="imageUrl(20)" size="9by16"></vb-image>
            <vb-image :src="imageUrl(21)" size="1by2"></vb-image>
            <vb-image :src="imageUrl(22)" size="1by3"></vb-image>
          </vb-column>
        </vb-columns>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
const IMAGES = [
  '16x16',
  '24x24',
  '32x32',
  '48x48',
  '64x64',
  '96x96',
  '128x128',
  '480x480',
  '600x480',
  '640x480',
  '480x320',
  '800x480',
  '640x360',
  '640x320',
  '720x240',
  '480x600',
  '480x640',
  '320x480',
  '480x800',
  '360x640',
  '320x640',
  '240x720'
]
import code from '@/code/elements/image.js'

export default {
  name: 'ImageExamples',
  data() {
    return {
      code
    }
  },
  methods: {
    imageUrl(i) {
      return require(`../../assets/images/${IMAGES[i - 1]}.png`)
    }
  }
}
</script>

<style scoped>
.image:not(:last-child) {
  margin-bottom: 20px;
}
.paddingRight img {
  width: 400px;
}
</style>
