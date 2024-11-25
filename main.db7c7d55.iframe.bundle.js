(self.webpackChunkstorybook_ui=self.webpackChunkstorybook_ui||[]).push([[792],{"./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./GetStarted.mdx":["./src/GetStarted.mdx",681,266]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$",module.exports=webpackAsyncContext},"./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./button/BaseButton.stories":["./src/button/BaseButton.stories.ts",635],"./button/BaseButton.stories.ts":["./src/button/BaseButton.stories.ts",635],"./formFields/textArea.stories":["./src/formFields/textArea.stories.ts",177],"./formFields/textArea.stories.ts":["./src/formFields/textArea.stories.ts",177],"./formFields/textInput.stories":["./src/formFields/textInput.stories.ts",714],"./formFields/textInput.stories.ts":["./src/formFields/textInput.stories.ts",714],"./grid/GridColumn.stories":["./src/grid/GridColumn.stories.ts",386],"./grid/GridColumn.stories.ts":["./src/grid/GridColumn.stories.ts",386],"./grid/GridContainer.stories":["./src/grid/GridContainer.stories.tsx",141],"./grid/GridContainer.stories.tsx":["./src/grid/GridContainer.stories.tsx",141],"./link/Baselink.stories":["./src/link/Baselink.stories.ts",803],"./link/Baselink.stories.ts":["./src/link/Baselink.stories.ts",803],"./zz-examples/Simpleform.stories":["./src/zz-examples/Simpleform.stories.ts",958],"./zz-examples/Simpleform.stories.ts":["./src/zz-examples/Simpleform.stories.ts",958]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return __webpack_require__.e(ids[1]).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$",module.exports=webpackAsyncContext},"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var external_STORYBOOK_MODULE_CHANNELS_=__webpack_require__("storybook/internal/channels"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global");const importers=[async path=>{if(!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.mdx)$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$")("./"+pathRemainder)},async path=>{if(!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|mjs|ts|tsx))$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$")("./"+pathRemainder)}];const channel=(0,external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({page:"preview"});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),"DEVELOPMENT"===external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE&&(window.__STORYBOOK_SERVER_CHANNEL__=channel);const preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb((async function importFn(path){for(let i=0;i<importers.length;i++){const moduleExports=await(x=()=>importers[i](path),x());if(moduleExports)return moduleExports}var x}),(()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("../../node_modules/@storybook/web-components/dist/entry-preview.mjs"),__webpack_require__("../../node_modules/@storybook/web-components/dist/entry-preview-docs.mjs"),__webpack_require__("../../node_modules/@storybook/addon-essentials/dist/docs/preview.mjs"),__webpack_require__("../../node_modules/@storybook/addon-essentials/dist/actions/preview.mjs"),__webpack_require__("../../node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs"),__webpack_require__("../../node_modules/@storybook/addon-essentials/dist/viewport/preview.mjs"),__webpack_require__("../../node_modules/@storybook/addon-essentials/dist/measure/preview.mjs"),__webpack_require__("../../node_modules/@storybook/addon-essentials/dist/outline/preview.mjs"),__webpack_require__("../../node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs"),__webpack_require__("../../node_modules/@storybook/addon-a11y/preview.js"),__webpack_require__("./.storybook/preview.ts")])));window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel},"../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./.storybook/storyStyles.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".story-description {\n  font-size: 12px;\n}\n\n.story-title {\n  display: block;\n  border-bottom: 1px solid var(--colors-primary-base);\n  font-weight: bold;\n}\n","",{version:3,sources:["webpack://./.storybook/storyStyles.css"],names:[],mappings:"AAAA;EACE,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,mDAAmD;EACnD,iBAAiB;AACnB",sourcesContent:[".story-description {\n  font-size: 12px;\n}\n\n.story-title {\n  display: block;\n  border-bottom: 1px solid var(--colors-primary-base);\n  font-weight: bold;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!../../packages/ui/dist/theme/global-style.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  line-height: 1.5;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: var(--global-genericFontFamily);\n  font-size: var(--global-fontSize-smallScreen);\n  color: var(--colors-textPrimary-base);\n  background: var(--colors-background-base);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  text-rendering: optimizeLegibility;\n  overflow-x: hidden;\n}\n\n@media only screen and (min-width: 768px) {\n  body {\n    font-size: var(--global-fontSize-mediumScreen);\n  }\n}\n\n@media only screen and (min-width: 1200px) {\n  body {\n    font-size: var(--global-fontSize-largeScreen);\n  }\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  color: var(--colors-secondary-base);\n  font-family: var(--global-specificFontFamily);\n}\n","",{version:3,sources:["webpack://./../../packages/ui/dist/theme/global-style.css"],names:[],mappings:"AAAA;EACE,sBAAsB;EACtB,UAAU;EACV,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,4CAA4C;EAC5C,6CAA6C;EAC7C,qCAAqC;EACrC,yCAAyC;EACzC,mCAAmC;EACnC,kCAAkC;EAClC,gBAAgB;EAChB,kCAAkC;EAClC,kBAAkB;AACpB;;AAEA;EACE;IACE,8CAA8C;EAChD;AACF;;AAEA;EACE;IACE,6CAA6C;EAC/C;AACF;;AAEA;;;;;;EAME,mCAAmC;EACnC,6CAA6C;AAC/C",sourcesContent:["* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  line-height: 1.5;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: var(--global-genericFontFamily);\n  font-size: var(--global-fontSize-smallScreen);\n  color: var(--colors-textPrimary-base);\n  background: var(--colors-background-base);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  text-rendering: optimizeLegibility;\n  overflow-x: hidden;\n}\n\n@media only screen and (min-width: 768px) {\n  body {\n    font-size: var(--global-fontSize-mediumScreen);\n  }\n}\n\n@media only screen and (min-width: 1200px) {\n  body {\n    font-size: var(--global-fontSize-largeScreen);\n  }\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  color: var(--colors-secondary-base);\n  font-family: var(--global-specificFontFamily);\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./.storybook/preview.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>_storybook_preview});var lit=__webpack_require__("../../node_modules/lit/index.js"),theme=(__webpack_require__("../../packages/ui/dist/index.js"),__webpack_require__("../../packages/ui/dist/theme/index.js")),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),global_style=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!../../packages/ui/dist/theme/global-style.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(global_style.A,options);global_style.A&&global_style.A.locals&&global_style.A.locals;var storyStyles=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./.storybook/storyStyles.css"),storyStyles_options={};storyStyles_options.styleTagTransform=styleTagTransform_default(),storyStyles_options.setAttributes=setAttributesWithoutAttributes_default(),storyStyles_options.insert=insertBySelector_default().bind(null,"head"),storyStyles_options.domAPI=styleDomAPI_default(),storyStyles_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(storyStyles.A,storyStyles_options);storyStyles.A&&storyStyles.A.locals&&storyStyles.A.locals;(0,theme.a)();const _storybook_preview={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}}},decorators:[story=>lit.qy`${story()}`]}},"../../packages/ui/dist/button/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Mp:()=>ButtonSize,Ak:()=>ButtonVariant});var ButtonVariant,ButtonSize,ButtonStyle,ButtonFillStyle,lit=__webpack_require__("../../node_modules/lit/index.js"),decorators=__webpack_require__("../../node_modules/lit/decorators.js");!function(ButtonVariant){ButtonVariant.Primary="primary",ButtonVariant.Secondary="secondary",ButtonVariant.Destruct="destruct"}(ButtonVariant||(ButtonVariant={})),function(ButtonSize){ButtonSize.Small="small",ButtonSize.Default="default"}(ButtonSize||(ButtonSize={})),function(ButtonStyle){ButtonStyle.Icon="icon",ButtonStyle.Default="default"}(ButtonStyle||(ButtonStyle={})),function(ButtonFillStyle){ButtonFillStyle.Filled="filled",ButtonFillStyle.Outline="outline"}(ButtonFillStyle||(ButtonFillStyle={}));const style_css=lit.AH`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  button {
    display: inline-flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 0 1.5rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.5s;
    font-size: 20px;
    font-family: var(--global-specificFontFamily);

    @media screen and (min-width: 601px) {
      width: inherit;
      min-width: 120px;
    }
  }

  /* Size styles */
  .default {
    height: 44px;
  }
  .small {
    height: 30px;
  }

  /* Variant styles */
  .primary {
    background-color: var(--colors-primary-base);
    color: var(--colors-textSecondary-base);
  }

  .secondary {
    background-color: var(--colors-secondary-base);
    color: var(--colors-textPrimary-base);
  }

  .destruct {
    background-color: var(--colors-error-base);
    color: var(--colors-textSecondary-base);
  }

  .primary:not([disabled]):hover {
    background-color: var(--colors-primary-hover);
  }

  .secondary:not([disabled]):hover {
    background-color: var(--colors-secondary-hover);
  }

  .destruct:not([disabled]):hover {
    background-color: var(--colors-error-hover);
  }

  .primary:not([disabled]):active,
  .primary:not([disabled]):focus {
    background-color: var(--colors-primary-active);
  }

  .secondary:not([disabled]):active,
  .secondary:not([disabled]):focus {
    background-color: var(--colors-secondary-active);
  }

  .destruct:not([disabled]):active,
  .destruct:not([disabled]):focus {
    background-color: var(--colors-error-active);
  }

  button:disabled {
    opacity: 0.7;
    cursor: inherit;
  }
`;var validateRequiredProperties=__webpack_require__("../../packages/ui/dist/utils/validateRequiredProperties.js"),__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},__metadata=function(k,v){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(k,v)};let ButtonComponent=class ButtonComponent extends lit.WF{constructor(){super(...arguments),this.id="",this.type="button",this.variant=ButtonVariant.Primary,this.size=ButtonSize.Default,this.disabled=!1}static#_=this.styles=style_css;_handleClick(event){if(this.disabled&&(event.preventDefault(),event.stopPropagation()),"submit"===this.type){const form=this.closest("form");form&&form.requestSubmit()}}updated(changedProperties){super.updated(changedProperties),(0,validateRequiredProperties.N)(this,["id"])}setFocus(){const button=this.shadowRoot?.querySelector("button");button?.focus()}render(){return lit.qy`
      <button
        class="${this.variant} ${this.size}"
        type="${this.type}"
        ?disabled="${this.disabled}"
        @click="${this._handleClick}">
        <slot></slot>
      </button>
    `}};__decorate([(0,decorators.MZ)({type:String}),__metadata("design:type",Object)],ButtonComponent.prototype,"id",void 0),__decorate([(0,decorators.MZ)({type:String}),__metadata("design:type",String)],ButtonComponent.prototype,"type",void 0),__decorate([(0,decorators.MZ)({type:String}),__metadata("design:type",String)],ButtonComponent.prototype,"variant",void 0),__decorate([(0,decorators.MZ)({type:String}),__metadata("design:type",String)],ButtonComponent.prototype,"size",void 0),__decorate([(0,decorators.MZ)({type:Boolean,reflect:!0}),__metadata("design:type",Object)],ButtonComponent.prototype,"disabled",void 0),ButtonComponent=__decorate([(0,decorators.EM)("ta-button")],ButtonComponent)},"../../packages/ui/dist/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{S9:()=>FieldSize});__webpack_require__("../../packages/ui/dist/button/index.js"),__webpack_require__("../../packages/ui/dist/theme/index.js");var lit=__webpack_require__("../../node_modules/lit/index.js"),decorators=__webpack_require__("../../node_modules/lit/decorators.js"),__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},__metadata=function(k,v){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(k,v)};let GridColumn=class GridColumn extends lit.WF{constructor(){super(...arguments),this.sm=6,this.md=12,this.lg=12}static#_=this.styles=lit.AH`
    :host {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      grid-column: span var(--grid-column-sm, 6);
      visibility: var(--visibility-sm, visible);
    }

    :host([sm='0']) {
      visibility: hidden;
    }

    :host([md]) {
      @media screen and (min-width: 768px) {
        grid-column: span var(--grid-column-md, var(--grid-medium-columns));
        visibility: var(--visibility-md, visible);
      }
    }

    :host([md='0']) {
      visibility: hidden;
    }

    :host([lg]) {
      @media screen and (min-width: 1200px) {
        grid-column: span var(--grid-column-lg, var(--grid-large-columns));
        visibility: var(--visibility-lg, visible);
      }
    }

    :host([lg='0']) {
      visibility: hidden;
    }
  `;updated(changedProperties){super.updated(changedProperties),this.sm?this.style.setProperty("--grid-column-sm",this.sm.toString()):this.style.setProperty("--grid-column-sm","6"),this.md?this.style.setProperty("--grid-column-md",this.md.toString()):this.style.setProperty("--grid-column-md","var(--grid-medium-columns, 12)"),this.lg?this.style.setProperty("--grid-column-lg",this.lg.toString()):this.style.setProperty("--grid-column-lg","var(--grid-large-columns, 12)")}render(){return lit.qy`<slot></slot>`}};__decorate([(0,decorators.MZ)({type:Number,reflect:!0}),__metadata("design:type",Object)],GridColumn.prototype,"sm",void 0),__decorate([(0,decorators.MZ)({type:Number,reflect:!0}),__metadata("design:type",Object)],GridColumn.prototype,"md",void 0),__decorate([(0,decorators.MZ)({type:Number,reflect:!0}),__metadata("design:type",Object)],GridColumn.prototype,"lg",void 0),GridColumn=__decorate([(0,decorators.EM)("ta-grid-column")],GridColumn);var GridContainer_decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},GridContainer_metadata=function(k,v){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(k,v)};let GridContainer=class GridContainer extends lit.WF{constructor(){super(...arguments),this.showSideMargin=!0,this.restrictHeightToMaxContent=!0}static#_=this.styles=lit.AH`
    :host {
      display: grid;
      width: 100%;
      grid-gap: var(--grid-small-gutter);
      grid-template-columns: repeat(var(--grid-small-columns), 1fr);
      grid-template-rows: var(--grid-template-rows);
      grid-auto-rows: var(--grid-auto-rows);
      margin: 0;
      max-width: var(--max-width);
      grid-column: span var(--grid-small-columns);
    }

    :host([showSideMargin]) {
      max-width: calc(100% - var(--grid-small-margin) * 2);
      margin-left: var(--grid-small-margin) !important;
      margin-right: var(--grid-small-margin) !important;
    }

    :host([restrictHeightToMaxContent]) {
      grid-template-rows: max-content;
      grid-auto-rows: max-content;
    }

    @media screen and (min-width: 768px) {
      :host {
        grid-template-columns: repeat(var(--grid-medium-columns), 1fr);
        margin: 0;
        grid-gap: var(--grid-medium-gutter);
        max-width: var(--max-width-medium);
        grid-column: span var(--grid-medium-columns);
      }

      :host([showSideMargin]) {
        max-width: calc(100% - var(--grid-medium-margin) * 2);
        margin-left: var(--grid-medium-margin) !important;
        margin-right: var(--grid-medium-margin) !important;
      }
    }

    @media screen and (min-width: 1200px) {
      :host {
        grid-template-columns: repeat(var(--grid-large-columns), 1fr);
        margin: 0;
        grid-gap: var(--grid-large-gutter);
        max-width: var(--max-width-large);
        grid-column: span var(--grid-large-columns);
      }

      :host([showSideMargin]) {
        max-width: calc(100% - var(--grid-large-margin) * 2);
        margin-left: var(--grid-large-margin) !important;
        margin-right: var(--grid-large-margin) !important;
      }
    }
  `;render(){return lit.qy`<slot></slot>`}};GridContainer_decorate([(0,decorators.MZ)({type:Boolean,reflect:!0}),GridContainer_metadata("design:type",Object)],GridContainer.prototype,"showSideMargin",void 0),GridContainer_decorate([(0,decorators.MZ)({type:Boolean,reflect:!0}),GridContainer_metadata("design:type",Object)],GridContainer.prototype,"restrictHeightToMaxContent",void 0),GridContainer=GridContainer_decorate([(0,decorators.EM)("ta-grid-container")],GridContainer);const style_css=lit.AH`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :host {
    width: 100%;
  }

  input {
    width: 100%;
    font-size: 20px;
    padding-left: 4px;
    padding-right: 4px;
    height: 40px;
    border-radius: var(--global-componentRadius);
    border: 1px solid var(--colors-primary-base);
  }

  .small {
    height: 30px;
  }

  .description {
    font-size: 14px;
  }

  .hide {
    display: none;
  }
`;var FieldSize;!function(FieldSize){FieldSize.Small="small",FieldSize.Default="default"}(FieldSize||(FieldSize={}));var validateRequiredProperties=__webpack_require__("../../packages/ui/dist/utils/validateRequiredProperties.js"),TextInput_decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},TextInput_metadata=function(k,v){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(k,v)};let TextInputComponent=class TextInputComponent extends lit.WF{constructor(){super(...arguments),this.label="",this.description="",this.id="",this.type="text",this.value="",this.size=FieldSize.Default,this.disabled=!1,this.placeholder="",this.required=!1,this._inputChangeHandler=event=>{if(this.disabled)event.preventDefault(),event.stopPropagation();else{const inputTarget=event.target;this.value=inputTarget.value}}}static#_=this.styles=style_css;updated(changedProperties){super.updated(changedProperties),(0,validateRequiredProperties.N)(this,["id"])}setFocus(){const inputField=this.shadowRoot?.querySelector("input");inputField?.focus()}render(){return lit.qy`
      <ta-field-wrapper>
        <label class="${this.label?"":"hide"}" for="${`${this.id}-input`}"
          >${this.label}</label
        >
        <input
          id="${`${this.id}-input`}"
          class="${this.size}"
          type="${this.type}"
          ?disabled="${this.disabled}"
          .value="${this.value}"
          placeholder="${this.placeholder}"
          ?required="${this.required}"
          .minlength="${void 0!==this.minlength?this.minlength:0}"
          .maxlength="${void 0!==this.maxlength?this.maxlength:524288}"
          .pattern="${this.pattern||""}"
          aria-describedby="${this.description?`${this.id}-description`:""}"
          @input="${this._inputChangeHandler}" />
        <div
          id="${`${this.id}-description`}"
          class="${this.description?"":"hide"} description">
          ${this.description}
        </div>
      </ta-field-wrapper>
    `}};TextInput_decorate([(0,decorators.MZ)({type:String}),TextInput_metadata("design:type",Object)],TextInputComponent.prototype,"label",void 0),TextInput_decorate([(0,decorators.MZ)({type:String}),TextInput_metadata("design:type",Object)],TextInputComponent.prototype,"description",void 0),TextInput_decorate([(0,decorators.MZ)({type:String}),TextInput_metadata("design:type",Object)],TextInputComponent.prototype,"id",void 0),TextInput_decorate([(0,decorators.MZ)({type:String}),TextInput_metadata("design:type",String)],TextInputComponent.prototype,"type",void 0),TextInput_decorate([(0,decorators.MZ)({type:String}),TextInput_metadata("design:type",Object)],TextInputComponent.prototype,"value",void 0),TextInput_decorate([(0,decorators.MZ)({type:String}),TextInput_metadata("design:type",String)],TextInputComponent.prototype,"size",void 0),TextInput_decorate([(0,decorators.MZ)({type:Boolean,reflect:!0}),TextInput_metadata("design:type",Object)],TextInputComponent.prototype,"disabled",void 0),TextInput_decorate([(0,decorators.MZ)({type:String}),TextInput_metadata("design:type",Object)],TextInputComponent.prototype,"placeholder",void 0),TextInput_decorate([(0,decorators.MZ)({type:Boolean}),TextInput_metadata("design:type",Object)],TextInputComponent.prototype,"required",void 0),TextInput_decorate([(0,decorators.MZ)({type:Number}),TextInput_metadata("design:type",Number)],TextInputComponent.prototype,"minlength",void 0),TextInput_decorate([(0,decorators.MZ)({type:Number}),TextInput_metadata("design:type",Number)],TextInputComponent.prototype,"maxlength",void 0),TextInput_decorate([(0,decorators.MZ)({type:String}),TextInput_metadata("design:type",String)],TextInputComponent.prototype,"pattern",void 0),TextInputComponent=TextInput_decorate([(0,decorators.EM)("ta-input")],TextInputComponent);const FieldWrapper_style_css=lit.AH`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :host {
    width: 100%;
  }

  .field-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 4px;
  }
`;var FieldWrapper_decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let FieldWrapperComponent=class FieldWrapperComponent extends lit.WF{static#_=this.styles=FieldWrapper_style_css;render(){return lit.qy`
      <div class="field-wrapper">
        <slot></slot>
      </div>
    `}};FieldWrapperComponent=FieldWrapper_decorate([(0,decorators.EM)("ta-field-wrapper")],FieldWrapperComponent);const TextArea_style_css=lit.AH`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :host {
    width: 100%;
  }

  textarea {
    width: 100%;
    font-size: 20px;
    padding-left: 4px;
    padding-right: 4px;
    border-radius: var(--global-componentRadius);
    border: 1px solid var(--colors-primary-base);
  }

  .description {
    font-size: 14px;
  }

  .hide {
    display: none;
  }
`;var TextArea_decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},TextArea_metadata=function(k,v){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(k,v)};let TextAreaComponent=class TextAreaComponent extends lit.WF{constructor(){super(...arguments),this.label="",this.description="",this.id="",this.value="",this.placeholder="",this.required=!1,this.disabled=!1,this.rows=4,this._inputChangeHandler=event=>{if(this.disabled)event.preventDefault(),event.stopPropagation();else{const inputTarget=event.target;this.value=inputTarget.value}}}static#_=this.styles=TextArea_style_css;updated(changedProperties){super.updated(changedProperties),(0,validateRequiredProperties.N)(this,["id"])}setFocus(){const textareaField=this.shadowRoot?.querySelector("textarea");textareaField?.focus()}render(){return lit.qy`
      <ta-field-wrapper>
        <label class="${this.label?"":"hide"}" for="${`${this.id}-textarea`}">
          ${this.label}
        </label>
        <textarea
          id="${`${this.id}-textarea`}"
          .value="${this.value}"
          placeholder="${this.placeholder}"
          ?disabled="${this.disabled}"
          ?required="${this.required}"
          .minlength="${void 0!==this.minlength?this.minlength:0}"
          .maxlength="${void 0!==this.maxlength?this.maxlength:524288}"
          rows="${this.rows}"
          aria-describedby="${this.description?`${this.id}-description`:""}"
          @input="${this._inputChangeHandler}"></textarea>
        <div
          id="${`${this.id}-description`}"
          class="${this.description?"":"hide"} description">
          ${this.description}
        </div>
      </ta-field-wrapper>
    `}};TextArea_decorate([(0,decorators.MZ)({type:String}),TextArea_metadata("design:type",Object)],TextAreaComponent.prototype,"label",void 0),TextArea_decorate([(0,decorators.MZ)({type:String}),TextArea_metadata("design:type",Object)],TextAreaComponent.prototype,"description",void 0),TextArea_decorate([(0,decorators.MZ)({type:String}),TextArea_metadata("design:type",Object)],TextAreaComponent.prototype,"id",void 0),TextArea_decorate([(0,decorators.MZ)({type:String}),TextArea_metadata("design:type",Object)],TextAreaComponent.prototype,"value",void 0),TextArea_decorate([(0,decorators.MZ)({type:String}),TextArea_metadata("design:type",Object)],TextAreaComponent.prototype,"placeholder",void 0),TextArea_decorate([(0,decorators.MZ)({type:Boolean}),TextArea_metadata("design:type",Object)],TextAreaComponent.prototype,"required",void 0),TextArea_decorate([(0,decorators.MZ)({type:Number}),TextArea_metadata("design:type",Number)],TextAreaComponent.prototype,"minlength",void 0),TextArea_decorate([(0,decorators.MZ)({type:Number}),TextArea_metadata("design:type",Number)],TextAreaComponent.prototype,"maxlength",void 0),TextArea_decorate([(0,decorators.MZ)({type:Boolean,reflect:!0}),TextArea_metadata("design:type",Object)],TextAreaComponent.prototype,"disabled",void 0),TextArea_decorate([(0,decorators.MZ)({type:Number}),TextArea_metadata("design:type",Number)],TextAreaComponent.prototype,"rows",void 0),TextAreaComponent=TextArea_decorate([(0,decorators.EM)("ta-text-area")],TextAreaComponent);__webpack_require__("../../packages/ui/dist/link/index.js")},"../../packages/ui/dist/link/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{sP:()=>LinkSize,W9:()=>LinkVariant});var lit=__webpack_require__("../../node_modules/lit/index.js"),decorators=__webpack_require__("../../node_modules/lit/decorators.js");const style_css=lit.AH`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  a {
    display: inline-flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.5s;
    font-size: 20px;
    font-family: var(--global-specificFontFamily);
    text-decoration: none;

    @media screen and (min-width: 601px) {
      width: inherit;
    }
  }

  .default {
    height: 44px;
  }

  .small {
    height: 30px;
  }

  .primary {
    color: var(--colors-primary-base);
  }

  .secondary {
    color: var(--colors-secondary-base);
  }

  .destruct {
    color: var(--colors-error-base);
  }

  .primary:not([disabled]):hover {
    color: var(--colors-primary-hover);
    text-decoration-color: var(--colors-primary-hover);
    text-decoration: underline;
  }

  .secondary:not([disabled]):hover {
    color: var(--colors-secondary-hover);
    text-decoration-color: var(--colors-secondary-hover);
    text-decoration: underline;
  }

  .destruct:not([disabled]):hover {
    color: var(--colors-error-hover);
    text-decoration-color: var(--colors-secondary-hover);
    text-decoration: underline;
  }

  .primary:not([disabled]):active,
  .primary:not([disabled]):focus {
    color: var(--colors-primary-active);
    text-decoration: underline;
  }

  .secondary:not([disabled]):active,
  .secondary:not([disabled]):focus {
    color: var(--colors-secondary-active);
    text-decoration: underline;
  }

  .destruct:not([disabled]):active,
  .destruct:not([disabled]):focus {
    color: var(--colors-error-active);
    text-decoration: underline;
  }

  button:disabled {
    opacity: 0.7;
    cursor: inherit;
  }
`;var LinkVariant,LinkSize,LinkStyle;!function(LinkVariant){LinkVariant.Primary="primary",LinkVariant.Secondary="secondary",LinkVariant.Destruct="destruct"}(LinkVariant||(LinkVariant={})),function(LinkSize){LinkSize.Small="small",LinkSize.Default="default"}(LinkSize||(LinkSize={})),function(LinkStyle){LinkStyle.Icon="icon",LinkStyle.Default="default"}(LinkStyle||(LinkStyle={}));var __decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},__metadata=function(k,v){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(k,v)};let LinkComponent=class LinkComponent extends lit.WF{constructor(){super(...arguments),this.id="",this.variant=LinkVariant.Primary,this.size=LinkSize.Default,this.disabled=!1,this.href="#",this.openInNewTab=!1}static#_=this.styles=style_css;render(){const target=this.openInNewTab?"_blank":"_self",rel=this.openInNewTab?"noopener noreferrer":"";return lit.qy`
      <a
        id="${this.id}"
        href="${this.href}"
        class="${this.variant} ${this.size}"
        ?disabled="${this.disabled}"
        target="${target}"
        rel="${rel}">
        <slot></slot>
      </a>
    `}};__decorate([(0,decorators.MZ)({type:String}),__metadata("design:type",Object)],LinkComponent.prototype,"id",void 0),__decorate([(0,decorators.MZ)({type:String}),__metadata("design:type",Object)],LinkComponent.prototype,"variant",void 0),__decorate([(0,decorators.MZ)({type:String}),__metadata("design:type",Object)],LinkComponent.prototype,"size",void 0),__decorate([(0,decorators.MZ)({type:Boolean}),__metadata("design:type",Object)],LinkComponent.prototype,"disabled",void 0),__decorate([(0,decorators.MZ)({type:String}),__metadata("design:type",Object)],LinkComponent.prototype,"href",void 0),__decorate([(0,decorators.MZ)({type:Boolean}),__metadata("design:type",Object)],LinkComponent.prototype,"openInNewTab",void 0),LinkComponent=__decorate([(0,decorators.EM)("ta-link")],LinkComponent)},"../../packages/ui/dist/theme/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>createTheme});const baseTheme={global:{genericFontFamily:"sans-serif, Arial",specificFontFamily:"'Trebuchet MS', serif",componentRadius:"5px",fontSize:{smallScreen:"16px",mediumScreen:"20px",largeScreen:"20px"}},colors:{primary:{base:"#312E2D",hover:"#565352",active:"#212121"},secondary:{base:"#F7901D",hover:"#FFBC4D",active:"#FD8600"},tertiary:{base:"#CEE6E1",hover:"#A4D1C0",active:"#8AB8A0"},background:{base:"#fff",hover:"#f1f1f1",active:"#e0e0e0"},secondaryBackground:{base:"#F4F4F4",hover:"#E5E5E5",active:"#D6D6D6"},textPrimary:{base:"#312E2D",hover:"#4A4746",active:"#1D1B1A"},textSecondary:{base:"#F4F4F4",hover:"#FFFFFF",active:"#E0E0E0"},error:{base:"#d32f2f",hover:"#c62828",active:"#b71c1c"},warning:{base:"#ffa000",hover:"#FFB84D",active:"#FF8C00"},success:{base:"#388e3c",hover:"#4CAF50",active:"#2C6B2A"},info:{base:"#1976d2",hover:"#1E88E5",active:"#1565C0"}},grid:{small:{margin:"16px",gutter:"16px",columns:6},medium:{margin:"24px",gutter:"20px",columns:12},large:{margin:"32px",gutter:"24px",columns:12,maxWidth:"1200px"}},breakpoints:{medium:"768px",large:"1200px"}},createTheme=(userTheme={})=>{const theme={...baseTheme,...userTheme};if((theme=>theme&&"object"==typeof theme.global&&"object"==typeof theme.colors&&"object"==typeof theme.grid&&"object"==typeof theme.breakpoints)(theme)){const processThemeObject=(obj,parentKey="")=>{let cssVariables="";for(const key in obj)if(Object.prototype.hasOwnProperty.call(obj,key)){const value=obj[key];cssVariables+="object"==typeof value&&null!==value?processThemeObject(value,`${parentKey}-${key}`):`--${parentKey}-${key}: ${value};\n`}return cssVariables};let cssVariables="";for(const section in theme)Object.prototype.hasOwnProperty.call(theme,section)&&(cssVariables+=processThemeObject(theme[section],section));const styleElement=document.createElement("style");styleElement.textContent=`:root { ${cssVariables} }`;const existingStyleElement=document.getElementById("theme-vars");existingStyleElement?existingStyleElement.replaceWith(styleElement):(styleElement.id="theme-vars",document.head.appendChild(styleElement))}}},"../../packages/ui/dist/utils/validateRequiredProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{N:()=>validateRequiredProperties});const validateRequiredProperties=(obj,requiredProps)=>{const missingProps=[];for(const prop of requiredProps)void 0!==obj[prop]&&null!==obj[prop]&&""!==obj[prop]||(console.log(obj[prop]),missingProps.push(prop));if(missingProps.length>0)throw new Error(`Missing mandatory properties: ${missingProps.join(", ")}`)}},"storybook/internal/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"storybook/internal/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"storybook/internal/preview-errors":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__},"storybook/internal/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/global":module=>{"use strict";module.exports=__STORYBOOK_MODULE_GLOBAL__},"storybook/internal/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__}},__webpack_require__=>{__webpack_require__.O(0,[659],(()=>{return moduleId="./storybook-config-entry.js",__webpack_require__(__webpack_require__.s=moduleId);var moduleId}));__webpack_require__.O()}]);
//# sourceMappingURL=main.db7c7d55.iframe.bundle.js.map