<template>
  <vb-section>
    <example-basic :menus="menus" :code="code.basic"></example-basic>

    <example-group :menus="menus" :code="code.group"></example-group>

    <example-submenu :menus="menus" :code="code.submenu"></example-submenu>

    <example-active :menus="menus" :code="code.actived"></example-active>
  </vb-section>
</template>

<script>
import code from '@/code/components/menu.js'
import ExampleBasic from './Basic'
import ExampleGroup from './Group'
import ExampleSubmenu from './Submenu'
import ExampleActive from './Active'

export default {
  name: 'ExampleMenu',
  components: { ExampleBasic, ExampleGroup, ExampleSubmenu, ExampleActive },
  data() {
    return {
      code,
      menus: [
        {
          name: 'General',
          icon: 'fa fa-wpforms',
          children: [
            { name: 'Dashboard', icon: 'fa fa-tachometer' },
            { name: 'Customers', icon: 'fa fa-user-o' }
          ]
        },
        {
          name: 'Administration',
          icon: 'fa fa-user-secret',
          children: [
            { name: 'Team Settings', icon: 'fa fa-cogs' },
            {
              name: 'Manage Your Team',
              icon: 'fa fa-address-card-o',
              children: [
                { name: 'Members', icon: 'fa fa-users' },
                { name: 'Plugins', icon: 'fa fa-plug' },
                { name: 'Add a member', icon: 'fa fa-plus' }
              ]
            },
            { name: 'Invitations', icon: 'fa fa-handshake-o' },
            {
              name: 'Cloud Storage',
              icon: 'fa fa-cloud-upload'
            },
            { name: 'Authentication', icon: 'fa fa-lock' }
          ]
        },
        {
          name: 'Transactions',
          icon: 'fa fa-shopping-bag',
          children: [
            { name: 'Payments', icon: 'fa fa-credit-card' },
            { name: 'Transfers', icon: 'fa fa-exchange' },
            { name: 'Balance', icon: 'fa fa-smile-o' }
          ]
        }
      ]
    }
  }
}
</script>
