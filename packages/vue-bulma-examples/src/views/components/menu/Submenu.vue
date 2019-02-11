<template>
  <example-section-item title="Submenu">
    <demo :code="code">
      <vb-buttons-list slot="control">
        <vb-button color="info" outlined @click="SetDefaultOpen"
          >Set default open</vb-button
        >
        <vb-button @click="ClearDefaultOpen">Clear default open</vb-button>
      </vb-buttons-list>

      <vb-menu :default-open="defaultOpen" style="width: 240px;">
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
            <span>{{ item.name }}</span>

            <vb-menu-list v-if="item.children" slot="submenu">
              <vb-menu-item
                v-for="subitem in item.children"
                :key="subitem.name"
                :index="subitem.name"
                :icon="subitem.icon"
              >
                {{ subitem.name }}
              </vb-menu-item>
            </vb-menu-list>
          </vb-menu-item>
        </vb-menu-list>
      </vb-menu>
    </demo>
  </example-section-item>
</template>

<script>
export default {
  props: {
    code: String,
    menus: Array
  },
  data() {
    return {
      defaultOpen: []
    }
  },
  methods: {
    SetDefaultOpen() {
      const items = this.menus.reduce((data, cur) => {
        return data.concat(cur.children)
      }, [])

      this.defaultOpen = items.filter(o => o.children).map(i => i.name)
    },
    ClearDefaultOpen() {
      this.defaultOpen = []
    }
  }
}
</script>
