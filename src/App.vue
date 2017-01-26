<template>
  <div id="app">
    <vue-bulma-a>A Link</vue-bulma-a>

    <vue-bulma-button>Button</vue-bulma-button>

    <vue-bulma-box>
      <vue-bulma-media>
        <p class="image is-64x64" slot="media-left">
          <img src="http://bulma.io/images/placeholders/128x128.png">
        </p>
        <div slot="media-content">
          <vue-bulma-content>
            <p>
              <strong>Barbara Middleton</strong>
              <br>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
              <br>
              <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
            </p>
          </vue-bulma-content>

          <vue-bulma-media>
            <p class="image is-48x48" slot="media-left">
              <img src="http://bulma.io/images/placeholders/96x96.png">
            </p>
            <vue-bulma-content slot="media-content">
              <p>
                <strong>Sean Brown</strong>
                <br>
                Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis leo feugiat.
                <br>
                <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
              </p>
            </vue-bulma-content>

            <vue-bulma-media slot="media-content">
              Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu lorem cursus ullamcorper sit amet nec massa.
            </vue-bulma-media>

            <vue-bulma-media slot="media-content">
              Morbi vitae diam et purus tincidunt porttitor vel vitae augue. Praesent malesuada metus sed pharetra euismod. Cras tellus odio, tincidunt iaculis diam non, porta aliquet tortor.
            </vue-bulma-media>
            
          </vue-bulma-media>

          <vue-bulma-media slot="media-content">
            <p class="image is-48x48" slot="media-left">
              <img src="http://bulma.io/images/placeholders/96x96.png">
            </p>
            <vue-bulma-content slot="media-content">
              <p>
                <strong>Kayli Eunice </strong>
                <br>
                Sed convallis scelerisque mauris, non pulvinar nunc mattis vel. Maecenas varius felis sit amet magna vestibulum euismod malesuada cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus lacinia non nisl id feugiat.
                <br>
                <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
              </p>
            </vue-bulma-content>
          </vue-bulma-media>
        </div>
      </vue-bulma-media>
      <vue-bulma-media>
        <p class="image is-64x64" slot="media-left">
          <img src="http://bulma.io/images/placeholders/128x128.png">
        </p>
        <div slot="media-content">
          <p class="control">
            <textarea class="textarea" placeholder="Add a comment..."></textarea>
          </p>
          <p class="control">
            <button class="button">Post comment</button>
          </p>
        </div>
      </vue-bulma-media>
    </vue-bulma-box>

    <vue-bulma-content size="medium">
      <h1>Hello World</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
      <h2>Second level</h2>
      <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
      <ul>
        <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
        <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
        <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
        <li>Ut non enim metus.</li>
      </ul>
      <h3>Third level</h3>
      <p>Quisque ante lacus, malesuada ac auctor vitae, congue <a href="#">non ante</a>. Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus.</p>
      <ol>
        <li>Donec blandit a lorem id convallis.</li>
        <li>Cras gravida arcu at diam gravida gravida.</li>
        <li>Integer in volutpat libero.</li>
        <li>Donec a diam tellus.</li>
        <li>Aenean nec tortor orci.</li>
        <li>Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>
        <li>Vivamus maximus ultricies pulvinar.</li>
      </ol>
      <blockquote>Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit ipsum, ut blandit est tellus sit amet turpis.</blockquote>
      <p>Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et <em>justo sodales</em> elementum. Maecenas ultrices lacus quis neque consectetur, et lobortis nisi molestie.</p>
      <p>Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec mattis vulputate risus in luctus. Maecenas vestibulum interdum commodo.</p>
      <p>Suspendisse egestas sapien non felis placerat elementum. Morbi tortor nisl, suscipit sed mi sit amet, mollis malesuada nulla. Nulla facilisi. Nullam ac erat ante.</p>
      <h4>Fourth level</h4>
      <p>Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla ac. Mauris euismod metus a tellus laoreet, at elementum ex efficitur.</p>
      <p>Maecenas eleifend sollicitudin dui, faucibus sollicitudin augue cursus non. Ut finibus eleifend arcu ut vehicula. Mauris eu est maximus est porta condimentum in eu justo. Nulla id iaculis sapien.</p>
      <p>Phasellus porttitor enim id metus volutpat ultricies. Ut nisi nunc, blandit sed dapibus at, vestibulum in felis. Etiam iaculis lorem ac nibh bibendum rhoncus. Nam interdum efficitur ligula sit amet ullamcorper. Etiam tristique, leo vitae porta faucibus, mi lacus laoreet metus, at cursus leo est vel tellus. Sed ac posuere est. Nunc ultricies nunc neque, vitae ultricies ex sodales quis. Aliquam eu nibh in libero accumsan pulvinar. Nullam nec nisl placerat, pretium metus vel, euismod ipsum. Proin tempor cursus nisl vel condimentum. Nam pharetra varius metus non pellentesque.</p>
      <h5>Fifth level</h5>
      <p>Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed tincidunt ligula. Vestibulum at nunc elit. Praesent aliquet ligula mi, in luctus elit volutpat porta. Phasellus molestie diam vel nisi sodales, a eleifend augue laoreet. Sed nec eleifend justo. Nam et sollicitudin odio.</p>
      <h6>Sixth level</h6>
      <p>Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec pulvinar lacus sed diam dignissim, ut eleifend eros accumsan. Phasellus non tortor eros. Ut sed rutrum lacus. Etiam purus nunc, scelerisque quis enim vitae, malesuada ultrices turpis. Nunc vitae maximus purus, nec consectetur dui. Suspendisse euismod, elit vel rutrum commodo, ipsum tortor maximus dui, sed varius sapien odio vitae est. Etiam at cursus metus.</p>
    </vue-bulma-content>

    <vue-bulma-group>
      <vue-bulma-button type="primary">Save changes</vue-bulma-button>
      <vue-bulma-button>Cancel</vue-bulma-button>
      <vue-bulma-button type="danger">Delete post</vue-bulma-button>
      <vue-bulma-button-addons>
        <vue-bulma-button>
          <vue-bulma-icon type="fa fa-align-left" size="small"></vue-bulma-icon>
          <span>Left</span>
        </vue-bulma-button>
        <vue-bulma-button>
          <vue-bulma-icon type="fa fa-align-center" size="small"></vue-bulma-icon>
          <span>Center</span>
        </vue-bulma-button>
        <vue-bulma-button>
          <vue-bulma-icon type="fa fa-align-right" size="small"></vue-bulma-icon>
          <span>Right</span>
        </vue-bulma-button>
      </vue-bulma-button-addons>
    </vue-bulma-group>

    <vue-bulma-tag type="dark">
      Tag Label
      <vue-bulma-delete></vue-bulma-delete>
    </vue-bulma-tag>

    <vue-bulma-title :level="6" :size="2">Title</vue-bulma-title>
    <vue-bulma-subtitle :level="2" :size="6">Title</vue-bulma-subtitle>

    <vue-bulma-level>
      <div slot="left">
        <vue-bulma-level-item>
          <p class="subtitle is-5">
            <strong>123</strong> posts
          </p>
        </vue-bulma-level-item>
        <vue-bulma-level-item  aligned="center">
          <p class="control has-addons">
            <input class="input" type="text" placeholder="Find a post">
            <button class="button">
              Search
            </button>
          </p>
        </vue-bulma-level-item>
      </div>
      <div slot="right">
        <vue-bulma-level-item element="p">
          <strong>All</strong>
        </vue-bulma-level-item>
        <vue-bulma-level-item element="p">
          <a>Published</a>
        </vue-bulma-level-item>
        <vue-bulma-level-item element="p">
          <a>Drafts</a>
        </vue-bulma-level-item>
        <vue-bulma-level-item element="p">
          <a class="button is-success">New</a>
        </vue-bulma-level-item>
        <vue-bulma-level-item element="p" aligned="right">
          <div>
            <p class="heading">Following</p>
            <p class="title">123</p>
          </div>
        </vue-bulma-level-item>
      </div>
      <vue-bulma-level-item>
        <vue-bulma-title :level="6" :size="2">Title</vue-bulma-title>
      </vue-bulma-level-item>
      <vue-bulma-level-item>
        <vue-bulma-subtitle :level="6" :size="4">Sub Title</vue-bulma-subtitle>
      </vue-bulma-level-item>
    </vue-bulma-level>
  </div>
</template>

<script>
import elements from './elements'
import components from './components'

const {
  VueBulmaButton,
  VueBulmaA,
  VueBulmaBox,
  VueBulmaContent,
  VueBulmaGroup,
  VueBulmaButtonAddons,
  VueBulmaIcon,
  VueBulmaTag,
  VueBulmaTitle,
  VueBulmaSubtitle,
  VueBulmaDelete
} = elements

const {
  VueBulmaLevel,
  VueBulmaLevelItem,
  VueBulmaMedia
} = components

export default {
  components: {
    VueBulmaA,
    VueBulmaBox,
    VueBulmaButton,
    VueBulmaContent,
    VueBulmaButtonAddons,
    VueBulmaIcon,
    VueBulmaGroup,
    VueBulmaTag,
    VueBulmaTitle,
    VueBulmaSubtitle,
    VueBulmaDelete,
    VueBulmaLevel,
    VueBulmaLevelItem,
    VueBulmaMedia
  }
}
</script>

<style lang="scss">
@import "styles/index.scss";

$fa-font-path: '~font-awesome/fonts/';
@import "~font-awesome/scss/font-awesome.scss";
</style>
