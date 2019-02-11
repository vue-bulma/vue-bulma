<template>
  <vb-card class="demo" :title="title">
    <div v-if="$slots.control">
      <slot name="control"></slot>
      <hr />
    </div>

    <slot></slot>

    <div slot="footer" class="demo-code-container">
      <pre
        v-show="showCode"
        class="demo-code"
      ><code class="html" ref="code">{{code}}</code></pre>

      <vb-button
        v-if="!!code"
        slot="footer"
        fullwidth
        color="white"
        @click="toggle"
      >
        <vb-icon
          name="fa fa-angle-down"
          :class="{ 'icon-rotate': showCode }"
        ></vb-icon>
        <vb-subtitle size="6">{{ buttonText }}</vb-subtitle>
      </vb-button>
    </div>
  </vb-card>
</template>

<script>
import hljs from 'highlight.js'

export default {
  name: 'DemoContainer',
  props: {
    title: String,
    code: {
      type: String,
      default: ''
    },
    codeLang: {
      type: String,
      default: 'html'
    }
  },
  data() {
    return {
      showCode: false
    }
  },
  mounted() {
    hljs.highlightBlock(this.$refs.code)
  },
  methods: {
    toggle() {
      this.showCode = !this.showCode
    }
  },
  computed: {
    buttonText() {
      return this.showCode ? '隐藏代码' : '显示代码'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/hljs.css';

$duration: 0.2s;

.demo:not(:last-child) {
  margin-bottom: 1.5rem;
}
.demo-code-container {
  width: 100%;
  .demo-code {
    border-bottom: 1px solid #dbdbdb;
  }
  .icon-rotate {
    transform: rotate(180deg);
  }
  button span {
    transition: transform $duration ease-in-out,
      -webkit-transform $duration ease-in-out;
  }
}
</style>
