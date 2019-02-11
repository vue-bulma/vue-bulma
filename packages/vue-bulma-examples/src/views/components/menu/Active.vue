<template>
  <example-section-item title="Actived">
    <demo :code="code">
      <vb-buttons-list slot="control">
        <vb-button color="info" outlined @click="setActived"
          >Set Dashboard actived</vb-button
        >
        <vb-button @click="ClearActived">Clear actived</vb-button>
      </vb-buttons-list>

      <vb-menu style="width: 240px;" :actived="actived">
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
      actived: ''
    }
  },
  methods: {
    setActived() {
      this.actived = 'Manage Your Team'
    },
    ClearActived() {
      this.actived = ''
    }
  }
}
</script>
