<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo :code="code.basic">
        <vb-notification>
          <vb-delete></vb-delete>
          <span v-html="tmpl"></span>
        </vb-notification>
      </demo>
    </example-section-item>

    <example-section-item title="Colors">
      <demo class="box-background" :code="code.colors">
        <vb-notification color="primary">
          <vb-delete></vb-delete>
          Primar <span v-html="tmpl"></span>
        </vb-notification>
        <vb-notification color="info">
          <vb-delete></vb-delete>
          Primar <span v-html="tmpl"></span>
        </vb-notification>
        <vb-notification color="success">
          <vb-delete></vb-delete>
          Primar <span v-html="tmpl"></span>
        </vb-notification>
        <vb-notification color="warning">
          <vb-delete></vb-delete>
          Primar <span v-html="tmpl"></span>
        </vb-notification>
        <vb-notification color="danger">
          <vb-delete></vb-delete>
          Primar <span v-html="tmpl"></span>
        </vb-notification>
        <vb-notification color="white">
          <vb-delete></vb-delete>
          Primar <span v-html="tmpl"></span>
        </vb-notification>
        <vb-notification color="light">
          <vb-delete></vb-delete>
          Primar <span v-html="tmpl"></span>
        </vb-notification>
        <vb-notification color="dark">
          <vb-delete></vb-delete>
          Primar <span v-html="tmpl"></span>
        </vb-notification>
        <vb-notification color="black">
          <vb-delete></vb-delete>
          Primar <span v-html="tmpl"></span>
        </vb-notification>
        <vb-notification color="link">
          <vb-delete></vb-delete>
          Primar <span v-html="tmpl"></span>
        </vb-notification>
      </demo>
    </example-section-item>

    <example-section-item title="Event">
      <demo :code="code.event">
        <div class="block" slot="control">
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
            Primar <span v-html="tmpl"></span>
          </vb-notification>
        </transition>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
import code from '@/code/elements/notification.js'

export default {
  name: 'NotificationExamples',
  data() {
    return {
      code,
      visible: true,
      timer: null,
      duration: 2500,
      tmpl: `Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.
        <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
        Vestibulum rhoncus ac ex sit amet fringilla.
        Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
        Sit amet, consectetur adipiscing elit`
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

<style scoped>
.box-background {
  background-color: #ddf9fe !important;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
