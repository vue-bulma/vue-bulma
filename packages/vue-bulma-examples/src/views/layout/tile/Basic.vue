<template>
  <demo :code="basic">
    <vb-tile>
      <vb-tile size="8" vertical>
        <vb-tile>
          <vb-tile vertical>
            <vb-tile>
              <vb-notification color="primary" primary>
                <vb-title>Vertical...</vb-title>
                <vb-subtitle>Top tile</vb-subtitle>
              </vb-notification>
            </vb-tile>

            <vb-tile>
              <vb-notification color="warning">
                <vb-title>...tiles</vb-title>
                <vb-subtitle>Bottom tile</vb-subtitle>
              </vb-notification>
            </vb-tile>
          </vb-tile>

          <vb-tile>
            <vb-notification color="info">
              <vb-title>Middle tile</vb-title>
              <vb-subtitle>With an image</vb-subtitle>
              <vb-image
                size="4by3"
                src="https://bulma.io/images/placeholders/640x480.png"
              ></vb-image>
            </vb-notification>
          </vb-tile>
        </vb-tile>

        <vb-tile>
          <vb-notification color="danger">
            <vb-title>Wide tile</vb-title>
            <vb-subtitle>Aligned with the right tile</vb-subtitle>
            <vb-content>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                ornare magna eros, eu pellentesque tortor vestibulum ut.
                Maecenas non massa sem. Etiam finibus odio quis feugiat
                facilisis.
              </p>
            </vb-content>
          </vb-notification>
        </vb-tile>
      </vb-tile>

      <vb-tile>
        <vb-notification color="success">
          <vb-title>Tall tile</vb-title>
          <vb-subtitle>With even more content</vb-subtitle>
          <vb-content>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              semper diam at erat pulvinar, at pulvinar felis blandit.
              Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
              ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta
              orci, quis semper odio felis ut quam.
            </p>
            <p>
              Suspendisse varius ligula in molestie lacinia. Maecenas varius
              eget ligula a sagittis. Pellentesque interdum, nisl nec interdum
              maximus, augue diam porttitor lorem, et sollicitudin felis neque
              sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus
              felis hendrerit sit amet. Aenean vitae gravida diam, finibus
              dignissim turpis. Sed eget varius ligula, at volutpat tortor.
            </p>
            <p>
              Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus
              erat, vitae congue lectus dolor consequat libero. Donec leo
              ligula, maximus et pellentesque sed, gravida a metus. Cras
              ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis
              faucibus libero. Quisque non semper leo.
            </p>
          </vb-content>
        </vb-notification>
      </vb-tile>
    </vb-tile>

    <vb-tile>
      <vb-tile vertical size="4">
        <vb-tile>
          <vb-box>
            <vb-title>One</vb-title>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
              non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
          </vb-box>
        </vb-tile>

        <vb-tile>
          <vb-box>
            <vb-title>Two</vb-title>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
              non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
          </vb-box>
        </vb-tile>
      </vb-tile>

      <vb-tile>
        <vb-box>
          <vb-title>Three</vb-title>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum
            volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi
            maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis
            semper odio felis ut quam.
          </p>
          <p>
            Suspendisse varius ligula in molestie lacinia. Maecenas varius eget
            ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus,
            augue diam porttitor lorem, et sollicitudin felis neque sit amet
            erat. Maecenas imperdiet felis nisi, fringilla luctus felis
            hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim
            turpis. Sed eget varius ligula, at volutpat tortor.
          </p>
          <p>
            Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus
            erat, vitae congue lectus dolor consequat libero. Donec leo ligula,
            maximus et pellentesque sed, gravida a metus. Cras ullamcorper a
            nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero.
            Quisque non semper leo.
          </p>
        </vb-box>
      </vb-tile>
    </vb-tile>
  </demo>
</template>

<script>
import code from '@/code/layout/tile/basic.js'

export default {
  name: 'TileBasic',
  data() {
    return {
      basic: code.basic
    }
  }
}
</script>
