<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo :code="code.basic">
        <vb-modal :visible.sync="visible.basic">
          <vb-box>
            <vb-media-object>
              <vb-image
                slot="left"
                src="https://bulma.io/images/placeholders/128x128.png"
                size="64x64"
              ></vb-image>

              <vb-content>
                <p>
                  <strong>John Smith</strong>
                  <small>@johnsmith</small>
                  <small>31m</small>
                  <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
                  Maecenas non massa sem. Etiam finibus odio quis feugiat
                  facilisis.
                </p>
              </vb-content>

              <vb-level mobile>
                <vb-level-item slot="left">
                  <router-link :to="{ path: '#' }">
                    <vb-icon size="small" name="fa fa-reply"></vb-icon>
                  </router-link>
                </vb-level-item>
                <vb-level-item slot="left">
                  <router-link :to="{ path: '#' }">
                    <vb-icon size="small" name="fa fa-retweet"></vb-icon>
                  </router-link>
                </vb-level-item>
                <vb-level-item slot="left">
                  <router-link :to="{ path: '#' }">
                    <vb-icon size="small" name="fa fa-heart"></vb-icon>
                  </router-link>
                </vb-level-item>
              </vb-level>
            </vb-media-object>
          </vb-box>
        </vb-modal>

        <vb-button @click="visible.basic = true">Basic</vb-button>
      </demo>
    </example-section-item>

    <example-section-item title="Image modal">
      <demo :code="code.imageModal">
        <vb-modal :visible.sync="visible.image">
          <vb-image
            src="https://bulma.io/images/placeholders/1280x960.png"
            size="4by3"
          ></vb-image>
        </vb-modal>

        <vb-button @click="visible.image = true">Image modal</vb-button>
      </demo>
    </example-section-item>

    <example-section-item title="Modal card">
      <demo :code="code.modalCard">
        <vb-modal type="card" title="Modal title" :visible.sync="visible.card">
          <vb-content>
            <h1>Hello World</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              accumsan, metus ultrices eleifend gravida, nulla nunc varius
              lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui.
              Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
            </p>
            <h2>Second level</h2>
            <p>
              Curabitur accumsan turpis pharetra
              <strong>augue tincidunt</strong> blandit. Quisque condimentum
              maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna
              vel cursus venenatis. Suspendisse potenti. Etiam mattis sem
              rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et
              neque nisl.
            </p>
            <ul>
              <li>
                In fermentum leo eu lectus mollis, quis dictum mi aliquet.
              </li>
              <li>
                Morbi eu nulla lobortis, lobortis est in, fringilla felis.
              </li>
              <li>
                Aliquam nec felis in sapien venenatis viverra fermentum nec
                lectus.
              </li>
              <li>Ut non enim metus.</li>
            </ul>
            <h3>Third level</h3>
            <p>
              Quisque ante lacus, malesuada ac auctor vitae, congue
              <a href="#">non ante</a>. Phasellus lacus ex, semper ac tortor
              nec, fringilla condimentum orci. Fusce eu rutrum tellus.
            </p>
            <ol>
              <li>Donec blandit a lorem id convallis.</li>
              <li>Cras gravida arcu at diam gravida gravida.</li>
              <li>Integer in volutpat libero.</li>
              <li>Donec a diam tellus.</li>
              <li>Aenean nec tortor orci.</li>
              <li>
                Quisque aliquam cursus urna, non bibendum massa viverra eget.
              </li>
              <li>Vivamus maximus ultricies pulvinar.</li>
            </ol>
            <blockquote>
              Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero
              hendrerit ipsum, ut blandit est tellus sit amet turpis.
            </blockquote>
            <p>
              Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et
              <em>justo sodales</em> elementum. Maecenas ultrices lacus quis
              neque consectetur, et lobortis nisi molestie.
            </p>
            <p>
              Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec
              mattis vulputate risus in luctus. Maecenas vestibulum interdum
              commodo.
            </p>
            <p>
              Suspendisse egestas sapien non felis placerat elementum. Morbi
              tortor nisl, suscipit sed mi sit amet, mollis malesuada nulla.
              Nulla facilisi. Nullam ac erat ante.
            </p>
            <h4>Fourth level</h4>
            <p>
              Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla
              ac. Mauris euismod metus a tellus laoreet, at elementum ex
              efficitur.
            </p>
            <p>
              Maecenas eleifend sollicitudin dui, faucibus sollicitudin augue
              cursus non. Ut finibus eleifend arcu ut vehicula. Mauris eu est
              maximus est porta condimentum in eu justo. Nulla id iaculis
              sapien.
            </p>
            <p>
              Phasellus porttitor enim id metus volutpat ultricies. Ut nisi
              nunc, blandit sed dapibus at, vestibulum in felis. Etiam iaculis
              lorem ac nibh bibendum rhoncus. Nam interdum efficitur ligula sit
              amet ullamcorper. Etiam tristique, leo vitae porta faucibus, mi
              lacus laoreet metus, at cursus leo est vel tellus. Sed ac posuere
              est. Nunc ultricies nunc neque, vitae ultricies ex sodales quis.
              Aliquam eu nibh in libero accumsan pulvinar. Nullam nec nisl
              placerat, pretium metus vel, euismod ipsum. Proin tempor cursus
              nisl vel condimentum. Nam pharetra varius metus non pellentesque.
            </p>
            <h5>Fifth level</h5>
            <p>
              Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed
              tincidunt ligula. Vestibulum at nunc elit. Praesent aliquet ligula
              mi, in luctus elit volutpat porta. Phasellus molestie diam vel
              nisi sodales, a eleifend augue laoreet. Sed nec eleifend justo.
              Nam et sollicitudin odio.
            </p>
            <h6>Sixth level</h6>
            <p>
              Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec
              pulvinar lacus sed diam dignissim, ut eleifend eros accumsan.
              Phasellus non tortor eros. Ut sed rutrum lacus. Etiam purus nunc,
              scelerisque quis enim vitae, malesuada ultrices turpis. Nunc vitae
              maximus purus, nec consectetur dui. Suspendisse euismod, elit vel
              rutrum commodo, ipsum tortor maximus dui, sed varius sapien odio
              vitae est. Etiam at cursus metus.
            </p>
          </vb-content>
          <div slot="footer">
            <vb-button color="success">Save changes</vb-button>
            <vb-button>Cancel</vb-button>
          </div>
        </vb-modal>

        <vb-button @click="visible.card = true">Modal card</vb-button>
      </demo>
    </example-section-item>

    <example-section-item title="Mask">
      <demo :code="code.mask">
        <vb-modal type="card" :visible.sync="visible.mask" :mask="false">
          <p>Disable Mask</p>
        </vb-modal>

        <vb-modal
          type="card"
          :visible.sync="visible.maskLayer"
          :mask-closable="false"
        >
          <p>Disable mask layer closure</p>
        </vb-modal>

        <vb-buttons-list>
          <vb-button @click="visible.mask = true">Disable Mask</vb-button>
          <vb-button @click="visible.maskLayer = true"
            >Disable mask layer closure</vb-button
          >
        </vb-buttons-list>
      </demo>
    </example-section-item>

    <example-section-item title="Closable">
      <demo :code="code.closable">
        <vb-modal
          type="card"
          title="Card"
          :visible.sync="visible.closable.card"
          :closable="closable"
        >
          <vb-button @click="toggleClosable">
            {{ currentState }}
          </vb-button>
        </vb-modal>

        <vb-modal
          title="Content"
          :visible.sync="visible.closable.content"
          :closable="closable"
        >
          <vb-box>
            <vb-button @click="toggleClosable">
              {{ currentState }}
            </vb-button>
          </vb-box>
        </vb-modal>

        <vb-buttons-list>
          <vb-button @click="visible.closable.card = true">Card</vb-button>
          <vb-button @click="visible.closable.content = true"
            >Content</vb-button
          >
        </vb-buttons-list>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
import code from '@/code/components/modal.js'

export default {
  name: 'ModalExamples',
  data() {
    return {
      code,
      closable: true,
      visible: {
        basic: false,
        image: false,
        card: false,
        mask: false,
        maskLayer: false,
        closable: {
          card: false,
          content: false
        }
      }
    }
  },
  computed: {
    currentState() {
      return this.closable ? 'Closable' : 'Unclosable'
    }
  },
  methods: {
    toggleClosable() {
      this.closable = !this.closable
    }
  }
}
</script>
