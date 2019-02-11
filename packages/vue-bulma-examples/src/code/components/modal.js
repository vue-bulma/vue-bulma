let code = {}

code.basic = `\
<template>
  <div>
    <vb-modal :visible.sync="visible">
      <vb-box>
        <vb-media-object>
          <vb-image slot="left" src="https://bulma.io/images/placeholders/128x128.png" size="64x64"></vb-image>

          <vb-content>
            <p>
              <strong>John Smith</strong>
              <small>@johnsmith</small>
              <small>31m</small>
              <br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros,
              eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
          </vb-content>

          <vb-level mobile>
            <vb-level-item slot="left">
              <router-link :to="{ path: '#' }">
                <vb-icon size="small" name="fa fa-reply"></vb-icon>
              </router-link>
            </vb-level-item>
            <vb-level-item slot="left">
              <router-link :to="{ path: '#' }">
                <vb-icon size="small" name="fa fa-retweet"></vb-icon>
              </router-link>
            </vb-level-item>
            <vb-level-item slot="left">
              <router-link :to="{ path: '#' }">
                <vb-icon size="small" name="fa fa-heart"></vb-icon>
              </router-link>
            </vb-level-item>
          </vb-level>
        </vb-media-object>
      </vb-box>
    </vb-modal>

    <vb-button @click="visible = true">Basic</vb-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    }
  }
}
</script>
`

code.imageModal = `\
<template>
  <div>
    <vb-modal :visible.sync="visible">
      <vb-image src="https://bulma.io/images/placeholders/1280x960.png" size="4by3"></vb-image>
    </vb-modal>

    <vb-button @click="visible = true">Image modal</vb-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    }
  }
}
</script>
`

code.modalCard = `\
<template>
  <div>
    <vb-modal-card type="card" title="Modal title" :visible.sync="visible">
      ...

      <div slot="footer">
        <vb-button color="success">Save changes</vb-button>
        <vb-button>Cancel</vb-button>
      </div>
    </vb-modal-card>

    <vb-button @click="visible = true">Modal card</vb-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    }
  }
}
</script>
`

code.mask = `\
<template>
  <div>
    <vb-modal type="card" :visible.sync="mask" :mask="false">
      <p>Disable Mask</p>
    </vb-modal>

    <vb-modal type="card" :visible.sync="maskLayer" :mask-closable="false">
      <p>Disable mask layer closure</p>
    </vb-modal>

    <vb-buttons-list>
      <vb-button @click="mask = true">Disable Mask</vb-button>
      <vb-button @click="maskLayer = true">Disable mask layer closure</vb-button>
    </vb-buttons-list>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        mask: false,
        maskLayer: false
      }
    }
  }
</script>
`

code.closable = `\
<template>
  <div>
    <vb-modal type="card" title="Card" :visible.sync="card" :closable="closable">
      <vb-button @click="toggleClosable">
        {{ currentState }}
      </vb-button>
    </vb-modal>

    <vb-modal title="Content" :visible.sync="content" :closable="closable">
      <vb-box>
        <vb-button @click="toggleClosable">
          {{ currentState }}
        </vb-button>
      </vb-box>
    </vb-modal>

    <vb-buttons-list>
      <vb-button @click="card = true">Card</vb-button>
      <vb-button @click="content = true">Content</vb-button>
    </vb-buttons-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      card: false,
      content: false,
      closable: true
    }
  },
  computed: {
    currentState() {
      return this.closable ? 'Closable' : 'Unclosable'
    }
  },
  methods: {
    toggleClosable() {
      this.closable = !this.closable
    }
  }
}
</script>
`

export default code
