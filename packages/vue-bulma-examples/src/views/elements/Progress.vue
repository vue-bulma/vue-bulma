<template>
  <vb-section>
    <example-section-item title="Basic">
      <vb-content>Max default 100.</vb-content>

      <demo :code="code.basic">
        <vb-progress value="15" max="100"></vb-progress>
      </demo>
    </example-section-item>

    <example-section-item title="Percent">
      <demo :code="code.percent">
        <vb-progress value="15" max="100" showLabel></vb-progress>
      </demo>
    </example-section-item>

    <example-section-item title="Colors and value">
      <demo :code="code.colors">
        <vb-progress value="10" max="200"></vb-progress>
        <vb-progress value="10" max="100"></vb-progress>
        <vb-progress color="primary" value="10"></vb-progress>
        <vb-progress color="info" value="20"></vb-progress>
        <vb-progress color="success" value="30"></vb-progress>
        <vb-progress color="warning" value="40"></vb-progress>
        <vb-progress color="danger" value="50"></vb-progress>
        <vb-progress color="white" value="60"></vb-progress>
        <vb-progress color="light" value="70"></vb-progress>
        <vb-progress color="dark" value="80"></vb-progress>
        <vb-progress color="black" value="90"></vb-progress>
        <vb-progress color="link" value="100"></vb-progress>
      </demo>
    </example-section-item>

    <example-section-item title="Sizes">
      <demo :code="code.size">
        <vb-progress value="10" size="small"></vb-progress>
        <vb-progress value="20"></vb-progress>
        <vb-progress value="40" size="medium"></vb-progress>
        <vb-progress value="80" size="large"></vb-progress>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
import code from '@/code/elements/progress.js'

export default {
  name: 'ProgressExamples',
  data() {
    return {
      code: code
    }
  }
}
</script>
