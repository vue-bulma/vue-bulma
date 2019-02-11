<template>
  <example-section-item title="Group">
    <demo :code="code">
      <vb-menu style="width: 240px;">
        <vb-menu-list
          v-for="group in menus"
          :key="group.name"
          :label="group.name"
        >
          <vb-menu-item
            v-for="item in group.children"
            :key="item.name"
            :index="item.name"
            :icon="item.icon"
          >
            {{ item.name }}
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
  }
}
</script>
