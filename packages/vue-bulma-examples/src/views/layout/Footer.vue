<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo :code="code">
        <vb-footer>
          <vb-content class="has-text-centered">
            <p>
              <strong>Bulma</strong> by
              <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is
              licensed
              <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
              The website content is licensed
              <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
                >CC BY NC SA 4.0</a
              >.
            </p>
          </vb-content>
        </vb-footer>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
import code from '@/code/layout/footer.js'

export default {
  name: 'FooterExamples',
  data() {
    return {
      code
    }
  }
}
</script>
