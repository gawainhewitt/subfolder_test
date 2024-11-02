import { c as create_ssr_component, d as createEventDispatcher, e as escape, f as add_attribute, v as validate_component, h as each } from "../../chunks/ssr.js";
import * as Tone from "tone";
const css$3 = {
  code: ".note.svelte-9os0g1{background-color:#ccc;width:100%;height:0;padding-bottom:95%;border:1px solid #ccc;border-radius:7px;background-size:100%;background-repeat:no-repeat}.active.svelte-9os0g1{background-color:#600889;border:1px solid #600889}.live.svelte-9os0g1{background-color:#05f18f;border:1px solid #05f18f}.active.live.svelte-9os0g1{background-color:yellow;border:1px solid yellow}.screen-reader-description.svelte-9os0g1{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.text.svelte-9os0g1{font-family:'Courier New', Courier, monospace;font-weight:bold;color:rgb(8, 8, 8);text-align:center;position:relative;top:1rem}@media(orientation: portrait){.text.svelte-9os0g1{font-family:'Courier New', Courier, monospace;font-weight:bold;color:rgb(8, 8, 8);text-align:center;position:relative;top:0}}",
  map: `{"version":3,"file":"SequencerStep.svelte","sources":["SequencerStep.svelte"],"sourcesContent":["<script>\\n    import { createEventDispatcher } from 'svelte';\\n\\n    export let rowIndex;\\n    export let noteIndex;\\n    export let noteActive;\\n    export let noteLive;\\n    export let instrumentName;\\n    export let qwerty = '';\\n\\n    if(qwerty != \\"Comma\\"){\\n        qwerty = qwerty.slice(-1);\\n    }else{\\n        qwerty=','\\n    }\\n\\n    const dispatch = createEventDispatcher()\\n\\n    const handleButton = () => {\\n        dispatch(\\"clicked\\", {rowIndex, noteIndex});\\n    }\\n\\n<\/script>\\n\\n\\n<button     \\n    type=\\"button\\"\\n    on:click|preventDefault|stopPropagation={handleButton}\\n    id=\\"row{rowIndex}note{noteIndex}\\"\\n    class=\\" note {noteActive ? 'active' : ''}\\" class:live={noteLive}\\n    style=\\"background-image: url('images/{instrumentName}-pink.png')\\"\\n    ><p class=\\"text\\">{qwerty}</p>\\n    <div class=\\"screen-reader-description\\">\\n        {instrumentName + \\": row \\" + rowIndex + \\": step \\" + noteIndex} \\n    </div>\\n</button> \\n\\n<style>\\n    .note{\\n        background-color: #ccc;\\n        width: 100%;\\n        height: 0;\\n        padding-bottom: 95%; /* this combined with above is allowing me to set height relative to width*/\\n        border: 1px solid #ccc;\\n        border-radius: 7px;\\n        background-size: 100%;  \\n        background-repeat: no-repeat;\\n    }\\n\\n    .active {\\n        background-color: #600889;\\n        border: 1px solid #600889;\\n    }\\n\\n    .live {\\n        background-color: #05f18f;\\n        border: 1px solid #05f18f;\\n    }\\n\\n    .active.live {\\n        background-color: yellow;\\n        border: 1px solid yellow;\\n    }\\n\\n    .screen-reader-description {\\n        clip: rect(0 0 0 0);\\n        clip-path: inset(50%);\\n        height: 1px;\\n        overflow: hidden;\\n        position: absolute;\\n        white-space: nowrap;\\n        width: 1px;\\n    }\\n    .text {\\n        font-family: 'Courier New', Courier, monospace;\\n        font-weight: bold;\\n        color: rgb(8, 8, 8);\\n        text-align: center;\\n        position:relative; \\n        top: 1rem;\\n    }\\n    @media (orientation: portrait) {\\n        .text {\\n        font-family: 'Courier New', Courier, monospace;\\n        font-weight: bold;\\n        color: rgb(8, 8, 8);\\n        text-align: center;\\n        position:relative; \\n        top: 0;\\n    }\\n    }\\n\\n</style>"],"names":[],"mappings":"AAsCI,mBAAK,CACD,gBAAgB,CAAE,IAAI,CACtB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,CAAC,CACT,cAAc,CAAE,GAAG,CACnB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CACtB,aAAa,CAAE,GAAG,CAClB,eAAe,CAAE,IAAI,CACrB,iBAAiB,CAAE,SACvB,CAEA,qBAAQ,CACJ,gBAAgB,CAAE,OAAO,CACzB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OACtB,CAEA,mBAAM,CACF,gBAAgB,CAAE,OAAO,CACzB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OACtB,CAEA,OAAO,mBAAM,CACT,gBAAgB,CAAE,MAAM,CACxB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,MACtB,CAEA,wCAA2B,CACvB,IAAI,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACnB,SAAS,CAAE,MAAM,GAAG,CAAC,CACrB,MAAM,CAAE,GAAG,CACX,QAAQ,CAAE,MAAM,CAChB,QAAQ,CAAE,QAAQ,CAClB,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,GACX,CACA,mBAAM,CACF,WAAW,CAAE,aAAa,CAAC,CAAC,OAAO,CAAC,CAAC,SAAS,CAC9C,WAAW,CAAE,IAAI,CACjB,KAAK,CAAE,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACnB,UAAU,CAAE,MAAM,CAClB,SAAS,QAAQ,CACjB,GAAG,CAAE,IACT,CACA,MAAO,cAAc,QAAQ,CAAE,CAC3B,mBAAM,CACN,WAAW,CAAE,aAAa,CAAC,CAAC,OAAO,CAAC,CAAC,SAAS,CAC9C,WAAW,CAAE,IAAI,CACjB,KAAK,CAAE,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACnB,UAAU,CAAE,MAAM,CAClB,SAAS,QAAQ,CACjB,GAAG,CAAE,CACT,CACA"}`
};
const SequencerStep = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { rowIndex } = $$props;
  let { noteIndex } = $$props;
  let { noteActive } = $$props;
  let { noteLive } = $$props;
  let { instrumentName } = $$props;
  let { qwerty = "" } = $$props;
  if (qwerty != "Comma") {
    qwerty = qwerty.slice(-1);
  } else {
    qwerty = ",";
  }
  createEventDispatcher();
  if ($$props.rowIndex === void 0 && $$bindings.rowIndex && rowIndex !== void 0) $$bindings.rowIndex(rowIndex);
  if ($$props.noteIndex === void 0 && $$bindings.noteIndex && noteIndex !== void 0) $$bindings.noteIndex(noteIndex);
  if ($$props.noteActive === void 0 && $$bindings.noteActive && noteActive !== void 0) $$bindings.noteActive(noteActive);
  if ($$props.noteLive === void 0 && $$bindings.noteLive && noteLive !== void 0) $$bindings.noteLive(noteLive);
  if ($$props.instrumentName === void 0 && $$bindings.instrumentName && instrumentName !== void 0) $$bindings.instrumentName(instrumentName);
  if ($$props.qwerty === void 0 && $$bindings.qwerty && qwerty !== void 0) $$bindings.qwerty(qwerty);
  $$result.css.add(css$3);
  return `<button type="button" id="${"row" + escape(rowIndex, true) + "note" + escape(noteIndex, true)}" class="${[
    "note " + escape(noteActive ? "active" : "", true) + " svelte-9os0g1",
    noteLive ? "live" : ""
  ].join(" ").trim()}" style="${"background-image: url('images/" + escape(instrumentName, true) + "-pink.png')"}"><p class="text svelte-9os0g1">${escape(qwerty)}</p> <div class="screen-reader-description svelte-9os0g1">${escape(instrumentName + ": row " + rowIndex + ": step " + noteIndex)}</div> </button>`;
});
const css$2 = {
  code: ".transport.svelte-1wosum9{width:100%;height:6vh;border:1px solid #ccc;border-radius:7px;margin:0 0.2em;display:flex;align-items:center;justify-content:center}.button-name.svelte-1wosum9{font-family:'Courier New', Courier, monospace;font-weight:bold;color:white;text-align:center;margin:auto}",
  map: `{"version":3,"file":"TransportButton.svelte","sources":["TransportButton.svelte"],"sourcesContent":["<script>\\n    import { createEventDispatcher } from 'svelte';\\n\\n    export let buttonName;\\n\\n    const dispatch = createEventDispatcher()\\n\\n    const handleButton = () => {\\n        dispatch(\\"clicked\\", buttonName);\\n    }\\n\\n<\/script>\\n\\n\\n<button \\n    on:click|preventDefault|stopPropagation={handleButton}\\n    class=\\"transport\\"\\n    style={\`background-color:\${buttonName.colour};\`}>\\n    <div class=\\"button-name\\">\\n        {buttonName.name}\\n    </div>\\n</button>\\n\\n<style>\\n\\n    .transport{\\n        width: 100%;\\n        height: 6vh; /* using the 0 and padding bottom trick for dynamic sizing of this meant that the text stuck to the top*/\\n        /* padding-bottom: 10%; */\\n        border: 1px solid #ccc;\\n        border-radius: 7px;\\n        margin: 0 0.2em;\\n        display: flex;\\n        align-items: center;\\n        justify-content: center;\\n    }\\n\\n    .button-name {\\n        font-family: 'Courier New', Courier, monospace;\\n        font-weight: bold;\\n        color: white;\\n        text-align: center;  \\n        margin: auto;\\n        \\n    }\\n\\n</style>"],"names":[],"mappings":"AAyBI,yBAAU,CACN,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,GAAG,CAEX,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CACtB,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,CAAC,CAAC,KAAK,CACf,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MACrB,CAEA,2BAAa,CACT,WAAW,CAAE,aAAa,CAAC,CAAC,OAAO,CAAC,CAAC,SAAS,CAC9C,WAAW,CAAE,IAAI,CACjB,KAAK,CAAE,KAAK,CACZ,UAAU,CAAE,MAAM,CAClB,MAAM,CAAE,IAEZ"}`
};
const TransportButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { buttonName } = $$props;
  createEventDispatcher();
  if ($$props.buttonName === void 0 && $$bindings.buttonName && buttonName !== void 0) $$bindings.buttonName(buttonName);
  $$result.css.add(css$2);
  return `<button class="transport svelte-1wosum9"${add_attribute("style", `background-color:${buttonName.colour};`, 0)}><div class="button-name svelte-1wosum9">${escape(buttonName.name)}</div> </button>`;
});
const css$1 = {
  code: ".navigation.svelte-11bvzsc{background-color:#ccc;width:100%;height:0;padding-bottom:95%;border:1px solid #ccc;border-radius:7px;background-size:100%;background-repeat:no-repeat}.screen-reader-description.svelte-11bvzsc{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}",
  map: `{"version":3,"file":"NavigationButton.svelte","sources":["NavigationButton.svelte"],"sourcesContent":["<script>\\n    import { createEventDispatcher } from 'svelte';\\n\\n    export let instrumentName;\\n\\n    const dispatch = createEventDispatcher()\\n\\n    const handleButton = () => {\\n        dispatch(\\"clicked\\");\\n    }\\n\\n<\/script>\\n\\n\\n<button     \\n    type=\\"button\\"\\n    on:click|preventDefault|stopPropagation={handleButton}\\n    id=\\"hold\\"\\n    class=\\"navigation\\" \\n    style=\\"background-image: url('images/{instrumentName}.png')\\"\\n    >\\n    <div class=\\"screen-reader-description\\">\\n        {instrumentName} \\n    </div>\\n</button> \\n\\n<style>\\n    .navigation{\\n        background-color: #ccc;\\n        width: 100%;\\n        height: 0;\\n        padding-bottom: 95%; /* this combined with above is allowing me to set height relative to width*/\\n        border: 1px solid #ccc;\\n        border-radius: 7px;\\n        background-size: 100%;  \\n        background-repeat: no-repeat;\\n    }\\n\\n    .screen-reader-description {\\n        clip: rect(0 0 0 0);\\n        clip-path: inset(50%);\\n        height: 1px;\\n        overflow: hidden;\\n        position: absolute;\\n        white-space: nowrap;\\n        width: 1px;\\n    }\\n\\n</style>"],"names":[],"mappings":"AA2BI,0BAAW,CACP,gBAAgB,CAAE,IAAI,CACtB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,CAAC,CACT,cAAc,CAAE,GAAG,CACnB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CACtB,aAAa,CAAE,GAAG,CAClB,eAAe,CAAE,IAAI,CACrB,iBAAiB,CAAE,SACvB,CAEA,yCAA2B,CACvB,IAAI,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACnB,SAAS,CAAE,MAAM,GAAG,CAAC,CACrB,MAAM,CAAE,GAAG,CACX,QAAQ,CAAE,MAAM,CAChB,QAAQ,CAAE,QAAQ,CAClB,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,GACX"}`
};
const NavigationButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { instrumentName } = $$props;
  createEventDispatcher();
  if ($$props.instrumentName === void 0 && $$bindings.instrumentName && instrumentName !== void 0) $$bindings.instrumentName(instrumentName);
  $$result.css.add(css$1);
  return `<button type="button" id="hold" class="navigation svelte-11bvzsc" style="${"background-image: url('images/" + escape(instrumentName, true) + ".png')"}"><div class="screen-reader-description svelte-11bvzsc">${escape(instrumentName)}</div> </button>`;
});
const harpSampler = new Tone.Sampler({
  urls: {
    C4: "Harp-C4.mp3"
  },
  baseUrl: "/audio/",
  onload: () => {
  }
});
const drumSampler = new Tone.Sampler({
  urls: {
    C4: "kick.mp3",
    D4: "snare.mp3",
    E4: "woodblock.mp3"
  },
  baseUrl: "/audio/",
  onload: () => {
  }
}).toDestination();
drumSampler.set({
  volume: -12
});
const reverb = new Tone.Reverb({
  decay: 3,
  predelay: 0,
  wet: 0.5
}).toDestination();
harpSampler.connect(reverb);
harpSampler.set({
  release: 8,
  volume: -12
});
Tone.BaseContext.lookAhead = 0.5;
const myTransport = Tone.getTransport();
const startSound = () => {
  Tone.start();
};
class FullScreen {
  #noop = () => {
  };
  constructor(isFull, fsContainer) {
    this.isFull = isFull;
    this.fsContainer = fsContainer;
    this.exitFullscreen = (document.exitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen || document.msExitFullscreen || this.#noop).bind(document);
    this.fullscreenSupport = !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled || false);
  }
  fsToggle = () => {
    if (!this.fullscreenSupport) return;
    if (this.isFull) {
      this.exitFullscreen();
    } else {
      this.requestFullscreen(this.fsContainer);
    }
  };
  requestFullscreen() {
    const requestFS = (this.fsContainer.requestFullscreen || this.fsContainer.mozRequestFullScreen || this.fsContainer.webkitRequestFullscreen || this.fsContainer.msRequestFullscreen || this.#noop).bind(this.fsContainer);
    requestFS();
  }
}
const css = {
  code: "body{background:#222}.container.svelte-n30lvd.svelte-n30lvd{max-width:600px;height:95vh;margin-inline:auto}@media(min-width: 2000px){.container.svelte-n30lvd.svelte-n30lvd{max-width:900px;height:95vh;margin-inline:auto}}@media(orientation: portrait){.container.svelte-n30lvd.svelte-n30lvd{max-width:700px;height:95vh;margin-inline:auto}}button.svelte-n30lvd.svelte-n30lvd{margin:0 1em 0 0.5em;font-size:2em}.save-text-box.svelte-n30lvd.svelte-n30lvd{margin:5%}.common-text.svelte-n30lvd.svelte-n30lvd{font-family:'Courier New', Courier, monospace;font-weight:bold;color:white;text-align:center}.saved-text.svelte-n30lvd.svelte-n30lvd{font-size:1em;overflow-wrap:break-word}.title.svelte-n30lvd.svelte-n30lvd{font-size:3em}.sequencer.svelte-n30lvd.svelte-n30lvd{display:grid;grid-template-columns:repeat(8, 1fr);gap:5px;margin:auto;justify-content:center}.orchlab-logo.svelte-n30lvd.svelte-n30lvd{width:60%;display:block;margin-left:auto;margin-right:auto}.lpo-logo.svelte-n30lvd.svelte-n30lvd{width:60%;display:block;margin-right:auto}.dm-logo.svelte-n30lvd.svelte-n30lvd{width:60%;display:block;margin-left:auto}.navigation-buttons.svelte-n30lvd.svelte-n30lvd{display:grid;grid-template-columns:repeat(2, 1fr);gap:10px;margin:auto;justify-content:center;width:70%}.logo-bar.svelte-n30lvd.svelte-n30lvd{display:grid;grid-template-columns:repeat(2, 1fr);gap:10px;margin:auto;justify-content:center;width:100%}.select-menu.svelte-n30lvd.svelte-n30lvd{margin:2em;justify-content:center;font-family:'Courier New', Courier, monospace;font-weight:bold;font-size:1em}.select-label.svelte-n30lvd.svelte-n30lvd{background-size:8vw;margin:0 1em 1em 0;font-size:1em}.select-div.svelte-n30lvd.svelte-n30lvd{display:grid}.transport-top.svelte-n30lvd.svelte-n30lvd{display:flex;align-items:center;justify-content:center;margin:0 1em 0;height:10%}.bpm-controls.svelte-n30lvd.svelte-n30lvd{display:flex;align-items:center;justify-content:center;margin:0 1em 0;height:15%}.bpm-controls.svelte-n30lvd label.svelte-n30lvd{color:#fff}.bpm-value.svelte-n30lvd.svelte-n30lvd{width:20%;background-size:8vw;margin:0 1em 1em 1em;font-size:1em}.bpm-slider.svelte-n30lvd.svelte-n30lvd{width:150%;margin:0 1em 1em 0}.lively{background:#05f18f;;}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n      \\n\\timport SequencerStep from \\"../components/SequencerStep.svelte\\";\\n\\timport TransportButton from \\"../components/TransportButton.svelte\\";\\n    import NavigationButton from \\"../components/NavigationButton.svelte\\";\\n    import { onMount } from \\"svelte\\";\\n\\n    \\n    import * as Sound from \\"$lib/sound.js\\"\\n    import { FullScreen } from \\"$lib/fullScreen.js\\"\\n\\t\\n\\n    const fullScreen = new FullScreen(false, null);\\n  \\n    let bpm = 99;\\n    let beat = -1;\\n    let isPlaying = false;\\n    const sequenceLength = 8;\\n    let home = 0;\\n    let info = 1;\\n    let sequencer = 2;\\n    let settings = 3;\\n    let save = 4;\\n    let viewState = home;\\n    let mouseTouchSequencer = 0;\\n    let qwertySequencer = 1;\\n    let sequencerType;\\n    \\n    let scales = [ \\n        {label: \\"Major\\", notes: [0, 2, 4, 5, 7, 9, 11, 12, 14, 16, 17, 19], index: 0},\\n        {label: \\"Minor\\", notes: [0, 2, 3, 5, 7, 8, 10, 12, 14, 15, 17, 19], index: 1},\\n        {label: \\"Pentatonic\\", notes: [0, 2, 4, 7, 9, 12, 14, 16, 19, 21, 24, 26], index: 2},\\n        {label: \\"majorBlues\\", notes: [0, 2, 3, 4, 7, 9, 12, 14, 15, 16, 19, 21], index: 3},\\n        {label: \\"minorBlues\\", notes: [0, 3, 5, 6, 7, 10, 12, 15, 17, 18, 19, 22], index: 4}\\n    ];\\n    let keys = [{key: \\"C\\", index: 0}, {key: \\"C#\\", index: 1}, {key: \\"D\\", index: 2}, {key: \\"D#\\", index: 3}, {key: \\"E\\", index: 4}, {key: \\"F\\", index: 5}, {key: \\"F#\\", index: 6}, {key: \\"G\\", index: 7}, {key: \\"G#\\", index: 8}, {key: \\"A\\", index: 9}, {key: \\"A#\\", index: 10}, {key: \\"B\\", index: 11}];\\n    let allTheNotes = [\\n                        \\"C2\\", \\"C#2\\", \\"D2\\", \\"D#2\\", \\"E2\\", \\"F2\\", \\"F#2\\", \\"G2\\", \\"G#2\\", \\"A2\\", \\"A#2\\", \\"B2\\",\\n                        \\"C3\\", \\"C#3\\", \\"D3\\", \\"D#3\\", \\"E3\\", \\"F3\\", \\"F#3\\", \\"G3\\", \\"G#3\\", \\"A3\\", \\"A#3\\", \\"B3\\",\\n                        \\"C4\\", \\"C#4\\", \\"D4\\", \\"D#4\\", \\"E4\\", \\"F4\\", \\"F#4\\", \\"G4\\", \\"G#4\\", \\"A4\\", \\"A#4\\", \\"B4\\",\\n                        \\"C5\\", \\"C#5\\", \\"D5\\", \\"D#5\\", \\"E5\\", \\"F5\\", \\"F#5\\", \\"G5\\", \\"G#5\\", \\"A5\\", \\"A#5\\", \\"B5\\",\\n                        \\"C6\\", \\"C#6\\", \\"D6\\", \\"D#6\\", \\"E6\\", \\"F6\\", \\"F#6\\", \\"G6\\", \\"G#6\\", \\"A6\\", \\"A#6\\", \\"B6\\",\\n                        \\"C7\\", \\"C#7\\", \\"D7\\", \\"D#7\\", \\"E7\\", \\"F7\\", \\"F#7\\", \\"G7\\", \\"G#7\\", \\"A7\\", \\"A#7\\", \\"B7\\",\\n                        \\"C8\\", \\"C#8\\", \\"D8\\", \\"D#8\\", \\"E8\\", \\"F8\\", \\"F#8\\", \\"G8\\", \\"G#8\\", \\"A8\\", \\"A#8\\", \\"B8\\"\\n                    ];\\n\\n    \\n    let octaves = [0, 1, 2, 3, 4]\\n    let selectedKey = keys[0];\\n    let selectedScale = scales[0];\\n    let selectedOctave = octaves[2];\\n\\n    let scaleOfNotes = scales[0].notes;\\n\\n    let harpRows = new Array;\\n\\n    let drumRows = new Array;\\n\\n    let largeHarpRows = [\\n        Array.from({ length: sequenceLength }, (_, i) => ({ note: scaleOfNotes[6], active: false})), \\n        Array.from({ length: sequenceLength  }, (_, i) => ({ note: scaleOfNotes[5], active: false})),\\n        Array.from({ length: sequenceLength  }, (_, i) => ({ note: scaleOfNotes[4], active: false})),\\n        Array.from({ length: sequenceLength  }, (_, i) => ({ note: scaleOfNotes[3], active: false})),\\n        Array.from({ length: sequenceLength  }, (_, i) => ({ note: scaleOfNotes[2], active: false})),\\n        Array.from({ length: sequenceLength  }, (_, i) => ({ note: scaleOfNotes[1], active: false})),\\n        Array.from({ length: sequenceLength  }, (_, i) => ({ note: scaleOfNotes[0], active: false}))\\n    ];\\n\\n    let qwertyHarpRows = [\\n        Array.from({ length: sequenceLength  }, (_, i) => ({ note: scaleOfNotes[3], active: false})),\\n        Array.from({ length: sequenceLength  }, (_, i) => ({ note: scaleOfNotes[2], active: false})),\\n        Array.from({ length: sequenceLength  }, (_, i) => ({ note: scaleOfNotes[1], active: false})),\\n        Array.from({ length: sequenceLength  }, (_, i) => ({ note: scaleOfNotes[0], active: false}))\\n    ];\\n\\n    let largeDrumRows = [\\n        Array.from({ length: sequenceLength  }, (_, i) => ({ note: \\"E4\\", instrumentName: \\"woodblock\\", active: false})),\\n        Array.from({ length: sequenceLength  }, (_, i) => ({ note: \\"D4\\", instrumentName: \\"snare\\", active: false})),\\n        Array.from({ length: sequenceLength  }, (_, i) => ({ note: \\"C4\\", instrumentName: \\"kick\\", active: false})),\\n    ]\\n\\n    let qwertyDrumRows = [];\\n\\n    harpRows = largeHarpRows;\\n    drumRows = largeDrumRows;\\n\\n    Sound.myTransport.scheduleRepeat((time) => {\\n        beat = (beat+1) % sequenceLength;\\n        harpRows.forEach((row, index) => {\\n            let note = row[beat];\\n            if (note.active) {  \\n                Sound.harpSampler.triggerAttackRelease(note.note, \\"8n\\", time);\\n            }\\n        });\\n        drumRows.forEach((row, index) => {\\n            let note = row[beat];\\n            if (note.active) {\\n                Sound.drumSampler.triggerAttackRelease(note.note, \\"8n\\", time);\\n            }\\n        });\\n    }, \\"16n\\");\\n\\n    const changeScale = (key, scale, octave) => {\\n        let octaveOffset = octave * 12;\\n        \\n        let whichNote = harpRows.length-1;\\n            harpRows.forEach((row, index) => {\\n                let keyOffset = key.index;\\n                let scaleNote = scale.notes[whichNote];\\n                let formattedNoted = allTheNotes[scaleNote+keyOffset+octaveOffset];\\n                row.forEach((note) => note.note = formattedNoted)\\n                whichNote = whichNote -1;\\n            })\\n    }\\n\\n    changeScale(selectedKey, selectedScale, selectedOctave);\\n\\n    $: changeScale(selectedKey, selectedScale, selectedOctave);\\n\\n   \\n    $: if (isPlaying) {\\n        Sound.myTransport.bpm.value = bpm;\\n    }\\n\\n    // event handlers\\n\\n    const handleHarpClick = (element) => {\\n        const rowIndex = element.detail.rowIndex;\\n        const noteIndex = element.detail.noteIndex;\\n        harpRows[rowIndex][noteIndex].active = !harpRows[rowIndex][noteIndex].active;\\n        harpRows = harpRows;\\n    };\\n    const handleDrumClick = (element) => {\\n        const rowIndex = element.detail.rowIndex;\\n        const noteIndex = element.detail.noteIndex;\\n        drumRows[rowIndex][noteIndex].active = !drumRows[rowIndex][noteIndex].active;\\n        drumRows = drumRows;\\n    };\\n\\n    const handlePlayClick = (e) => {\\n        if (!isPlaying) Sound.startSound();\\n        Sound.myTransport.bpm.value = bpm;\\n        Sound.myTransport.start();\\n        isPlaying = true;\\n    };\\n\\n    const handleStopClick = (e) => {\\n        Sound.myTransport.stop();\\n        isPlaying = false;\\n    };\\n\\n    const handleSettingsClick = (e) => {\\n        if(viewState === sequencer){\\n            viewState = settings;\\n        } else {\\n            viewState = sequencer;\\n        }\\n        harpRows = harpRows;\\n    }\\n\\n    const handleSave = () => {\\n        saveSeq();\\n        if(viewState === save){\\n            viewState = sequencer;\\n        } else {\\n            viewState = save;\\n        }\\n    }\\n\\n    const handleCopyURLClick = () => {\\n        navigator.clipboard.writeText(saveText);\\n        alert(\\"Copied the text: \\" + saveText);\\n        \\n        viewState = sequencer;\\n    }\\n\\n    const handleLargeSequencerClick = () => {\\n        sequencerType = mouseTouchSequencer;\\n        buildHarpRows(sequencerType);\\n        changeScale(selectedKey, selectedScale, selectedOctave);\\n        fetchQwertyRows = emptyQwertyRows;\\n        viewState = sequencer;\\n    }\\n    \\n    const handleKeyboardSequencerClick = () => {\\n        sequencerType = qwertySequencer;\\n        buildHarpRows(sequencerType);\\n        changeScale(selectedKey, selectedScale, selectedOctave);\\n        fetchQwertyRows = qwertyRows;\\n        viewState = sequencer;\\n    }\\n\\n    const handleHome = () => {\\n        document.location.href = '';\\n        saveText = new_url;\\n    }\\n\\n    const buildHarpRows = (seqType)  => {\\n        console.log(\`buildHarpRows = \${seqType}\`)\\n        if(seqType === mouseTouchSequencer){\\n            harpRows = largeHarpRows;\\n            drumRows = largeDrumRows;\\n            fetchQwertyRows = emptyQwertyRows;\\n        } else {\\n            harpRows = qwertyHarpRows;\\n            drumRows = qwertyDrumRows;\\n            fetchQwertyRows = qwertyRows;\\n        }\\n    }\\n    \\n\\n    \\n\\n    // fullscreen stuff that needs to stay in the app as it effects the reactivity. If it is changed within the class then it doesn't communicate that externally\\n\\n    onMount(() => {\\n        // Add the icon stylesheet dynamically\\n        const link = document.createElement(\\"link\\");\\n        link.rel = \\"stylesheet\\";\\n        link.href = \\"https://fonts.googleapis.com/icon?family=Material+Icons\\";\\n        document.head.appendChild(link);\\n\\n        // remove the link when component is unmounted\\n        return () => {\\n            link.parentNode.removeChild(link);\\n        };\\n    });\\n\\n    const fullscreenchanged = () => {\\n        if (document.fullscreenElement) {\\n            fullScreen.isFull = true;\\n        } else {\\n            fullScreen.isFull = false;\\n        }\\n    }\\n\\n    addEventListener(\\"fullscreenchange\\", fullscreenchanged);\\n\\n    $: icon = fullScreen.isFull ? \\"fullscreen_exit\\" : \\"fullscreen\\";\\n\\n\\n    // save functionality\\n\\n    let url_ob = new URL(document.URL);\\n    let saveText;\\n\\n    const handleSaveRestore = (row, step) => {\\n        if(row < harpRows.length){\\n            harpRows[row][step].active = true;\\n        } else {\\n            let drumRow = row - harpRows.length;\\n            drumRows[drumRow][step].active = true;\\n        }\\n    }\\n\\n    function saveSeq() {\\n        let seqRowsArray = new Array;\\n\\n        for(let i = 0; i < harpRows.length; i++) {\\n            seqRowsArray[i] = new Array;\\n            for(let j = 0; j < sequenceLength; j++) {\\n                seqRowsArray[i][j] = + harpRows[i][j].active;\\n            }\\n        }\\n        for(let i = harpRows.length; i < harpRows.length + drumRows.length; i++) {\\n            seqRowsArray[i] = new Array;\\n            for(let j = 0; j < sequenceLength; j++) {\\n                seqRowsArray[i][j] = + drumRows[i-harpRows.length][j].active;\\n            }\\n        }\\n\\n        let simplifiedArray= new Array;\\n\\n        for(let i = 0; i < seqRowsArray.length; i++) {\\n            simplifiedArray[i] = seqRowsArray[i].join('');\\n        }\\n\\n\\n        let seqHex = new Array;\\n        for(let i = 0; i < simplifiedArray.length; i++){\\n            seqHex[i] = parseInt(simplifiedArray[i], 2).toString(16);\\n        }\\n\\n        let hexToSave = '';\\n        for(let i = 0; i < simplifiedArray.length; i++){\\n            hexToSave = \`\${hexToSave}\${seqHex[i]}_\`;\\n        }\\n\\n        let bpmToSave = parseInt(bpm, 10).toString(16);\\n\\n        console.log(\`sequencer type to save is \${sequencerType}\`);\\n\\n        hexToSave = \`\${hexToSave}_\${bpmToSave}_\${selectedKey.index}_\${selectedScale.index}_\${selectedOctave}_\${sequencerType}\`;\\n        url_ob.hash = \`#\${hexToSave}\`;\\n        let new_url = url_ob.href;\\n        document.location.href = new_url;\\n        saveText = new_url;\\n        console.log(saveText);\\n    }\\n\\n    function retrieveSavedWork() {\\n        if(window.location.hash){\\n            viewState = sequencer;\\n            let savedWork = url_ob.hash; //retrieve saved work from url\\n            let savedWorkNoHash = savedWork.replace('#', ''); // remove the hash from it leaving only the number\\n            let savedWorkAsArray = savedWorkNoHash.split('_');\\n            \\n            let savedSequencerType = savedWorkAsArray.pop();\\n\\n            let savedSequencerTypeAsInt = parseInt(savedSequencerType);\\n\\n            console.log(typeof(savedSequencerTypeAsInt))\\n\\n            buildHarpRows(savedSequencerTypeAsInt);\\n\\n            console.log(\`saved sequencer type = \${savedSequencerType}\`)\\n\\n            console.log(\`saved work as an array = \${savedWorkAsArray}\`)\\n\\n            // i think it's passing the number to the function as a string\\n\\n\\n            let seqRows = harpRows.length + drumRows.length;\\n            \\n            console.log(\`seqRows = \${seqRows}\`);\\n            // the issue here is that seqrows is set before we know how big it should be. \\n\\n            // so can we get this information from the thing first?\\n\\n            \\n       \\n            let savedseqRowBinary = new Array;\\n            \\n            for(let i = 0; i < seqRows; i++){\\n                savedseqRowBinary[i] = (parseInt(savedWorkAsArray[i], 16).toString(2)); // convert seq row to binary\\n            }\\n            \\n            let savedseqRow = new Array;\\n            \\n            for(let i = 0; i < seqRows; i++){\\n            savedseqRow[i] = savedseqRowBinary[i].split(''); // convert to array\\n            }\\n            \\n            let savedTempo = (parseInt(savedWorkAsArray[seqRows+1], 16).toString(10));// convert tempo to decimal\\n                \\n            let savedKey = (parseInt(savedWorkAsArray[seqRows+2], 16).toString(10));\\n        \\n            let savedScale = (parseInt(savedWorkAsArray[seqRows+3], 16).toString(10));\\n        \\n            let savedOctave = (parseInt(savedWorkAsArray[seqRows+4], 16).toString(10));\\n\\n            // let savedSequencerType = (parseInt(savedWorkAsArray[seqRows+5], 16).toString(10));\\n\\n            console.log(\`saved octave = \${savedOctave}\`);\\n      \\n            selectedKey = keys[savedKey];\\n            selectedScale = scales[savedScale];\\n            selectedOctave = octaves[savedOctave];\\n    \\n            for(let i = 0; i < seqRows; i++){\\n                for(let j = sequenceLength - 1; j >= 0 ; j--){\\n                    let a = [];\\n                    if(savedseqRow[i].length > 0){\\n                        a[j] = savedseqRow[i].pop();\\n                        }else{\\n                        a[j] = 0;\\n                        }\\n                    if(a[j] === \\"1\\"){ // you need to put \\"\\" around the number because you are comparing a number with a string\\n                        handleSaveRestore(i, j);\\n                    }\\n                }\\n            }\\n    \\n            if(isNaN(savedTempo) === false){\\n                bpm = savedTempo;\\n            }\\n\\n        }\\n\\n    }\\n\\n    const handleKeyDown = (e) => {\\n        let key = e.code;\\n        console.log(\`keydown \${key}\`);\\n        whichKey(key);\\n    };\\n\\n    const handleKeyUp = (e) => {\\n        let key = e.code;\\n        \\n    };\\n\\n    const qwertyRows = [  ['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8'],\\n                        ['KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI'],\\n                        ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK'],\\n                        ['KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma']];\\n\\n\\n    let emptyQwertyRows = new Array;\\n\\n    for (let i = 0; i < harpRows.length; i++){\\n        emptyQwertyRows[i] = new Array;\\n        for(let j = 0; j < sequenceLength; j++){\\n            emptyQwertyRows[i][j] = '';\\n        }\\n    }\\n\\n    let fetchQwertyRows = emptyQwertyRows;\\n\\n    const whichKey = (key) => {\\n        for (let i = 0; i < qwertyRows.length; i++) {\\n            for (let j = 0; j < sequenceLength; j++) {           \\n                if (key === qwertyRows[i][j]) {\\n                    console.log(i, j)\\n                    harpRows[i][j].active = !harpRows[i][j].active;\\n                }\\n            }\\n        }\\n        if (key === 'Space') {\\n            if (isPlaying){\\n                handleStopClick();\\n            }else{\\n                handlePlayClick();\\n            }\\n        }\\n    };\\n\\n    \\n    document.addEventListener(\\"keydown\\", handleKeyDown);\\n    \\n    document.addEventListener(\\"keyup\\", handleKeyUp);\\n    \\n    retrieveSavedWork();\\n<\/script>\\n\\n<div class=\\"fs\\" bind:this={fullScreen.fsContainer}>\\n\\n    <div class=\\"container\\">\\n        {#if viewState === home}\\n            <img src=\\"/images/orchlablogo.png\\" alt=\\"Orchlab logo\\" class=\\"orchlab-logo\\">\\n\\n            <h1 class=\\"title common-text\\">Patterns</h1>\\n\\n            <p class=\\"body common-text\\">\\n                Click on the buttons below to begin.\\n            </p>\\n            \\n            <div class=\\"navigation-buttons\\">\\n                <NavigationButton\\n                    on:clicked={handleLargeSequencerClick}\\n                    instrumentName = \\"mouse-and-touch-sequencer\\"\\n                />\\n                <NavigationButton\\n                    on:clicked={handleKeyboardSequencerClick}\\n                    instrumentName = \\"keyboard-sequencer\\"\\n                />\\n            </div>\\n\\n            <p class=\\"body common-text\\">\\n                Instructions: <br><br>\\n                Click Play to start. <br><br>\\n                Click on the buttons to switch them off or on. <br><br>\\n                Change the speed using the tempo slider. <br><br>\\n                Save your work and share it with friends. <br><br>\\n                On Apple phones turn off silent mode.\\n            </p>\\n\\n            <div class=\\"logo-bar\\">\\n\\n            <img src=\\"/images/LPO_logo.png\\" alt=\\"London Philharmonic Orchestra logo\\" class=\\"lpo-logo\\">\\n\\n            <img src=\\"/images/DMLogo.png\\" alt=\\"Drake Music logo\\" class=\\"dm-logo\\">\\n\\n            </div>\\n\\n        {:else if viewState === info}\\n            <h3 class=\\"saved-text common-text\\">info</h3>\\n        {:else}\\n            <div class=\\"transport-top\\">\\n                \\n                {#if fullScreen.fullscreenSupport}\\n                    <button on:click={fullScreen.fsToggle}>\\n                        <i class=\\"material-icons md-36\\">{icon}</i>\\n                    </button>\\n                {/if}\\n\\n                {#if viewState === settings}\\n                    <TransportButton \\n                    on:clicked={handleSettingsClick}\\n                    buttonName = \\"{{name: \\"Back\\", colour: \\"powderblue\\"}}\\"\\n                    />\\n                {:else}\\n                    <TransportButton \\n                    on:clicked={handleSettingsClick}\\n                    buttonName = \\"{{name: \\"Settings\\", colour: \\"grey\\"}}\\"\\n                    />\\n                {/if}\\n\\n                <TransportButton \\n                        on:clicked={handleHome}\\n                        buttonName = \\"{{name: \\"Home\\", colour: \\"blue\\"}}\\"\\n                        />\\n\\n                \\n\\n                {#if viewState === save}\\n                    <TransportButton \\n                    on:clicked={handleSave}\\n                    buttonName = \\"{{name: \\"Back\\", colour: \\"orange\\"}}\\"\\n                    />\\n                {:else}\\n                    <TransportButton \\n                    on:clicked={handleSave}\\n                    buttonName = \\"{{name: \\"Save\\", colour: \\"orange\\"}}\\"\\n                    />\\n                {/if}\\n\\n            </div>\\n            \\n            {#if viewState === sequencer}\\n                <div class=\\"sequencer\\">\\n                    {#each harpRows as row, i}\\n                        {#each row as note, j}\\n                            <SequencerStep\\n                                on:clicked={handleHarpClick}\\n                                instrumentName = \\"harp\\"\\n                                rowIndex = \\"{i}\\"\\n                                noteIndex = \\"{j}\\"\\n                                noteActive = \\"{note.active}\\"\\n                                noteLive = \\"{j === beat}\\"\\n                                qwerty = \\"{fetchQwertyRows[i][j]}\\"\\n                            />\\n                        {/each}\\n                    {/each}\\n                    {#each drumRows as row, i}\\n                        {#each row as note, j}\\n                            <SequencerStep\\n                                on:clicked={handleDrumClick}\\n                                instrumentName = {note.instrumentName}\\n                                rowIndex = \\"{i}\\"\\n                                noteIndex = \\"{j}\\"\\n                                noteActive = \\"{note.active}\\"\\n                                noteLive = \\"{j === beat}\\"\\n                            />\\n                        {/each}\\n                    {/each}\\n                </div>\\n            {:else if viewState === settings}\\n            \\n                <div class=\\"select-div\\">\\n                    <label class=\\"select-label common-text\\" for=\\"keymenu\\">Change Key</label>\\n\\n                    <select id=\\"keymenu\\" class=\\"select-menu\\" bind:value={selectedKey}>\\n                        {#each keys as option}\\n                            <option value={option}>{option.key}</option>\\n                        {/each}\\t\\n                    </select>\\n                \\n                    <label class=\\"select-label common-text\\" for=\\"scalemenu\\">Change Scale</label>\\n\\n                    <select id=\\"scalemenu\\" class=\\"select-menu\\" bind:value={selectedScale}>\\n                        {#each scales as option}\\n                            <option value={option}>{option.label}</option>\\n                        {/each}\\t\\n                    </select>\\n\\n                    <label class=\\"select-label common-text\\" for=\\"octavemenu\\">Change Octave</label>\\n\\n                    <select id=\\"octavemenu\\" class=\\"select-menu\\" bind:value={selectedOctave}>\\n                        {#each octaves as option}\\n                            <option value={option}>{option}</option>\\n                        {/each}\\t\\n                    </select>\\n\\n                </div>\\n\\n            {:else if viewState === save}\\n                \\n                <div class=\\"save-text-box\\">\\n                    <h3 class=\\"saved-text common-text\\">Share this URL to share your work.</h3>\\n\\n                    <h3 class=\\"saved-text common-text\\" id=\\"save-text\\">{saveText}</h3>\\n                    \\n                    {#if navigator.clipboard}\\n                        <TransportButton \\n                        on:clicked={handleCopyURLClick}\\n                        buttonName = \\"{{name: \\"Copy URL To Clipboard\\", colour: \\"blue\\"}}\\"\\n                        />\\n                    {:else}\\n                        <TransportButton \\n                        on:clicked={handleSave}\\n                        buttonName = \\"{{name: \\"Back\\", colour: \\"blue\\"}}\\"\\n                        />\\n                    {/if}\\n                </div>\\n        \\n            {/if}\\n\\n            <div class=\\"bpm-controls\\">\\n                {#if isPlaying}\\n                    <TransportButton \\n                    on:clicked={handleStopClick}\\n                    buttonName = \\"{{name: \\"Stop\\", colour: \\"Red\\"}}\\"\\n                    />\\n                {:else}\\n                    <TransportButton \\n                    on:clicked={handlePlayClick}\\n                    buttonName = \\"{{name: \\"Play\\", colour: \\"green\\"}}\\"\\n                    />\\n                {/if}\\n                <label class=\\"bpm-value common-text\\" for=\\"bpm\\" >{bpm} BPM</label>\\n                <input class=\\"bpm-slider\\" type=\\"range\\" id=\\"bpm\\" min=\\"40\\" max=\\"170\\" bind:value={bpm} />\\n            </div>\\n        {/if}\\n    </div>\\n</div>\\n\\n\\n<style>\\n\\n    :global(body) {\\n        background: #222;\\n    }\\n\\n    .container {\\n        max-width: 600px;\\n        height: 95vh;\\n        margin-inline: auto;  \\n    }\\n    \\n    \\n    @media (min-width: 2000px) {\\n        .container {\\n                max-width: 900px;\\n                height: 95vh;\\n                margin-inline: auto;  \\n            }\\n    }\\n    \\n    @media (orientation: portrait) {\\n        .container {\\n            max-width: 700px;\\n            height: 95vh;\\n            margin-inline: auto;  \\n        } \\n    }\\n\\n    button {\\n        margin: 0 1em 0 0.5em;\\n        font-size: 2em;\\n    }\\n\\n    .save-text-box {\\n        margin: 5%;\\n    }\\n\\n    .common-text {\\n        font-family: 'Courier New', Courier, monospace;\\n        font-weight: bold;\\n        color: white;\\n        text-align: center;\\n    }\\n\\n    .saved-text {\\n        font-size: 1em;\\n        overflow-wrap: break-word;\\n    }\\n\\n    .title {\\n        font-size: 3em;\\n    }\\n\\n    .sequencer {\\n        display: grid;\\n        grid-template-columns: repeat(8, 1fr);\\n        gap: 5px;\\n        margin: auto;\\n        justify-content: center;\\n    }\\n\\n    .orchlab-logo {\\n        width: 60%;\\n        display: block;\\n        margin-left: auto;\\n        margin-right: auto;\\n    }\\n\\n    .lpo-logo {\\n        width: 60%;\\n        display: block;\\n    \\n        margin-right: auto;\\n    }\\n\\n    .dm-logo {\\n        width: 60%;\\n        display: block;\\n        margin-left: auto;\\n      \\n    }\\n\\n    .navigation-buttons {\\n        display: grid;\\n        grid-template-columns: repeat(2, 1fr);\\n        gap: 10px;\\n        margin: auto;\\n        justify-content: center;\\n        width: 70%;\\n    }\\n\\n    .logo-bar {\\n        display: grid;\\n        grid-template-columns: repeat(2, 1fr);\\n        gap: 10px;\\n        margin: auto;\\n        justify-content: center;\\n        width: 100%;\\n    }\\n\\n    .select-menu {\\n        margin: 2em;\\n        justify-content: center;\\n        font-family: 'Courier New', Courier, monospace;\\n        font-weight: bold;\\n        font-size: 1em;\\n    }\\n\\n    .select-label {\\n        background-size: 8vw; \\n        margin: 0 1em 1em 0;\\n        font-size: 1em;\\n    }\\n\\n    .select-div {\\n        display: grid;\\n    }\\n\\n    .transport-top {\\n        display: flex;\\n        align-items: center;\\n        justify-content: center;\\n        margin: 0 1em 0;\\n        height: 10%;\\n    }\\n\\n    .bpm-controls {\\n        display: flex;\\n        align-items: center;\\n        justify-content: center;\\n        margin: 0 1em 0;\\n        height: 15%;\\n    }\\n\\n    .bpm-controls label {\\n        color: #fff;\\n    }\\n\\n    .bpm-value {\\n        width: 20%;\\n        background-size: 8vw; \\n        margin: 0 1em 1em 1em;\\n        font-size: 1em;\\n    }\\n\\n    .bpm-slider {\\n        width: 150%;\\n        margin: 0 1em 1em 0;\\n    }\\n\\n    :global(.lively) {\\n        background: #05f18f;;\\n    }\\n</style>"],"names":[],"mappings":"AA4mBY,IAAM,CACV,UAAU,CAAE,IAChB,CAEA,sCAAW,CACP,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,IACnB,CAGA,MAAO,YAAY,MAAM,CAAE,CACvB,sCAAW,CACH,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,IACnB,CACR,CAEA,MAAO,cAAc,QAAQ,CAAE,CAC3B,sCAAW,CACP,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,IACnB,CACJ,CAEA,kCAAO,CACH,MAAM,CAAE,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,KAAK,CACrB,SAAS,CAAE,GACf,CAEA,0CAAe,CACX,MAAM,CAAE,EACZ,CAEA,wCAAa,CACT,WAAW,CAAE,aAAa,CAAC,CAAC,OAAO,CAAC,CAAC,SAAS,CAC9C,WAAW,CAAE,IAAI,CACjB,KAAK,CAAE,KAAK,CACZ,UAAU,CAAE,MAChB,CAEA,uCAAY,CACR,SAAS,CAAE,GAAG,CACd,aAAa,CAAE,UACnB,CAEA,kCAAO,CACH,SAAS,CAAE,GACf,CAEA,sCAAW,CACP,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,GAAG,CAAC,CACrC,GAAG,CAAE,GAAG,CACR,MAAM,CAAE,IAAI,CACZ,eAAe,CAAE,MACrB,CAEA,yCAAc,CACV,KAAK,CAAE,GAAG,CACV,OAAO,CAAE,KAAK,CACd,WAAW,CAAE,IAAI,CACjB,YAAY,CAAE,IAClB,CAEA,qCAAU,CACN,KAAK,CAAE,GAAG,CACV,OAAO,CAAE,KAAK,CAEd,YAAY,CAAE,IAClB,CAEA,oCAAS,CACL,KAAK,CAAE,GAAG,CACV,OAAO,CAAE,KAAK,CACd,WAAW,CAAE,IAEjB,CAEA,+CAAoB,CAChB,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,GAAG,CAAC,CACrC,GAAG,CAAE,IAAI,CACT,MAAM,CAAE,IAAI,CACZ,eAAe,CAAE,MAAM,CACvB,KAAK,CAAE,GACX,CAEA,qCAAU,CACN,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,GAAG,CAAC,CACrC,GAAG,CAAE,IAAI,CACT,MAAM,CAAE,IAAI,CACZ,eAAe,CAAE,MAAM,CACvB,KAAK,CAAE,IACX,CAEA,wCAAa,CACT,MAAM,CAAE,GAAG,CACX,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,aAAa,CAAC,CAAC,OAAO,CAAC,CAAC,SAAS,CAC9C,WAAW,CAAE,IAAI,CACjB,SAAS,CAAE,GACf,CAEA,yCAAc,CACV,eAAe,CAAE,GAAG,CACpB,MAAM,CAAE,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CACnB,SAAS,CAAE,GACf,CAEA,uCAAY,CACR,OAAO,CAAE,IACb,CAEA,0CAAe,CACX,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,MAAM,CAAE,CAAC,CAAC,GAAG,CAAC,CAAC,CACf,MAAM,CAAE,GACZ,CAEA,yCAAc,CACV,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,MAAM,CAAE,CAAC,CAAC,GAAG,CAAC,CAAC,CACf,MAAM,CAAE,GACZ,CAEA,2BAAa,CAAC,mBAAM,CAChB,KAAK,CAAE,IACX,CAEA,sCAAW,CACP,KAAK,CAAE,GAAG,CACV,eAAe,CAAE,GAAG,CACpB,MAAM,CAAE,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CACrB,SAAS,CAAE,GACf,CAEA,uCAAY,CACR,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,CACtB,CAEQ,OAAS,CACb,UAAU,CAAE,OAAO,CAAC,CACxB"}`
};
const sequenceLength = 8;
let home = 0;
let info = 1;
let sequencer = 2;
let settings = 3;
let save = 4;
let mouseTouchSequencer = 0;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let icon;
  const fullScreen = new FullScreen(false, null);
  let bpm = 99;
  let beat = -1;
  let isPlaying = false;
  let viewState = home;
  let scales = [
    {
      label: "Major",
      notes: [0, 2, 4, 5, 7, 9, 11, 12, 14, 16, 17, 19],
      index: 0
    },
    {
      label: "Minor",
      notes: [0, 2, 3, 5, 7, 8, 10, 12, 14, 15, 17, 19],
      index: 1
    },
    {
      label: "Pentatonic",
      notes: [0, 2, 4, 7, 9, 12, 14, 16, 19, 21, 24, 26],
      index: 2
    },
    {
      label: "majorBlues",
      notes: [0, 2, 3, 4, 7, 9, 12, 14, 15, 16, 19, 21],
      index: 3
    },
    {
      label: "minorBlues",
      notes: [0, 3, 5, 6, 7, 10, 12, 15, 17, 18, 19, 22],
      index: 4
    }
  ];
  let keys = [
    { key: "C", index: 0 },
    { key: "C#", index: 1 },
    { key: "D", index: 2 },
    { key: "D#", index: 3 },
    { key: "E", index: 4 },
    { key: "F", index: 5 },
    { key: "F#", index: 6 },
    { key: "G", index: 7 },
    { key: "G#", index: 8 },
    { key: "A", index: 9 },
    { key: "A#", index: 10 },
    { key: "B", index: 11 }
  ];
  let allTheNotes = [
    "C2",
    "C#2",
    "D2",
    "D#2",
    "E2",
    "F2",
    "F#2",
    "G2",
    "G#2",
    "A2",
    "A#2",
    "B2",
    "C3",
    "C#3",
    "D3",
    "D#3",
    "E3",
    "F3",
    "F#3",
    "G3",
    "G#3",
    "A3",
    "A#3",
    "B3",
    "C4",
    "C#4",
    "D4",
    "D#4",
    "E4",
    "F4",
    "F#4",
    "G4",
    "G#4",
    "A4",
    "A#4",
    "B4",
    "C5",
    "C#5",
    "D5",
    "D#5",
    "E5",
    "F5",
    "F#5",
    "G5",
    "G#5",
    "A5",
    "A#5",
    "B5",
    "C6",
    "C#6",
    "D6",
    "D#6",
    "E6",
    "F6",
    "F#6",
    "G6",
    "G#6",
    "A6",
    "A#6",
    "B6",
    "C7",
    "C#7",
    "D7",
    "D#7",
    "E7",
    "F7",
    "F#7",
    "G7",
    "G#7",
    "A7",
    "A#7",
    "B7",
    "C8",
    "C#8",
    "D8",
    "D#8",
    "E8",
    "F8",
    "F#8",
    "G8",
    "G#8",
    "A8",
    "A#8",
    "B8"
  ];
  let octaves = [0, 1, 2, 3, 4];
  let selectedKey = keys[0];
  let selectedScale = scales[0];
  let selectedOctave = octaves[2];
  let scaleOfNotes = scales[0].notes;
  let harpRows = new Array();
  let drumRows = new Array();
  let largeHarpRows = [
    Array.from({ length: sequenceLength }, (_, i) => ({ note: scaleOfNotes[6], active: false })),
    Array.from({ length: sequenceLength }, (_, i) => ({ note: scaleOfNotes[5], active: false })),
    Array.from({ length: sequenceLength }, (_, i) => ({ note: scaleOfNotes[4], active: false })),
    Array.from({ length: sequenceLength }, (_, i) => ({ note: scaleOfNotes[3], active: false })),
    Array.from({ length: sequenceLength }, (_, i) => ({ note: scaleOfNotes[2], active: false })),
    Array.from({ length: sequenceLength }, (_, i) => ({ note: scaleOfNotes[1], active: false })),
    Array.from({ length: sequenceLength }, (_, i) => ({ note: scaleOfNotes[0], active: false }))
  ];
  let qwertyHarpRows = [
    Array.from({ length: sequenceLength }, (_, i) => ({ note: scaleOfNotes[3], active: false })),
    Array.from({ length: sequenceLength }, (_, i) => ({ note: scaleOfNotes[2], active: false })),
    Array.from({ length: sequenceLength }, (_, i) => ({ note: scaleOfNotes[1], active: false })),
    Array.from({ length: sequenceLength }, (_, i) => ({ note: scaleOfNotes[0], active: false }))
  ];
  let largeDrumRows = [
    Array.from({ length: sequenceLength }, (_, i) => ({
      note: "E4",
      instrumentName: "woodblock",
      active: false
    })),
    Array.from({ length: sequenceLength }, (_, i) => ({
      note: "D4",
      instrumentName: "snare",
      active: false
    })),
    Array.from({ length: sequenceLength }, (_, i) => ({
      note: "C4",
      instrumentName: "kick",
      active: false
    }))
  ];
  let qwertyDrumRows = [];
  harpRows = largeHarpRows;
  drumRows = largeDrumRows;
  myTransport.scheduleRepeat(
    (time) => {
      beat = (beat + 1) % sequenceLength;
      harpRows.forEach((row, index) => {
        let note = row[beat];
        if (note.active) {
          harpSampler.triggerAttackRelease(note.note, "8n", time);
        }
      });
      drumRows.forEach((row, index) => {
        let note = row[beat];
        if (note.active) {
          drumSampler.triggerAttackRelease(note.note, "8n", time);
        }
      });
    },
    "16n"
  );
  const changeScale = (key, scale, octave) => {
    let octaveOffset = octave * 12;
    let whichNote = harpRows.length - 1;
    harpRows.forEach((row, index) => {
      let keyOffset = key.index;
      let scaleNote = scale.notes[whichNote];
      let formattedNoted = allTheNotes[scaleNote + keyOffset + octaveOffset];
      row.forEach((note) => note.note = formattedNoted);
      whichNote = whichNote - 1;
    });
  };
  changeScale(selectedKey, selectedScale, selectedOctave);
  const handlePlayClick = (e) => {
    if (!isPlaying) startSound();
    myTransport.bpm.value = bpm;
    myTransport.start();
    isPlaying = true;
  };
  const handleStopClick = (e) => {
    myTransport.stop();
    isPlaying = false;
  };
  const buildHarpRows = (seqType) => {
    console.log(`buildHarpRows = ${seqType}`);
    if (seqType === mouseTouchSequencer) {
      harpRows = largeHarpRows;
      drumRows = largeDrumRows;
      fetchQwertyRows = emptyQwertyRows;
    } else {
      harpRows = qwertyHarpRows;
      drumRows = qwertyDrumRows;
      fetchQwertyRows = qwertyRows;
    }
  };
  const fullscreenchanged = () => {
    if (document.fullscreenElement) {
      fullScreen.isFull = true;
    } else {
      fullScreen.isFull = false;
    }
  };
  addEventListener("fullscreenchange", fullscreenchanged);
  let url_ob = new URL(document.URL);
  let saveText;
  const handleSaveRestore = (row, step) => {
    if (row < harpRows.length) {
      harpRows[row][step].active = true;
    } else {
      let drumRow = row - harpRows.length;
      drumRows[drumRow][step].active = true;
    }
  };
  function retrieveSavedWork() {
    if (window.location.hash) {
      viewState = sequencer;
      let savedWork = url_ob.hash;
      let savedWorkNoHash = savedWork.replace("#", "");
      let savedWorkAsArray = savedWorkNoHash.split("_");
      let savedSequencerType = savedWorkAsArray.pop();
      let savedSequencerTypeAsInt = parseInt(savedSequencerType);
      console.log(typeof savedSequencerTypeAsInt);
      buildHarpRows(savedSequencerTypeAsInt);
      console.log(`saved sequencer type = ${savedSequencerType}`);
      console.log(`saved work as an array = ${savedWorkAsArray}`);
      let seqRows = harpRows.length + drumRows.length;
      console.log(`seqRows = ${seqRows}`);
      let savedseqRowBinary = new Array();
      for (let i = 0; i < seqRows; i++) {
        savedseqRowBinary[i] = parseInt(savedWorkAsArray[i], 16).toString(2);
      }
      let savedseqRow = new Array();
      for (let i = 0; i < seqRows; i++) {
        savedseqRow[i] = savedseqRowBinary[i].split("");
      }
      let savedTempo = parseInt(savedWorkAsArray[seqRows + 1], 16).toString(10);
      let savedKey = parseInt(savedWorkAsArray[seqRows + 2], 16).toString(10);
      let savedScale = parseInt(savedWorkAsArray[seqRows + 3], 16).toString(10);
      let savedOctave = parseInt(savedWorkAsArray[seqRows + 4], 16).toString(10);
      console.log(`saved octave = ${savedOctave}`);
      selectedKey = keys[savedKey];
      selectedScale = scales[savedScale];
      selectedOctave = octaves[savedOctave];
      for (let i = 0; i < seqRows; i++) {
        for (let j = sequenceLength - 1; j >= 0; j--) {
          let a = [];
          if (savedseqRow[i].length > 0) {
            a[j] = savedseqRow[i].pop();
          } else {
            a[j] = 0;
          }
          if (a[j] === "1") {
            handleSaveRestore(i, j);
          }
        }
      }
      if (isNaN(savedTempo) === false) {
        bpm = savedTempo;
      }
    }
  }
  const handleKeyDown = (e) => {
    let key = e.code;
    console.log(`keydown ${key}`);
    whichKey(key);
  };
  const handleKeyUp = (e) => {
    e.code;
  };
  const qwertyRows = [
    [
      "Digit1",
      "Digit2",
      "Digit3",
      "Digit4",
      "Digit5",
      "Digit6",
      "Digit7",
      "Digit8"
    ],
    ["KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI"],
    ["KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK"],
    ["KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma"]
  ];
  let emptyQwertyRows = new Array();
  for (let i = 0; i < harpRows.length; i++) {
    emptyQwertyRows[i] = new Array();
    for (let j = 0; j < sequenceLength; j++) {
      emptyQwertyRows[i][j] = "";
    }
  }
  let fetchQwertyRows = emptyQwertyRows;
  const whichKey = (key) => {
    for (let i = 0; i < qwertyRows.length; i++) {
      for (let j = 0; j < sequenceLength; j++) {
        if (key === qwertyRows[i][j]) {
          console.log(i, j);
          harpRows[i][j].active = !harpRows[i][j].active;
        }
      }
    }
    if (key === "Space") {
      if (isPlaying) {
        handleStopClick();
      } else {
        handlePlayClick();
      }
    }
  };
  document.addEventListener("keydown", handleKeyDown);
  document.addEventListener("keyup", handleKeyUp);
  retrieveSavedWork();
  $$result.css.add(css);
  {
    changeScale(selectedKey, selectedScale, selectedOctave);
  }
  {
    if (isPlaying) {
      myTransport.bpm.value = bpm;
    }
  }
  icon = fullScreen.isFull ? "fullscreen_exit" : "fullscreen";
  return `<div class="fs"${add_attribute("this", fullScreen.fsContainer, 0)}><div class="container svelte-n30lvd">${viewState === home ? `<img src="/images/orchlablogo.png" alt="Orchlab logo" class="orchlab-logo svelte-n30lvd"> <h1 class="title common-text svelte-n30lvd" data-svelte-h="svelte-uagaj1">Patterns</h1> <p class="body common-text svelte-n30lvd" data-svelte-h="svelte-p6idx6">Click on the buttons below to begin.</p> <div class="navigation-buttons svelte-n30lvd">${validate_component(NavigationButton, "NavigationButton").$$render(
    $$result,
    {
      instrumentName: "mouse-and-touch-sequencer"
    },
    {},
    {}
  )} ${validate_component(NavigationButton, "NavigationButton").$$render($$result, { instrumentName: "keyboard-sequencer" }, {}, {})}</div> <p class="body common-text svelte-n30lvd" data-svelte-h="svelte-2zv91z">Instructions: <br><br>
                Click Play to start. <br><br>
                Click on the buttons to switch them off or on. <br><br>
                Change the speed using the tempo slider. <br><br>
                Save your work and share it with friends. <br><br>
                On Apple phones turn off silent mode.</p> <div class="logo-bar svelte-n30lvd" data-svelte-h="svelte-qsgtua"><img src="/images/LPO_logo.png" alt="London Philharmonic Orchestra logo" class="lpo-logo svelte-n30lvd"> <img src="/images/DMLogo.png" alt="Drake Music logo" class="dm-logo svelte-n30lvd"></div>` : `${viewState === info ? `<h3 class="saved-text common-text svelte-n30lvd" data-svelte-h="svelte-1anghf7">info</h3>` : `<div class="transport-top svelte-n30lvd">${fullScreen.fullscreenSupport ? `<button class="svelte-n30lvd"><i class="material-icons md-36">${escape(icon)}</i></button>` : ``} ${viewState === settings ? `${validate_component(TransportButton, "TransportButton").$$render(
    $$result,
    {
      buttonName: { name: "Back", colour: "powderblue" }
    },
    {},
    {}
  )}` : `${validate_component(TransportButton, "TransportButton").$$render(
    $$result,
    {
      buttonName: { name: "Settings", colour: "grey" }
    },
    {},
    {}
  )}`} ${validate_component(TransportButton, "TransportButton").$$render(
    $$result,
    {
      buttonName: { name: "Home", colour: "blue" }
    },
    {},
    {}
  )} ${viewState === save ? `${validate_component(TransportButton, "TransportButton").$$render(
    $$result,
    {
      buttonName: { name: "Back", colour: "orange" }
    },
    {},
    {}
  )}` : `${validate_component(TransportButton, "TransportButton").$$render(
    $$result,
    {
      buttonName: { name: "Save", colour: "orange" }
    },
    {},
    {}
  )}`}</div> ${viewState === sequencer ? `<div class="sequencer svelte-n30lvd">${each(harpRows, (row, i) => {
    return `${each(row, (note, j) => {
      return `${validate_component(SequencerStep, "SequencerStep").$$render(
        $$result,
        {
          instrumentName: "harp",
          rowIndex: i,
          noteIndex: j,
          noteActive: note.active,
          noteLive: j === beat,
          qwerty: fetchQwertyRows[i][j]
        },
        {},
        {}
      )}`;
    })}`;
  })} ${each(drumRows, (row, i) => {
    return `${each(row, (note, j) => {
      return `${validate_component(SequencerStep, "SequencerStep").$$render(
        $$result,
        {
          instrumentName: note.instrumentName,
          rowIndex: i,
          noteIndex: j,
          noteActive: note.active,
          noteLive: j === beat
        },
        {},
        {}
      )}`;
    })}`;
  })}</div>` : `${viewState === settings ? `<div class="select-div svelte-n30lvd"><label class="select-label common-text svelte-n30lvd" for="keymenu" data-svelte-h="svelte-118w9i0">Change Key</label> <select id="keymenu" class="select-menu svelte-n30lvd">${each(keys, (option) => {
    return `<option${add_attribute("value", option, 0)}>${escape(option.key)}</option>`;
  })}</select> <label class="select-label common-text svelte-n30lvd" for="scalemenu" data-svelte-h="svelte-czfdn0">Change Scale</label> <select id="scalemenu" class="select-menu svelte-n30lvd">${each(scales, (option) => {
    return `<option${add_attribute("value", option, 0)}>${escape(option.label)}</option>`;
  })}</select> <label class="select-label common-text svelte-n30lvd" for="octavemenu" data-svelte-h="svelte-12ld14q">Change Octave</label> <select id="octavemenu" class="select-menu svelte-n30lvd">${each(octaves, (option) => {
    return `<option${add_attribute("value", option, 0)}>${escape(option)}</option>`;
  })}</select></div>` : `${viewState === save ? `<div class="save-text-box svelte-n30lvd"><h3 class="saved-text common-text svelte-n30lvd" data-svelte-h="svelte-1isg4tb">Share this URL to share your work.</h3> <h3 class="saved-text common-text svelte-n30lvd" id="save-text">${escape(saveText)}</h3> ${navigator.clipboard ? `${validate_component(TransportButton, "TransportButton").$$render(
    $$result,
    {
      buttonName: {
        name: "Copy URL To Clipboard",
        colour: "blue"
      }
    },
    {},
    {}
  )}` : `${validate_component(TransportButton, "TransportButton").$$render(
    $$result,
    {
      buttonName: { name: "Back", colour: "blue" }
    },
    {},
    {}
  )}`}</div>` : ``}`}`} <div class="bpm-controls svelte-n30lvd">${isPlaying ? `${validate_component(TransportButton, "TransportButton").$$render(
    $$result,
    {
      buttonName: { name: "Stop", colour: "Red" }
    },
    {},
    {}
  )}` : `${validate_component(TransportButton, "TransportButton").$$render(
    $$result,
    {
      buttonName: { name: "Play", colour: "green" }
    },
    {},
    {}
  )}`} <label class="bpm-value common-text svelte-n30lvd" for="bpm">${escape(bpm)} BPM</label> <input class="bpm-slider svelte-n30lvd" type="range" id="bpm" min="40" max="170"${add_attribute("value", bpm, 0)}></div>`}`}</div> </div>`;
});
export {
  Page as default
};
