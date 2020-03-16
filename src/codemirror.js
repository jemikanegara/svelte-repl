// import CodeMirror from 'codemirror';
// import './codemirror.css';

import HyperMD from 'hypermd/core';

import 'codemirror/mode/javascript/javascript.js';
// import 'codemirror/mode/shell/shell.js';
import 'codemirror/mode/handlebars/handlebars.js';
import 'codemirror/mode/htmlmixed/htmlmixed.js';
/* Added: AlexxNB */
import 'codemirror/mode/gfm/gfm.js';
import 'codemirror/mode/xml/xml.js';
import 'codemirror/mode/css/css.js';
/* Removed: AlexxNB */
import 'codemirror/addon/edit/closebrackets.js';
import 'codemirror/addon/edit/closetag.js';

import 'hypermd/mode/hypermd'
import 'hypermd/addon/hide-token'
import 'hypermd/addon/cursor-debounce'
import 'hypermd/addon/fold'
import 'hypermd/addon/fold-link'
import 'hypermd/addon/fold-image'
import 'hypermd/addon/fold-html'
import 'hypermd/addon/fold-emoji'
import 'hypermd/addon/read-link'
import 'hypermd/addon/click'
import 'hypermd/addon/hover'
import 'hypermd/addon/paste'
import 'hypermd/addon/insert-file'
import 'hypermd/addon/mode-loader'
import 'hypermd/addon/table-align'
import 'hypermd/keymap/hypermd'
// import 'hypermd/powerpack/insert-file-with-smms'
// import 'hypermd/powerpack/hover-with-marked'
// import 'hypermd/powerpack/paste-with-turndown'
// import 'turndown-plugin-gfm'

export default HyperMD;
