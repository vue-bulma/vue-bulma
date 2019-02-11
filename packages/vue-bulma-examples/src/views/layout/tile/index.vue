<template>
  <vb-section>
    <example-section-item title="Basic">
      <example-basic></example-basic>
    </example-section-item>

    <example-section-item title="Nesting requirements">
      <example-nest></example-nest>
    </example-section-item>

    <example-section-item title="3 columns">
      <example-columns3></example-columns3>
    </example-section-item>

    <example-section-item title="4 columns">
      <example-columns4></example-columns4>
    </example-section-item>
  </vb-section>
</template>

<script>
import ExampleBasic from './Basic'
import ExampleNest from './Nest'
import ExampleColumns3 from './Columns3'
import ExampleColumns4 from './Columns4'

export default {
  name: 'Tile',
  components: { ExampleBasic, ExampleNest, ExampleColumns3, ExampleColumns4 }
}
</script>
