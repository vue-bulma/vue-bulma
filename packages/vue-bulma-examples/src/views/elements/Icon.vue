<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo :code="code.basic">
        <vb-icon class="icon-background" name="fa fa-home"></vb-icon>
      </demo>
    </example-section-item>

    <example-section-item title="Colors">
      <demo :code="code.colors">
        <vb-icon name="fa fa-home" color="primary"></vb-icon>
        <vb-icon name="fa fa-info-circle" color="info"></vb-icon>
        <vb-icon name="fa fa-check-square" color="success"></vb-icon>
        <vb-icon name="fa fa-exclamation-triangle" color="warning"></vb-icon>
        <vb-icon name="fa fa-ban" color="danger"></vb-icon>
        <vb-icon
          class="icon-background-dark"
          name="fa fa-circle"
          color="white"
        ></vb-icon>
        <vb-icon
          class="icon-background-dark"
          name="fa fa-flag"
          color="light"
        ></vb-icon>
        <vb-icon name="fa fa-shield" color="dark"></vb-icon>
        <vb-icon name="fa fa-camera" color="black"></vb-icon>
        <vb-icon name="fa fa-user-circle" color="link"></vb-icon>
      </demo>
    </example-section-item>

    <example-section-item title="Container Sizes">
      <demo :code="code.containerSize">
        <vb-icon
          class="icon-background"
          name="fa fa-home"
          size="small"
        ></vb-icon>
        <vb-icon class="icon-background" name="fa fa-home"></vb-icon>
        <vb-icon
          class="icon-background"
          name="fa fa-home"
          size="medium"
        ></vb-icon>
        <vb-icon
          class="icon-background"
          name="fa fa-home"
          size="large"
        ></vb-icon>
      </demo>
    </example-section-item>

    <example-section-item title="Icon Sizes">
      <demo :code="code.iconSize">
        <div class="flex-container">
          <vb-icon
            class="icon-background"
            name="fa fa-home"
            size="large"
          ></vb-icon>
          <vb-icon
            class="icon-background"
            name="fa fa-home"
            size="large"
            iconSize="lg"
          ></vb-icon>
          <vb-icon
            class="icon-background"
            name="fa fa-home"
            size="large"
            iconSize="2x"
          ></vb-icon>
          <vb-icon
            class="icon-background"
            name="fa fa-home"
            size="large"
            iconSize="3x"
          ></vb-icon>
        </div>
      </demo>
    </example-section-item>

    <example-section-item title="Animated">
      <demo :code="code.animated">
        <vb-icon
          class="icon-background"
          name="fa fa-spinner"
          size="large"
          animated
        ></vb-icon>
        <vb-icon
          class="icon-background"
          name="fa fa-refresh"
          size="large"
          animated
        ></vb-icon>
        <vb-icon
          class="icon-background"
          name="fa fa-circle-o-notch"
          size="large"
          animated
        ></vb-icon>
        <vb-icon
          class="icon-background"
          name="fa fa-repeat"
          size="large"
          animated
        ></vb-icon>
      </demo>
    </example-section-item>

    <example-section-item title="Stacked">
      <demo :code="code.stacked">
        <vb-icon class="icon-background" size="medium">
          <span class="fa-stack">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i class="fa fa-flag fa-stack-1x fa-inverse"></i>
          </span>
        </vb-icon>
        <vb-icon class="icon-background" size="large">
          <span class="fa-stack fa-lg">
            <i class="fa fa-camera fa-stack-1x"></i>
            <i class="fa fa-ban fa-stack-2x has-text-danger"></i>
          </span>
        </vb-icon>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
import code from '@/code/elements/icon.js'

export default {
  name: 'IconExamples',
  data() {
    return {
      code
    }
  }
}
</script>

<style lang="scss" scoped>
.icon:not(:first-child) {
  margin-left: 0.5rem;
}
.icon-background {
  background-color: #ffdd57;
}
.icon-background-dark {
  background-color: #363636;
}
.flex-container {
  display: flex !important;
}
</style>
