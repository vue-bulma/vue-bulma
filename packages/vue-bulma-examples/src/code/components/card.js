let code = {}

code.imageCard = `\
<vb-card>
  <vb-image slot="image" src="https://bulma.io/images/placeholders/1280x960.png" size="4by3"></vb-image>

  <vb-media-object>
    <vb-image slot="left" src="https://bulma.io/images/placeholders/96x96.png" size="48x48"></vb-image>
    <vb-content>
      <vb-title size="4">John Smith</vb-title>
      <vb-subtitle size="6">@johnsmith</vb-subtitle>
    </vb-content>
  </vb-media-object>

  <vb-content>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Phasellus nec iaculis mauris.
    <a>@bulmaio</a>.
    <a href="#">#css</a>
    <a href="#">#responsive</a>
    <br>
    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
  </vb-content>
</vb-card>
`

code.card = {}

code.card.headAndFooter = `\
<vb-card>
  <span slot="title">Component</span>
  <vb-icon slot="icon" name="fa fa-angle-down"></vb-icon>

  <vb-content>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Phasellus nec iaculis mauris.
    <a>@bulmaio</a>.
    <a href="#">#css</a>
    <a href="#">#responsive</a>
    <br>
    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
  </vb-content>

  <template slot="footer">
    <vb-card-footer-item @click="handleSave">Save</vb-card-footer-item>
    <vb-card-footer-item @click="handleEdit">Edit</vb-card-footer-item>
    <vb-card-footer-item @click="handleDelete">Delete</vb-card-footer-item>
  </template>
</vb-card>

// Or
<vb-card title="Component" icon="fa fa-angle-down">
  ...
</vb-card>
`

code.card.titleCentered = `\
<vb-card title="Component" icon="fa fa-angle-down" title-centered>
  <vb-content>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Phasellus nec iaculis mauris.
    <a>@bulmaio</a>.
    <a href="#">#css</a>
    <a href="#">#responsive</a>
    <br>
    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
  </vb-content>

  <template slot="footer">
    <vb-card-footer-item @click="handleSave">Save</vb-card-footer-item>
    <vb-card-footer-item @click="handleEdit">Edit</vb-card-footer-item>
    <vb-card-footer-item @click="handleDelete">Delete</vb-card-footer-item>
  </template>
</vb-card>
`

code.card.hideHeader = `\
<vb-card>
  <vb-content>
    <vb-title>“There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”</vb-title>
    <vb-subtitle>Jeff Atwood</vb-subtitle>
  </vb-content>

  <template slot="footer">
    <vb-card-footer-item static>
      <span>View on <a>Twitter</a></span>
    </vb-card-footer-item>

    <vb-card-footer-item static>
      <span>Share on <a>Facebook</a></span>
    </vb-card-footer-item>
  </template>
</vb-card>
`

code.card.custom = `\
<template>
  <vb-card>
    <div class="demo-card-header" slot="header">
      <vb-input placeholder="Searching" loading></vb-input>
    </div>

    <vb-content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris.
      <a>@bulmaio</a>.
      <a href="#">#css</a>
      <a href="#">#responsive</a>
      <br>
    </vb-content>

    <div class="demo-card-footer" slot="footer">
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      <vb-buttons-list class="demo-card-buttons">
        <vb-button color="primary" outlined>Save</vb-button>
        <vb-button>Edit</vb-button>
      </vb-buttons-list>
    </div>
  </vb-card>
</template>

<style>
.demo-card-header {
  padding: 1rem 1.5rem;
}
.demo-card-footer {
  width: 100%;
  padding: 1rem 1.5rem;
}
.demo-card-buttons {
  float: right;
}
</style>
`

export default code
