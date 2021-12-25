<template>
  <q-page padding>
  <q-field
  icon="cloud"
  label="Count"
  helper="Enter the number of letters that you want to test"
  :count="3"
>
  <q-input suffix="letters" v-model="countTotal" @input="reset"/>
</q-field>
<br/>
Guide Script
    <q-btn-toggle
      class="q-ma-md"
      v-model = "script"
      toggle-color="faded"
      :options="[
        {label: 'Tamil', value: 'tamil'},
        {label: 'Devanagari', value: 'devanagari'},
        {label: 'Roman', value: 'roman'},
      ]"
    />
<br/>
Difficulty
    <q-btn-toggle
      class="q-ma-md"
      v-model = "difficulty"
      toggle-color="faded"
      :options="[
        {label: 'Easy', value: 'easy'},
        {label: 'Medium', value: 'medium'},
        {label: 'Difficult', value: 'difficult'},
        {label: 'Very Difficult', value: 'verydifficult'}
      ]"
    />
  <p class="q-body-1 q-ma-md">Find matching cards. Click on the cards to flip them.</p>
  <transition
   enter-active-class="animated fadeIn"
   leave-active-class="animated fadeOut"
   mode="out-in"
    >
    <span :key="resetV">
    <transition-group
    name="flip-list"
    >
      <flipcard-memory v-for="(i,index) in randomList" :key="index" inline class="cards q-ma-sm" :ref="'q' + index"
        @click.native="select(index, i)"
        :text="compounds[i]" :script="script" >
      </flipcard-memory>
    </transition-group>
    </span>
  </transition>
  <br/>
  <q-btn label = "Play again" class="q-ma-lg" color="faded" @click="reset"></q-btn>
  <br/>
  </q-page>
</template>

<script>
import {QCard, QCardTitle, QCardMain, QCardMedia, QCardActions, QField, QInput, QBtnToggle, QToggle, Notify} from 'quasar'
import Controls from '../components/Controls'
import FlipcardMemory from '../components/FlipcardMemory'
import { ScriptMixin } from '../mixins/ScriptMixin'

var _ = require('underscore')

export default {
  // name: 'PageName',
  components: {
    QCard,
    QCardTitle,
    QCardMain,
    QCardMedia,
    QCardActions,
    QField,
    QInput,
    QBtnToggle,
    QToggle,
    Controls,
    FlipcardMemory
  },
  mixins: [ScriptMixin],
  plugins: [Notify],
  mounted: function () {
    this.randomListGen()
  },
  watch: {
    difficulty: function () {
      this.reset()
    },
    kashmiri: function () {
      this.reset()
    }
  },
  data () {
    return {
      countTotal: 5,
      script: 'tamil',
      kashmiri: false,
      difficulty: 'easy',
      autoclick: false,
      selected: ['', ''],
      matched: [],
      randomList: [],
      randomListOld: [],
      resetV: true
    }
  },
  methods: {
    getRandomInt: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    getRandomCompound: function () {
      return this.getRandomInt(0, this.compounds.length - 1)
    },
    randomListGen: function () {
      this.randomListOld = this.randomList.slice()
      this.randomList = []
      while (this.randomList.length < this.countTotal) {
        let random = this.getRandomCompound()
        if (!this.randomList.includes(random) && !this.randomListOld.includes(random)) {
          this.randomList.push(random)
        }
      }
      this.randomList = this.randomList.concat(this.randomList)
      this.randomList = this.shuffle(this.shuffle(this.randomList))
    },
    verify: function () {
    },
    reset: function () {
      this.resetV = !this.resetV
      this.matched = []
      this.matched = ['', '']
      this.randomListGen()
    },
    shuffleCard: function () {
      this.randomList = this.shuffle(this.randomList)
    },
    show: function () {
      this.$refs.q1[0].$el.click()
      console.log(this.$refs.q1)
    },
    messageLetter: function (compound) {
      if (this.script === 'roman') {
        return this.convertDR(this.compounds[compound])
      }
      if (this.script === 'tamil') {
        return this.convertDTm(this.compounds[compound])
      }
      if (this.script === 'devanagari') {
        return this.compounds[compound]
      }
    },
    select: function (index, compound) {
      if (!this.autoclick) {
        if (index === this.selected[0] || this.matched.includes(index)) {
          this.$refs['q' + index][0].$el.click()
        } else if (this.selected[0] === '') {
          this.selected[0] = index
          this.selected[1] = compound
          console.log(index + 'clicked')
        } else {
          if (compound === this.selected[1]) {
            this.$q.notify({
              type: 'positive',
              message: this.messageLetter(compound),
              position: 'center',
              timeout: 1000
            })

            this.matched.push(index)
            this.matched.push(this.selected[0])

            this.selected[0] = ''
            this.selected[1] = ''
          } else {
            console.log(index + 'clicked')

            this.$q.notify({
              type: 'negative',
              message: 'Not a match',
              position: 'center',
              timeout: 250
            })

            var dhis = this

            setTimeout(function () {
              dhis.autoclick = true
              dhis.$refs['q' + index][0].$el.click()
              dhis.$refs['q' + dhis.selected[0]][0].$el.click()

              dhis.selected[0] = ''
              dhis.selected[1] = ''

              dhis.autoclick = false
            }, 2000)
          }
        }
      }
    },
    shuffle: function (arr) {
      return _.shuffle(arr)
    }
  }
}
</script>

<style>
.cards {
  width: 100px;
}
.flip-list-move {
  transition: transform 1s;
}

</style>
