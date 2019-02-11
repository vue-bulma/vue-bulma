let code = {}

code.basic = `\
<vb-notification>
  <vb-delete></vb-delete>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.
  <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
  Vestibulum rhoncus ac ex sit amet fringilla.
  Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
  Sit amet,consectetur adipiscing elit
</vb-notification>
`

code.colors = `\
<vb-notification color="primary">
  <vb-delete></vb-delete>
  Primar Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.
  <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
  Vestibulum rhoncus ac ex sit amet fringilla.
  Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
  Sit amet,consectetur adipiscing elit
</vb-notification>

<vb-notification color="info">
  <vb-delete></vb-delete>
  ...
</vb-notification>

<vb-notification color="success">
  <vb-delete></vb-delete>
  ...
</vb-notification>

<vb-notification color="warning">
  <vb-delete></vb-delete>
  ...
</vb-notification>

<vb-notification color="danger">
  <vb-delete></vb-delete>
  ...
</vb-notification>

<vb-notification color="white">
  <vb-delete></vb-delete>
  ...
</vb-notification>

<vb-notification color="light">
  <vb-delete></vb-delete>
  ...
</vb-notification>

<vb-notification color="dark">
  <vb-delete></vb-delete>
  ...
</vb-notification>

<vb-notification color="black">
  <vb-delete></vb-delete>
  ...
</vb-notification>

<vb-notification color="link">
  <vb-delete></vb-delete>
  ...
</vb-notification>
`

code.event = `\
<template>
  <div>
    <div class="block">
      <vb-button @click="show">show Notification</vb-button>
    </div>

    <transition name="slide-fade">
      <vb-notification
        v-if="visible"
        color="danger"
        @click="handleClick"
        @mouseenter="handleMouseenter"
        @mouseleave="handleMouseleave"
      >
        <vb-delete @click.stop="close"></vb-delete>

        Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.
        <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
        Vestibulum rhoncus ac ex sit amet fringilla.
        Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
        Sit amet,consectetur adipiscing elit
      </vb-notification>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: true,
      timer: null,
      duration: 2500
    }
  },
  methods: {
    show() {
      clearTimeout(this.timer)
      this.visible = true
      this.timer = setTimeout(this.close, this.duration)
    },
    close() {
      if (this.visible) {
        this.visible = false
      }
    },
    handleClick() {},
    handleMouseenter() {
      clearTimeout(this.timer)
    },
    handleMouseleave() {
      this.timer = setTimeout(this.close, this.duration)
    }
  },
  mounted() {
    this.timer = setTimeout(this.close, this.duration)
  }
}
</script>
`

export default code
