<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo :code="code.basic">
        <vb-breadcrumb>
          <vb-breadcrumb-item to="/">Examples</vb-breadcrumb-item>
          <vb-breadcrumb-item to="/docs/components"
            >Components</vb-breadcrumb-item
          >
          <vb-breadcrumb-item to="/docs/components/breadcrumb" actived
            >Breadcrumb</vb-breadcrumb-item
          >
        </vb-breadcrumb>
      </demo>
    </example-section-item>

    <example-section-item title="Alignment">
      <demo :code="code.alignment.centered">
        <vb-breadcrumb align="centered">
          <vb-breadcrumb-item to="/">Examples</vb-breadcrumb-item>
          <vb-breadcrumb-item to="/docs/components"
            >Components</vb-breadcrumb-item
          >
          <vb-breadcrumb-item to="/docs/components/breadcrumb" actived
            >Breadcrumb</vb-breadcrumb-item
          >
        </vb-breadcrumb>
      </demo>

      <demo :code="code.alignment.right">
        <vb-breadcrumb align="right">
          <vb-breadcrumb-item to="/">Examples</vb-breadcrumb-item>
          <vb-breadcrumb-item to="/docs/components"
            >Components</vb-breadcrumb-item
          >
          <vb-breadcrumb-item to="/docs/components/breadcrumb" actived
            >Breadcrumb</vb-breadcrumb-item
          >
        </vb-breadcrumb>
      </demo>
    </example-section-item>

    <example-section-item title="Icons">
      <demo :code="code.icons">
        <vb-breadcrumb>
          <vb-breadcrumb-item to="/docs">
            <vb-icon name="fa fa-home" size="small"></vb-icon>
            <span>Examples</span>
          </vb-breadcrumb-item>
          <vb-breadcrumb-item to="/docs/components">
            <vb-icon name="fa fa-puzzle-piece" size="small"></vb-icon>Components
          </vb-breadcrumb-item>
          <vb-breadcrumb-item to="/docs/components/breadcrumb" actived>
            <vb-icon name="fa fa-thumbs-up" size="small"></vb-icon>Breadcrumb
          </vb-breadcrumb-item>
        </vb-breadcrumb>
      </demo>
    </example-section-item>

    <example-section-item title="Alternative separators">
      <demo :code="code.separators.arrow">
        <vb-breadcrumb separator="arrow">
          <vb-breadcrumb-item to="/">Examples</vb-breadcrumb-item>
          <vb-breadcrumb-item to="/docs/components"
            >Components</vb-breadcrumb-item
          >
          <vb-breadcrumb-item to="/docs/components/breadcrumb" actived
            >Breadcrumb</vb-breadcrumb-item
          >
        </vb-breadcrumb>
      </demo>
      <demo :code="code.separators.bullet">
        <vb-breadcrumb separator="bullet">
          <vb-breadcrumb-item to="/">Examples</vb-breadcrumb-item>
          <vb-breadcrumb-item to="/docs/components"
            >Components</vb-breadcrumb-item
          >
          <vb-breadcrumb-item to="/docs/components/breadcrumb" actived
            >Breadcrumb</vb-breadcrumb-item
          >
        </vb-breadcrumb>
      </demo>
      <demo :code="code.separators.dot">
        <vb-breadcrumb separator="dot">
          <vb-breadcrumb-item to="/">Examples</vb-breadcrumb-item>
          <vb-breadcrumb-item to="/docs/components"
            >Components</vb-breadcrumb-item
          >
          <vb-breadcrumb-item to="/docs/components/breadcrumb" actived
            >Breadcrumb</vb-breadcrumb-item
          >
        </vb-breadcrumb>
      </demo>
      <demo :code="code.separators.succeeds">
        <vb-breadcrumb separator="succeeds">
          <vb-breadcrumb-item to="/">Examples</vb-breadcrumb-item>
          <vb-breadcrumb-item to="/docs/components"
            >Components</vb-breadcrumb-item
          >
          <vb-breadcrumb-item to="/docs/components/breadcrumb" actived
            >Breadcrumb</vb-breadcrumb-item
          >
        </vb-breadcrumb>
      </demo>
    </example-section-item>

    <example-section-item title="Sizes">
      <demo :code="code.sizes.small">
        <vb-breadcrumb size="small">
          <vb-breadcrumb-item to="/">Examples</vb-breadcrumb-item>
          <vb-breadcrumb-item to="/docs/components"
            >Components</vb-breadcrumb-item
          >
          <vb-breadcrumb-item to="/docs/components/breadcrumb" actived
            >Breadcrumb</vb-breadcrumb-item
          >
        </vb-breadcrumb>
      </demo>
      <demo :code="code.sizes.default">
        <vb-breadcrumb>
          <vb-breadcrumb-item to="/">Examples</vb-breadcrumb-item>
          <vb-breadcrumb-item to="/docs/components"
            >Components</vb-breadcrumb-item
          >
          <vb-breadcrumb-item to="/docs/components/breadcrumb" actived
            >Breadcrumb</vb-breadcrumb-item
          >
        </vb-breadcrumb>
      </demo>
      <demo :code="code.sizes.medium">
        <vb-breadcrumb size="medium">
          <vb-breadcrumb-item to="/">Examples</vb-breadcrumb-item>
          <vb-breadcrumb-item to="/docs/components"
            >Components</vb-breadcrumb-item
          >
          <vb-breadcrumb-item to="/docs/components/breadcrumb" actived
            >Breadcrumb</vb-breadcrumb-item
          >
        </vb-breadcrumb>
      </demo>
      <demo :code="code.sizes.large">
        <vb-breadcrumb size="large">
          <vb-breadcrumb-item to="/">Examples</vb-breadcrumb-item>
          <vb-breadcrumb-item to="/docs/components"
            >Components</vb-breadcrumb-item
          >
          <vb-breadcrumb-item to="/docs/components/breadcrumb" actived
            >Breadcrumb</vb-breadcrumb-item
          >
        </vb-breadcrumb>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
import code from '@/code/components/breadcrumb.js'

export default {
  name: 'BreadcrumbExamples',
  data() {
    return {
      code
    }
  }
}
</script>
