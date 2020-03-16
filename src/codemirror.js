import CodeMirror from 'codemirror';
import './codemirror.css';

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

export default CodeMirror;
