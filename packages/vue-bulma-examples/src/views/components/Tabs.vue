<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo :code="code.basic">
        <vb-tabs>
          <vb-tab-item label="Pictures">Pictures</vb-tab-item>
          <vb-tab-item label="Music">Music</vb-tab-item>
          <vb-tab-item label="Videos">Videos</vb-tab-item>
        </vb-tabs>
      </demo>
    </example-section-item>

    <example-section-item title="Alignment">
      <demo :code="code.alignment">
        <vb-tabs>
          <vb-tab-item label="Pictures">Pictures</vb-tab-item>
          <vb-tab-item label="Music">Music</vb-tab-item>
          <vb-tab-item label="Videos">Videos</vb-tab-item>
        </vb-tabs>
        <vb-tabs align="centered">
          <vb-tab-item label="Pictures">Pictures</vb-tab-item>
          <vb-tab-item label="Music">Music</vb-tab-item>
          <vb-tab-item label="Videos">Videos</vb-tab-item>
        </vb-tabs>
        <vb-tabs align="right">
          <vb-tab-item label="Pictures">Pictures</vb-tab-item>
          <vb-tab-item label="Music">Music</vb-tab-item>
          <vb-tab-item label="Videos">Videos</vb-tab-item>
        </vb-tabs>
      </demo>
    </example-section-item>

    <example-section-item title="Icons">
      <demo :code="code.icons">
        <vb-tabs>
          <vb-tab-item label="Pictures" icon="fa fa-image"
            >Pictures</vb-tab-item
          >
          <vb-tab-item label="Music" icon="fa fa-music">Music</vb-tab-item>
          <vb-tab-item label="Videos" icon="fa fa-film">Videos</vb-tab-item>
        </vb-tabs>
      </demo>
    </example-section-item>

    <example-section-item title="Size">
      <demo :code="code.sizes">
        <vb-tabs size="small">
          <vb-tab-item label="Pictures">Pictures</vb-tab-item>
          <vb-tab-item label="Music">Music</vb-tab-item>
          <vb-tab-item label="Videos">Videos</vb-tab-item>
        </vb-tabs>
        <vb-tabs>
          <vb-tab-item label="Pictures">Pictures</vb-tab-item>
          <vb-tab-item label="Music">Music</vb-tab-item>
          <vb-tab-item label="Videos">Videos</vb-tab-item>
        </vb-tabs>
        <vb-tabs size="medium">
          <vb-tab-item label="Pictures">Pictures</vb-tab-item>
          <vb-tab-item label="Music">Music</vb-tab-item>
          <vb-tab-item label="Videos">Videos</vb-tab-item>
        </vb-tabs>
        <vb-tabs size="large">
          <vb-tab-item label="Pictures">Pictures</vb-tab-item>
          <vb-tab-item label="Music">Music</vb-tab-item>
          <vb-tab-item label="Videos">Videos</vb-tab-item>
        </vb-tabs>
      </demo>
    </example-section-item>

    <example-section-item title="Styles">
      <demo :code="code.styles">
        <vb-tabs type="boxed">
          <vb-tab-item label="Pictures">Pictures</vb-tab-item>
          <vb-tab-item label="Music">Music</vb-tab-item>
          <vb-tab-item label="Videos">Videos</vb-tab-item>
        </vb-tabs>
        <vb-tabs type="toggle">
          <vb-tab-item label="Pictures">Pictures</vb-tab-item>
          <vb-tab-item label="Music">Music</vb-tab-item>
          <vb-tab-item label="Videos">Videos</vb-tab-item>
        </vb-tabs>
        <vb-tabs type="toggle" rounded>
          <vb-tab-item label="Pictures">Pictures</vb-tab-item>
          <vb-tab-item label="Music">Music</vb-tab-item>
          <vb-tab-item label="Videos">Videos</vb-tab-item>
        </vb-tabs>
        <vb-tabs fullwidth>
          <vb-tab-item label="Pictures">Pictures</vb-tab-item>
          <vb-tab-item label="Music">Music</vb-tab-item>
          <vb-tab-item label="Videos">Videos</vb-tab-item>
        </vb-tabs>
      </demo>
    </example-section-item>

    <example-section-item title="Bottom placement of tab controls">
      <demo :code="code.bottom">
        <vb-tabs end>
          <vb-tab-item label="Pictures">Pictures</vb-tab-item>
          <vb-tab-item label="Music">Music</vb-tab-item>
          <vb-tab-item label="Videos">Videos</vb-tab-item>
        </vb-tabs>
        <vb-tabs end>
          <vb-tab-item label="Pictures" icon="fa fa-image"
            >Pictures</vb-tab-item
          >
          <vb-tab-item label="Music" icon="fa fa-music">Music</vb-tab-item>
          <vb-tab-item label="Videos" icon="fa fa-film">Videos</vb-tab-item>
        </vb-tabs>
        <vb-tabs type="boxed" end>
          <vb-tab-item label="Pictures" icon="fa fa-image"
            >Pictures</vb-tab-item
          >
          <vb-tab-item label="Music" icon="fa fa-music">Music</vb-tab-item>
          <vb-tab-item label="Videos" icon="fa fa-film">Videos</vb-tab-item>
        </vb-tabs>
      </demo>
    </example-section-item>

    <example-section-item title="Left and right placement of tab controls">
      <vb-subtitle size="6">Nomal</vb-subtitle>
      <demo :code="code.position.nomal">
        <vb-buttons-list slot="control">
          <vb-button
            v-for="position in positonList"
            :key="position"
            @click="triggerPosition(position)"
            >{{ position }}</vb-button
          >
        </vb-buttons-list>
        <vb-tabs :position="position">
          <vb-tab-item label="Pictures">Pictures</vb-tab-item>
          <vb-tab-item label="Music">Music</vb-tab-item>
          <vb-tab-item label="Videos">Videos</vb-tab-item>
        </vb-tabs>
      </demo>

      <vb-subtitle size="6">Icon</vb-subtitle>
      <demo :code="code.position.icon">
        <vb-buttons-list slot="control">
          <vb-button
            v-for="position in positonList"
            :key="position"
            @click="toggleIconPosition(position)"
            >{{ position }}</vb-button
          >
        </vb-buttons-list>
        <vb-tabs :position="iconPosition">
          <vb-tab-item label="Pictures" icon="fa fa-image"
            >Pictures</vb-tab-item
          >
          <vb-tab-item label="Music" icon="fa fa-music">Music</vb-tab-item>
          <vb-tab-item label="Videos" icon="fa fa-film">Videos</vb-tab-item>
        </vb-tabs>
      </demo>

      <vb-subtitle size="6">Boxed</vb-subtitle>
      <demo :code="code.position.boxed">
        <vb-buttons-list slot="control">
          <vb-button
            v-for="position in positonList"
            :key="position"
            @click="toggleBoxPosition(position)"
            >{{ position }}</vb-button
          >
        </vb-buttons-list>
        <vb-tabs type="boxed" :position="boxPosition">
          <vb-tab-item label="Pictures">Pictures</vb-tab-item>
          <vb-tab-item label="Music">Music</vb-tab-item>
          <vb-tab-item label="Videos">Videos</vb-tab-item>
        </vb-tabs>
      </demo>

      <vb-subtitle size="6">Toggle</vb-subtitle>
      <demo :code="code.position.toggle">
        <vb-buttons-list slot="control">
          <vb-button
            v-for="position in positonList"
            :key="position"
            @click="togglePosition(position)"
            >{{ position }}</vb-button
          >
        </vb-buttons-list>
        <vb-tabs type="toggle" :position="toggle">
          <vb-tab-item label="Pictures">Pictures</vb-tab-item>
          <vb-tab-item label="Music">Music</vb-tab-item>
          <vb-tab-item label="Videos">Videos</vb-tab-item>
        </vb-tabs>
      </demo>

      <vb-subtitle size="6">Toggle rounded</vb-subtitle>
      <demo :code="code.position.rounded">
        <vb-buttons-list slot="control">
          <vb-button
            v-for="position in positonList"
            :key="position"
            @click="toggleRoundedPosition(position)"
            >{{ position }}</vb-button
          >
        </vb-buttons-list>
        <vb-tabs type="toggle" rounded :position="roundedPosition">
          <vb-tab-item label="Pictures">Pictures</vb-tab-item>
          <vb-tab-item label="Music">Music</vb-tab-item>
          <vb-tab-item label="Videos">Videos</vb-tab-item>
        </vb-tabs>
      </demo>
    </example-section-item>

    <example-section-item title="Combining">
      <vb-subtitle size="6">Box</vb-subtitle>
      <demo :code="code.combining.boxed">
        <vb-tabs align="centered" type="boxed">
          <vb-tab-item label="Pictures" icon="fa fa-image"
            >Pictures</vb-tab-item
          >
          <vb-tab-item label="Music" icon="fa fa-music">Music</vb-tab-item>
          <vb-tab-item label="Videos" icon="fa fa-film">Videos</vb-tab-item>
        </vb-tabs>
      </demo>

      <vb-subtitle size="6">Box Medium</vb-subtitle>
      <demo :code="code.combining.boxedMedium">
        <vb-tabs align="centered" type="boxed" size="medium">
          <vb-tab-item label="Pictures" icon="fa fa-image"
            >Pictures</vb-tab-item
          >
          <vb-tab-item label="Music" icon="fa fa-music">Music</vb-tab-item>
          <vb-tab-item label="Videos" icon="fa fa-film">Videos</vb-tab-item>
        </vb-tabs>
      </demo>

      <vb-subtitle size="6">Toggle Fullwidth</vb-subtitle>
      <demo :code="code.combining.toggle">
        <vb-tabs type="toggle" fullwidth>
          <vb-tab-item label="Pictures" icon="fa fa-image"
            >Pictures</vb-tab-item
          >
          <vb-tab-item label="Music" icon="fa fa-music">Music</vb-tab-item>
          <vb-tab-item label="Videos" icon="fa fa-film">Videos</vb-tab-item>
        </vb-tabs>
      </demo>
      <vb-subtitle size="6">Toggle Large</vb-subtitle>
      <demo :code="code.combining.boxedLarge">
        <vb-tabs type="toggle" size="large" fullwidth>
          <vb-tab-item label="Pictures" icon="fa fa-image"
            >Pictures</vb-tab-item
          >
          <vb-tab-item label="Music" icon="fa fa-music">Music</vb-tab-item>
          <vb-tab-item label="Videos" icon="fa fa-film">Videos</vb-tab-item>
        </vb-tabs>
      </demo>
    </example-section-item>

    <example-section-item title="Card">
      <demo :code="code.card.nomal">
        <vb-tabs card>
          <vb-tab-item label="Pictures">Pictures</vb-tab-item>
          <vb-tab-item label="Music">Music</vb-tab-item>
          <vb-tab-item label="Videos">Videos</vb-tab-item>
        </vb-tabs>
      </demo>

      <demo :code="code.card.image">
        <vb-tabs card>
          <vb-tab-item label="Picture1">
            <vb-image
              size="3by1"
              src="https://bulma.io/images/placeholders/256x256.png"
            ></vb-image>
            <div slot="footer">Picture1</div>
          </vb-tab-item>
          <vb-tab-item label="Picture2">
            <vb-image
              size="3by1"
              src="https://bulma.io/images/placeholders/128x128.png"
            ></vb-image>
            <div slot="footer">Picture2</div>
          </vb-tab-item>
          <vb-tab-item label="Text">
            <vb-title>Title</vb-title>
            <vb-subtitle>With some content</vb-subtitle>
            <vb-content>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                ornare magna eros, eu pellentesque tortor vestibulum ut.
                Maecenas non massa sem. Etiam finibus odio quis feugiat
                facilisis.
              </p>
            </vb-content>
          </vb-tab-item>
        </vb-tabs>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
import code from '@/code/components/tabs.js'

export default {
  name: 'TabsExamples',
  data() {
    return {
      code,
      positonList: ['left', 'right'],
      position: 'left',
      iconPosition: 'left',
      boxPosition: 'left',
      toggle: 'left',
      roundedPosition: 'left'
    }
  },
  methods: {
    triggerPosition(position) {
      this.position = position
    },
    toggleIconPosition(position) {
      this.iconPosition = position
    },
    toggleBoxPosition(position) {
      this.boxPosition = position
    },
    togglePosition(position) {
      this.toggle = position
    },
    toggleRoundedPosition(position) {
      this.roundedPosition = position
    }
  }
}
</script>
