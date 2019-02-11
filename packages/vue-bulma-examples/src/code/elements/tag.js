let code = {}

code.basic = `\
<vb-tag>Tag label</vb-tag>
`

code.clickable = `\
<template>
  <vb-tag :static="false" @click="handleCLick">Clickable tag</vb-tag>
</template>

<script>
export default {
  methods: {
    handleClick(evt) {}
  }
}
</script>
`

code.colors = `\
<vb-tag color="black">black</vb-tag>

<vb-tag color="dark">dark</vb-tag>

<vb-tag color="light">light</vb-tag>

<vb-tag color="white">white</vb-tag>

<vb-tag color="primary">primary</vb-tag>

<vb-tag color="link">link</vb-tag>

<vb-tag color="info">info</vb-tag>

<vb-tag color="success">success</vb-tag>

<vb-tag color="warning">warning</vb-tag>

<vb-tag color="danger">danger</vb-tag>
`

code.size = `\
<vb-tag>Normal</vb-tag>

<vb-tag size="normal">Normal</vb-tag>

<vb-tag size="medium">Medium</vb-tag>

<vb-tag size="large">Large</vb-tag>
`

code.modifiers = `\
<vb-tags>
  <vb-tag rounded>Rounded</vb-tag>
  <vb-tag del></vb-tag>
</vb-tags>
`

code.combinations = `\
<vb-tags>
  <vb-tag color="success">
    Bar
    <vb-delete size="small"></vb-delete>
  </vb-tag>

  <vb-tag color="warning" size="medium">
    Hello
    <vb-delete size="small"></vb-delete>
  </vb-tag>

  <vb-tag color="danger" size="large">
    World
    <vb-delete></vb-delete>
  </vb-tag>
</vb-tags>
`

code.tags = `\
<vb-tags>
  <vb-tag color="primary">Vue</vb-tag>
  <vb-tag color="dark">Bulma</vb-tag>
</vb-tags>

<vb-tags>
  <vb-tag color="danger">Vue</vb-tag>
  <vb-tag del></vb-tag>
</vb-tags>
`

code.tagsAddons = `\
<vb-tags addons>
  <vb-tag color="primary">Vue</vb-tag>
  <vb-tag color="dark">Bulma</vb-tag>
</vb-tags>

<vb-tags addons>
  <vb-tag color="danger">Vue</vb-tag>
  <vb-tag del></vb-tag>
</vb-tags>
`

export default code
