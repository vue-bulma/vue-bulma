let code = {}

code.basic = `\
<vb-container>
  <vb-notification>
    This container is <strong>centered</strong> on desktop.
  </vb-notification>
</vb-container>
`

code.fluid = `\
<vb-container view="fluid">
  <vb-notification>
    This container is <strong>fluid</strong>: it will have a 32px gap on either side, on any viewport size.
  </vb-notification>
</vb-container>
`

code.breakpoint = {}

code.breakpoint.desktop = `\
<vb-container view="desktop">
  <vb-notification>
    This container is <strong>fullwidth</strong> <em> until</em> the <code>$desktop</code> breakpoint.
  </vb-notification>
</vb-container>
`

code.breakpoint.widescreen = `\
<vb-container view="widescreen">
  <vb-notification>
    This container is <strong>fullwidth</strong> <em> until</em> the <code>$widescreen</code> breakpoint.
  </vb-notification>
</vb-container>
`

code.breakpoint.fullhd = `\
<vb-container view="fullhd">
  <vb-notification>
    This container is <strong>fullwidth</strong> <em> until</em> the <code>$fullhd</code> breakpoint.
  </vb-notification>
</vb-container>
`

export default code
