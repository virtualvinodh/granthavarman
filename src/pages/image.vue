<template>
  <q-page>
     <h5 class="q-ma-md"> Image Overlay</h5>
      <div class="q-body-1 q-ma-md">(For now, works only in PC browsers and does not work with mobile browsers)</div>
      <div class="q-body-1 q-ma-md">
      The text can be moved around and zoomed as you wish.
      </div>
      <q-uploader url="" clearable extensions=".jpg, .jpeg, .png, .bmp" @add="updateImage" stack-label="Select Image" auto-expand
               hide-upload-button ref="uploadF" :style="{width:'250px'}" class="q-ma-md" @remove:cancel="removeFile"/>
      <span class="q-ma-md"><i>Enter text</i></span><br/>
      <textarea v-model="textInput" class="textarea_input q-ma-md sharada" rows="3"
      oninput='this.style.height = "";this.style.height = this.scrollHeight + 3 + "px"'/>
      <div class="q-ma-md">
        <div id="KeymanWebControl" display="block"></div>
      </div>
      <q-color-picker v-model="color" class="q-ma-md" @input="changeColor" stack-label="Color"></q-color-picker><br/>
      <q-btn label="Download image" class="q-ml-md print-hide" @click="printDocument"></q-btn>
      <canvas id="c" :width="canvasWidth" :height="canvasWidth" class="q-ma-md"></canvas>
      <br/><br/>
      <canvas id="d" :width="canvasWidth" :height="canvasWidth" class="q-ma-md" :style="{'display': 'none'}"></canvas>
      <a :href="brahmiImg" ref="imgDownload" :style="{'display': 'none'}" download="text.png"><button>Download</button></a>
  </q-page>
</template>

<style>
</style>

<script>
import {QEditor, QRadio, QBtn, QField, QBtnToggle, QToggle, QSlider, QInput, QColorPicker, QUploader, QColor} from 'quasar'
import {fabric} from 'fabric'
import sanitizeHtml from 'sanitize-html'
import { ScriptMixin } from '../mixins/ScriptMixin'

import { saveAs } from 'file-saver'

export default {
  name: 'PageIndex',
  components: {
    QEditor,
    QColor,
    QColorPicker,
    QUploader,
    QInput,
    QRadio,
    QBtn,
    QField,
    QBtnToggle,
    QToggle,
    QSlider
  },
  mixins: [ScriptMixin],
  plugins: ['Notify'],
  data () {
    return {
      textInput: '',
      fontSize: 100,
      color: '#2469E0',
      options: {},
      brahmiImg: '',
      imageFile: '',
      canvas: '',
      canvas2: '',
      canvasWidth: 400,
      canvasHeightN: 400,
      scaleFactor: 1,
      aspectRatio: 1,
      canvasJson: ''
    }
  },
  mounted: function () {
    this.canvas = new fabric.Canvas('c')
    this.canvas2 = new fabric.Canvas('d')

    this.canvasJson = JSON.stringify(this.canvas)

    for (let el of document.getElementsByTagName('textarea')) {
      console.log(typeof window.keyman.attachToControl(el))
    }
  },
  methods: {
    sleep: function (ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    },
    sanitize: function (html) {
      sanitizeHtml.defaults.allowedTags.push('font')
      sanitizeHtml.defaults.allowedAttributes['font'] = ['size']
      return sanitizeHtml(html)
    },
    removeFile: function () {
      this.canvas.clear()
      this.canvas.renderAll()
      this.canvas.loadFromJSON(this.canvasJson)
      this.canvas.renderAll()
    },
    changeColor: function (text) {
      this.textInput += '\u200B'
      this.convert()
    },
    convert: function () {
      var dhis = this
      this.canvas.forEachObject(function (obj) {
        if (obj.id && obj.id === 'text') {
          obj.text = dhis.textInput.trim()
          obj.fill = dhis.color

          obj.fontFamily = 'Satisar Sharada'
        }
      })
      this.canvas.renderAll()
    },
    updateImage: function (files) {
      this.showConvertImage(files)
      this.convert()
    },
    showConvertImage: function (files) {
      this.imageFile = files[0].__img

      this.aspectRatio = this.imageFile.height / this.imageFile.width

      this.canvasHeightN = this.canvasWidth * this.aspectRatio

      this.scaleFactor = this.canvasWidth / this.imageFile.width

      this.canvas.setBackgroundImage(this.imageFile.src, this.canvas.renderAll.bind(this.canvas), {
        width: this.imageFile.width,
        height: this.imageFile.height,
        scaleX: this.scaleFactor,
        scaleY: this.scaleFactor
      })

      this.canvas.setHeight(this.canvasHeightN)

      var textbox = new fabric.Textbox(this.textInput, {
        id: 'text',
        fill: this.color,
        width: 100,
        borderColor: 'red',
        cornerColor: 'green',
        cornerSize: 10,
        transparentCorners: false
      })

      this.canvas.add(textbox).setActiveObject(textbox)

      this.canvas.renderAll()
    },
    printDocument2: function () {
      this.canvas2.getElement().toBlob(function (blob) {
        saveAs(blob, 'canvas.png')
      })
    },
    printDocument: async function () {
      this.$q.notify({
        type: 'info',
        message: 'Image is being generated. Please wait.',
        position: 'center',
        timeout: 2000
      })

      var dhis = this
      this.canvas2.clear()
      this.canvas2.renderAll()
      this.canvas2.loadFromJSON(this.canvasJson)
      this.canvas2.renderAll()

      // var image = new Image()

      // Scale images to the original size

      var newScaleFactor = 1
      var textFactor = newScaleFactor / this.scaleFactor

      this.canvas2.setHeight(this.imageFile.width * this.aspectRatio)
      this.canvas2.setWidth(this.imageFile.width)

      this.canvas2.setBackgroundImage(this.imageFile.src, this.canvas2.renderAll.bind(this.canvas2), {
        width: this.imageFile.width,
        height: this.imageFile.height,
        scaleX: newScaleFactor,
        scaleY: newScaleFactor
      })

      this.canvas2.renderAll()

      var textbox = new fabric.Textbox(this.textInput, {
        id: 'text',
        fill: this.color,
        width: 100,
        borderColor: 'red',
        cornerColor: 'green',
        cornerSize: 10,
        transparentCorners: false
      })

      this.canvas2.add(textbox)

      var top
      var left
      var scaleX
      var scaleY
      // var width

      this.canvas.forEachObject(function (obj) {
        top = obj.top
        left = obj.left
        scaleX = obj.scaleX
        scaleY = obj.scaleY
        // width = obj.width
      })

      this.canvas2.forEachObject(function (obj) {
        obj.scaleX = scaleX * textFactor
        obj.scaleY = scaleY * textFactor
        obj.top = top * textFactor
        obj.left = left * textFactor
        obj.width = obj.width * textFactor
        obj.fontFamily = 'Satisar Sharada'

        obj.text = dhis.textInput
        obj.fill = dhis.color
      })

      this.canvas2.renderAll()

      await this.sleep(2000)

      this.printDocument2()

      /*  image.src = this.canvas2.toDataURL('image/png', 1)
      dhis.brahmiImg = image.src

      console.log(this.brahmiImg)

      image.onload = function () {
        dhis.brahmiImg = image.src
        var image2 = new Image()
        image2.src = image.src

        image2.onload = function () {
          // dhis.$refs.imgDownload.click()
        }
      } */
    }
  }
}
</script>

<style scoped>
.textarea_input {
  width: 300px;
  resize: horizontal;
  outline: none !important;
  border-style: none;
  box-shadow: 3px #719ECE;
  border-bottom: 0.5px solid grey;
}

.textarea_input:focus {
  border-bottom: 2px solid #424242;
}
</style>
