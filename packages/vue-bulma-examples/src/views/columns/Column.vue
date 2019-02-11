<template>
  <vb-section>
    <example-section-item title="Basic">
      <vb-subtitle size="6">
        Add a
        <code>vb-columns</code> container,Add as many
        <code>vb-column</code> elements as you want,Each
        <code>vb-column</code> will have an equal width, no matter the number of
        <code>vb-column</code>
      </vb-subtitle>
      <demo :code="code.basic">
        <vb-columns>
          <vb-column>
            <p class="bg bg-primary">First column</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-primary">Second column</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-primary">Third column</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-primary">Fourth column</p>
          </vb-column>
        </vb-columns>
      </demo>
    </example-section-item>

    <example-section-item title="Sizes">
      <vb-subtitle size="6">
        change the size of a single
        <code>vb-column</code>
      </vb-subtitle>
      <demo :code="code.size">
        <vb-columns>
          <vb-column size="1">
            <p class="bg bg-primary">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
        </vb-columns>

        <vb-columns>
          <vb-column size="2">
            <p class="bg bg-primary">2</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
        </vb-columns>
        <vb-columns>
          <vb-column size="3">
            <p class="bg bg-primary">3</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
        </vb-columns>
        <vb-columns>
          <vb-column size="4">
            <p class="bg bg-primary">4</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
        </vb-columns>
        <vb-columns>
          <vb-column size="5">
            <p class="bg bg-primary">5</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
        </vb-columns>
        <vb-columns>
          <vb-column size="6">
            <p class="bg bg-primary">6</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
        </vb-columns>
        <vb-columns>
          <vb-column size="7">
            <p class="bg bg-primary">7</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
        </vb-columns>
        <vb-columns>
          <vb-column size="8">
            <p class="bg bg-primary">8</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
        </vb-columns>
        <vb-columns>
          <vb-column size="9">
            <p class="bg bg-primary">9</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
        </vb-columns>
        <vb-columns>
          <vb-column size="10">
            <p class="bg bg-primary">10</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
        </vb-columns>
        <vb-columns>
          <vb-column size="11">
            <p class="bg bg-primary">11</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
        </vb-columns>
        <vb-columns>
          <vb-column size="12">
            <p class="bg bg-primary">12</p>
          </vb-column>
        </vb-columns>
        <vb-columns>
          <vb-column size="full">
            <p class="bg bg-primary">full</p>
          </vb-column>
        </vb-columns>
        <vb-columns>
          <vb-column size="four-fifths">
            <p class="bg bg-primary">four-fifths</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">Auto</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">Auto</p>
          </vb-column>
        </vb-columns>
        <vb-columns>
          <vb-column size="three-quarters">
            <p class="bg bg-primary">three-quarters</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">Auto</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">Auto</p>
          </vb-column>
        </vb-columns>
        <vb-columns>
          <vb-column size="two-thirds">
            <p class="bg bg-primary">two-thirds</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">Auto</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">Auto</p>
          </vb-column>
        </vb-columns>
        <vb-columns>
          <vb-column size="three-fifths">
            <p class="bg bg-primary">three-fifths</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">Auto</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">Auto</p>
          </vb-column>
        </vb-columns>
        <vb-columns>
          <vb-column size="half">
            <p class="bg bg-primary">half</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">Auto</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">Auto</p>
          </vb-column>
        </vb-columns>
        <vb-columns>
          <vb-column size="two-fifths">
            <p class="bg bg-primary">two-fifths</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">Auto</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">Auto</p>
          </vb-column>
        </vb-columns>
        <vb-columns>
          <vb-column size="one-third">
            <p class="bg bg-primary">one-third</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">Auto</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">Auto</p>
          </vb-column>
        </vb-columns>
        <vb-columns>
          <vb-column size="one-quarter">
            <p class="bg bg-primary">one-quarter</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">Auto</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">Auto</p>
          </vb-column>
        </vb-columns>
        <vb-columns>
          <vb-column size="one-fifth">
            <p class="bg bg-primary">one-fifth</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">Auto</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">Auto</p>
          </vb-column>
        </vb-columns>
      </demo>
    </example-section-item>

    <example-section-item title="Offset">
      <vb-subtitle size="6">
        While you can use empty vb-columns (like
        &lt;vb-column&gt;&lt;/vb-column&gt;) to create horizontal space around
        col elements, you can also use offset modifiers like
        <code>offset="x"</code>
      </vb-subtitle>
      <demo :code="code.Offset">
        <vb-columns>
          <vb-column size="half" offset="one-quarter">
            <p class="bg bg-primary">size:half <br />offset:one-quarter</p>
          </vb-column>
        </vb-columns>
        <vb-columns>
          <vb-column size="three-fifths" offset="one-fifth">
            <p class="bg bg-primary">
              size:three-fifths <br />offset:one-fifth
            </p>
          </vb-column>
        </vb-columns>
        <vb-columns>
          <vb-column size="4" offset="8">
            <p class="bg bg-primary">size:4 <br />offset:8</p>
          </vb-column>
        </vb-columns>
        <vb-columns>
          <vb-column size="11" offset="1">
            <p class="bg bg-primary">size:11 <br />offset:1</p>
          </vb-column>
        </vb-columns>
      </demo>
    </example-section-item>

    <example-section-item title="Narrow">
      <vb-subtitle size="6">
        If you want a
        <code>vb-column</code>
        to only take the space it needs, use the
        <code>narrow</code>
        modifier. The other col(s) will fill up the remaining space.',
      </vb-subtitle>
      <demo :code="code.narrow">
        <vb-columns>
          <vb-column narrow>
            <div style="width: 200px;">
              <p class="bg bg-primary">This col is only 200px wide</p>
            </div>
          </vb-column>
          <vb-column>
            <p class="bg bg-primary">
              This col will take up the remaining space available
            </p>
          </vb-column>
        </vb-columns>
      </demo>
    </example-section-item>

    <example-section-item title="Mobile columns">
      <vb-subtitle size="6">
        By default,
        <code>vb-columns</code> are only activated from tablet onwards. This
        means <code>vb-columns</code> are stacked on top of each other on
        mobile. <br />If you want <code>vb-columns</code> to work on mobile too,
        just add the <code>view="mobile"</code> modifier on the vb-columns
        container
      </vb-subtitle>
      <demo :code="code.mobile">
        <vb-columns view="mobile">
          <vb-column>
            <p class="bg bg-primary">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-primary">2</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-primary">3</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-primary">4</p>
          </vb-column>
        </vb-columns>
      </demo>
    </example-section-item>

    <example-section-item title="Desktop columns">
      <vb-subtitle size="6">
        If you only want
        <code>vb-columns</code> on desktop upwards, just use the
        <code>view="desktop"</code> modifier on the vb-columns container
      </vb-subtitle>
      <demo :code="code.desktop">
        <vb-columns view="desktop">
          <vb-column>
            <p class="bg bg-primary">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-primary">2</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-primary">3</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-primary">4</p>
          </vb-column>
        </vb-columns>
      </demo>
    </example-section-item>

    <example-section-item title="Different column sizes per breakpoint">
      <vb-subtitle size="6">
        You can define a
        <code>vb-column</code> size for each viewport size:
        <strong>mobile, tablet,</strong> and
        <strong>desktop</strong>
      </vb-subtitle>
      <demo :code="code.breakpoint">
        <vb-columns view="mobile">
          <vb-column
            mobile="three-quarters"
            tablet="two-thirds"
            desktop="half"
            widescreen="one-third"
            fullhd="one-quarter"
          >
            <p class="bg bg-primary">
              mobile:three-quarters <br />tablet:two-thirds <br />desktop:half
              <br />widescreen:one-third <br />fullhd:one-quarter
            </p>
          </vb-column>
          <vb-column>
            <p class="bg bg-primary">2</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-primary">3</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-primary">4</p>
          </vb-column>
        </vb-columns>
      </demo>
    </example-section-item>

    <example-section-item title="Nesting">
      <vb-subtitle size="6">
        You can nest
        <code>vb-columns</code> to have more flexibility in your design. You
        only need to follow this structure:
      </vb-subtitle>
      <ul>
        <li>
          &lt;vb-columns&gt;
          <ul>
            <li>
              &lt;vb-column&gt;
              <ul>
                <li>
                  &lt;vb-columns&gt;
                  <ul>
                    <li>&lt;vb-column&gt;</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <demo :code="code.nesting">
        <vb-columns>
          <vb-column>
            <p class="bg bg-primary">First column</p>
            <vb-columns>
              <vb-column>
                <p class="bg bg-primary">First nested column</p>
              </vb-column>
              <vb-column>
                <p class="bg bg-primary">Second nested column</p>
              </vb-column>
            </vb-columns>
          </vb-column>
        </vb-columns>
      </demo>
    </example-section-item>

    <example-section-item title="Gapless">
      <vb-subtitle size="6">
        If you want to remove the space between the
        <code>vb-columns</code>, add the <code>gapType="gapless"</code> modifier
        on the
        <code>vb-columns</code>
        container
      </vb-subtitle>
      <demo :code="code.gapless">
        <vb-columns gapType="gapless">
          <vb-column>
            <p class="bg bg-primary">First column</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-info">Second column</p>
          </vb-column>
        </vb-columns>
      </demo>
    </example-section-item>

    <example-section-item title="Variable gap">
      <vb-subtitle size="6">
        ou can specify a custom col gap by appending one of 9 modifiers on the
        <code>vb-columns</code> container
        <br />
        <code>gap="0"</code> will remove any gap (similar to
        <code>gapType="gapless"</code>)
        <br />
        <code>gap="3"</code> is the default value, equivalent to the
        <code>0.75rem</code> value
        <br />
        <code>gap="8"</code> is the maximum gap of
        <code>2rem</code>
        <br />
        Additionally, <code>gapType="variable"</code> should be added on the
        <code>vb-columns</code> container
      </vb-subtitle>
      <demo :code="code.gap">
        <vb-tags slot="control">
          <vb-tag
            class="cursor"
            v-for="(value, index) in values"
            :key="index"
            @mouseente="handleMouseente(value, $event)"
            >{{ value }}</vb-tag
          >
        </vb-tags>

        <vb-columns gapType="variable" :gap="gapValue">
          <vb-column v-for="(count, index) in counts" :key="index">
            <p class="bg bg-primary">{{ count }}</p>
          </vb-column>
        </vb-columns>
      </demo>
    </example-section-item>

    <example-section-item title="Breakpoint based column gaps">
      <vb-subtitle size="6">
        You can define a <code>vb-column</code> gap for each viewport size
        <br />
        For example, here is how it looks with the following modifiers:
        <code
          >gapType="variable" mobileGap="8" tabletGap="0" desktopGap="3"
          widescreenGap="8" fullhdGap="2"</code
        >
      </vb-subtitle>
      <demo :code="code.breakpointGap">
        <vb-columns
          gapType="variable"
          mobileGap="8"
          tabletGap="0"
          desktopGap="3"
          widescreenGap="8"
          fullhdGap="2"
        >
          <vb-column v-for="(count, index) in counts" :key="index">
            <p class="bg bg-primary">{{ count }}</p>
          </vb-column>
        </vb-columns>
      </demo>
    </example-section-item>

    <example-section-item title="Vertical alignment">
      <vb-subtitle size="6">
        To align your <code>vb-columns</code> vertically, add the
        <code>align="vcentered"</code> modifier to the
        <code>vb-columns</code> container.',
      </vb-subtitle>
      <demo :code="code.vertical">
        <vb-columns align="vcentered">
          <vb-column size="8">
            <p class="bg bg-primary">First column</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-primary">
              Second column with more content. This is so you can see the
              vertical alignment.
            </p>
          </vb-column>
        </vb-columns>
      </demo>
    </example-section-item>

    <example-section-item title="Centering columns">
      <vb-subtitle size="6">
        While you can use empty <code>vb-columns</code> (like
        &lt;vb-column&gt;&lt;/vb-column&gt;) to create horizontal space around
        col elements, you can also use <code>align="centered"</code> on the
        parent <code>vb-columns</code> element:
      </vb-subtitle>
      <demo :code="code.centered">
        <vb-columns align="centered">
          <vb-column size="8">
            <p class="bg bg-primary">8</p>
          </vb-column>
        </vb-columns>
        <vb-columns align="centered">
          <vb-column size="2">
            <p class="bg bg-primary">2</p>
          </vb-column>
          <vb-column size="2">
            <p class="bg bg-primary">2</p>
          </vb-column>
        </vb-columns>
      </demo>
    </example-section-item>

    <example-section-item title="Multiline">
      <vb-subtitle size="6">
        Whenever you want to start a new line, you can close a
        <code>vb-columns</code> container and start a new one. But you can also
        add the <code>multiline</code> modifier and add more
        <code>vb-column</code> elements than would fit in a single row
      </vb-subtitle>
      <demo :code="code.multiline">
        <vb-columns multiline>
          <vb-column size="3">
            <p class="bg bg-primary">3</p>
          </vb-column>
          <vb-column size="3">
            <p class="bg bg-primary">3</p>
          </vb-column>
          <vb-column size="3">
            <p class="bg bg-primary">3</p>
          </vb-column>
          <vb-column size="3">
            <p class="bg bg-primary">3</p>
          </vb-column>
          <vb-column size="8">
            <p class="bg bg-primary">8</p>
          </vb-column>
          <vb-column size="4">
            <p class="bg bg-primary">4</p>
          </vb-column>
          <vb-column size="6">
            <p class="bg bg-primary">6</p>
          </vb-column>
          <vb-column size="6">
            <p class="bg bg-primary">6</p>
          </vb-column>
        </vb-columns>
      </demo>
    </example-section-item>

    <example-section-item title="Multiline and Centering">
      <vb-subtitle size="6">
        <code>align="centered"</code> use with <code>multiline</code> to create
        a flexible, centered list (try resizing to see centering in different
        viewport sizes)
      </vb-subtitle>
      <demo :code="code.multilineCentering">
        <vb-columns view="mobile" align="centered" multiline>
          <vb-column narrow>
            <p class="bg bg-primary">First column</p>
          </vb-column>
          <vb-column narrow>
            <p class="bg bg-primary">Our Second column</p>
          </vb-column>
          <vb-column narrow>
            <p class="bg bg-primary">Third column</p>
          </vb-column>
          <vb-column narrow>
            <p class="bg bg-primary">The Fourth column</p>
          </vb-column>
          <vb-column narrow>
            <p class="bg bg-primary">Fifth column</p>
          </vb-column>
        </vb-columns>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
import code from '@/code/columns/column.js'

export default {
  name: 'columnsExamples',
  data() {
    return {
      code,
      counts: ['1', '2', '3', '4', '5', '6'],
      values: ['0', '1', '2', '3', '4', '5', '6', '7', '8'],
      gapValue: null
    }
  },
  methods: {
    handleMouseente(value, event) {
      event.currentTarget.parentNode.childNodes.forEach(e => {
        e.classList.remove('bg-info')
      })
      event.currentTarget.classList.add('bg-info')
      this.gapValue = value
    }
  }
}
</script>

<style>
.bg {
  text-align: center;
  padding: 1rem;
  border-radius: 4px;
}
.bg-primary {
  background-color: #00d1b2;
  color: #fff;
}
.bg-info {
  background-color: #209cee !important;
  color: #fff !important;
}
.bg-light {
  background-color: #f5f5f5;
  color: #000;
}
.cursor {
  cursor: pointer;
  color: #fff;
}
</style>
