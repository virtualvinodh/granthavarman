<template>
  <q-page>
    <q-btn-toggle
      condense
      class="q-ma-sm"
      v-model = "mode"
      toggle-color="faded"
      :options="[
        {label: 'Type', value: 'typing'},
        {label: 'Convert', value: 'convert'}
      ]"
    />
    <span v-if="mode === 'convert'">
    <q-btn-toggle
      condense
      class="q-ma-sm"
      v-model = "inputScript"
      @input="focusTextarea"
      toggle-color="faded"
      :options="[
        {label: 'Devanagari', value: 'devanagari'},
        {label: 'IAST', value: 'iast'},
        {label: 'Itrans', value: 'itrans'},
        {label: 'HK', value: 'hk'}
      ]"
    />
    </span>
    <span v-if="mode === 'typing'">
    <div v-show="$q.platform.is.mobile" class="q-ma-sm">
     <small>Use <img src="../statics/touch-keyboard.png" width="20px"/> key to change keyboard. </small>
    <q-btn class="q-ma-sm" :dense="$q.platform.is.mobile" color="grey-6" v-if="layout=='grantha_unicode_phonetic'" @click="openURL('https://virtualvinodh.github.io/grantha-keyman-keyboards/src/keyboard_phonetic.htm')">
      Phon. Keymap
    </q-btn>
    </div>
    <q-btn-toggle
      v-show="$q.platform.is.desktop"
      @input = "changeLayout"
      class="q-ma-sm"
      v-model = "layout"
      toggle-color="faded"
      :options="[
        {label: 'Phonetic', value: 'grantha_unicode_phonetic'},
        {label: 'Inscript', value: 'grantha_inscript'}
      ]"
    />
    <q-btn class="q-ma-sm" color="grey-6" v-show="layout=='grantha_unicode_phonetic' && $q.platform.is.desktop" @click="openURL('https://virtualvinodh.github.io/grantha-keyman-keyboards/src/keyboard_phonetic.htm')">
      Phonetic Keymap
    </q-btn>
    <q-btn label="Display Keyboard" v-if="layout=='grantha_inscript'" @click="displayKeyboard" class="desktop-only"/>
    </span>
    <div
    id="inputbox"
     class="q-ma-sm print-hide"
     >
      <textarea v-model="textInput" class="textarea_input" id="textdesktop"
      :style="mode == 'typing' ? {'font-size': fontSize + 'px', 'font-feature-settings':  styleCss} : ''" rows="4"
      autofocus v-if="!$q.platform.is.mobile" :class= "font"/>
      <textarea v-model="textInput" class="textarea_input" id="textmobile"
      :style="mode == 'typing' ? {'font-size': 15 + 'px', 'font-feature-settings': styleCss} : ''" rows="4"
      autofocus v-else :class= "font"/>
     </div>
     <div class="q-ml-md mobile-only">
       <div id="KeymanWebControl" display="block"></div>
      </div>
  <div class="row">
      <q-select
        v-model="font"
        :options="fontoptions"
        placeholder="Font"
        @input="font_activate=!font_activate"
        class="col-xs-6 col-md-2 q-ma-sm"
        v-if="!$q.platform.is.mobile"
      />
      <q-input
        v-model="fontSize"
        class="col-xs-1 col-md-1 q-ma-sm"
        v-if="!$q.platform.is.mobile"
      />
      <div class="col-xs-11 col-md-8  q-ml-sm q-mb-sm print-hide">
      <q-option-group
        color="dark"
        type="checkbox"
        inline
        v-model="style"
        :options="stylisticOptions"
        v-show="(font === 'granthasans' || font === 'granthaserif') && !$q.platform.is.mobile"
      />
      <q-option-group
        color="dark"
        type="checkbox"
        v-model="auOld"
        :options="[{
          label: '<span class=' + font + '>𑌕𑍗 → 𑌕𑍌</span>',
          value: 'auOld'
        }]"
        v-show="mode === 'convert'"
        class="print-hide"
      />
      </div>
      <div class="col-xs-1 col-md-1 q-ml-sm q-mb-sm print-hide">

      </div>
    </div>
    <div class="q-mt-sm">
      <QBtn color="grey-8" icon="file_copy" label="" class="q-ml-md q-mb-md btn2 print-hide"
      @click="copySource" :data-clipboard-text="convertText(textInput).replace(/<br\/>/g, '\n')"></QBtn>
      <QBtn color="grey-8" class="q-ml-md q-mb-md print-hide" icon="photo_camera" label="" @click="imageConvertInit"> </QBtn>
      <QBtn color="grey-8" class="q-ml-md q-mb-md print-hide" @click="imageConvert(shareCordova.bind(this))" icon="share" label="Share" v-if="$q.platform.is.cordova">
      </QBtn>
      <QBtn color="grey-8" class="q-ml-md q-mb-md print-hide" icon="picture_as_pdf" label="" @click="printDocument"> </QBtn>
    </div>
      <div ref="brahmiText" class="q-pa-md" id="printbrahmi" :style="{'font-size': fontSize + 'px'}" v-if="mode == 'convert' || imageScreen">
        <p v-html="convertText(textInput).replace(/\n/g, '<br/>')" :class="font" key="font-activate" :style="{'font-feature-settings':  styleCss}"></p>
      </div>
      <div ref="brahmiText_clone" class="q-pa-md" id="printbrahmi-clone" :style="{'font-size': fontSize + 'px', 'display': 'none'}">
        <p v-html="convertText(textInput).replace(/\n/g, '<br/>')" class="sharada" :class="script"></p>
      </div>
      <a :href="brahmiImg" ref="imgDownload" target="_system" :style="{'display': 'none'}" download="text.png"><button>Download</button></a>
  </q-page>
</template>

<style>
</style>

<script>
import {openURL, QEditor, QRadio, QBtn, QField, QBtnToggle, QToggle, QSlider, QTooltip, QInput, QSelect, QOptionGroup} from 'quasar'
import sanitizeHtml from 'sanitize-html'
import html2canvas from 'html2canvas'
import Controls from '../components/Controls'
import { ScriptMixin } from '../mixins/ScriptMixin'

var pdfMake = require('pdfmake')

var Sanscript = require('@sanskrit-coders/sanscript')

import ClipboardJS from 'clipboard'
var clipboard = new ClipboardJS('.btn2')
console.log(clipboard)

export default {
  name: 'PageIndex',
  components: {
    QEditor,
    QInput,
    QTooltip,
    QRadio,
    QBtn,
    QField,
    QBtnToggle,
    QToggle,
    Controls,
    QSlider,
    QSelect,
    QOptionGroup
  },
  plugins: ['Notify'],
  mixins: [ScriptMixin],
  data () {
    return {
      textInput: '',
      mode: 'typing',
      keyboard: true,
      font_activate: true,
      font: 'granthasans',
      style: [],
      fontoptions: [
        {
          label: 'Noto Sans Grantha',
          value: 'granthasans'
        },
        {
          label: 'Noto Serif Grantha',
          value: 'granthaserif'
        },
        {
          label: 'Kurukkal',
          value: 'kurukkal'
        },
        {
          label: 'Kuchitapada',
          value: 'kunchitapada'
        },
        {
          label: 'Sampradaya',
          value: 'sampradaya'
        },
        {
          label: 'Paalai',
          value: 'paalai'
        }
      ],
      layout: 'grantha_unicode_phonetic',
      fontSize: 15,
      imageScreen: false,
      inputScript: 'devanagari',
      options: {},
      brahmiImg: '',
      script: 'normal',
      auOld: false
    }
  },
  computed: {
    styleCss: function () {
      var style = this.style.map(x => '\'' + x + '\'').join(',')
      // console.log(style)
      return style
    },
    stylisticOptions: function () {
      var styleOptions = [
        {
          label: '<span class="' + this.font + '">𑌗𑌤</span> → <span style="font-feature-settings: \'ss01\'" class="' + this.font + '">𑌗𑌤</span>',
          value: 'ss01'
        },
        {
          label: '<span class="' + this.font + '">𑌖</span> → <span style="font-feature-settings: \'ss02\'" class="' + this.font + '">𑌖</span>',
          value: 'ss02'
        },
        {
          label: '<span class="' + this.font + '">𑌠</span> → <span style="font-feature-settings: \'ss10\'" class="' + this.font + '">𑌠</span>',
          value: 'ss10'
        },
        {
          label: '<span class="' + this.font + '">𑌮𑍍</span> → <span style="font-feature-settings: \'ss08\'" class="' + this.font + '">𑌮𑍍</span>',
          value: 'ss08'
        },
        {
          label: '<span class="' + this.font + '">𑌽</span> → <span style="font-feature-settings: \'ss09\'" class="' + this.font + '">𑌽</span>',
          value: 'ss09'
        },
        {
          label: '<span class="' + this.font + '">𑌶𑍍𑌰</span> → <span style="font-feature-settings: \'ss04\'" class="' + this.font + '">𑌶𑍍𑌰</span>',
          value: 'ss04'
        },
        {
          label: '<span class="' + this.font + '">𑌶𑍍𑌵𑌜𑍍𑌜𑍍𑌞</span> → <span style="font-feature-settings: \'ss07\'" class="' + this.font + '">𑌶𑍍𑌵𑌜𑍍𑌜𑍍𑌞</span>',
          value: 'ss07'
        },
        {
          label: '<span class="' + this.font + '">𑌕𑍍 𑌗𑍍 𑌦𑍍</span> → <span style="font-feature-settings: \'ss03\'" class="' + this.font + '">𑌕𑍍 𑌗𑍍 𑌦𑍍</span>',
          value: 'ss03'
        },
        {
          label: '<span class="' + this.font + '">𑌰𑍍𑌕𑍍𑌯</span> → <span style="font-feature-settings: \'ss06\'" class="' + this.font + '">𑌰𑍍𑌕𑍍𑌯</span>',
          value: 'ss06'
        }
      ]
      return styleOptions
    }
  },
  mounted: function () {
    for (let el of document.getElementsByTagName('textarea')) {
      console.log(typeof window.keyman.attachToControl(el))
    }
    console.log(typeof window.keyman.setActiveKeyboard(this.layout))
  },
  watch: {
    mode: function (newv, oldv) {
      this.textInput = ''
      if (newv === 'convert') {
        for (let el of document.getElementsByTagName('textarea')) {
          console.log(typeof window.keyman.disableControl(el))
        }
        for (let el of document.getElementsByTagName('textarea')) {
          el.focus()
        }
      }
      if (newv === 'typing') {
        for (let el of document.getElementsByTagName('textarea')) {
          console.log(typeof window.keyman.enableControl(el))
        }
        console.log(typeof window.keyman.setActiveKeyboard(this.layout))

        if (this.layout === 'grantha_unicode_phonetic') {
          console.log(window.keyman.osk._Enabled = false)
        }
      }
      for (let el of document.getElementsByTagName('textarea')) {
        el.focus()
      }
    }
  },
  methods: {
    openURL,
    focusTextarea: function () {
      for (let el of document.getElementsByTagName('textarea')) {
        el.focus()
      }
    },
    displayKeyboard: function () {
      console.log(window.keyman.osk._Enabled = true)
      console.log(window.keyman.osk)
      for (let el of document.getElementsByTagName('textarea')) {
        el.focus()
      }
    },
    changeLayout: function () {
      console.log(window.keyman)
      console.log(typeof window.keyman.setActiveKeyboard(this.layout))
    },
    copySource: function () {
      this.$q.notify({
        type: 'info',
        message: 'Copied',
        position: 'center',
        timeout: 200
      })
    },
    convertText: function (text) {
      var txt
      if (this.inputScript === 'devanagari') {
        txt = this.convertDS(this.sanitize(text))
      } else {
        txt = this.convertRDS(Sanscript.t(this.sanitize(text), this.inputScript, 'grantha'))
      }
      if (this.auOld) {
        txt = txt.replaceAll('𑍗', '𑍌')
      }
      return txt
    },
    sanskriptConvert: function (text, from, to) {
      return Sanscript.t(text, from, to)
    },
    saveAsImage: function () {
      var dhis = this
      if (dhis.$q.platform.is.cordova) {
        var params = {data: dhis.brahmiImg, prefix: 'jinavani_', format: 'PNG', quality: 100, mediaScanner: true}
        window.imageSaver.saveBase64Image(params,
          function (filePath) {
            dhis['filepath'] = filePath
            dhis.$q.notify({
              type: 'info',
              message: 'The image has been saved in your gallery. Please check there.',
              position: 'center',
              timeout: 5000
            })
          },
          function (msg) {
            console.error(msg)
          }
        )
      } else {
        // console.log('here')
        dhis.$refs.imgDownload.click()
      }
    },
    shareCordova: function () {
      var dhis = this

      var params = {data: dhis.brahmiImg, prefix: 'jinavani_', format: 'PNG', quality: 100, mediaScanner: true}
      window.imageSaver.saveBase64Image(params,
        function (filePath) {
          var options = {
            message: '',
            subject: '', // fi. for email
            files: [filePath], // an array of filenames either locally or remotely
            chooserTitle: 'Pick an app' // Android only, you can override the default share sheet title
          }

          var onSuccess = function (result) {
            console.log('Share completed? ' + result.completed)
            console.log('Shared to app: ' + result.app)
          }

          var onError = function (msg) {
            console.log('Sharing failed with message: ' + msg)
          }

          window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError)
        },
        function (msg) {
          console.error(msg)
        }
      )
    },
    sanitize: function (html) {
      sanitizeHtml.defaults.allowedTags.push('font')
      sanitizeHtml.defaults.allowedAttributes['font'] = ['size']
      return sanitizeHtml(html)
    },
    sleep: function (ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    },
    imageConvertInit: async function () {
      // this.imageScreen = true

      this.$q.notify({
        type: 'info',
        message: 'Image is being generated. Please wait.',
        position: 'center',
        timeout: 500
      })

      this.imageConvert(this.saveAsImage.bind(this))
    },
    imageConvert: function (fnc) {
      // var node = this.$refs.brahmiText
      // console.log(node)
      var dhis = this

      var nodeClone = this.$refs.brahmiText_clone
      console.log(nodeClone)

      html2canvas(nodeClone,
        {
          onclone: function (clonedDoc) {
            clonedDoc.getElementById('printbrahmi-clone').style.display = 'block'
          }
        }).then(function (canvas) {
        var image = new Image()
        image.src = canvas.toDataURL('image/png', 1)
        dhis.brahmiImg = image.src
        image.onload = function () {
          dhis.brahmiImg = image.src

          var image2 = new Image()
          var cropped = dhis.removeWhite(image)
          image2.src = cropped
          dhis.brahmiImg = cropped

          image2.onload = fnc

          dhis.imageScreen = false
        }
      })
    },
    removeWhite: function (imageObject) {
      var imgWidth = imageObject.width
      var imgHeight = imageObject.height
      var canvas = document.createElement('canvas')
      canvas.setAttribute('width', imgWidth)
      canvas.setAttribute('height', imgHeight)
      var context = canvas.getContext('2d')
      context.drawImage(imageObject, 0, 0)

      var imageData = context.getImageData(0, 0, imgWidth, imgHeight)
      var data = imageData.data
      var getRBG = function (x, y) {
        var offset = imgWidth * y + x
        return {
          red: data[offset * 4],
          green: data[offset * 4 + 1],
          blue: data[offset * 4 + 2],
          opacity: data[offset * 4 + 3]
        }
      }
      var isWhite = function (rgb) {
        // many images contain noise, as the white is not a pure #fff white
        return rgb.red > 200 && rgb.green > 200 && rgb.blue > 200
      }
      var scanY = function (fromTop) {
        var offset = fromTop ? 1 : -1

        // loop through each row
        for (var y = fromTop ? 0 : imgHeight - 1; fromTop ? (y < imgHeight) : (y > -1); y += offset) {
        // loop through each column
          for (var x = 0; x < imgWidth; x++) {
            var rgb = getRBG(x, y)
            if (!isWhite(rgb)) {
              if (fromTop) {
                return y
              } else {
                return Math.min(y + 1, imgHeight - 1)
              }
            }
          }
        }
        return null // all image is white
      }
      var scanX = function (fromLeft) {
        var offset = fromLeft ? 1 : -1
        // loop through each column
        for (var x = fromLeft ? 0 : imgWidth - 1; fromLeft ? (x < imgWidth) : (x > -1); x += offset) {
          // loop through each row
          for (var y = 0; y < imgHeight; y++) {
            var rgb = getRBG(x, y)
            if (!isWhite(rgb)) {
              if (fromLeft) {
                return x
              } else {
                return Math.min(x + 1, imgWidth - 1)
              }
            }
          }
        }
        return null // all image is white
      }

      var cropTop = scanY(true) - 20
      var cropBottom = scanY(false) + 20
      var cropLeft = scanX(true) - 20
      var cropRight = scanX(false) + 20
      var cropWidth = cropRight - cropLeft
      var cropHeight = cropBottom - cropTop

      canvas.setAttribute('width', cropWidth)
      canvas.setAttribute('height', cropHeight)
      // finally crop the guy
      canvas.getContext('2d').drawImage(imageObject,
        cropLeft, cropTop, cropWidth, cropHeight,
        0, 0, cropWidth, cropHeight)

      return canvas.toDataURL()
    },
    printDocument: function () {
      this.$q.notify({
        type: 'info',
        message: 'PDF is being generated. Please wait. Due to technical issues, the PDF generated will be based only on the Paalai font.',
        position: 'center',
        timeout: 4000
      })
      var docDefinition = {
        content: {
          lineHeight: 1.6,
          fontSize: this.fontSize - 5,
          text: this.convertText(this.textInput)
        }
      }

      /* if (this.font === 'granthasans') {
        pdfMake.fonts = {
          Roboto: {
            normal: 'https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha-notomirror/merged/NotoSansGrantha-Regular.ttf',
            bold: 'https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha-notomirror/merged/NotoSansGrantha-Regular.ttf',
            italics: 'https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha-notomirror/merged/NotoSansGrantha-Regular.ttf'
          }
        }
      }
      if (this.font === 'granthaserif') {
        pdfMake.fonts = {
          Roboto: {
            normal: 'https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha-notomirror/merged/NotoSerifGrantha-Regular.ttf',
            bold: 'https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha-notomirror/merged/NotoSerifGrantha-Regular.ttf',
            italics: 'https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha-notomirror/merged/NotoSerifGrantha-Regular.ttf'
          }
        }
      }
      if (this.font === 'kunchitapada') {
        pdfMake.fonts = {
          Roboto: {
            normal: 'https://cdn.jsdelivr.net/gh/virtualvinodh/virtualvinodhsite/src/assets/kunchitapada_unicode.ttf',
            bold: 'https://cdn.jsdelivr.net/gh/virtualvinodh/virtualvinodhsite/src/assets/kunchitapada_unicode.ttf',
            italics: 'https://cdn.jsdelivr.net/gh/virtualvinodh/virtualvinodhsite/src/assets/kunchitapada_unicode.ttf'
          }
        }
      }
      if (this.font === 'kurukkal') {
        pdfMake.fonts = {
          Roboto: {
            normal: 'https://cdn.jsdelivr.net/gh/virtualvinodh/virtualvinodhsite/src/assets/kurukkal_unicode.ttf',
            bold: 'https://cdn.jsdelivr.net/gh/virtualvinodh/virtualvinodhsite/src/assets/kurukkal_unicode.ttf',
            italics: 'https://cdn.jsdelivr.net/gh/virtualvinodh/virtualvinodhsite/src/assets/kurukkal_unicode.ttf'
          }
        }
      }
      if (this.font === 'sampradaya' || this.font === 'paalai') {
        pdfMake.fonts = {
          Roboto: {
            normal: 'https://cdn.jsdelivr.net/gh/virtualvinodh/virtualvinodhsite/src/assets/sampradaya.ttf',
            bold: 'https://cdn.jsdelivr.net/gh/virtualvinodh/virtualvinodhsite/src/assets/sampradaya.ttf',
            italics: 'https://cdn.jsdelivr.net/gh/virtualvinodh/virtualvinodhsite/src/assets/sampradaya.ttf'
          }
        }
      } */
      pdfMake.fonts = {
        Roboto: {
          normal: 'https://cdn.jsdelivr.net/gh/virtualvinodh/granthavarman/src/statics/Paalai.ttf',
          bold: 'https://cdn.jsdelivr.net/gh/virtualvinodh/granthavarman/src/statics/Paalai.ttf',
          italics: 'https://cdn.jsdelivr.net/gh/virtualvinodh/granthavarman/src/statics/Paalai.ttf'
        }
      }
      pdfMake.createPdf(docDefinition).download('out.pdf')
    }
  }
}
</script>

<style scoped>
#textmobile {
  width: 100%;
  height: 20vh;
  outline: none !important;
  border-style: none;
  box-shadow: 3px #719ECE;
  background-color: #F5F5F5;
  border-bottom: 0.5px solid grey;
}

#textmobile:focus {
  border-bottom: 2px solid #424242;
}

#textdesktop {
  width: 100%;
  height: 30vh;
  outline: none !important;
  border-style: none;
  box-shadow: 3px #719ECE;
  background-color: #F5F5F5;
  border-bottom: 0.5px solid grey;
}

#textdesktop:focus {
  border-bottom: 2px solid #424242;
}
</style>
