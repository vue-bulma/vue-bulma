<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo :code="code.basic">
        <div class="block" slot="control">Current Page: {{ page }}</div>
        <vb-pagination
          :current="page"
          :pageCount="5"
          @change="handleChange"
        ></vb-pagination>
        <!-- <vb-pagination :current.sync="page" :pageCount="5"></vb-pagination> -->
      </demo>
    </example-section-item>

    <example-section-item title="Pager Count">
      <vb-subtitle size="6">Pager count 5</vb-subtitle>
      <demo :code="code.pagerCount.three">
        <vb-pagination
          :current="5"
          :pageCount="10"
          :pagerCount="5"
        ></vb-pagination>
      </demo>

      <vb-subtitle size="6">Pager count 7</vb-subtitle>
      <demo :code="code.pagerCount.five">
        <vb-pagination
          :current="5"
          :pageCount="10"
          :pagerCount="7"
        ></vb-pagination>
      </demo>
    </example-section-item>

    <example-section-item title="Alignment">
      <demo :code="code.alignment">
        <vb-pagination :pageCount="5"></vb-pagination>
        <vb-pagination :pageCount="5" align="centered"></vb-pagination>
        <vb-pagination :pageCount="5" align="right"></vb-pagination>
      </demo>
    </example-section-item>

    <example-section-item title="Rounded">
      <demo :code="code.rounded">
        <vb-pagination :pageCount="10" rounded></vb-pagination>
      </demo>
    </example-section-item>

    <example-section-item title="Size">
      <demo :code="code.sizes">
        <vb-pagination :pageCount="5" size="small"></vb-pagination>
        <vb-pagination :pageCount="5"></vb-pagination>
        <vb-pagination :pageCount="5" size="medium"></vb-pagination>
        <vb-pagination :pageCount="5" size="large"></vb-pagination>
      </demo>
    </example-section-item>

    <example-section-item title="Custom text">
      <demo :code="code.customText">
        <vb-pagination
          :pageCount="5"
          prev-text="上一页"
          next-text="下一页"
        ></vb-pagination>

        <vb-pagination :pageCount="5">
          <vb-icon slot="prev" name="fa fa-chevron-left"></vb-icon>
          <vb-icon slot="next" name="fa fa-chevron-right"></vb-icon>
        </vb-pagination>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
import code from '@/code/components/pagination.js'

export default {
  name: 'PaginationExamples',
  data() {
    return {
      code,
      page: 3
    }
  },
  methods: {
    handleChange(page) {
      this.page = page
    }
  }
}
</script>
