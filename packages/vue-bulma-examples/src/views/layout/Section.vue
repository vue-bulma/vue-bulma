<template>
  <vb-section>
    <example-section-item title="Basic">
      <vb-content>
        Use sections as direct children of <code>body</code>.
      </vb-content>

      <demo :code="code.basic">
        <vb-section>
          <vb-container>
            <vb-title>Section1</vb-title>
            <vb-subtitle>
              A simple container to divide your page into
              <strong>sections</strong>, like the one you're currently reading
            </vb-subtitle>
          </vb-container>
        </vb-section>

        <vb-section>
          <vb-container>
            <vb-title>Section2</vb-title>
            <vb-subtitle>
              A simple container to divide your page into
              <strong>sections</strong>, like the one you're currently reading
            </vb-subtitle>
          </vb-container>
        </vb-section>
      </demo>
    </example-section-item>

    <example-section-item title="Size">
      <vb-content>
        <p>You can use the <code>size</code> to change the spacing.</p>
      </vb-content>

      <demo :code="code.sizes">
        <vb-section>
          <vb-container>
            <vb-title>Default spacing</vb-title>
          </vb-container>
        </vb-section>

        <hr />

        <vb-section size="medium">
          <vb-container>
            <vb-title>Medium spacing</vb-title>
          </vb-container>
        </vb-section>

        <hr />

        <vb-section size="large">
          <vb-container>
            <vb-title>Large spacing</vb-title>
          </vb-container>
        </vb-section>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
import code from '@/code/layout/section.js'

export default {
  name: 'Section',
  data() {
    return {
      code
    }
  }
}
</script>
