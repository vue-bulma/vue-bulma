let code = {}

code.basic = `\
<vb-columns>
  <vb-column> <p>First column</p> </vb-column>
  <vb-column> <p>Second column</p> </vb-column>
  <vb-column> <p>Third column</p> </vb-column>
  <vb-column> <p>Fourth column</p> </vb-column>
</vb-columns>
`

code.size = `\
<vb-columns>
  <vb-column size="1"><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
</vb-columns>

<vb-columns>
  <vb-column size="2"><p>2</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
</vb-columns>

<vb-columns>
  <vb-column size="3"><p>3</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
</vb-columns>

<vb-columns>
  <vb-column size="4"><p>4</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
</vb-columns>

<vb-columns>
  <vb-column size="5"><p>5</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
</vb-columns>

<vb-columns>
  <vb-column size="6"><p>6</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
</vb-columns>

<vb-columns>
  <vb-column size="7"><p>7</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
</vb-columns>

<vb-columns>
  <vb-column size="8"><p>8</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
</vb-columns>

<vb-columns>
  <vb-column size="9"><p>9</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
</vb-columns>

<vb-columns>
  <vb-column size="10"><p>10</p></vb-column>
  <vb-column><p>1</p></vb-column>
  <vb-column><p>1</p></vb-column>
</vb-columns>

<vb-columns>
  <vb-column size="11"><p>11</p></vb-column>
  <vb-column><p>1</p></vb-column>
</vb-columns>

<vb-columns>
  <vb-column size="12"><p>12</p></vb-column>
</vb-columns>

<vb-columns>
  <vb-column size="full"><p>full</p></vb-column>
</vb-columns>

<vb-columns>
  <vb-column size="four-fifths">
    <p>four-fifths</p>
  </vb-column>
  <vb-column><p>Auto</p></vb-column>
  <vb-column><p>Auto</p></vb-column>
</vb-columns>

<vb-columns>
  <vb-column size="three-quarters">
    <p>three-quarters</p>
  </vb-column>
  <vb-column><p>Auto</p></vb-column>
  <vb-column><p>Auto</p></vb-column>
</vb-columns>

<vb-columns>
  <vb-column size="two-thirds"> <p>two-thirds</p> </vb-column>
  <vb-column><p>Auto</p></vb-column>
  <vb-column><p>Auto</p></vb-column>
</vb-columns>

<vb-columns>
  <vb-column size="three-fifths">
    <p>three-fifths</p>
  </vb-column>
  <vb-column><p>Auto</p></vb-column>
  <vb-column><p>Auto</p></vb-column>
</vb-columns>

<vb-columns>
  <vb-column size="half"> <p>half</p> </vb-column>
  <vb-column><p>Auto</p></vb-column>
  <vb-column><p>Auto</p></vb-column>
</vb-columns>

<vb-columns>
  <vb-column size="two-fifths"> <p>two-fifths</p> </vb-column>
  <vb-column><p>Auto</p></vb-column>
  <vb-column><p>Auto</p></vb-column>
</vb-columns>

<vb-columns>
  <vb-column size="one-third"> <p>one-third</p> </vb-column>
  <vb-column><p>Auto</p></vb-column>
  <vb-column><p>Auto</p></vb-column>
</vb-columns>

<vb-columns>
  <vb-column size="one-quarter">
    <p>one-quarter</p>
  </vb-column>
  <vb-column><p>Auto</p></vb-column>
  <vb-column><p>Auto</p></vb-column>
</vb-columns>

<vb-columns>
  <vb-column size="one-fifth"> <p>one-fifth</p> </vb-column>
  <vb-column><p>Auto</p></vb-column>
  <vb-column><p>Auto</p></vb-column>
</vb-columns>
`

code.Offset = `\
<vb-columns>
  <vb-column size="half" offset="one-quarter">
    <p>size:half<br />offset:one-quarter</p>
  </vb-column>
</vb-columns>

<vb-columns>
  <vb-column size="three-fifths" offset="one-fifth">
    <p>size:three-fifths<br />offset:one-fifth</p>
  </vb-column>
</vb-columns>

<vb-columns>
  <vb-column size="4" offset="8">
    <p>size:4<br />offset:8</p>
  </vb-column>
</vb-columns>

<vb-columns>
  <vb-column size="11" offset="1">
    <p>size:11<br />offset:1</p>
  </vb-column>
</vb-columns>
`

code.narrow = `\
<vb-columns>
  <vb-column narrow>
    <div style="width: 200px;">
      <p>This column is only 200px wide</p>
    </div>
  </vb-column>
  <vb-column>
    <p>
      This column will take up the remaining space available
    </p>
  </vb-column>
</vb-columns>
`

code.mobile = `\
<vb-columns view="mobile">
  <vb-column><p>1</p></vb-column>
  <vb-column> <p>2</p> </vb-column>
  <vb-column><p>3</p></vb-column>
  <vb-column> <p>4</p> </vb-column>
</vb-columns>
`

code.desktop = `\
<vb-columns view="desktop">
  <vb-column><p>1</p></vb-column>
  <vb-column> <p>2</p> </vb-column>
  <vb-column><p>3</p></vb-column>
  <vb-column> <p>4</p> </vb-column>
</vb-columns>
`

code.breakpoint = `\
<vb-columns view="mobile">
  <vb-column
    mobile="three-quarters"
    tablet="two-thirds"
    desktop="half"
    widescreen="one-third"
    fullhd="one-quarter"
  >
    <p>
      mobile:three-quarters<br />
      tablet:two-thirds<br />
      desktop:half<br />
      widescreen:one-third<br />
      fullhd:one-quarter
    </p>
  </vb-column>
  <vb-column> <p>2</p> </vb-column>
  <vb-column><p>3</p></vb-column>
  <vb-column> <p>4</p> </vb-column>
</vb-columns>
`

code.nesting = `\
<vb-columns>
  <vb-column>
    <p>First column</p>
    <vb-columns>
      <vb-column> <p>First nested column</p> </vb-column>
      <vb-column> <p>Second nested column</p> </vb-column>
    </vb-columns>
  </vb-column>
</vb-columns>
`

code.gapless = `\
<vb-columns gapType="gapless">
  <vb-column> <p>First column</p> </vb-column>
  <vb-column> <p>Second column</p> </vb-column>
</vb-columns>
`

code.gap = `\
<vb-columns gapType="variable" gap="0">
  ...
</vb-columns>

<vb-columns gapType="variable" gap="1">
  ...
</vb-columns>

<vb-columns gapType="variable" gap="2">
  ...
</vb-columns>

<vb-columns gapType="variable" gap="3">
  ...
</vb-columns>

<vb-columns gapType="variable" gap="4">
  ...
</vb-columns>

<vb-columns gapType="variable" gap="5">
  ...
</vb-columns>

<vb-columns gapType="variable" gap="6">
  ...
</vb-columns>

<vb-columns gapType="variable" gap="7">
  ...
</vb-columns>

<vb-columns gapType="variable" gap="8">
  ...
</vb-columns>
`

code.breakpointGap = `\
<vb-columns gapType="variable" mobileGap="8" tabletGap="0" desktopGap="3" widescreenGap="8" fullhdGap="2">
  ...
</vb-columns>
`

code.vertical = `\
<vb-columns align="vcentered">
  <vb-column size="8">
    <p>First column</p>
  </vb-column>
  <vb-column>
    <p>Second column with more content. This is so you can see the vertical alignment.</p>
  </vb-column>
</vb-columns>
`

code.centered = `\
<vb-columns align="centered">
  <vb-column size="8">
    <p>8</p>
  </vb-column>
</vb-columns>

<vb-columns align="centered">
  <vb-column size="2">
    <p>2</p>
  </vb-column>
  <vb-column size="2">
    <p>2</p>
  </vb-column>
</vb-columns>
`

code.multiline = `\
<vb-columns multiline>
  <vb-column size="3">
    <p>3</p>
  </vb-column>

  <vb-column size="3">
    <p>3</p>
  </vb-column>

  <vb-column size="3">
    <p>3</p>
  </vb-column>

  <vb-column size="3">
    <p>3</p>
  </vb-column>

  <vb-column size="8">
    <p>8</p>
  </vb-column>

  <vb-column size="4">
    <p>4</p>
  </vb-column>

  <vb-column size="6">
    <p>6</p>
  </vb-column>

  <vb-column size="6">
    <p>6</p>
  </vb-column>
</vb-columns>
`

code.multilineCentering = `\
<vb-columns view="mobile" align="centered" multiline>
  <vb-column narrow>
    <p>First Column</p>
  </vb-column>

  <vb-column narrow>
    <p>Our Second Column</p>
  </vb-column>

  <vb-column narrow>
    <p>Third Column</p>
  </vb-column>

  <vb-column narrow>
    <p>The Fourth Column</p>
  </vb-column>

  <vb-column narrow>
    <p>Fifth Column</p>
  </vb-column>
</vb-columns>
`

export default code
