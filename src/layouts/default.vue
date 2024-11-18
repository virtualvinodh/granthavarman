<template>
  <q-layout view="hHr Lpr fFf">
    <q-window-resize-observable @resize="onResize" />

    <q-layout-header class="">
      <q-toolbar
        color="dark"
      >
        <q-btn
          flat
          dense
          round
          aria-label="Menu"
          @click.native="leftDrawerOpen = !leftDrawerOpen"
        >
          <q-icon name="menu" />

        </q-btn>

        <div class="q-ma-xs">
          <q-btn
            round
            size="16px"
            color="dark"
            to="/editor"
          >
            <span class="sharada logo" style="font-size:180%">𑍐</span>
          </q-btn>
        </div>
        <q-toolbar-title>
        <span class="sharada">𑌗𑍍𑌰𑌨𑍍𑌥𑌵𑌰𑍍𑌮𑌨𑍍</span>
          <div slot="subtitle">Granthavarman </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      class=""
      side="left"
      width="200"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      > <!-- link to other tools -->
        <!-- Options to create pseudo epigraphs -->
        <!-- Icon -->
        <q-item to="/editor">
          <q-item-side icon="edit" />
          <q-item-main label="Editor" sublabel="𑌲𑍇𑌖𑌕𑌮𑍍" class="sharada"/>
        </q-item>
        <!-- <q-item to="/image"  v-if="$q.platform.is.desktop">
          <q-item-side icon="image" />
          <q-item-main label="Image" sublabel="𑆖𑆴𑆠𑇀𑆫𑆩𑇀" class="sharada" />
        </q-item> -->
        <q-item to="/learn-grantha">
          <q-item-side icon="school" />
          <q-item-main label="Learn" sublabel="𑌪𑌠𑌤" class="sharada" />
        </q-item>
        <q-collapsible icon="how to reg" label="Practice" sublabel="𑌅𑌭𑍍𑌯𑌾𑌸𑌂 𑌕𑍁𑌰𑍁𑌤" class="sharada" >
            <q-item to="/match-letter">
              <q-item-main label="Match" sublabel="" />
            </q-item>
            <q-item to="/memory-cards">
              <q-item-main label="Memorize" sublabel="𑌸𑍍𑌮𑌰𑌤" class="sharada"/>
            </q-item>
            <q-item to="/fill-grantha">
              <q-item-main label="Fill" sublabel="" />
            </q-item>
            <q-item to="/flipcards-shuffle">
              <q-item-main label="Flipcards" sublabel="" />
            </q-item>
            <q-item to="/words">
              <q-item-main label="Words" sublabel="𑌪𑌦𑌾𑌨𑌿" class="sharada"/>
            </q-item>
        </q-collapsible>
         <q-item to="/reading-practice"  v-if="!$q.platform.is.cordova">
          <q-item-side icon="book" />
          <q-item-main label="Reading Practice" sublabel="𑌪𑌠𑌨 𑌅𑌭𑍍𑌯𑌾𑌸𑌃" class="sharada" />
        </q-item>
         <q-item to="/font-keyboard"  v-if="!$q.platform.is.cordova">
          <q-item-side icon="cloud download" />
          <q-item-main label="Font & Keyboard" sublabel="𑌵𑌰𑍍𑌣𑌾𑌲𑍇𑌖𑌂 𑌕𑍀𑌲𑌫𑌲𑌕𑌂 𑌚" class="sharada" />
        </q-item>
         <q-item @click.native="openURL('http://aksharamukha.appspot.com/converter?target=Grantha')" link>
          <q-item-side icon="developer board" />
              <q-item-main label="Aksharamukha" sublabel="𑌅𑌕𑍍𑌷𑌰𑌮𑍁𑌖" class="sharada" />
        </q-item>
         <q-item to="/about">
          <q-item-side icon="info" />
          <q-item-main label="About" sublabel="" />
        </q-item>
      </q-list>
      <br/>
<social-sharing url="http://satisar.appspot.com"
                      title="Satisar"
                      description="A portal for the Sharada script"
                      quote="A portal for the Sharada script"
                      hashtags="sharada,script,indic,epigraphy"
                      inline-template  v-if="!$q.platform.is.cordova">
  <div class="social">
      <network network="facebook" class="q-ma-md cursor-pointer">
        <img src="../statics/facebook.svg" width="20px">
      </network>
      <network network="whatsapp" class="q-ma-md mobile-only">
        <img src="../statics/whatsapp.svg" width="20px">
      </network>
      <network network="twitter" class="q-ma-md cursor-pointer">
        <img src="../statics/twitter.svg" width="20px">
      </network>
  </div>
</social-sharing>
    </q-layout-drawer>

    <q-page-container class="page">
      <span v-if="!$q.platform.is.cordova">
        <div :class="$q.platform.is.mobile ? 'alert2': 'alert'" v-if="false" class="q-ma-sm">
        <q-alert
            color="grey-7"
            icon="euro_symbol"
            appear
            :actions="[{ label: 'Hide', handler: hideAlert }]"
            class="q-mb-sm"
          > <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=HZVFCCB2F4SL6&source=url">Donate</a> to support Jinavani! </q-alert>
        </div>
        </span>
      <router-view/>
    </q-page-container>
    <q-layout-footer v-show="showFooter" class="print-hide">
        <q-toolbar color="tertiary" class="footer-quote">
          © 2021 <a href="http://www.virtualvinodh.com">Vinodh Rajan</a>&nbsp;&nbsp;&nbsp;vinodh@virtualvinodh.com. This software is released under GNU AGPL 3.0 license.
          <q-btn
          round
          size="md"
          text-color="white"
          color="dark"
          class="print-only q-ml-sm q-mr-sm"
        >
          </q-btn>
        </q-toolbar>
    </q-layout-footer>

  </q-layout>
</template>

<script>
import { openURL, QLayoutFooter, QTooltip, QWindowResizeObservable, QCollapsible, QAlert } from 'quasar'
import SocialSharing from 'vue-social-sharing'

export default {
  name: 'LayoutDefault',
  components: {
    QLayoutFooter,
    QTooltip,
    QWindowResizeObservable,
    QCollapsible,
    SocialSharing,
    QAlert
  },
  data () {
    return {
      leftDrawerOpen: true,
      visibleAlert2: true,
      showFooter: true
    }
  },
  mounted: function () {
    if (localStorage.visibleAlert2) {
      this.visibleAlert2 = JSON.parse(localStorage.visibleAlert2)
    }
  },
  methods: {
    openURL,
    hideAlert: function () {
      this.visibleAlert2 = false
      localStorage.visibleAlert2 = JSON.stringify(this.visibleAlert2)
    },
    onResize: function (size) {
      if (size.width < 992) {
        this.showFooter = false
      } else {
        this.showFooter = true
      }
    }
  }
}
</script>

<style>
.alert {
}
.alert2 {
}
.alert a:link {
  color:white;
}
.alert a:visited {
  color:white;
}
.alert2 a:link {
  color:white;
}
.alert2 a:visited {
  color:white;
}

.footer-img {
  height: 20px;
}
.footer-quote {
  font-size: 12px;
}
.page {
  margin-left: 10px;
}
.footer-quote {
  text-align: right;
  float:center;
}
.quotef {
  float: center;
}
.logo {
  margin-top: -7px;
}
.demo1 {
    color: white;
    background-color: #424242;
    text-shadow: 0px 1px 0px rgba(0,0,0,.5);
}
.social {
  text-align: center;
}
.q-body-1 {
  line-height: 1.75em;
}
.sharada {
  font-family: 'Satisar Sharada';
  line-height: 2;
}
.devanagari {
  font-family: 'Noto Sans Devanagari';
}
.tamilextended {
  font-family: 'Agastya Sans';
}
.iast {
  font-family: 'Noto Sans Devanagari';
}
.tamil {
  font-family: 'Noto Sans Tamil';
}
.noto {
  font-family: 'Noto Sans';
}
.compact {
  font-feature-settings: "ss01";
}

@font-face {
  font-family: 'Satisar Sharada';
  src: url('https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha-fonts/NotoSansGrantha-RegularZach.otf');
}

@font-face {
  font-family: 'Noto Sans Devanagari';
  src: url('https://cdn.jsdelivr.net/gh/notofonts/notofonts.github.io/fonts/NotoSansDevanagari/full/ttf/NotoSansDevanagari-Regular.ttf');
}
@font-face {
  font-family: 'Noto Sans Tamil';
  src: url('https://cdn.jsdelivr.net/gh/notofonts/notofonts.github.io/fonts/NotoSansTamil/full/ttf/NotoSansTamil-Regular.ttf');
}
@font-face {
  font-family: 'Agastya Sans';
  src: url('https://cdn.jsdelivr.net/gh/virtualvinodh/agastya-tamil-extended/agastya_sans.otf');
}

@font-face {
  font-family: 'Kunchitapada';
  src: url('https://cdn.jsdelivr.net/gh/virtualvinodh/virtualvinodhsite/src/assets/kunchitapada_unicode.ttf')
}

@font-face {
  font-family: 'Kurukkal';
  src: url('https://cdn.jsdelivr.net/gh/virtualvinodh/virtualvinodhsite/src/assets/kurukkal_unicode.ttf')
}

@font-face {
  font-family: 'Noto Serif Grantha';
  src: url('https://cdn.jsdelivr.net/gh/notofonts/notofonts.github.io/fonts/NotoSerifGrantha/hinted/ttf/NotoSerifGrantha-Regular.ttf');
}

@font-face {
  font-family: 'Noto Sans Grantha';
  src: url('https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha-fonts/NotoSansGrantha-RegularZach.otf');
}

@font-face {
  font-family: 'Sampradaya';
  src: url('https://cdn.jsdelivr.net/gh/virtualvinodh/virtualvinodhsite/src/assets/sampradaya.ttf')
}

@font-face {
  font-family: 'Paalai';
  src: url('../statics/Paalai.otf')
}

.granthasans {
  font-family: "Noto Sans Grantha" !important;
  line-height: 2em;
}

.granthaserif {
  font-family: "Noto Serif Grantha" !important;
  line-height: 2em;
}

.sampradaya {
  font-family: "Sampradaya" !important;
}

.kurukkal {
  font-family: "Kurukkal" !important;
}

.kunchitapada {
  font-family: "Kunchitapada" !important;
}

.paalai {
  font-family: "Paalai" !important;
}

.kmw-key-text {
  font-family: "Noto Sans Grantha";
  font-size:75% !important;
}

</style>
