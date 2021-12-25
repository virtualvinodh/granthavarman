if(typeof keyman === 'undefined') {
  console.log('Keyboard requires KeymanWeb 10.0 or later');
  if(typeof tavultesoft !== 'undefined') tavultesoft.keymanweb.util.alert("This keyboard requires KeymanWeb 10.0 or later");
} else {
KeymanWeb.KR(new Keyboard_grantha_unicode_phonetic());
}
function Keyboard_grantha_unicode_phonetic()
{
  var modCodes = keyman.osk.modifierCodes;
  var keyCodes = keyman.osk.keyCodes;

  this._v=(typeof keyman!="undefined"&&typeof keyman.version=="string")?parseInt(keyman.version,10):9;
  this.KI="Keyboard_grantha_unicode_phonetic";
  this.KN="Grantha Unicode Phonetic 2";
  this.KMINVER="10.0";
  this.KV=null;
  this.KDU=0;
  this.KH='';
  this.KM=0;
  this.KBVER="1.0";
  this.KMBM=modCodes.SHIFT /* 0x0010 */;
  this.KS=1;
  this.s_cons="𑌕𑌖𑌗𑌘𑌙𑌚𑌛𑌜𑌝𑌞𑌟𑌠𑌡𑌢𑌣𑌤𑌥𑌦𑌧𑌨𑌪𑌫𑌬𑌭𑌮𑌯𑌰𑌲𑌵𑌶𑌷𑌸𑌹𑌳𑌼";
  this.KVER="14.0.214.0";
  this.gs=function(t,e) {
    return this.g_main(t,e);
  };
  this.g_main=function(t,e) {
    var k=KeymanWeb,r=0,m=0;
    if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 164
        k.KDC(0,t);
        k.KO(-1,t,"𑍝");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(k.KFCM(1,t,['।'])){
        r=m=1;   // Line 214
        k.KDC(1,t);
        k.KO(-1,t,"॥");
      }
      else if(1){
        r=m=1;   // Line 213
        k.KDC(0,t);
        k.KO(-1,t,"।");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 172
        k.KDC(0,t);
        k.KO(-1,t,"௦");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 173
        k.KDC(0,t);
        k.KO(-1,t,"௧");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 174
        k.KDC(0,t);
        k.KO(-1,t,"௨");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 175
        k.KDC(0,t);
        k.KO(-1,t,"௩");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 176
        k.KDC(0,t);
        k.KO(-1,t,"௪");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 177
        k.KDC(0,t);
        k.KO(-1,t,"௫");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_6 /* 0x36 */)) {
      if(1){
        r=m=1;   // Line 178
        k.KDC(0,t);
        k.KO(-1,t,"௬");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 179
        k.KDC(0,t);
        k.KO(-1,t,"௭");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 180
        k.KDC(0,t);
        k.KO(-1,t,"௮");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 181
        k.KDC(0,t);
        k.KO(-1,t,"௯");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_COLON /* 0xBA */)) {
      if(k.KFCM(2,t,['‍','𑍍'])){
        r=m=1;   // Line 233
        k.KDC(2,t);
        k.KO(-1,t,"𑍍‌");
      }
      else if(k.KFCM(1,t,['𑍍'])){
        r=m=1;   // Line 232
        k.KDC(1,t);
        k.KO(-1,t,"‍𑍍");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_COLON /* 0xBA */)) {
      if(k.KFCM(5,t,['𑌓','𑌮','𑍍','𑌮','𑍍'])){
        r=m=1;   // Line 167
        k.KDC(5,t);
        k.KO(-1,t,"𑍐");
      }
      else if(k.KFCM(4,t,['𑌨','𑍍','𑌗','𑍍'])){
        r=m=1;   // Line 115
        k.KDC(4,t);
        k.KO(-1,t,"𑌙𑍍");
      }
      else if(k.KFCM(4,t,['𑌨','𑍍','𑌜','𑍍'])){
        r=m=1;   // Line 116
        k.KDC(4,t);
        k.KO(-1,t,"𑌞𑍍");
      }
      else if(k.KFCM(4,t,['𑌪','𑍍','𑌳','𑍍'])){
        r=m=1;   // Line 168
        k.KDC(4,t);
        k.KO(-1,t,"𑍝");
      }
      else if(k.KFCM(4,t,['௧','௦','௦','௦'])){
        r=m=1;   // Line 185
        k.KDC(4,t);
        k.KO(-1,t,"௲");
      }
      else if(k.KFCM(4,t,['𑌗','𑍍','𑌮','𑍍'])){
        r=m=1;   // Line 194
        k.KDC(4,t);
        k.KO(-1,t,"𑍞");
      }
      else if(k.KFCM(3,t,['𑍍','𑌰','𑍁'])){
        r=m=1;   // Line 151
        k.KDC(3,t);
        k.KO(-1,t,"𑍃");
      }
      else if(k.KFCM(3,t,['𑍍','𑌰','𑍂'])){
        r=m=1;   // Line 152
        k.KDC(3,t);
        k.KO(-1,t,"𑍄");
      }
      else if(k.KFCM(3,t,['𑍍','𑌲','𑍁'])){
        r=m=1;   // Line 153
        k.KDC(3,t);
        k.KO(-1,t,"𑍢");
      }
      else if(k.KFCM(3,t,['𑍍','𑌲','𑍂'])){
        r=m=1;   // Line 154
        k.KDC(3,t);
        k.KO(-1,t,"𑍣");
      }
      else if(k.KFCM(3,t,['௧','௦','௦'])){
        r=m=1;   // Line 184
        k.KDC(3,t);
        k.KO(-1,t,"௱");
      }
      else if(k.KFCM(3,t,['𑍞','𑌮','𑍍'])){
        r=m=1;   // Line 195
        k.KDC(3,t);
        k.KO(-1,t,"𑍟");
      }
      else if(k.KFCM(2,t,['𑌰','𑍁'])){
        r=m=1;   // Line 35
        k.KDC(2,t);
        k.KO(-1,t,"𑌋");
      }
      else if(k.KFCM(2,t,['𑌰','𑍂'])){
        r=m=1;   // Line 36
        k.KDC(2,t);
        k.KO(-1,t,"𑍠");
      }
      else if(k.KFCM(2,t,['𑌲','𑍁'])){
        r=m=1;   // Line 37
        k.KDC(2,t);
        k.KO(-1,t,"𑌌");
      }
      else if(k.KFCM(2,t,['𑌲','𑍂'])){
        r=m=1;   // Line 38
        k.KDC(2,t);
        k.KO(-1,t,"𑍡");
      }
      else if(k.KFCM(2,t,['𑌮','𑍍'])){
        r=m=1;   // Line 55
        k.KDC(2,t);
        k.KO(-1,t,"𑌂");
      }
      else if(k.KFCM(2,t,['𑌹','𑍍'])){
        r=m=1;   // Line 56
        k.KDC(2,t);
        k.KO(-1,t,"𑌃");
      }
      else if(k.KFCM(2,t,['𑌲','𑍍'])){
        r=m=1;   // Line 94
        k.KDC(2,t);
        k.KO(-1,t,"𑌳𑍍");
      }
      else if(k.KFCM(2,t,['𑌤','𑍍'])){
        r=m=1;   // Line 112
        k.KDC(2,t);
        k.KO(-1,t,"𑌟𑍍");
      }
      else if(k.KFCM(2,t,['𑌦','𑍍'])){
        r=m=1;   // Line 113
        k.KDC(2,t);
        k.KO(-1,t,"𑌡𑍍");
      }
      else if(k.KFCM(2,t,['𑌨','𑍍'])){
        r=m=1;   // Line 114
        k.KDC(2,t);
        k.KO(-1,t,"𑌣𑍍");
      }
      else if(k.KFCM(2,t,['𑌶','𑍍'])){
        r=m=1;   // Line 117
        k.KDC(2,t);
        k.KO(-1,t,"𑌷𑍍");
      }
      else if(k.KFCM(2,t,['௧','௦'])){
        r=m=1;   // Line 183
        k.KDC(2,t);
        k.KO(-1,t,"௰");
      }
      else if(k.KFCM(2,t,['𑌵','𑌿'])){
        r=m=1;   // Line 208
        k.KDC(2,t);
        k.KO(-1,t,"𑍳");
      }
      else if(k.KFCM(2,t,['\'','\''])){
        r=m=1;   // Line 216
        k.KDC(2,t);
        k.KO(-1,t,"॑");
      }
      else if(k.KFCM(2,t,['%','%'])){
        r=m=1;   // Line 225
        k.KDC(2,t);
        k.KO(-1,t,"᳹");
      }
      else if(k.KFCM(1,t,['𑌏'])){
        r=m=1;   // Line 41
        k.KDC(1,t);
        k.KO(-1,t,"𑌏᳸");
      }
      else if(k.KFCM(1,t,['𑌓'])){
        r=m=1;   // Line 42
        k.KDC(1,t);
        k.KO(-1,t,"𑌓᳸");
      }
      else if(k.KFCM(1,t,['𑌁'])){
        r=m=1;   // Line 48
        k.KDC(1,t);
        k.KO(-1,t,"𑌀");
      }
      else if(k.KFCM(1,t,['𑌃'])){
        r=m=1;   // Line 50
        k.KDC(1,t);
        k.KO(-1,t,"ᳲ");
      }
      else if(k.KFCM(1,t,['ᳲ'])){
        r=m=1;   // Line 51
        k.KDC(1,t);
        k.KO(-1,t,"ᳳ");
      }
      else if(k.KFCM(1,t,['𑌅'])){
        r=m=1;   // Line 57
        k.KDC(1,t);
        k.KO(-1,t,"𑌽");
      }
      else if(k.KFCM(1,t,['𑌂'])){
        r=m=1;   // Line 58
        k.KDC(1,t);
        k.KO(-1,t,"𑌁");
      }
      else if(k.KFCM(1,t,['𑍇'])){
        r=m=1;   // Line 158
        k.KDC(1,t);
        k.KO(-1,t,"𑍇᳸");
      }
      else if(k.KFCM(1,t,['𑍋'])){
        r=m=1;   // Line 159
        k.KDC(1,t);
        k.KO(-1,t,"𑍋᳸");
      }
      else if(k.KFCM(1,t,['௦'])){
        r=m=1;   // Line 197
        k.KDC(1,t);
        k.KO(-1,t,"𑍦");
      }
      else if(k.KFCM(1,t,['௧'])){
        r=m=1;   // Line 198
        k.KDC(1,t);
        k.KO(-1,t,"𑍧");
      }
      else if(k.KFCM(1,t,['௨'])){
        r=m=1;   // Line 199
        k.KDC(1,t);
        k.KO(-1,t,"𑍨");
      }
      else if(k.KFCM(1,t,['௩'])){
        r=m=1;   // Line 200
        k.KDC(1,t);
        k.KO(-1,t,"𑍩");
      }
      else if(k.KFCM(1,t,['௪'])){
        r=m=1;   // Line 201
        k.KDC(1,t);
        k.KO(-1,t,"𑍪");
      }
      else if(k.KFCM(1,t,['௫'])){
        r=m=1;   // Line 202
        k.KDC(1,t);
        k.KO(-1,t,"𑍫");
      }
      else if(k.KFCM(1,t,['௬'])){
        r=m=1;   // Line 203
        k.KDC(1,t);
        k.KO(-1,t,"𑍬");
      }
      else if(k.KFCM(1,t,['𑌽'])){
        r=m=1;   // Line 205
        k.KDC(1,t);
        k.KO(-1,t,"𑍰");
      }
      else if(k.KFCM(1,t,['𑌕'])){
        r=m=1;   // Line 206
        k.KDC(1,t);
        k.KO(-1,t,"𑍱");
      }
      else if(k.KFCM(1,t,['𑌨'])){
        r=m=1;   // Line 207
        k.KDC(1,t);
        k.KO(-1,t,"𑍲");
      }
      else if(k.KFCM(1,t,['𑌪'])){
        r=m=1;   // Line 209
        k.KDC(1,t);
        k.KO(-1,t,"𑍴");
      }
      else if(k.KFCM(1,t,['\"'])){
        r=m=1;   // Line 217
        k.KDC(1,t);
        k.KO(-1,t,"॑");
      }
      else if(k.KFCM(1,t,['\''])){
        r=m=1;   // Line 218
        k.KDC(1,t);
        k.KO(-1,t,"᳴");
      }
      else if(k.KFCM(1,t,['_'])){
        r=m=1;   // Line 219
        k.KDC(1,t);
        k.KO(-1,t,"॒");
      }
      else if(k.KFCM(1,t,['*'])){
        r=m=1;   // Line 223
        k.KDC(1,t);
        k.KO(-1,t,"⃰");
      }
      else if(k.KFCM(1,t,['%'])){
        r=m=1;   // Line 224
        k.KDC(1,t);
        k.KO(-1,t,"᳸");
      }
      else if(k.KFCM(1,t,['^'])){
        r=m=1;   // Line 226
        k.KDC(1,t);
        k.KO(-1,t,"᳐");
      }
      else if(k.KFCM(1,t,['='])){
        r=m=1;   // Line 227
        k.KDC(1,t);
        k.KO(-1,t,"᳓");
      }
      else if(k.KFCM(1,t,['-'])){
        r=m=1;   // Line 228
        k.KDC(1,t);
        k.KO(-1,t,"᳒");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 162
        k.KDC(0,t);
        k.KO(-1,t,"𑌽");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_A /* 0x41 */)) {
      if(k.KFCM(1,t,['𑍍'])){
        r=m=1;   // Line 130
        k.KDC(1,t);
        k.KO(-1,t,"𑌾");
      }
      else if(1){
        r=m=1;   // Line 17
        k.KDC(0,t);
        k.KO(-1,t,"𑌆");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 75
        k.KDC(0,t);
        k.KO(-1,t,"𑌡𑍍");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 65
        k.KDC(0,t);
        k.KO(-1,t,"𑌙𑍍");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_H /* 0x48 */)) {
      if(1){
        r=m=1;   // Line 49
        k.KDC(0,t);
        k.KO(-1,t,"𑌃");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_I /* 0x49 */)) {
      if(k.KFCM(1,t,['𑍍'])){
        r=m=1;   // Line 134
        k.KDC(1,t);
        k.KO(-1,t,"𑍀");
      }
      else if(1){
        r=m=1;   // Line 20
        k.KDC(0,t);
        k.KO(-1,t,"𑌈");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 71
        k.KDC(0,t);
        k.KO(-1,t,"𑌞𑍍");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 95
        k.KDC(0,t);
        k.KO(-1,t,"𑌳𑍍");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_M /* 0x4D */)) {
      if(k.KFCM(2,t,['𑌗','𑍍'])){
        r=m=1;   // Line 189
        k.KDC(2,t);
        k.KO(-1,t,"𑍞");
      }
      else if(k.KFCM(1,t,['O'])){
        r=m=1;   // Line 163
        k.KDC(1,t);
        k.KO(-1,t,"𑍐");
      }
      else if(k.KFCM(1,t,['𑍞'])){
        r=m=1;   // Line 190
        k.KDC(1,t);
        k.KO(-1,t,"𑍟");
      }
      else if(1){
        r=m=1;   // Line 47
        k.KDC(0,t);
        k.KO(-1,t,"𑌂");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 77
        k.KDC(0,t);
        k.KO(-1,t,"𑌣𑍍");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_R /* 0x52 */)) {
      if(k.KFCM(1,t,['𑍍'])){
        r=m=1;   // Line 140
        k.KDC(1,t);
        k.KO(-1,t,"𑍃");
      }
      else if(1){
        r=m=1;   // Line 22
        k.KDC(0,t);
        k.KO(-1,t,"𑌋");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 97
        k.KDC(0,t);
        k.KO(-1,t,"𑌷𑍍");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 73
        k.KDC(0,t);
        k.KO(-1,t,"𑌟𑍍");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_U /* 0x55 */)) {
      if(k.KFCM(1,t,['𑍍'])){
        r=m=1;   // Line 138
        k.KDC(1,t);
        k.KO(-1,t,"𑍂");
      }
      else if(1){
        r=m=1;   // Line 25
        k.KDC(0,t);
        k.KO(-1,t,"𑌊");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_W /* 0x57 */)) {
      if(k.KFCM(1,t,['𑍍'])){
        r=m=1;   // Line 142
        k.KDC(1,t);
        k.KO(-1,t,"𑍢");
      }
      else if(1){
        r=m=1;   // Line 27
        k.KDC(0,t);
        k.KO(-1,t,"𑌌");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 106
        k.KDC(0,t);
        k.KO(-1,t,"𑌳𑌼𑍍");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)) {
      if(k.KFCM(1,t,['𑌅'])){
        r=m=1;   // Line 18
        k.KDC(1,t);
        k.KO(-1,t,"𑌆");
      }
      else if(k.KFCM(1,t,['𑍍'])){
        r=m=1;   // Line 125
        k.KDC(1,t);
      }
      else if(k.KFCM(1,t,[{t:'a',a:this.s_cons}])){
        r=m=1;   // Line 129
        k.KDC(1,t);
        k.KIO(-1,this.s_cons,1,t);
        k.KO(-1,t,"𑌾");
      }
      else if(1){
        r=m=1;   // Line 16
        k.KDC(0,t);
        k.KO(-1,t,"𑌅");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 87
        k.KDC(0,t);
        k.KO(-1,t,"𑌬𑍍");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 67
        k.KDC(0,t);
        k.KO(-1,t,"𑌚𑍍");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 81
        k.KDC(0,t);
        k.KO(-1,t,"𑌦𑍍");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)) {
      if(k.KFCM(1,t,['𑍍'])){
        r=m=1;   // Line 145
        k.KDC(1,t);
        k.KO(-1,t,"𑍇");
      }
      else if(1){
        r=m=1;   // Line 29
        k.KDC(0,t);
        k.KO(-1,t,"𑌏");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 104
        k.KDC(0,t);
        k.KO(-1,t,"𑌫𑌼𑍍");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 63
        k.KDC(0,t);
        k.KO(-1,t,"𑌗𑍍");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_H /* 0x48 */)) {
      if(k.KFCM(2,t,['𑌕','𑍍'])){
        r=m=1;   // Line 62
        k.KDC(2,t);
        k.KO(-1,t,"𑌖𑍍");
      }
      else if(k.KFCM(2,t,['𑌗','𑍍'])){
        r=m=1;   // Line 64
        k.KDC(2,t);
        k.KO(-1,t,"𑌘𑍍");
      }
      else if(k.KFCM(2,t,['𑌚','𑍍'])){
        r=m=1;   // Line 68
        k.KDC(2,t);
        k.KO(-1,t,"𑌛𑍍");
      }
      else if(k.KFCM(2,t,['𑌜','𑍍'])){
        r=m=1;   // Line 70
        k.KDC(2,t);
        k.KO(-1,t,"𑌝𑍍");
      }
      else if(k.KFCM(2,t,['𑌟','𑍍'])){
        r=m=1;   // Line 74
        k.KDC(2,t);
        k.KO(-1,t,"𑌠𑍍");
      }
      else if(k.KFCM(2,t,['𑌡','𑍍'])){
        r=m=1;   // Line 76
        k.KDC(2,t);
        k.KO(-1,t,"𑌢𑍍");
      }
      else if(k.KFCM(2,t,['𑌤','𑍍'])){
        r=m=1;   // Line 80
        k.KDC(2,t);
        k.KO(-1,t,"𑌥𑍍");
      }
      else if(k.KFCM(2,t,['𑌦','𑍍'])){
        r=m=1;   // Line 82
        k.KDC(2,t);
        k.KO(-1,t,"𑌧𑍍");
      }
      else if(k.KFCM(2,t,['𑌪','𑍍'])){
        r=m=1;   // Line 86
        k.KDC(2,t);
        k.KO(-1,t,"𑌫𑍍");
      }
      else if(k.KFCM(2,t,['𑌬','𑍍'])){
        r=m=1;   // Line 88
        k.KDC(2,t);
        k.KO(-1,t,"𑌭𑍍");
      }
      else if(k.KFCM(2,t,['𑌸','𑍍'])){
        r=m=1;   // Line 99
        k.KDC(2,t);
        k.KO(-1,t,"𑌶𑍍");
      }
      else if(k.KFCM(2,t,['‍','𑍍'])){
        r=m=1;   // Line 236
        k.KDC(2,t);
        k.KO(-1,t,"𑍍𑌹");
      }
      else if(k.KFCM(1,t,['&'])){
        r=m=1;   // Line 121
        k.KDC(1,t);
        k.KO(-1,t,"𑌹𑍍");
      }
      else if(1){
        r=m=1;   // Line 100
        k.KDC(0,t);
        k.KO(-1,t,"𑌹𑍍");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)) {
      if(k.KFCM(1,t,['𑌇'])){
        r=m=1;   // Line 21
        k.KDC(1,t);
        k.KO(-1,t,"𑌈");
      }
      else if(k.KFCM(1,t,['𑌅'])){
        r=m=1;   // Line 30
        k.KDC(1,t);
        k.KO(-1,t,"𑌐");
      }
      else if(k.KFCM(1,t,['𑍍'])){
        r=m=1;   // Line 132
        k.KDC(1,t);
        k.KO(-1,t,"𑌿");
      }
      else if(k.KFCM(1,t,['𑌿'])){
        r=m=1;   // Line 133
        k.KDC(1,t);
        k.KO(-1,t,"𑍀");
      }
      else if(k.KFCM(1,t,[{t:'a',a:this.s_cons}])){
        r=m=1;   // Line 146
        k.KDC(1,t);
        k.KIO(-1,this.s_cons,1,t);
        k.KO(-1,t,"𑍈");
      }
      else if(1){
        r=m=1;   // Line 19
        k.KDC(0,t);
        k.KO(-1,t,"𑌇");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 69
        k.KDC(0,t);
        k.KO(-1,t,"𑌜𑍍");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_K /* 0x4B */)) {
      if(1){
        r=m=1;   // Line 61
        k.KDC(0,t);
        k.KO(-1,t,"𑌕𑍍");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 93
        k.KDC(0,t);
        k.KO(-1,t,"𑌲𑍍");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 89
        k.KDC(0,t);
        k.KO(-1,t,"𑌮𑍍");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 83
        k.KDC(0,t);
        k.KO(-1,t,"𑌨𑍍");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)) {
      if(k.KFCM(1,t,['𑍍'])){
        r=m=1;   // Line 147
        k.KDC(1,t);
        k.KO(-1,t,"𑍋");
      }
      else if(1){
        r=m=1;   // Line 31
        k.KDC(0,t);
        k.KO(-1,t,"𑌓");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 85
        k.KDC(0,t);
        k.KO(-1,t,"𑌪𑍍");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Q /* 0x51 */)) {
      if(k.KFCM(1,t,['𑍍'])){
        r=m=1;   // Line 108
        k.KDC(1,t);
        k.KO(-1,t,"𑌼𑍍");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 92
        k.KDC(0,t);
        k.KO(-1,t,"𑌰𑍍");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 98
        k.KDC(0,t);
        k.KO(-1,t,"𑌸𑍍");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 79
        k.KDC(0,t);
        k.KO(-1,t,"𑌤𑍍");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)) {
      if(k.KFCM(1,t,['𑌉'])){
        r=m=1;   // Line 24
        k.KDC(1,t);
        k.KO(-1,t,"𑌊");
      }
      else if(k.KFCM(1,t,['𑌋'])){
        r=m=1;   // Line 26
        k.KDC(1,t);
        k.KO(-1,t,"𑍠");
      }
      else if(k.KFCM(1,t,['𑌌'])){
        r=m=1;   // Line 28
        k.KDC(1,t);
        k.KO(-1,t,"𑍡");
      }
      else if(k.KFCM(1,t,['𑌅'])){
        r=m=1;   // Line 32
        k.KDC(1,t);
        k.KO(-1,t,"𑌔");
      }
      else if(k.KFCM(1,t,['𑍍'])){
        r=m=1;   // Line 136
        k.KDC(1,t);
        k.KO(-1,t,"𑍁");
      }
      else if(k.KFCM(1,t,['𑍁'])){
        r=m=1;   // Line 137
        k.KDC(1,t);
        k.KO(-1,t,"𑍂");
      }
      else if(k.KFCM(1,t,['𑍃'])){
        r=m=1;   // Line 141
        k.KDC(1,t);
        k.KO(-1,t,"𑍄");
      }
      else if(k.KFCM(1,t,['𑍢'])){
        r=m=1;   // Line 143
        k.KDC(1,t);
        k.KO(-1,t,"𑍣");
      }
      else if(k.KFCM(1,t,[{t:'a',a:this.s_cons}])){
        r=m=1;   // Line 148
        k.KDC(1,t);
        k.KIO(-1,this.s_cons,1,t);
        k.KO(-1,t,"𑍗");
      }
      else if(k.KFCM(1,t,['𑍗'])){
        r=m=1;   // Line 157
        k.KDC(1,t);
        k.KO(-1,t,"𑍌");
      }
      else if(1){
        r=m=1;   // Line 23
        k.KDC(0,t);
        k.KO(-1,t,"𑌉");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 96
        k.KDC(0,t);
        k.KO(-1,t,"𑌵𑍍");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 91
        k.KDC(0,t);
        k.KO(-1,t,"𑌯𑍍");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 105
        k.KDC(0,t);
        k.KO(-1,t,"𑌜𑌼𑍍");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_BKQUOTE /* 0xC0 */)) {
      if(1){
        r=m=1;   // Line 52
        k.KDC(0,t);
        k.KO(-1,t,"𑌁");
      }
    }
    return r;
  };
}
