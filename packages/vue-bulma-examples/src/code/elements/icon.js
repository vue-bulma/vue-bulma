let code = {}

code.basic = `\
<vb-icon name="fa fa-home"></vb-icon>
`

code.colors = `\
<vb-icon name="fa fa-home" color="primary"></vb-icon>

<vb-icon name="fa fa-info-circle" color="info"></vb-icon>

<vb-icon name="fa fa-check-square" color="success"></vb-icon>

<vb-icon name="fa fa-exclamation-triangle" color="warning"></vb-icon>

<vb-icon name="fa fa-ban" color="danger"></vb-icon>

<vb-icon name="fa fa-circle" color="white"></vb-icon>

<vb-icon name="fa fa-flag" color="light"></vb-icon>

<vb-icon name="fa fa-shield" color="dark"></vb-icon>

<vb-icon name="fa fa-camera" color="black"></vb-icon>

<vb-icon name="fa fa-user-circle" color="link"></vb-icon>
`

code.containerSize = `\
<vb-icon name="fa fa-home" size="small"></vb-icon>

<vb-icon name="fa fa-home"></vb-icon>

<vb-icon name="fa fa-home" size="medium"></vb-icon>

<vb-icon name="fa fa-home" size="large"></vb-icon>
`

code.iconSize = `\
<vb-icon name="fa fa-home" size="large"></vb-icon>

<vb-icon name="fa fa-home" size="large" iconSize="lg"></vb-icon>

<vb-icon name="fa fa-home" size="large" iconSize="2x"></vb-icon>

<vb-icon name="fa fa-home" size="large" iconSize="3x"></vb-icon>
`

code.animated = `\
<vb-icon name="fa fa-spinner" size="large" animated></vb-icon>

<vb-icon name="fa fa-refresh" size="large" animated></vb-icon>

<vb-icon name="fa fa-circle-o-notch" size="large" animated></vb-icon>

<vb-icon name="fa fa-repeat" size="large" animated></vb-icon>
`

code.stacked = `\
<vb-icon class="icon-background" size="medium">
  <span class="fa-stack">
    <i class="fa fa-circle fa-stack-2x"></i>
    <i class="fa fa-flag fa-stack-1x fa-inverse"></i>
  </span>
</vb-icon>

<vb-icon class="icon-background" size="large">
  <span class="fa-stack fa-lg">
    <i class="fa fa-camera fa-stack-1x"></i>
    <i class="fa fa-ban fa-stack-2x has-text-danger"></i>
  </span>
</vb-icon>
`
export default code
