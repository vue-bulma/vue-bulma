let code = {}

code.basic = `\
<template>
  <vb-table :data="tableData">
    <vb-table-column label="Position" prop="position"></vb-table-column>
    <vb-table-column label="Team" prop="team"></vb-table-column>
    <vb-table-column label="Played" prop="played"></vb-table-column>
    <vb-table-column label="Won" prop="won"></vb-table-column>
    <vb-table-column label="Drawn" prop="drawn"></vb-table-column>
    <vb-table-column label="Lost" prop="lost"></vb-table-column>
    <vb-table-column label="Goals For" prop="goalsFor"></vb-table-column>
    <vb-table-column label="Goals Against" prop="goalsAgainst"></vb-table-column>
    <vb-table-column label="Goal Difference" prop="goalDifference"></vb-table-column>
    <vb-table-column label="Points" prop="points"></vb-table-column>
  </vb-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          "position": 1,
          "team": "Leicester City",
          "played": 38,
          "won": 23,
          "drawn": 12,
          "lost": 3,
          "goalsFor": 68,
          "goalsAgainst": 36,
          "goalDifference": 32,
          "points": 81
        },
        {
          "position": 2,
          "team": "Arsenal",
          "played": 38,
          "won": 20,
          "drawn": 11,
          "lost": 7,
          "goalsFor": 65,
          "goalsAgainst": 36,
          "goalDifference": 29,
          "points": 71
        },
        {
          "position": 3,
          "team": "Tottenham Hotspur",
          "played": 38,
          "won": 19,
          "drawn": 13,
          "lost": 6,
          "goalsFor": 69,
          "goalsAgainst": 35,
          "goalDifference": 34,
          "points": 70
        },
        {
          "position": 4,
          "team": "Manchester City",
          "played": 38,
          "won": 19,
          "drawn": 9,
          "lost": 10,
          "goalsFor": 71,
          "goalsAgainst": 41,
          "goalDifference": 30,
          "points": 66
        }
      ]
    }
  }
}
</script>
`

code.border = `\
<vb-table border :data="tableData">
  <vb-table-column label="Position" prop="position"></vb-table-column>
  <vb-table-column label="Team" prop="team"></vb-table-column>
  <vb-table-column label="Played" prop="played"></vb-table-column>
  <vb-table-column label="Won" prop="won"></vb-table-column>
  <vb-table-column label="Drawn" prop="drawn"></vb-table-column>
  <vb-table-column label="Lost" prop="lost"></vb-table-column>
  <vb-table-column label="Goals For" prop="goalsFor"></vb-table-column>
  <vb-table-column label="Goals Against" prop="goalsAgainst"></vb-table-column>
  <vb-table-column label="Goal Difference" prop="goalDifference"></vb-table-column>
  <vb-table-column label="Points" prop="points"></vb-table-column>
</vb-table>
`

code.striped = `\
<vb-table striped :data="tableData">
  <vb-table-column label="Position" prop="position"></vb-table-column>
  <vb-table-column label="Team" prop="team"></vb-table-column>
  <vb-table-column label="Played" prop="played"></vb-table-column>
  <vb-table-column label="Won" prop="won"></vb-table-column>
  <vb-table-column label="Drawn" prop="drawn"></vb-table-column>
  <vb-table-column label="Lost" prop="lost"></vb-table-column>
  <vb-table-column label="Goals For" prop="goalsFor"></vb-table-column>
  <vb-table-column label="Goals Against" prop="goalsAgainst"></vb-table-column>
  <vb-table-column label="Goal Difference" prop="goalDifference"></vb-table-column>
  <vb-table-column label="Points" prop="points"></vb-table-column>
</vb-table>
`

code.narrow = `\
<vb-table narrow :data="tableData">
  <vb-table-column label="Position" prop="position"></vb-table-column>
  <vb-table-column label="Team" prop="team"></vb-table-column>
  <vb-table-column label="Played" prop="played"></vb-table-column>
  <vb-table-column label="Won" prop="won"></vb-table-column>
  <vb-table-column label="Drawn" prop="drawn"></vb-table-column>
  <vb-table-column label="Lost" prop="lost"></vb-table-column>
  <vb-table-column label="Goals For" prop="goalsFor"></vb-table-column>
  <vb-table-column label="Goals Against" prop="goalsAgainst"></vb-table-column>
  <vb-table-column label="Goal Difference" prop="goalDifference"></vb-table-column>
  <vb-table-column label="Points" prop="points"></vb-table-column>
</vb-table>
`

code.hoverable = `\
<vb-table hoverable :data="tableData">
  <vb-table-column label="Position" prop="position"></vb-table-column>
  <vb-table-column label="Team" prop="team"></vb-table-column>
  <vb-table-column label="Played" prop="played"></vb-table-column>
  <vb-table-column label="Won" prop="won"></vb-table-column>
  <vb-table-column label="Drawn" prop="drawn"></vb-table-column>
  <vb-table-column label="Lost" prop="lost"></vb-table-column>
  <vb-table-column label="Goals For" prop="goalsFor"></vb-table-column>
  <vb-table-column label="Goals Against" prop="goalsAgainst"></vb-table-column>
  <vb-table-column label="Goal Difference" prop="goalDifference"></vb-table-column>
  <vb-table-column label="Points" prop="points"></vb-table-column>
</vb-table>
`

code.fullwidth = `\
<vb-table fullwidth :data="tableData">
  <vb-table-column label="Position" prop="position"></vb-table-column>
  <vb-table-column label="Team" prop="team"></vb-table-column>
  <vb-table-column label="Played" prop="played"></vb-table-column>
  <vb-table-column label="Won" prop="won"></vb-table-column>
  <vb-table-column label="Drawn" prop="drawn"></vb-table-column>
  <vb-table-column label="Lost" prop="lost"></vb-table-column>
  <vb-table-column label="Goals For" prop="goalsFor"></vb-table-column>
  <vb-table-column label="Goals Against" prop="goalsAgainst"></vb-table-column>
  <vb-table-column label="Goal Difference" prop="goalDifference"></vb-table-column>
  <vb-table-column label="Points" prop="points"></vb-table-column>
</vb-table>
`

code.style = {}

code.style.tableWidth = `\
<vb-table width="500" :data="tableData">
  <vb-table-column label="Position" prop="position"></vb-table-column>
  <vb-table-column label="Team" prop="team"></vb-table-column>
  <vb-table-column label="Played" prop="played"></vb-table-column>
  <vb-table-column label="Won" prop="won"></vb-table-column>
  <vb-table-column label="Drawn" prop="drawn"></vb-table-column>
  <vb-table-column label="Lost" prop="lost"></vb-table-column>
  <vb-table-column label="Goals For" prop="goalsFor"></vb-table-column>
  <vb-table-column label="Goals Against" prop="goalsAgainst"></vb-table-column>
  <vb-table-column label="Goal Difference" prop="goalDifference"></vb-table-column>
  <vb-table-column label="Points" prop="points"></vb-table-column>
</vb-table>
`

code.style.headerStyle = `\
<template>
  <vb-table :data="tableData" :header-class-name="headerClassName" :header-cell-class-name="headerCellClassName">
    <vb-table-column label="Position" prop="position"></vb-table-column>
    <vb-table-column label="Team" prop="team"></vb-table-column>
    <vb-table-column label="Played" prop="played"></vb-table-column>
    <vb-table-column label="Won" prop="won"></vb-table-column>
    <vb-table-column label="Drawn" prop="drawn"></vb-table-column>
    <vb-table-column label="Lost" prop="lost"></vb-table-column>
    <vb-table-column label="Goals For" prop="goalsFor"></vb-table-column>
    <vb-table-column label="Goals Against" prop="goalsAgainst"></vb-table-column>
    <vb-table-column label="Goal Difference" prop="goalDifference"></vb-table-column>
    <vb-table-column label="Points" prop="points"></vb-table-column>
  </vb-table>
</template>

<script>
import tableData from './data.json'

export default {
  data() {
    return {
      tableData
    }
  },
  methods: {
    headerClassName({ row, index }) {
      return 'demo-header-1'
    },
    headerCellClassName({ row, column, rowIndex, columnIndex }) {
      return 'demo-header-cell-1'
    }
  }
}
</script>

<style>
.demo-header-1 {
  background-color: whitesmoke;
}
.demo-header-cell-1 {
  border: 1px solid #dbdbdb !important;
}
</style>
`

code.style.rowStyle = `\
<template>
  <vb-table :data="tableData" :row-class-name="rowClassName">
    <vb-table-column label="Position" prop="position"></vb-table-column>
    <vb-table-column label="Team" prop="team"></vb-table-column>
    <vb-table-column label="Played" prop="played"></vb-table-column>
    <vb-table-column label="Won" prop="won"></vb-table-column>
    <vb-table-column label="Drawn" prop="drawn"></vb-table-column>
    <vb-table-column label="Lost" prop="lost"></vb-table-column>
    <vb-table-column label="Goals For" prop="goalsFor"></vb-table-column>
    <vb-table-column label="Goals Against" prop="goalsAgainst"></vb-table-column>
    <vb-table-column label="Goal Difference" prop="goalDifference"></vb-table-column>
    <vb-table-column label="Points" prop="points"></vb-table-column>
  </vb-table>
</template>

<script>
import tableData from './data.json'

export default {
  data() {
    return {
      tableData
    }
  },
  methods: {
    rowClassName({ row, index }) {
      return index % 2 === 1 ? 'demo-row-1' : 'demo-row-2'
    }
  }
}
</script>

<style>
.demo-row-1 {
  background-color: #00d1b2;
  border-color: transparent;
  color: #fff;
}
.demo-row-2 {
  background-color: #209cee;
  border-color: transparent;
  color: #fff;
}
</style>
`

code.style.columnStyle = `\
<template>
  <vb-table :data="tableData">
    <vb-table-column
      label="Position"
      prop="position"
      align="centered"
      class="demo-column-1"
    >
    </vb-table-column>
    <vb-table-column label="Team" prop="team"></vb-table-column>
    <vb-table-column label="Played" prop="played"></vb-table-column>
    <vb-table-column label="Won" prop="won"></vb-table-column>
    <vb-table-column label="Drawn" prop="drawn"></vb-table-column>
    <vb-table-column label="Lost" prop="lost"></vb-table-column>
    <vb-table-column label="Goals For" prop="goalsFor"></vb-table-column>
    <vb-table-column label="Goals Against" prop="goalsAgainst"></vb-table-column>
    <vb-table-column label="Goal Difference" prop="goalDifference"></vb-table-column>
    <vb-table-column label="Points" prop="points"></vb-table-column>
  </vb-table>
</template>

<script>
import tableData from './data.json'

export default {
  data() {
    return {
      tableData
    }
  }
}
</script>

<style>
.demo-column-1 {
  border: 1px solid #dbdbdb;
  width: 150px;
}
</style>
`

code.style.cellStyle = `\
<template>
  <vb-table :data="tableData" :cell-class-name="cellClassName">
    <vb-table-column label="Position" prop="position"></vb-table-column>
    <vb-table-column label="Team" prop="team"></vb-table-column>
    <vb-table-column label="Played" prop="played"></vb-table-column>
    <vb-table-column label="Won" prop="won"></vb-table-column>
    <vb-table-column label="Drawn" prop="drawn"></vb-table-column>
    <vb-table-column label="Lost" prop="lost"></vb-table-column>
    <vb-table-column label="Goals For" prop="goalsFor"></vb-table-column>
    <vb-table-column label="Goals Against" prop="goalsAgainst"></vb-table-column>
    <vb-table-column label="Goal Difference" prop="goalDifference"></vb-table-column>
    <vb-table-column label="Points" prop="points"></vb-table-column>
  </vb-table>
</template>

<script>
import tableData from './data.json'

export default {
  data() {
    return {
      tableData
    }
  },
  methods: {
    cellClassName({ row, column, rowIndex, columnIndex }) {
      if (column.label === 'Won') {
        return 'demo-cell-1'
      } else if (column.label === 'Points' && row.points > 70) {
        return 'demo-cell-2'
      }
    }
  }
}
</script>

<style>
.demo-cell-1 {
  background-color: #00d1b2;
  border-color: transparent;
  color: #fff;
}
.demo-cell-2 {
  background-color: #23d160;
  border-color: transparent;
  color: #fff;
}
</style>
`

code.group = `\
<vb-table border :data="tableData">
  <vb-table-column prop="position" label="Position"></vb-table-column>

  <vb-table-column label="Result">
    <vb-table-column label="Match">
      <vb-table-column label="Played" prop="played"></vb-table-column>
      <vb-table-column label="Won" prop="won"></vb-table-column>
      <vb-table-column label="Drawn" prop="drawn"></vb-table-column>
      <vb-table-column label="Lost" prop="lost"></vb-table-column>
    </vb-table-column>

    <vb-table-column label="Goals">
      <vb-table-column label="Goals For" prop="goalsFor"></vb-table-column>
      <vb-table-column label="Goals Against" prop="goalsAgainst"></vb-table-column>
      <vb-table-column label="Goals Difference" prop="goalDifference"></vb-table-column>
    </vb-table-column>
  </vb-table-column>

  <vb-table-column label="Points" prop="points"></vb-table-column>
</vb-table>
`

code.selection = {}

code.selection.single = `\
<template>
  <div>
    <vb-buttons-list>
      <vb-button color="primary" outlined @click="toggleSingleSelection(2)">
        Select third row
      </vb-button>

      <vb-button color="info" outlined @click="toggleSingleSelection()">
        Clear selection
      </vb-button>
    </vb-buttons-list>

    <vb-table ref="single" highlight-selected :data="tableData" @current-change="handleRowChange">
      <vb-table-column label="Position" prop="position"></vb-table-column>
      <vb-table-column label="Team" prop="team"></vb-table-column>
      <vb-table-column label="Played" prop="played"></vb-table-column>
      <vb-table-column label="Won" prop="won"></vb-table-column>
      <vb-table-column label="Drawn" prop="drawn"></vb-table-column>
      <vb-table-column label="Lost" prop="lost"></vb-table-column>
      <vb-table-column label="Goals For" prop="goalsFor"></vb-table-column>
      <vb-table-column label="Goals Against" prop="goalsAgainst"></vb-table-column>
      <vb-table-column label="Goal Difference" prop="goalDifference"></vb-table-column>
      <vb-table-column label="Points" prop="points"></vb-table-column>
    </vb-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      highlightRow: null
    }
  },
  methods: {
    handleRowChange(newRow, oldRow) {
      this.highlightRow = newRow
    },
    toggleSingleSelection(val) {
      this.$refs.single.setCurrentRow(val)
    }
  }
}
</script>
`

code.selection.multiple = `\
<template>
  <div>
    <vb-buttons-list>
      <vb-button color="primary" outlined @click="toggleSelection([1, 2])">
        Toggle selection status of second and third rows
      </vb-button>

      <vb-button color="info" outlined @click="toggleSelection()">
        Clear selection
      </vb-button>
    </vb-buttons-list>

    <vb-table ref="multiple" fullwidth :data="tableData" @selection-change="handleSelectionChange">
      <vb-table-column type="selection"></vb-table-column>
      <vb-table-column label="Position" prop="position"></vb-table-column>
      <vb-table-column label="Team" prop="team"></vb-table-column>
      <vb-table-column label="Played" prop="played"></vb-table-column>
      <vb-table-column label="Won" prop="won"></vb-table-column>
      <vb-table-column label="Drawn" prop="drawn"></vb-table-column>
      <vb-table-column label="Lost" prop="lost"></vb-table-column>
      <vb-table-column label="Goals For" prop="goalsFor"></vb-table-column>
      <vb-table-column label="Goals Against" prop="goalsAgainst"></vb-table-column>
      <vb-table-column label="Goal Difference" prop="goalDifference"></vb-table-column>
      <vb-table-column label="Points" prop="points"></vb-table-column>
    </vb-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selection: []
    }
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(index => this.$refs.multiple.toggleSelection(index))
      } else {
        this.$refs.multiple.clearSelection()
      }
    },
    handleSelectionChange(val) {
      this.selection = val
    }
  }
}
</script>
`

code.custom = `\
<template>
  <div>
    <vb-button outlined @click="HandleReset">
      Reset
    </vb-button>

    <vb-table border :data="tableData">
      <vb-table-column label="Position" prop="position">
        <template slot="header" slot-scope="slotProp">
          {{slotProp.column.label}}
          <vb-icon :name="sortIcon" @click="handleSort"></vb-icon>
        </template>
      </vb-table-column>

      <vb-table-column label="Team" prop="team">
        <template slot="header" slot-scope="slotProp">
          {{slotProp.column.label}}

          <vb-dropdown trigger="click">
            <vb-icon name="fa fa-filter"></vb-icon>

            <vb-checkbox-group v-model="filter">
              <vb-dropdown-menu>
                <vb-dropdown-item class="demo-clickable" v-for="item in data" :key="item.position">
                  <vb-checkbox :label="item.team">{{item.team}}</vb-checkbox>
                </vb-dropdown-item>
              </vb-dropdown-menu>
            </vb-checkbox-group>
          </vb-dropdown>
        </template>
      </vb-table-column>

      <vb-table-column label="Played" prop="played"></vb-table-column>
      <vb-table-column label="Won" prop="won"></vb-table-column>
      <vb-table-column label="Drawn" prop="drawn"></vb-table-column>
      <vb-table-column label="Lost" prop="lost"></vb-table-column>

      <vb-table-column label="Goals For" prop="goalsFor">
        <template slot-scope="slotProp">
          <vb-icon name="fa fa-futbol-o"></vb-icon>
          <span>{{slotProp.row.goalsFor}}</span>
        </template>
      </vb-table-column>

      <vb-table-column label="Goals Against" prop="goalsAgainst"></vb-table-column>
      <vb-table-column label="Goal Difference" prop="goalDifference"></vb-table-column>
      <vb-table-column label="Points" prop="points"></vb-table-column>

      <vb-table-column label="Control">
        <template slot-scope="slotProp">
          <vb-button-group>
            <vb-button outlined color="info" size="small">Edit</vb-button>
            <vb-button color="danger" size="small" @click="handleDelete(slotProp.row)">Delete</vb-button>
          </vb-button-group>
        </template>
      </vb-table-column>
    </vb-table>
  </div>
</template>

<script>
import tableData from './data.json'

export default {
  data() {
    return {
      data: tableData.slice(),
      sort: null,
      filter: [],
      sortMethods: {
        asc(a, b) {
          return a.position - b.position
        },
        desc(a, b) {
          return b.position - a.position
        }
      }
    }
  },
  computed: {
    tableData() {
      let tableData = this.data.slice()
      const { sort, filter, sortMethods } = this

      if (sort) {
        const method = sortMethods[sort]
        tableData = tableData.sort(method)
      }

      if (filter.length) {
        tableData = tableData.filter(d => filter.includes(d.team))
      }

      return tableData
    },
    sortIcon() {
      return \`fa fa-sort\${this.sort ? '-' + this.sort: ''}\`
    }
  },
  methods: {
    handleSort() {
      switch (this.sort) {
        case 'asc':
          this.sort = 'desc'
          break
        case 'desc':
          this.sort = null
          break
        case null:
          this.sort = 'asc'
          break
      }
    },
    handleDelete(row) {
      const index = this.data.indexOf(row)
      this.data.splice(index, 1)
    },
    HandleReset() {
      this.data = tableData.slice()
    }
  }
}
</script>
`

code.expand = `\
<template>
  <vb-table fullwidth :data="tableData">
    <vb-table-column type="expand" class="demo-table-expand">
      <template slot-scope="props">
        <vb-content>
          <p>Won: {{ props.row.won }}</p>
          <p>Drawn: {{ props.row.drawn }}</p>
          <p>Lost: {{ props.row.lost }}</p>
          <p>Goals For: {{ props.row.goalsFor }}</p>
          <p>Goals Against: {{ props.row.goalsAgainst }}</p>
          <p>Goal Difference: {{ props.row.goalDifference }}</p>
        </vb-content>
      </template>
    </vb-table-column>

    <vb-table-column label="Position" prop="position"></vb-table-column>
    <vb-table-column label="Team" prop="team"></vb-table-column>
    <vb-table-column label="Palyed" prop="played"></vb-table-column>
    <vb-table-column label="Points" prop="points"></vb-table-column>
  </vb-table>
</template>

<script>
import tableData from './data.json'

export default {
  data() {
    return {
      tableData
    }
  }
}
</script>

<style scoped>
.demo-table-expand {
  width: 50px;
}
</style>
`

code.rowspan = `\
<template>
  <vb-table border :data="tableData" :span-method="rowspanMethod" width="600">
    <vb-table-column label="ID" prop="id"></vb-table-column>
    <vb-table-column label="Name" prop="name"></vb-table-column>
    <vb-table-column label="Subject" prop="subject"></vb-table-column>
    <vb-table-column label="Score" prop="score"></vb-table-column>
  </vb-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        { id: 1, name: 'Tom', subject: 'math', score: 66 },
        { id: 1, name: 'Tom', subject: 'physical', score: 77 },
        { id: 2, name: 'Jerry', subject: 'math', score: 83 },
        { id: 2, name: 'Jerry', subject: 'physical', score: 94 }
      ]
    }
  },
  methods: {
    rowspanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1
          }
        } else {
          return [0, 0]
        }
      }
    }
  }
}
</script>
`

code.colspan = `\
<template>
  <vb-table border :data="tableData" :span-method="colspanMethod" width="600">
    <vb-table-column label="ID" prop="id"></vb-table-column>
    <vb-table-column label="Name" prop="name"></vb-table-column>
    <vb-table-column label="Subject" prop="subject"></vb-table-column>
    <vb-table-column label="Score" prop="score"></vb-table-column>
  </vb-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        { id: 1, name: 'Tom', subject: 'math', score: 66 },
        { id: 1, name: 'Tom', subject: 'physical', score: 77 },
        { id: 2, name: 'Jerry', subject: 'math', score: 83 },
        { id: 2, name: 'Jerry', subject: 'physical', score: 94 }
      ]
    }
  },
  methods: {
    colspanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex % 2 === 0) {
        if (columnIndex === 0) {
          return [1, 2]
        } else if (columnIndex === 1) {
          return { rowspan: 0, colspan: 0 }
        }
      }
    }
  }
}
</script>
`

code.combine = `\
<template>
  <vb-table
    :align="align"
    :border="border"
    :striped="stripes"
    :narrow="narrow"
    :hoverable="hover"
    :fullwidth="fullwidth"
    :highlight-selected="singleSelection"
    :data="tableData"
  >
    <vb-table-column v-if="multipleSelection" type="selection"></vb-table-column>

    <vb-table-column label="Position" prop="position"></vb-table-column>
    <vb-table-column label="Team" prop="team"></vb-table-column>
    <vb-table-column label="Played" prop="played"></vb-table-column>
    <vb-table-column label="Won" prop="won"></vb-table-column>
    <vb-table-column label="Drawn" prop="drawn"></vb-table-column>
    <vb-table-column label="Lost" prop="lost"></vb-table-column>
    <vb-table-column label="Goals For" prop="goalsFor"></vb-table-column>
    <vb-table-column label="Goals Against" prop="goalsAgainst"></vb-table-column>
    <vb-table-column label="Goal Difference" prop="goalDifference"></vb-table-column>
    <vb-table-column label="Points" prop="points"></vb-table-column>
  </vb-table>
</template>

<script>
import tableData from './data.json'

export default {
  data() {
    return {
      tableData,
      align: null,
      border: false,
      stripes: false,
      narrow: false,
      hover: false,
      fullwidth: false,
      singleSelection: false,
      multipleSelection: false
    }
  },
  methods: {
    toggleAlign(align) {
      this.align = align
    }
  }
}
</script>
`

export default code
