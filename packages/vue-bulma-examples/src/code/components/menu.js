let code = {}

code.basic = `\
<vb-menu style="width: 240px;">
  <vb-menu-list>
    <vb-menu-item index="Dashboard" icon="fa fa-wpforms">Dashboard</vb-menu-item>
    <vb-menu-item index="Customers" icon="fa fa-user-secret">Customers</vb-menu-item>
    <vb-menu-item index="Team Settings" icon="fa fa-cogs">Team Settings</vb-menu-item>
    <vb-menu-item index="Manage Your Team" icon="fa fa-address-card-o">Manage Your Team</vb-menu-item>
    <vb-menu-item index="Invitations" icon="fa fa-handshake-o">Invitations</vb-menu-item>
    <vb-menu-item index="Cloud Storage" icon="fa fa-fa-cloud-upload">Cloud Storage</vb-menu-item>
    <vb-menu-item index="Authentication" icon="fa fa-lock">Authentication</vb-menu-item>
    <vb-menu-item index="Payments" icon="fa fa-credit-card">Payments</vb-menu-item>
    <vb-menu-item index="Transfers" icon="fa fa-exchange">Transfers</vb-menu-item>
    <vb-menu-item index="Balance" icon="fa fa-smile-o">Balance</vb-menu-item>
  </vb-menu-list>
</vb-menu>
`

code.group = `\
<vb-menu style="width: 240px;">
  <vb-menu-list label="General">
    <vb-menu-item index="Dashboard" icon="fa fa-wpforms">Dashboard</vb-menu-item>
    <vb-menu-item index="Customers" icon="fa fa-user-secret">Customers</vb-menu-item>
  </vb-menu-list>

  <vb-menu-list label="Administration">
    <vb-menu-item index="Team Settings" icon="fa fa-cogs">Team Settings</vb-menu-item>
    <vb-menu-item index="Manage Your Team" icon="fa fa-address-card-o">Manage Your Team</vb-menu-item>
    <vb-menu-item index="Invitations" icon="fa fa-handshake-o">Invitations</vb-menu-item>
    <vb-menu-item index="Cloud Storage" icon="fa fa-fa-cloud-upload">Cloud Storage</vb-menu-item>
    <vb-menu-item index="Authentication" icon="fa fa-lock">Authentication</vb-menu-item>
  </vb-menu-list>

  <vb-menu-list label="Transactions">
    <vb-menu-item index="Payments" icon="fa fa-credit-card">Payments</vb-menu-item>
    <vb-menu-item index="Transfers" icon="fa fa-exchange">Transfers</vb-menu-item>
    <vb-menu-item index="Balance" icon="fa fa-smile-o">Balance</vb-menu-item>
  </vb-menu-list>
</vb-menu>
`

code.submenu = `\
<template>
  <div>
    <vb-buttons-list>
      <vb-button color="info" outlined @click="SetDefaultOpen">Set default open</vb-button>
      <vb-button @click="ClearDefaultOpen">Clear default open</vb-button>
    </vb-buttons-list>

    <vb-menu style="width: 240px;" :default-open="defaultOpen">
      <vb-menu-list label="General">
        <vb-menu-item index="Dashboard" icon="fa fa-wpforms">Dashboard</vb-menu-item>
        <vb-menu-item index="Customers" icon="fa fa-user-secret">Customers</vb-menu-item>
      </vb-menu-list>

      <vb-menu-list label="Administration">
        <vb-menu-item index="Team Settings" icon="fa fa-cogs">Team Settings</vb-menu-item>

        <vb-menu-item index="Manage Your Team" icon="fa fa-address-card-o">
          Manage Your Team

          <vb-menu-list slot="submenu">
            <vb-menu-item index="Members" icon="fa fa-users">Members</vb-menu-item>
            <vb-menu-item index="Plugins" icon="fa fa-plug">Plugins</vb-menu-item>
            <vb-menu-item index="Add a member" icon="fa fa-plus">Add a member</vb-menu-item>
          </vb-menu-list>
        </vb-menu-item>

        <vb-menu-item index="Invitations" icon="fa fa-handshake-o">Invitations</vb-menu-item>
        <vb-menu-item index="Cloud Storage" icon="fa fa-fa-cloud-upload">Cloud Storage</vb-menu-item>
        <vb-menu-item index="Authentication" icon="fa fa-lock">Authentication</vb-menu-item>
      </vb-menu-list>

      <vb-menu-list label="Transactions">
        <vb-menu-item index="Payments" icon="fa fa-credit-card">Payments</vb-menu-item>
        <vb-menu-item index="Transfers" icon="fa fa-exchange">Transfers</vb-menu-item>
        <vb-menu-item index="Balance" icon="fa fa-smile-o">Balance</vb-menu-item>
      </vb-menu-list>
    </vb-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultOpen: []
    }
  },
  methods: {
    SetDefaultOpen() {
      this.defaultOpen = ['Manage Your Team']
    },
    ClearDefaultOpen() {
      this.defaultOpen = []
    }
  }
}
</script>
`

code.actived = `\
<template>
  <div>
    <vb-buttons-list>
      <vb-button color="info" outlined @click="setActived">Set Dashboard actived</vb-button>
      <vb-button @click="ClearActived">Clear actived</vb-button>
    </vb-buttons-list>

    <vb-menu style="width: 240px;" :actived="actived">

      ...

      <vb-menu-list label="Administration">
        <vb-menu-item index="Manage Your Team" icon="fa fa-address-card-o">
          Manage Your Team

          <vb-menu-list slot="submenu">
            <vb-menu-item index="Members" icon="fa fa-users">Members</vb-menu-item>
            <vb-menu-item index="Plugins" icon="fa fa-plug">Plugins</vb-menu-item>
            <vb-menu-item index="Add a member" icon="fa fa-plus">Add a member</vb-menu-item>
          </vb-menu-list>
        </vb-menu-item>
      </vb-menu-list>

      ...

    </vb-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      actived: []
    }
  },
  methods: {
    setActived() {
      this.actived = 'Manage Your Team'
    },
    ClearActived() {
      this.actived = ''
    }
  }
}
</script>
`

export default code
