<template>
  <article class="media">
    <slot></slot>
    <div class="media-left">
      <slot name="media-left"></slot>
    </div>
    <div class="media-content">
      <slot name="media-content"></slot>
    </div>
    <div class="media-right">
      <slot name="media-right"></slot>
    </div>
  </article>
</template>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/components/media.sass';
</style>
