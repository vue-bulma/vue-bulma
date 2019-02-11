<template>
  <div class="sidebar">
    <vb-menu :actived="actived">
      <vb-menu-list
        v-for="(item, index) in menus"
        :key="index"
        :label="item.name"
        :index="item.name"
      >
        <vb-menu-item
          v-for="child in item.children"
          :key="child.name"
          :index="child.component || child.name"
          :route="{ name: child.component || child.name }"
        >
          {{ child.name }}
        </vb-menu-item>
      </vb-menu-list>
    </vb-menu>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  data() {
    return {
      menus: [
        {
          name: 'Columns',
          children: [{ name: 'Column' }]
        },
        {
          name: 'Layout',
          children: [
            { name: 'Container' },
            { name: 'Level' },
            { name: 'Media', component: 'MediaObject' },
            { name: 'Hero' },
            { name: 'Section' },
            { name: 'Footer' },
            { name: 'Tile' }
          ]
        },
        {
          name: 'Form',
          children: [
            { name: 'General', component: 'Form' },
            { name: 'Checkbox' },
            { name: 'File' },
            { name: 'Input' },
            { name: 'Radio' },
            { name: 'Select' },
            { name: 'Textarea' }
          ]
        },
        {
          name: 'Elements',
          children: [
            { name: 'Box' },
            { name: 'Button' },
            { name: 'Content' },
            { name: 'Delete' },
            { name: 'Icon' },
            { name: 'Image' },
            { name: 'Notification' },
            { name: 'ProgressBars' },
            // { name: 'Table' },
            { name: 'Tag' },
            { name: 'Title' }
          ]
        },
        {
          name: 'Components',
          children: [
            { name: 'Breadcrumb' },
            { name: 'Card' },
            { name: 'Dropdown' },
            { name: 'Menu' },
            { name: 'Message' },
            { name: 'Modal' },
            { name: 'Navbar' },
            { name: 'Pagination' }
            // { name: 'Panel' },
            // { name: 'Tabs' }
          ]
        }
      ]
    }
  },
  computed: {
    actived() {
      return this.$route.name
    }
  }
}
</script>

<style scoped>
.sidebar {
  height: calc(100% - 3.25rem);
  position: fixed;
  padding: 1.5rem;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #fff;
  box-shadow: 1px 1px 5px #888888;
  transition: left 0.5s;
  z-index: 31;
}
</style>
