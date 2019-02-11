<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo :code="code.basic">
        <vb-title>Title</vb-title>
        <vb-subtitle>Subtitle</vb-subtitle>
      </demo>
    </example-section-item>

    <example-section-item title="Sizes">
      <demo :code="code.size.title">
        <vb-title size="1">Title 1</vb-title>
        <vb-title size="2">Title 2</vb-title>
        <vb-title size="3">Title 3 (default size)</vb-title>
        <vb-title size="4">Title 4</vb-title>
        <vb-title size="5">Title 5</vb-title>
        <vb-title size="6">Title 6</vb-title>
      </demo>

      <demo :code="code.size.subtitle">
        <vb-subtitle size="1">Subtitle 1</vb-subtitle>
        <vb-subtitle size="2">Subtitle 2</vb-subtitle>
        <vb-subtitle size="3">Subtitle 3</vb-subtitle>
        <vb-subtitle size="4">Subtitle 4</vb-subtitle>
        <vb-subtitle size="5">Subtitle 5 (default size)</vb-subtitle>
        <vb-subtitle size="6">Subtitle 6</vb-subtitle>
      </demo>
    </example-section-item>

    <example-section-item title="Combinations And Spaced">
      <vb-content>
        <p>
          When you combine a title and a subtitle, they move closer together.
        </p>
        <p>
          As a rule of thumb, it is recommended to use a size difference of two.
          So if you use a <span class="color-red">title size 1</span>, combine
          it with a <span class="color-red">subtitle size: 3</span>.
        </p>
      </vb-content>
      <demo :code="code.combinations">
        <vb-title>Title</vb-title>
        <vb-subtitle>Subtitle</vb-subtitle>

        <vb-title size="1">Title 1</vb-title>
        <vb-subtitle size="3">Subtitle 3</vb-subtitle>
      </demo>

      <vb-content>Spaced</vb-content>
      <demo :code="code.spaced">
        <vb-title spaced>Title</vb-title>
        <vb-subtitle>Subtitle</vb-subtitle>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
import code from '@/code/elements/title.js'

export default {
  name: 'TitleExamples',
  data() {
    return {
      code
    }
  }
}
</script>
