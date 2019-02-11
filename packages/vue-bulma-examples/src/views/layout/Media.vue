<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo :code="code.basic">
        <vb-media-object>
          <vb-image
            slot="left"
            src="https://bulma.io/images/placeholders/128x128.png"
            size="64x64"
          ></vb-image>

          <vb-delete slot="right"></vb-delete>

          <vb-content>
            <p>
              <strong>John Smith</strong>
              <small>@johnsmith</small>
              <small>31m</small>
              <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
              Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
          </vb-content>

          <vb-level mobile>
            <template slot="left">
              <vb-level-item>
                <a href="#">
                  <vb-icon size="small" name="fa fa-reply"></vb-icon>
                </a>
              </vb-level-item>
              <vb-level-item>
                <a href="#">
                  <vb-icon size="small" name="fa fa-retweet"></vb-icon>
                </a>
              </vb-level-item>
              <vb-level-item>
                <a href="#">
                  <vb-icon size="small" name="fa fa-heart"></vb-icon>
                </a>
              </vb-level-item>
            </template>
          </vb-level>
        </vb-media-object>

        <vb-media-object>
          <vb-image
            slot="left"
            src="https://bulma.io/images/placeholders/128x128.png"
            size="64x64"
          ></vb-image>

          <vb-form-item>
            <vb-textarea placeholder="Add a comment..."></vb-textarea>
          </vb-form-item>

          <vb-level>
            <vb-level-item slot="left">
              <vb-button color="info">Submit</vb-button>
            </vb-level-item>

            <vb-level-item slot="right">
              <vb-checkbox>Press enter to submit</vb-checkbox>
            </vb-level-item>
          </vb-level>
        </vb-media-object>
      </demo>
    </example-section-item>

    <example-section-item title="Nesting">
      <demo :code="code.nesting">
        <vb-media-object>
          <vb-image
            slot="left"
            src="https://bulma.io/images/placeholders/128x128.png"
            size="64x64"
          ></vb-image>
          <vb-content>
            <p>
              <strong>Barbara Middleton</strong>
              <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse
              pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus
              turpis.
              <br />
              <small> <a>Like</a> · <a>Reply</a> · 3 hrs </small>
            </p>
          </vb-content>

          <vb-media-object>
            <vb-image
              slot="left"
              src="https://bulma.io/images/placeholders/96x96.png"
              size="48x48"
            ></vb-image>
            <vb-content>
              <p>
                <strong>Sean Brown</strong>
                <br />Donec sollicitudin urna eget eros malesuada sagittis.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla
                sagittis, a lobortis leo feugiat.
                <br />
                <small> <a>Like</a> · <a>Reply</a> · 2 hrs </small>
              </p>
            </vb-content>
            <vb-media-object
              >Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu
              lorem cursus ullamcorper sit amet nec massa.</vb-media-object
            >
            <vb-media-object
              >Morbi vitae diam et purus tincidunt porttitor vel vitae augue.
              Praesent malesuada metus sed pharetra euismod. Cras tellus odio,
              tincidunt iaculis diam non, porta aliquet tortor.</vb-media-object
            >
          </vb-media-object>

          <vb-media-object>
            <vb-image
              slot="left"
              src="https://bulma.io/images/placeholders/96x96.png"
              size="48x48"
            ></vb-image>
            <vb-content>
              <p>
                <strong>Kayli Eunice</strong>
                <br />Sed convallis scelerisque mauris, non pulvinar nunc mattis
                vel. Maecenas varius felis sit amet magna vestibulum euismod
                malesuada cursus libero. Vestibulum ante ipsum primis in
                faucibus orci luctus et ultrices posuere cubilia Curae;
                Phasellus lacinia non nisl id feugiat.
                <br />
                <small> <a>Like</a> · <a>Reply</a> · 2 hrs </small>
              </p>
            </vb-content>
          </vb-media-object>
        </vb-media-object>

        <vb-media-object>
          <vb-image
            slot="left"
            src="https://bulma.io/images/placeholders/128x128.png"
            size="64x64"
          ></vb-image>
          <vb-form-item>
            <vb-textarea placeholder="Add a comment..."></vb-textarea>
          </vb-form-item>
          <vb-form-item>
            <vb-button>Post comment</vb-button>
          </vb-form-item>
        </vb-media-object>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
import code from '@/code/layout/media.js'

export default {
  name: 'MediaExamples',
  data() {
    return {
      code
    }
  }
}
</script>
