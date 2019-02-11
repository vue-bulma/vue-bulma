<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo :code="code.basic">
        <vb-dropdown>
          <vb-button>
            <span>Dropdown button</span>
            <vb-icon name="fa fa-angle-down"></vb-icon>
          </vb-button>

          <vb-dropdown-menu>
            <vb-dropdown-item>Dropdown item</vb-dropdown-item>
            <vb-dropdown-item>Other dropdown item</vb-dropdown-item>
            <vb-dropdown-item>Other dropdown item</vb-dropdown-item>
            <vb-dropdown-item divided>With a divider</vb-dropdown-item>
          </vb-dropdown-menu>
        </vb-dropdown>
      </demo>
    </example-section-item>

    <example-section-item title="Dropdown content">
      <demo :code="code.content">
        <vb-dropdown>
          <vb-button>
            <span>Dropdown button</span>
            <vb-icon name="fa fa-angle-down"></vb-icon>
          </vb-button>

          <vb-dropdown-menu>
            <vb-dropdown-item static>
              <p>
                You can insert
                <strong>any type of content</strong> within the dropdown menu.
              </p>
            </vb-dropdown-item>

            <vb-dropdown-item divided static>
              <p>
                You simply need to use a
                <code>&lt;div&gt;</code> instead.
              </p>
            </vb-dropdown-item>

            <vb-dropdown-item divided>
              This is a link
            </vb-dropdown-item>
          </vb-dropdown-menu>
        </vb-dropdown>
      </demo>
    </example-section-item>

    <example-section-item title="Hoverable or Toggable">
      <vb-subtitle>Default hover</vb-subtitle>
      <demo :code="code.toggable">
        <vb-dropdown trigger="click">
          <vb-button>
            <span>Click me</span>
            <vb-icon name="fa fa-angle-down"></vb-icon>
          </vb-button>

          <vb-dropdown-menu>
            <vb-dropdown-item>Dropdown item</vb-dropdown-item>
            <vb-dropdown-item>Other dropdown item</vb-dropdown-item>
            <vb-dropdown-item>Other dropdown item</vb-dropdown-item>
            <vb-dropdown-item divided>With a divider</vb-dropdown-item>
          </vb-dropdown-menu>
        </vb-dropdown>

        <vb-dropdown>
          <vb-button>
            <span>Hover me</span>
            <vb-icon name="fa fa-angle-down"></vb-icon>
          </vb-button>

          <vb-dropdown-menu>
            <vb-dropdown-item>Dropdown item</vb-dropdown-item>
            <vb-dropdown-item>Other dropdown item</vb-dropdown-item>
            <vb-dropdown-item>Other dropdown item</vb-dropdown-item>
            <vb-dropdown-item divided>With a divider</vb-dropdown-item>
          </vb-dropdown-menu>
        </vb-dropdown>

        <vb-dropdown trigger="custom" :visible="visible">
          <vb-button @click="visible = false">
            <span>Custom</span>
            <vb-icon name="fa fa-angle-down"></vb-icon>
          </vb-button>

          <vb-dropdown-menu>
            <vb-dropdown-item>Dropdown item</vb-dropdown-item>
            <vb-dropdown-item>Other dropdown item</vb-dropdown-item>
            <vb-dropdown-item>Other dropdown item</vb-dropdown-item>
            <vb-dropdown-item divided>With a divider</vb-dropdown-item>
          </vb-dropdown-menu>
        </vb-dropdown>
      </demo>
    </example-section-item>

    <example-section-item title="Placement">
      <demo :code="code.aligned">
        <vb-dropdown>
          <vb-button>
            <span>Normal: Left bottom</span>
            <vb-icon name="fa fa-angle-down"></vb-icon>
          </vb-button>

          <vb-dropdown-menu>
            <vb-dropdown-item>Dropdown item</vb-dropdown-item>
            <vb-dropdown-item>Other dropdown item</vb-dropdown-item>
            <vb-dropdown-item>Other dropdown item</vb-dropdown-item>
            <vb-dropdown-item divided>With a divider</vb-dropdown-item>
          </vb-dropdown-menu>
        </vb-dropdown>

        <vb-dropdown placement="right">
          <vb-button>
            <span>Right bottom</span>
            <vb-icon name="fa fa-angle-down"></vb-icon>
          </vb-button>

          <vb-dropdown-menu>
            <vb-dropdown-item>Dropdown item</vb-dropdown-item>
            <vb-dropdown-item>Other dropdown item</vb-dropdown-item>
            <vb-dropdown-item>Other dropdown item</vb-dropdown-item>
            <vb-dropdown-item divided>With a divider</vb-dropdown-item>
          </vb-dropdown-menu>
        </vb-dropdown>

        <vb-dropdown placement="up">
          <vb-button>
            <span>Left up</span>
            <vb-icon name="fa fa-angle-up"></vb-icon>
          </vb-button>

          <vb-dropdown-menu>
            <vb-dropdown-item>Dropdown item</vb-dropdown-item>
            <vb-dropdown-item>Other dropdown item</vb-dropdown-item>
            <vb-dropdown-item>Other dropdown item</vb-dropdown-item>
            <vb-dropdown-item divided>With a divider</vb-dropdown-item>
          </vb-dropdown-menu>
        </vb-dropdown>

        <vb-dropdown :placement="['up', 'right']">
          <vb-button>
            <span>Right up</span>
            <vb-icon name="fa fa-angle-up"></vb-icon>
          </vb-button>

          <vb-dropdown-menu>
            <vb-dropdown-item>Dropdown item</vb-dropdown-item>
            <vb-dropdown-item>Other dropdown item</vb-dropdown-item>
            <vb-dropdown-item>Other dropdown item</vb-dropdown-item>
            <vb-dropdown-item divided>With a divider</vb-dropdown-item>
          </vb-dropdown-menu>
        </vb-dropdown>
      </demo>
    </example-section-item>

    <example-section-item title="Event">
      <vb-content>
        The item name will callback while selected item.
      </vb-content>

      <demo :code="code.events">
        <div class="block" slot="control">
          <strong>Selected:</strong> {{ name }}
        </div>

        <vb-dropdown trigger="click" placement="up" @selected="handleSelected">
          <vb-button>
            <span>Select something</span>
            <vb-icon name="fa fa-angle-up"></vb-icon>
          </vb-button>

          <vb-dropdown-menu>
            <vb-dropdown-item name="cat">Cat</vb-dropdown-item>
            <vb-dropdown-item name="dog">Dog</vb-dropdown-item>
            <vb-dropdown-item name="desk" divided>Desk</vb-dropdown-item>
            <vb-dropdown-item>Not callback</vb-dropdown-item>
            <vb-dropdown-item @click="handleSelected('chair')"
              >Chair</vb-dropdown-item
            >
          </vb-dropdown-menu>
        </vb-dropdown>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
import code from '@/code/components/dropdown.js'

export default {
  name: 'DropdownExamples',
  data() {
    return {
      code,
      name: '',
      visible: true
    }
  },
  methods: {
    handleSelected(name) {
      this.name = name
    }
  }
}
</script>

<style scoped>
.dropdown:not(:last-child) {
  margin-right: 0.5rem;
}
</style>
