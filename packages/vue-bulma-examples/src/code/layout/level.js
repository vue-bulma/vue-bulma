let code = { basic: {} }

code.basic.normal = `\
<vb-level>
  <vb-level-item>
    <vb-subtitle size="5">
      <strong>123</strong> posts
    </vb-subtitle>
  </vb-level-item>

  <vb-level-item>
    <vb-form-item addons>
      <vb-input placeholder="Find a post"></vb-input>
      <vb-button>Search</vb-button>
    </vb-form-item>
  </vb-level-item>
</vb-level>
`

code.basic.basic = `\
<vb-level>
  <template slot="left">
    <vb-level-item>
      <vb-subtitle size="5">
        <strong>123</strong> posts
      </vb-subtitle>
    </vb-level-item>

    <vb-level-item>
      <vb-form-item addons>
        <vb-input placeholder="Find a post"></vb-input>
        <vb-button>Search</vb-button>
      </vb-form-item>
    </vb-level-item>
  </template>

  <template slot="right">
    <vb-level-item>
      <strong>All</strong>
    </vb-level-item>

    <vb-level-item>
      <a>Published</a>
    </vb-level-item>

    <vb-level-item>
      <a>Drafts</a>
    </vb-level-item>

    <vb-level-item>
      <a>Deleted</a>
    </vb-level-item>

    <vb-level-item>
      <vb-button color="success">New</vb-button>
    </vb-level-item>
  </template>
</vb-level>
`

code.alignment = `\
<vb-level>
  <vb-level-item>
    <div>
      <p class="heading">Tweets</p>
      <p class="title">3,456</p>
    </div>
  </vb-level-item>

  <vb-level-item>
    <div>
      <p class="heading">Following</p>
      <p class="title">123</p>
    </div>
  </vb-level-item>

  <vb-level-item>
    <div>
      <p class="heading">Followers</p>
      <p class="title">456K</p>
    </div>
  </vb-level-item>

  <vb-level-item>
    <div>
      <p class="heading">Likes</p>
      <p class="title">789</p>
    </div>
  </vb-level-item>
</vb-level>

<vb-level align="centered">
  <vb-level-item>
    <div>
      <p class="heading">Tweets</p>
      <p class="title">3,456</p>
    </div>
  </vb-level-item>

  <vb-level-item>
    <div>
      <p class="heading">Following</p>
      <p class="title">123</p>
    </div>
  </vb-level-item>

  <vb-level-item>
    <div>
      <p class="heading">Followers</p>
      <p class="title">456K</p>
    </div>
  </vb-level-item>

  <vb-level-item>
    <div>
      <p class="heading">Likes</p>
      <p class="title">789</p>
    </div>
  </vb-level-item>
</vb-level>

<vb-level>
  <vb-level-item align="right">
    <div>
      <p class="heading">Tweets</p>
      <p class="title">3,456</p>
    </div>
  </vb-level-item>

  <vb-level-item align="right">
    <div>
      <p class="heading">Following</p>
      <p class="title">123</p>
    </div>
  </vb-level-item>

  <vb-level-item align="right">
    <div>
      <p class="heading">Followers</p>
      <p class="title">456K</p>
    </div>
  </vb-level-item>

  <vb-level-item align="right">
    <div>
      <p class="heading">Likes</p>
      <p class="title">789</p>
    </div>
  </vb-level-item>
</vb-level>
`

code.mobile = `\
<vb-level mobile align="centered">
  <vb-level-item>
    <div>
      <p class="heading">Tweets</p>
      <p class="title">3,456</p>
    </div>
  </vb-level-item>

  <vb-level-item>
    <div>
      <p class="heading">Following</p>
      <p class="title">123</p>
    </div>
  </vb-level-item>

  <vb-level-item>
    <div>
      <p class="heading">Followers</p>
      <p class="title">456K</p>
    </div>
  </vb-level-item>

  <vb-level-item>
    <div>
      <p class="heading">Likes</p>
      <p class="title">789</p>
    </div>
  </vb-level-item>
</vb-level>
`

export default code
