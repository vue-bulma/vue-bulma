<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo :code="code.basic">
        <vb-delete></vb-delete>
      </demo>
    </example-section-item>

    <example-section-item title="Size">
      <demo :code="code.size">
        <vb-delete size="small"></vb-delete>
        <vb-delete></vb-delete>
        <vb-delete size="medium"></vb-delete>
        <vb-delete size="large"></vb-delete>
      </demo>
    </example-section-item>

    <example-section-item title="Combinations">
      <demo :code="code.combinations">
        <div class="block">
          <vb-tag color="success">
            Hello World
            <vb-delete size="small"></vb-delete>
          </vb-tag>
        </div>

        <vb-notification color="danger">
          <vb-delete></vb-delete>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum
          dolor sit amet, consectetur adipiscing elit
        </vb-notification>

        <vb-message title="info" color="info" showClose>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque risus mi, tempus quis placerat ut, porta nec nulla.
            Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
            diam, et dictum felis venenatis efficitur. Aenean ac eleifend lacus,
            in mollis lectus. Donec sodales, arcu et sollicitudin porttitor,
            tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui
            urna, vehicula et sem eget, facilisis sodales sem.
          </p>
        </vb-message>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
import code from '@/code/elements/delete.js'

export default {
  name: 'DeleteExamples',
  data() {
    return {
      visible: true,
      code
    }
  },
  methods: {
    handleClick() {
      this.visible = false
    }
  }
}
</script>

<style scoped>
.delete:not(:first-child) {
  margin-left: 0.5rem;
}
</style>
