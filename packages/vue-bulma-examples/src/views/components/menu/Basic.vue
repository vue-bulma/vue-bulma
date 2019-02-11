<template>
  <example-section-item title="Basic">
    <demo :code="code">
      <vb-menu style="width: 240px;">
        <vb-menu-list>
          <vb-menu-item
            v-for="item in basic"
            :key="item.name"
            :index="item.name"
            :icon="item.icon"
          >
            <span>{{ item.name }}</span>
          </vb-menu-item>
        </vb-menu-list>
      </vb-menu>
    </demo>
  </example-section-item>
</template>

<script>
export default {
  props: {
    menus: Array,
    code: String
  },
  computed: {
    basic() {
      return this.menus.reduce((data, current) => {
        return data.concat(current.children)
      }, [])
    }
  }
}
</script>
