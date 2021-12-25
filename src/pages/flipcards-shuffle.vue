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
  <br/>
    <q-btn label = "Shuffle" class="q-ma-md" color="faded" @click="shuffleCard"></q-btn>
    <q-btn label = "New Set" class="q-ma-md" color="faded" @click="reset"></q-btn>

    <br/>
    <p class="q-body-1 q-ma-md">Guess a character of the card and then click on the card to check your answer</p>
  <transition
   enter-active-class="animated fadeIn"
   leave-active-class="animated fadeOut"
   mode="out-in"
    >
    <span :key="resetV">
    <transition-group
    name="flip-list"
    >
      <flipcard v-for="i in randomList" :key="i" inline class="cards q-ma-sm"
       :text="compounds[i]" :script="script">
      </flipcard>
    </transition-group>
    </span>
  </transition>
  </q-page>
</template>

<script>
import {QCard, QCardTitle, QCardMain, QCardMedia, QCardActions, QField, QInput, QBtnToggle, QToggle, Notify, QBtn} from 'quasar'
import Flipcard from '../components/Flipcard'
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
    QBtn,
    Flipcard
  },
  plugins: [Notify],
  mixins: [ScriptMixin],
  mounted: function () {
    this.randomListGen()
  },
  data () {
    return {
      script: 'tamil',
      kashmiri: false,
      difficulty: 'easy',
      countTotal: 18,
      randomList: [],
      randomListOld: [],
      resetV: true
    }
  },
  watch: {
    difficulty: function () {
      this.reset()
    },
    kashmiri: function () {
      this.reset()
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
      this.randomList2 = this.shuffle(this.randomList)
    },
    verify: function () {
    },
    reset: function () {
      this.resetV = !this.resetV
      this.randomListGen()
    },
    shuffleCard: function () {
      this.randomList = this.shuffle(this.randomList)
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
