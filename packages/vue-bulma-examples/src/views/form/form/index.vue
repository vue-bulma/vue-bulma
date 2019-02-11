<template>
  <vb-section>
    <example-basic></example-basic>

    <example-horizontal></example-horizontal>

    <example-size></example-size>

    <example-addons></example-addons>

    <example-group></example-group>
  </vb-section>
</template>

<script>
import ExampleBasic from './Basic'
import ExampleHorizontal from './Horizontal'
import ExampleAddons from './Addons'
import ExampleGroup from './Group'
import ExampleSize from './Size'

export default {
  name: 'Form',
  components: {
    ExampleBasic,
    ExampleHorizontal,
    ExampleAddons,
    ExampleGroup,
    ExampleSize
  }
}
</script>

<style lang="scss" scoped>
.help.is-danger {
  color: #ff3860;
}
</style>
