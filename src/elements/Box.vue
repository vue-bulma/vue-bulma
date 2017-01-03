<template>
  <div class="box">
    <article class="media">
      <div class="media-left">
        <slot name="media-left"></slot>
      </div>
      <div class="media-content">
        <slot></slot>
      </div>
    </article>
  </div>
</template>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/elements/box';
</style>
