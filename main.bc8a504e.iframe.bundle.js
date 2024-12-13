(self.webpackChunkstorybook_ui=self.webpackChunkstorybook_ui||[]).push([[792],{"./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./101-GetStarted/GetStarted.mdx":["./src/101-GetStarted/GetStarted.mdx",681,935]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$",module.exports=webpackAsyncContext},"./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./button/BaseButton.stories":["./src/button/BaseButton.stories.ts",635],"./button/BaseButton.stories.ts":["./src/button/BaseButton.stories.ts",635],"./button/example.stories":["./src/button/example.stories.ts",494],"./button/example.stories.ts":["./src/button/example.stories.ts",494],"./formFields/checkbox.stories":["./src/formFields/checkbox.stories.ts",68],"./formFields/checkbox.stories.ts":["./src/formFields/checkbox.stories.ts",68],"./formFields/textArea.stories":["./src/formFields/textArea.stories.ts",177],"./formFields/textArea.stories.ts":["./src/formFields/textArea.stories.ts",177],"./formFields/textInput.stories":["./src/formFields/textInput.stories.ts",714],"./formFields/textInput.stories.ts":["./src/formFields/textInput.stories.ts",714],"./formFields/toggle.stories":["./src/formFields/toggle.stories.ts",823],"./formFields/toggle.stories.ts":["./src/formFields/toggle.stories.ts",823],"./grid/GridColumn.stories":["./src/grid/GridColumn.stories.ts",386],"./grid/GridColumn.stories.ts":["./src/grid/GridColumn.stories.ts",386],"./grid/GridContainer.stories":["./src/grid/GridContainer.stories.tsx",141],"./grid/GridContainer.stories.tsx":["./src/grid/GridContainer.stories.tsx",141],"./icons/icon.stories":["./src/icons/icon.stories.ts",867],"./icons/icon.stories.ts":["./src/icons/icon.stories.ts",867],"./link/Baselink.stories":["./src/link/Baselink.stories.ts",803],"./link/Baselink.stories.ts":["./src/link/Baselink.stories.ts",803],"./notification/alert.stories":["./src/notification/alert.stories.ts",923],"./notification/alert.stories.ts":["./src/notification/alert.stories.ts",923],"./theme/DefaultThemeConfig.stories":["./src/theme/DefaultThemeConfig.stories.ts",283],"./theme/DefaultThemeConfig.stories.ts":["./src/theme/DefaultThemeConfig.stories.ts",283],"./theme/getCssColorVar.stories":["./src/theme/getCssColorVar.stories.ts",10],"./theme/getCssColorVar.stories.ts":["./src/theme/getCssColorVar.stories.ts",10],"./theme/theme.stories":["./src/theme/theme.stories.ts",518],"./theme/theme.stories.ts":["./src/theme/theme.stories.ts",518],"./zz-examples/Simpleform.stories":["./src/zz-examples/Simpleform.stories.ts",958],"./zz-examples/Simpleform.stories.ts":["./src/zz-examples/Simpleform.stories.ts",958]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return __webpack_require__.e(ids[1]).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$",module.exports=webpackAsyncContext},"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var external_STORYBOOK_MODULE_CHANNELS_=__webpack_require__("storybook/internal/channels"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global");const importers=[async path=>{if(!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.mdx)$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$")("./"+pathRemainder)},async path=>{if(!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|mjs|ts|tsx))$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$")("./"+pathRemainder)}];const channel=(0,external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({page:"preview"});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),"DEVELOPMENT"===external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE&&(window.__STORYBOOK_SERVER_CHANNEL__=channel);const preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb((async function importFn(path){for(let i=0;i<importers.length;i++){const moduleExports=await(x=()=>importers[i](path),x());if(moduleExports)return moduleExports}var x}),(()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("../../node_modules/@storybook/web-components/dist/entry-preview.mjs"),__webpack_require__("../../node_modules/@storybook/web-components/dist/entry-preview-docs.mjs"),__webpack_require__("../../node_modules/@storybook/addon-essentials/dist/docs/preview.mjs"),__webpack_require__("../../node_modules/@storybook/addon-essentials/dist/actions/preview.mjs"),__webpack_require__("../../node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs"),__webpack_require__("../../node_modules/@storybook/addon-essentials/dist/viewport/preview.mjs"),__webpack_require__("../../node_modules/@storybook/addon-essentials/dist/measure/preview.mjs"),__webpack_require__("../../node_modules/@storybook/addon-essentials/dist/outline/preview.mjs"),__webpack_require__("../../node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs"),__webpack_require__("../../node_modules/@storybook/addon-a11y/preview.js"),__webpack_require__("./.storybook/preview.ts")])));window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel},"../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./.storybook/storyStyles.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".story-description {\n  font-size: 12px;\n}\n\n.story-title {\n  display: block;\n  border-bottom: 1px solid var(--colors-primary-base);\n  font-weight: bold;\n}\n","",{version:3,sources:["webpack://./.storybook/storyStyles.css"],names:[],mappings:"AAAA;EACE,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,mDAAmD;EACnD,iBAAiB;AACnB",sourcesContent:[".story-description {\n  font-size: 12px;\n}\n\n.story-title {\n  display: block;\n  border-bottom: 1px solid var(--colors-primary-base);\n  font-weight: bold;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!../../packages/ui/dist/theme/global-style.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  line-height: 1.5;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: var(--global-genericFontFamily);\n  font-size: var(--global-fontSize-smallScreen);\n  color: var(--colors-textPrimary-base);\n  background: var(--colors-background-base);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  text-rendering: optimizeLegibility;\n  overflow-x: hidden;\n}\n\n@media only screen and (min-width: 768px) {\n  body {\n    font-size: var(--global-fontSize-mediumScreen);\n  }\n}\n\n@media only screen and (min-width: 1200px) {\n  body {\n    font-size: var(--global-fontSize-largeScreen);\n  }\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  color: var(--colors-secondary-base);\n  font-family: var(--global-specificFontFamily);\n}\n","",{version:3,sources:["webpack://./../../packages/ui/dist/theme/global-style.css"],names:[],mappings:"AAAA;EACE,sBAAsB;EACtB,UAAU;EACV,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,4CAA4C;EAC5C,6CAA6C;EAC7C,qCAAqC;EACrC,yCAAyC;EACzC,mCAAmC;EACnC,kCAAkC;EAClC,gBAAgB;EAChB,kCAAkC;EAClC,kBAAkB;AACpB;;AAEA;EACE;IACE,8CAA8C;EAChD;AACF;;AAEA;EACE;IACE,6CAA6C;EAC/C;AACF;;AAEA;;;;;;EAME,mCAAmC;EACnC,6CAA6C;AAC/C",sourcesContent:["* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  line-height: 1.5;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: var(--global-genericFontFamily);\n  font-size: var(--global-fontSize-smallScreen);\n  color: var(--colors-textPrimary-base);\n  background: var(--colors-background-base);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  text-rendering: optimizeLegibility;\n  overflow-x: hidden;\n}\n\n@media only screen and (min-width: 768px) {\n  body {\n    font-size: var(--global-fontSize-mediumScreen);\n  }\n}\n\n@media only screen and (min-width: 1200px) {\n  body {\n    font-size: var(--global-fontSize-largeScreen);\n  }\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  color: var(--colors-secondary-base);\n  font-family: var(--global-specificFontFamily);\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./.storybook/preview.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>_storybook_preview});var lit=__webpack_require__("../../node_modules/lit/index.js"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),global_style=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!../../packages/ui/dist/theme/global-style.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(global_style.A,options);global_style.A&&global_style.A.locals&&global_style.A.locals;var theme=__webpack_require__("../../packages/ui/dist/theme/index.js"),storyStyles=(__webpack_require__("../../packages/ui/dist/index.js"),__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./.storybook/storyStyles.css")),storyStyles_options={};storyStyles_options.styleTagTransform=styleTagTransform_default(),storyStyles_options.setAttributes=setAttributesWithoutAttributes_default(),storyStyles_options.insert=insertBySelector_default().bind(null,"head"),storyStyles_options.domAPI=styleDomAPI_default(),storyStyles_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(storyStyles.A,storyStyles_options);storyStyles.A&&storyStyles.A.locals&&storyStyles.A.locals;(0,theme.an)();const _storybook_preview={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}}},decorators:[story=>lit.qy`${story()}`]}},"../../packages/ui/dist/button/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Mp:()=>ButtonSize,Ak:()=>ButtonVariant});var ButtonVariant,t,ButtonSize,ButtonFillStyle,lit=__webpack_require__("../../node_modules/lit/index.js"),decorators=__webpack_require__("../../node_modules/lit/decorators.js"),theme=__webpack_require__("../../packages/ui/dist/theme/index.js");(t=ButtonVariant||(ButtonVariant={})).Primary="primary",t.Secondary="secondary",t.Destruct="destruct",function(t){t.Small="small",t.Default="default"}(ButtonSize||(ButtonSize={})),function(t){t.Filled="filled",t.Outline="outline",t.None="none"}(ButtonFillStyle||(ButtonFillStyle={}));const style_css=lit.AH`
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
    flex-shrink: 0;

    @media screen and (min-width: 601px) {
      width: inherit;
      min-width: 120px;
    }
  }

  .default {
    height: 44px;
  }
  .small {
    height: 30px;
  }

  .primary {
    background-color: ${(0,lit.iz)((0,theme.at)("primary"))};
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

  .icon-only {
    padding: 0;
    min-width: 44px;
    width: 44px;
    justify-content: center;
  }

  .icon-only.small {
    min-width: 30px;
    width: 30px;
  }

  .icon-only ::slotted(svg) {
    fill: var(--colors-textPrimary-base);
  }

  button:disabled {
    opacity: 0.7;
    cursor: inherit;
  }
`;var validateRequiredProperties=__webpack_require__("../../packages/ui/dist/utils/validateRequiredProperties.js"),__decorate=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},__metadata=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ButtonComponentWC=class extends lit.WF{constructor(){super(...arguments),this.id="",this.type="button",this.variant=ButtonVariant.Primary,this.size=ButtonSize.Default,this.disabled=!1,this.iconOnly=!1,this.ariaLabel="",this._buttonType="button"===this.type||"submit"===this.type||"reset"===this.type||"menu"===this.type?this.type:"button"}static#_=this.styles=style_css;_handleClick(t){if(this.disabled&&(t.preventDefault(),t.stopPropagation()),"submit"===this.type){const t=this.closest("form");t&&t.requestSubmit()}}updated(t){if(super.updated(t),(0,validateRequiredProperties.N)(this,["id"]),this.variant!==ButtonVariant.Primary&&this.variant!==ButtonVariant.Destruct||this.style.setProperty("--ta-icon-inherit-fill",(0,theme.at)("background")),this.iconOnly&&!this.ariaLabel)throw new Error("ariaLabel is required when iconOnly is true")}focus(){const t=this.shadowRoot?.querySelector("button");t?.focus()}render(){return lit.qy`
      <button
        class="${this.variant} ${this.size} ${this.iconOnly?"icon-only":""}"
        type="${this._buttonType}"
        ?disabled="${this.disabled}"
        @click="${this._handleClick}"
        aria-label="${this.ariaLabel}">
        <slot></slot>
      </button>
    `}};__decorate([(0,decorators.MZ)({type:String,reflect:!0}),__metadata("design:type",Object)],ButtonComponentWC.prototype,"id",void 0),__decorate([(0,decorators.MZ)({type:String}),__metadata("design:type",Object)],ButtonComponentWC.prototype,"type",void 0),__decorate([(0,decorators.MZ)({type:String}),__metadata("design:type",String)],ButtonComponentWC.prototype,"variant",void 0),__decorate([(0,decorators.MZ)({type:String}),__metadata("design:type",String)],ButtonComponentWC.prototype,"size",void 0),__decorate([(0,decorators.MZ)({type:Boolean,reflect:!0}),__metadata("design:type",Object)],ButtonComponentWC.prototype,"disabled",void 0),__decorate([(0,decorators.MZ)({type:Boolean}),__metadata("design:type",Object)],ButtonComponentWC.prototype,"iconOnly",void 0),__decorate([(0,decorators.MZ)({type:String}),__metadata("design:type",String)],ButtonComponentWC.prototype,"ariaLabel",void 0),ButtonComponentWC=__decorate([(0,decorators.EM)("ta-button")],ButtonComponentWC)},"../../packages/ui/dist/icons/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CloseIconWC:()=>CloseIconWC,SettingsIconWC:()=>SettingsIconWC});var lit=__webpack_require__("../../node_modules/lit/index.js"),decorators=__webpack_require__("../../node_modules/lit/decorators.js"),__decorate=function(t,e,i,o){var r,s=arguments.length,a=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var n=t.length-1;n>=0;n--)(r=t[n])&&(a=(s<3?r(a):s>3?r(e,i,a):r(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a},__metadata=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let CloseIconWC=class extends lit.WF{constructor(){super(...arguments),this.fill="",this.width="24px",this.height="24px",this.isAriaHidden=!0}static#_=this.styles=lit.AH`
    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }

    :host {
      display: inline-block;
      width: var(--ta-icon-width);
      height: var(--ta-icon-height);
    }

    svg {
      width: 100%;
      height: 100%;
      fill: var(--ta-icon-user-fill, var(--ta-icon-inherit-fill, var(--colors-primary-base)));
    }
  `;updated(t){super.updated(t),this.style.setProperty("--ta-icon-width",this.width),this.style.setProperty("--ta-icon-height",this.height),this.fill&&this.style.setProperty("--ta-icon-user-fill",this.fill)}render(){return lit.qy`
      <svg
        viewBox="0 0 49 49"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="${this.isAriaHidden}">
        <path
          d="M36.18 14.1705L34.0695 12.06L24.12 22.0095L14.1705 12.06L12.06 14.1705L22.0095 24.12L12.06 34.0695L14.1705 36.18L24.12 26.2305L34.0695 36.18L36.18 34.0695L26.2305 24.12L36.18 14.1705Z" />
      </svg>
    `}};__decorate([(0,decorators.MZ)({type:String}),__metadata("design:type",Object)],CloseIconWC.prototype,"fill",void 0),__decorate([(0,decorators.MZ)({type:String}),__metadata("design:type",Object)],CloseIconWC.prototype,"width",void 0),__decorate([(0,decorators.MZ)({type:String}),__metadata("design:type",Object)],CloseIconWC.prototype,"height",void 0),__decorate([(0,decorators.MZ)({type:Boolean}),__metadata("design:type",Object)],CloseIconWC.prototype,"isAriaHidden",void 0),CloseIconWC=__decorate([(0,decorators.EM)("ta-close-icon")],CloseIconWC);var ta_settings_decorate=function(t,e,i,a){var r,o=arguments.length,s=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,a);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(s=(o<3?r(s):o>3?r(e,i,s):r(e,i))||s);return o>3&&s&&Object.defineProperty(e,i,s),s},ta_settings_metadata=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let SettingsIconWC=class extends lit.WF{constructor(){super(...arguments),this.fill="",this.width="24px",this.height="24px",this.isAriaHidden=!0}static#_=this.styles=lit.AH`
    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }

    :host {
      display: inline-block;
      width: var(--ta-icon-width);
      height: var(--ta-icon-height);
    }

    svg {
      width: 100%;
      height: 100%;
      fill: var(--ta-icon-user-fill, var(--ta-icon-inherit-fill, var(--colors-primary-base)));
    }
  `;updated(t){super.updated(t),this.style.setProperty("--ta-icon-width",this.width),this.style.setProperty("--ta-icon-height",this.height),this.fill&&this.style.setProperty("--ta-icon-user-fill",this.fill)}render(){return lit.qy`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="${this.isAriaHidden}"
        aria-hidden="true"
        viewBox="0 0 64 64">
        <path
          d="M53.359 33.122v-3.024l3.794-3.32a3.95 3.95 0 0 0 .751-5.04l-4.664-7.904a3.95 3.95 0 0 0-3.419-1.976 4 4 0 0 0-1.264.197l-4.803 1.62a22 22 0 0 0-2.589-1.482l-1.008-4.98a3.95 3.95 0 0 0-3.952-3.181h-9.249a3.95 3.95 0 0 0-3.952 3.181l-1.008 4.98q-1.354.655-2.609 1.483l-4.703-1.7a4 4 0 0 0-1.265-.119 3.95 3.95 0 0 0-3.42 1.977l-4.663 7.905a3.95 3.95 0 0 0 .81 4.96l3.735 3.42v3.023l-3.735 3.32a3.95 3.95 0 0 0-.81 5.04L10 49.405a3.95 3.95 0 0 0 3.419 1.977c.43.003.856-.064 1.265-.198l4.802-1.62q1.245.826 2.589 1.482l1.008 4.98a3.95 3.95 0 0 0 3.952 3.182h9.328a3.95 3.95 0 0 0 3.953-3.182l1.008-4.98a23 23 0 0 0 2.608-1.483l4.783 1.62c.408.135.835.202 1.264.199a3.95 3.95 0 0 0 3.42-1.977l4.505-7.905a3.95 3.95 0 0 0-.81-4.96zM49.82 47.43l-6.778-2.292a17.5 17.5 0 0 1-5.356 3.102l-1.403 7.095h-9.328l-1.403-7.016a18.5 18.5 0 0 1-5.336-3.102L13.42 47.43l-4.664-7.905 5.375-4.743a17.6 17.6 0 0 1 0-6.186l-5.375-4.881 4.664-7.905 6.778 2.292A17.5 17.5 0 0 1 25.553 15l1.403-7.095h9.328l1.403 7.016a18.5 18.5 0 0 1 5.336 3.102l6.798-2.213 4.664 7.905-5.375 4.743a17.6 17.6 0 0 1 0 6.186l5.375 4.881z" />
        <path
          d="M31.62 43.478A11.858 11.858 0 1 1 43.477 31.62 11.74 11.74 0 0 1 31.62 43.477m0-19.763a7.73 7.73 0 0 0-7.905 7.905 7.727 7.727 0 0 0 7.905 7.905 7.73 7.73 0 0 0 7.905-7.905 7.727 7.727 0 0 0-7.905-7.905" />
      </svg>
    `}};ta_settings_decorate([(0,decorators.MZ)({type:String}),ta_settings_metadata("design:type",Object)],SettingsIconWC.prototype,"fill",void 0),ta_settings_decorate([(0,decorators.MZ)({type:String}),ta_settings_metadata("design:type",Object)],SettingsIconWC.prototype,"width",void 0),ta_settings_decorate([(0,decorators.MZ)({type:String}),ta_settings_metadata("design:type",Object)],SettingsIconWC.prototype,"height",void 0),ta_settings_decorate([(0,decorators.MZ)({type:Boolean}),ta_settings_metadata("design:type",Object)],SettingsIconWC.prototype,"isAriaHidden",void 0),SettingsIconWC=ta_settings_decorate([(0,decorators.EM)("ta-settings-icon")],SettingsIconWC)},"../../packages/ui/dist/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{S9:()=>FieldSize,t7:()=>NotificationVariant});var dist_button=__webpack_require__("../../packages/ui/dist/button/index.js"),lit=(__webpack_require__("../../packages/ui/dist/theme/index.js"),__webpack_require__("../../node_modules/lit/index.js")),decorators=__webpack_require__("../../node_modules/lit/decorators.js"),__decorate=function(t,e,i,r){var s,o=arguments.length,l=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,i,r);else for(var d=t.length-1;d>=0;d--)(s=t[d])&&(l=(o<3?s(l):o>3?s(e,i,l):s(e,i))||l);return o>3&&l&&Object.defineProperty(e,i,l),l},__metadata=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let GridColumnWC=class extends lit.WF{constructor(){super(...arguments),this.sm=6,this.md=12,this.lg=12}static#_=this.styles=lit.AH`
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
  `;updated(t){super.updated(t),this.sm?this.style.setProperty("--grid-column-sm",this.sm.toString()):this.style.setProperty("--grid-column-sm","6"),this.md?this.style.setProperty("--grid-column-md",this.md.toString()):this.style.setProperty("--grid-column-md","var(--grid-medium-columns, 12)"),this.lg?this.style.setProperty("--grid-column-lg",this.lg.toString()):this.style.setProperty("--grid-column-lg","var(--grid-large-columns, 12)")}render(){return lit.qy`<slot></slot>`}};__decorate([(0,decorators.MZ)({type:Number,reflect:!0}),__metadata("design:type",Object)],GridColumnWC.prototype,"sm",void 0),__decorate([(0,decorators.MZ)({type:Number,reflect:!0}),__metadata("design:type",Object)],GridColumnWC.prototype,"md",void 0),__decorate([(0,decorators.MZ)({type:Number,reflect:!0}),__metadata("design:type",Object)],GridColumnWC.prototype,"lg",void 0),GridColumnWC=__decorate([(0,decorators.EM)("ta-grid-column")],GridColumnWC);var GridContainer_decorate=function(t,r,e,a){var i,n=arguments.length,o=n<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,e):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,r,e,a);else for(var m=t.length-1;m>=0;m--)(i=t[m])&&(o=(n<3?i(o):n>3?i(r,e,o):i(r,e))||o);return n>3&&o&&Object.defineProperty(r,e,o),o},GridContainer_metadata=function(t,r){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,r)};let GridContainerWC=class extends lit.WF{constructor(){super(...arguments),this.showSideMargin=!0,this.restrictHeightToMaxContent=!0}static#_=this.styles=lit.AH`
    :host {
      display: grid;
      width: 100%;
      grid-gap: var(--grid-small-gutter);
      grid-template-columns: repeat(var(--grid-small-columns), 1fr);
      grid-template-rows: var(--grid-template-rows);
      grid-auto-rows: var(--grid-auto-rows);
      margin: 0;
      max-width: 100%;
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
        max-width: 100%;
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
        grid-column: span var(--grid-large-columns);
      }

      :host([showSideMargin]) {
        max-width: calc(100% - var(--grid-large-margin) * 2);
        margin-left: var(--grid-large-margin) !important;
        margin-right: var(--grid-large-margin) !important;
      }
    }
  `;render(){return lit.qy`<slot></slot>`}};GridContainer_decorate([(0,decorators.MZ)({type:Boolean,reflect:!0}),GridContainer_metadata("design:type",Object)],GridContainerWC.prototype,"showSideMargin",void 0),GridContainer_decorate([(0,decorators.MZ)({type:Boolean,reflect:!0}),GridContainer_metadata("design:type",Object)],GridContainerWC.prototype,"restrictHeightToMaxContent",void 0),GridContainerWC=GridContainer_decorate([(0,decorators.EM)("ta-grid-container")],GridContainerWC);const style_css=lit.AH`
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

  :host([disabled]) {
    opacity: 0.6;
  }
`;var FieldSize,e;(e=FieldSize||(FieldSize={})).Small="small",e.Default="default";var validateRequiredProperties=__webpack_require__("../../packages/ui/dist/utils/validateRequiredProperties.js"),TextInput_decorate=function(t,e,i,o){var p,r=arguments.length,n=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(p=t[a])&&(n=(r<3?p(n):r>3?p(e,i,n):p(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n},TextInput_metadata=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let TextInputComponentWC=class extends lit.WF{constructor(){super(...arguments),this.label="",this.description="",this.id="",this.type="text",this.value="",this.size=FieldSize.Default,this.disabled=!1,this.placeholder="",this.required=!1,this._inputChangeHandler=t=>{if(this.disabled)t.preventDefault(),t.stopPropagation();else{const e=t.target;this.value=e.value}}}static#_=this.styles=style_css;updated(t){super.updated(t),(0,validateRequiredProperties.N)(this,["id"])}focus(){const t=this.shadowRoot?.querySelector("input");t?.focus()}render(){return lit.qy`
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
    `}};TextInput_decorate([(0,decorators.MZ)({type:String}),TextInput_metadata("design:type",Object)],TextInputComponentWC.prototype,"label",void 0),TextInput_decorate([(0,decorators.MZ)({type:String}),TextInput_metadata("design:type",Object)],TextInputComponentWC.prototype,"description",void 0),TextInput_decorate([(0,decorators.MZ)({type:String,reflect:!0}),TextInput_metadata("design:type",Object)],TextInputComponentWC.prototype,"id",void 0),TextInput_decorate([(0,decorators.MZ)({type:String}),TextInput_metadata("design:type",String)],TextInputComponentWC.prototype,"type",void 0),TextInput_decorate([(0,decorators.MZ)({type:String}),TextInput_metadata("design:type",Object)],TextInputComponentWC.prototype,"value",void 0),TextInput_decorate([(0,decorators.MZ)({type:String}),TextInput_metadata("design:type",String)],TextInputComponentWC.prototype,"size",void 0),TextInput_decorate([(0,decorators.MZ)({type:Boolean,reflect:!0}),TextInput_metadata("design:type",Object)],TextInputComponentWC.prototype,"disabled",void 0),TextInput_decorate([(0,decorators.MZ)({type:String}),TextInput_metadata("design:type",Object)],TextInputComponentWC.prototype,"placeholder",void 0),TextInput_decorate([(0,decorators.MZ)({type:Boolean}),TextInput_metadata("design:type",Object)],TextInputComponentWC.prototype,"required",void 0),TextInput_decorate([(0,decorators.MZ)({type:Number}),TextInput_metadata("design:type",Number)],TextInputComponentWC.prototype,"minlength",void 0),TextInput_decorate([(0,decorators.MZ)({type:Number}),TextInput_metadata("design:type",Number)],TextInputComponentWC.prototype,"maxlength",void 0),TextInput_decorate([(0,decorators.MZ)({type:String}),TextInput_metadata("design:type",String)],TextInputComponentWC.prototype,"pattern",void 0),TextInputComponentWC=TextInput_decorate([(0,decorators.EM)("ta-input")],TextInputComponentWC);const FieldWrapper_style_css=lit.AH`
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
`;var FieldWrapper_decorate=function(e,t,r,o){var l,n=arguments.length,p=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,t,r,o);else for(var i=e.length-1;i>=0;i--)(l=e[i])&&(p=(n<3?l(p):n>3?l(t,r,p):l(t,r))||p);return n>3&&p&&Object.defineProperty(t,r,p),p};let FieldWrapperComponentWC=class extends lit.WF{static#_=this.styles=FieldWrapper_style_css;render(){return lit.qy`
      <div class="field-wrapper">
        <slot></slot>
      </div>
    `}};FieldWrapperComponentWC=FieldWrapper_decorate([(0,decorators.EM)("ta-field-wrapper")],FieldWrapperComponentWC);const TextArea_style_css=lit.AH`
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

  :host([disabled]) {
    opacity: 0.6;
  }
`;var TextArea_decorate=function(e,t,r,o){var a,i=arguments.length,p=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,t,r,o);else for(var d=e.length-1;d>=0;d--)(a=e[d])&&(p=(i<3?a(p):i>3?a(t,r,p):a(t,r))||p);return i>3&&p&&Object.defineProperty(t,r,p),p},TextArea_metadata=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let TextAreaComponentWC=class extends lit.WF{constructor(){super(...arguments),this.label="",this.description="",this.id="",this.value="",this.placeholder="",this.required=!1,this.disabled=!1,this.rows=4,this._inputChangeHandler=e=>{if(this.disabled)e.preventDefault(),e.stopPropagation();else{const t=e.target;this.value=t.value}}}static#_=this.styles=TextArea_style_css;updated(e){super.updated(e),(0,validateRequiredProperties.N)(this,["id"])}focus(){const e=this.shadowRoot?.querySelector("textarea");e?.focus()}render(){return lit.qy`
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
    `}};TextArea_decorate([(0,decorators.MZ)({type:String}),TextArea_metadata("design:type",Object)],TextAreaComponentWC.prototype,"label",void 0),TextArea_decorate([(0,decorators.MZ)({type:String}),TextArea_metadata("design:type",Object)],TextAreaComponentWC.prototype,"description",void 0),TextArea_decorate([(0,decorators.MZ)({type:String,reflect:!0}),TextArea_metadata("design:type",Object)],TextAreaComponentWC.prototype,"id",void 0),TextArea_decorate([(0,decorators.MZ)({type:String}),TextArea_metadata("design:type",Object)],TextAreaComponentWC.prototype,"value",void 0),TextArea_decorate([(0,decorators.MZ)({type:String}),TextArea_metadata("design:type",Object)],TextAreaComponentWC.prototype,"placeholder",void 0),TextArea_decorate([(0,decorators.MZ)({type:Boolean}),TextArea_metadata("design:type",Object)],TextAreaComponentWC.prototype,"required",void 0),TextArea_decorate([(0,decorators.MZ)({type:Number}),TextArea_metadata("design:type",Number)],TextAreaComponentWC.prototype,"minlength",void 0),TextArea_decorate([(0,decorators.MZ)({type:Number}),TextArea_metadata("design:type",Number)],TextAreaComponentWC.prototype,"maxlength",void 0),TextArea_decorate([(0,decorators.MZ)({type:Boolean,reflect:!0}),TextArea_metadata("design:type",Object)],TextAreaComponentWC.prototype,"disabled",void 0),TextArea_decorate([(0,decorators.MZ)({type:Number}),TextArea_metadata("design:type",Number)],TextAreaComponentWC.prototype,"rows",void 0),TextAreaComponentWC=TextArea_decorate([(0,decorators.EM)("ta-text-area")],TextAreaComponentWC);const Checkbox_style_css=lit.AH`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :host {
    display: inline-block;
    width: 100%;
  }

  .checkbox-container {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .custom-checkbox {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
  }

  input[type='checkbox'] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  .checkbox {
    width: 40px;
    height: 40px;
    border-radius: var(--global-componentRadius);
    border: 1px solid var(--colors-primary-base);
    background-color: white;
    transition: all 0.25s;
    display: inline-block;
  }

  input[type='checkbox']:focus + .checkbox {
    border: 2px solid var(--colors-primary-active);
  }

  input[type='checkbox']:checked + .checkbox {
    background-color: var(--colors-primary-base);
    border-color: var(--colors-primary-base);
  }

  .checkbox-container:hover .checkbox {
    border: 2px solid var(--colors-primary-hover);
  }

  .checkbox.small {
    width: 30px;
    height: 30px;
  }

  .description {
    font-size: 14px;
  }

  .hide {
    display: none;
  }

  :host([disabled]) {
    opacity: 0.6;
  }
`;var Checkbox_decorate=function(e,t,o,i){var c,s=arguments.length,d=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(e,t,o,i);else for(var r=e.length-1;r>=0;r--)(c=e[r])&&(d=(s<3?c(d):s>3?c(t,o,d):c(t,o))||d);return s>3&&d&&Object.defineProperty(t,o,d),d},Checkbox_metadata=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let CheckboxComponentWC=class extends lit.WF{constructor(){super(...arguments),this.label="",this.description="",this.id="",this.disabled=!1,this.checked=!1,this.required=!1,this.size=FieldSize.Default,this._checkboxChangeHandler=e=>{if(this.disabled)e.preventDefault(),e.stopPropagation();else{const t=e.target;this.checked=t.checked;const o=new CustomEvent("change",{detail:{checked:this.checked},bubbles:!0,composed:!0});this.dispatchEvent(o)}},this._checkboxClickHandler=e=>{if(this.disabled)e.preventDefault(),e.stopPropagation();else{const e=this.shadowRoot?.querySelector("input");this.checked=!e.checked;const t=new CustomEvent("change",{detail:{checked:this.checked},bubbles:!0,composed:!0});this.dispatchEvent(t)}}}static#_=this.styles=Checkbox_style_css;updated(e){super.updated(e),(0,validateRequiredProperties.N)(this,["id"])}focus(){const e=this.shadowRoot?.querySelector("input");e?.focus()}render(){return lit.qy`
      <ta-field-wrapper>
        <div class="checkbox-container">
          <div class="custom-checkbox">
            <input
              id="${`${this.id}-checkbox`}"
              class="checkbox-input"
              type="checkbox"
              ?disabled="${this.disabled}"
              .checked="${this.checked}"
              ?required="${this.required}"
              aria-describedby="${this.description?`${this.id}-description`:""}"
              @change="${this._checkboxChangeHandler}" />
            <div class="checkbox ${this.size}" @click="${this._checkboxClickHandler}"></div>
          </div>
          <label class="${this.label?"":"hide"}" for="${`${this.id}-checkbox`}">
            ${this.label}
          </label>
        </div>
        <div
          id="${`${this.id}-description`}"
          class="${this.description?"":"hide"} description">
          ${this.description}
        </div>
      </ta-field-wrapper>
    `}};Checkbox_decorate([(0,decorators.MZ)({type:String}),Checkbox_metadata("design:type",Object)],CheckboxComponentWC.prototype,"label",void 0),Checkbox_decorate([(0,decorators.MZ)({type:String}),Checkbox_metadata("design:type",Object)],CheckboxComponentWC.prototype,"description",void 0),Checkbox_decorate([(0,decorators.MZ)({type:String,reflect:!0}),Checkbox_metadata("design:type",Object)],CheckboxComponentWC.prototype,"id",void 0),Checkbox_decorate([(0,decorators.MZ)({type:Boolean,reflect:!0}),Checkbox_metadata("design:type",Object)],CheckboxComponentWC.prototype,"disabled",void 0),Checkbox_decorate([(0,decorators.MZ)({type:Boolean}),Checkbox_metadata("design:type",Object)],CheckboxComponentWC.prototype,"checked",void 0),Checkbox_decorate([(0,decorators.MZ)({type:Boolean}),Checkbox_metadata("design:type",Object)],CheckboxComponentWC.prototype,"required",void 0),Checkbox_decorate([(0,decorators.MZ)({type:String}),Checkbox_metadata("design:type",String)],CheckboxComponentWC.prototype,"size",void 0),CheckboxComponentWC=Checkbox_decorate([(0,decorators.EM)("ta-checkbox")],CheckboxComponentWC);const Toggle_style_css=lit.AH`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :host {
    display: inline-block;
    width: 100%;
  }

  .toggle-container {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .custom-toggle {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
  }

  input[type='checkbox'] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  .toggle {
    width: 50px;
    height: 24px;
    border-radius: 25px;
    border: 2px solid var(--colors-primary-base);
    transition: all 0.25s;
    display: inline-flex;
    align-items: center;
    padding-left: 2px;
  }

  .toggle::before {
    content: '';
    display: inline-block;
    width: 18px;
    height: 18px;
    background-color: var(--colors-primary-hover);
    border-radius: 50%;
    transition: all 0.25s;
  }

  input[type='checkbox']:focus + .toggle {
    border: 2px solid var(--colors-primary-active);
  }

  input[type='checkbox']:checked + .toggle {
  }

  input[type='checkbox']:checked + .toggle:before {
    transform: translateX(24px);
    background-color: var(--colors-success-base);
  }

  .toggle-container:hover .toggle {
    border: 2px solid var(--colors-primary-hover);
  }

  .toggle.small {
    width: 40px;
    height: 20px;
  }

  .toggle.small::before {
    width: 14px;
    height: 14px;
  }

  input[type='checkbox']:checked + .toggle.small:before {
    transform: translateX(18px);
    background-color: var(--colors-success-base);
  }

  .description {
    font-size: 14px;
  }

  .hide {
    display: none;
  }

  :host([disabled]) {
    opacity: 0.6;
  }
`;var Toggle_decorate=function(e,t,o,i){var s,d=arguments.length,r=d<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(d<3?s(r):d>3?s(t,o,r):s(t,o))||r);return d>3&&r&&Object.defineProperty(t,o,r),r},Toggle_metadata=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let ToggleComponentWC=class extends lit.WF{constructor(){super(...arguments),this.label="",this.description="",this.id="",this.disabled=!1,this.checked=!1,this.required=!1,this.size=FieldSize.Default,this._toggleChangeHandler=e=>{if(this.disabled)e.preventDefault(),e.stopPropagation();else{const t=e.target;this.checked=t.checked;const o=new CustomEvent("change",{detail:{checked:this.checked},bubbles:!0,composed:!0});this.dispatchEvent(o)}},this._toggleClickHandler=e=>{if(this.disabled)e.preventDefault(),e.stopPropagation();else{const e=this.shadowRoot?.querySelector("input");this.checked=!e.checked;const t=new CustomEvent("change",{detail:{checked:this.checked},bubbles:!0,composed:!0});this.dispatchEvent(t)}}}static#_=this.styles=Toggle_style_css;updated(e){super.updated(e),(0,validateRequiredProperties.N)(this,["id"])}focus(){const e=this.shadowRoot?.querySelector("input");e?.focus()}render(){return lit.qy`
      <ta-field-wrapper>
        <div class="toggle-container">
          <div class="custom-toggle">
            <input
              id="${`${this.id}-toggle`}"
              class="toggle-input"
              type="checkbox"
              ?disabled="${this.disabled}"
              .checked="${this.checked}"
              ?required="${this.required}"
              aria-describedby="${this.description?`${this.id}-description`:""}"
              @change="${this._toggleChangeHandler}" />
            <div class="toggle ${this.size}" @click="${this._toggleClickHandler}"></div>
          </div>
          <label class="${this.label?"":"hide"}" for="${`${this.id}-toggle`}">
            ${this.label}
          </label>
        </div>
        <div
          id="${`${this.id}-description`}"
          class="${this.description?"":"hide"} description">
          ${this.description}
        </div>
      </ta-field-wrapper>
    `}};Toggle_decorate([(0,decorators.MZ)({type:String}),Toggle_metadata("design:type",Object)],ToggleComponentWC.prototype,"label",void 0),Toggle_decorate([(0,decorators.MZ)({type:String}),Toggle_metadata("design:type",Object)],ToggleComponentWC.prototype,"description",void 0),Toggle_decorate([(0,decorators.MZ)({type:String,reflect:!0}),Toggle_metadata("design:type",Object)],ToggleComponentWC.prototype,"id",void 0),Toggle_decorate([(0,decorators.MZ)({type:Boolean,reflect:!0}),Toggle_metadata("design:type",Object)],ToggleComponentWC.prototype,"disabled",void 0),Toggle_decorate([(0,decorators.MZ)({type:Boolean}),Toggle_metadata("design:type",Object)],ToggleComponentWC.prototype,"checked",void 0),Toggle_decorate([(0,decorators.MZ)({type:Boolean}),Toggle_metadata("design:type",Object)],ToggleComponentWC.prototype,"required",void 0),Toggle_decorate([(0,decorators.MZ)({type:String}),Toggle_metadata("design:type",String)],ToggleComponentWC.prototype,"size",void 0),ToggleComponentWC=Toggle_decorate([(0,decorators.EM)("ta-toggle")],ToggleComponentWC);__webpack_require__("../../packages/ui/dist/link/index.js"),__webpack_require__("../../packages/ui/dist/icons/index.js");const Alert_style_css=lit.AH`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :host {
    width: 100%;
  }

  .notification-container {
    display: flex;
    justify-content: center;
  }

  .notification-content {
    display: none;
  }

  .notification-header {
    display: flex;
    align-items: center;
  }

  .notification-title {
    font-family: var(--global-specificFontFamily);
    flex-grow: 1;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .notification-additional-content {
    padding-left: 1rem;
    padding-right: 1rem;
    margin-right: 40px;
    font-size: 0.9rem;
    margin-bottom: 4px;
  }

  .info {
    background-color: var(--colors-background-active);
    color: var(--colors-textPrimary-base);
    border: none;
    box-shadow: 0px 2px 8px 0px var(--colors-primary-base);
  }

  .error {
    background-color: var(--colors-error-base);
    color: var(--colors-background-hover);
    border: 1px solid var(--colors-error-base);
    box-shadow: 0px 2px 8px 0px var(--colors-error-base);
  }

  .visible {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    margin-left: 20px;
    margin-right: 20px;
    border-radius: 5px;
    position: fixed;
    z-index: 100;
    width: 100%;
    top: 60px;
    animation-name: notificationOnLoad;
    animation-duration: 0.6s;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
  }

  @keyframes notificationOnLoad {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }
`;var NotificationVariant,i;(i=NotificationVariant||(NotificationVariant={})).Error="error",i.Info="info";var Alert_decorate=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n},Alert_metadata=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let AlertComponentWC=class extends lit.WF{constructor(){super(...arguments),this.id="",this.visible=!1,this.title="",this.variant=NotificationVariant.Error}static#_=this.styles=Alert_style_css;updated(t){super.updated(t),(0,validateRequiredProperties.N)(this,["id"])}_close(){const t=new CustomEvent("on-close",{detail:{id:this.id},bubbles:!0,composed:!0});this.dispatchEvent(t),this.visible=!1}render(){return lit.qy`
      <div class="notification-container" role="status" aria-live="assertive">
        <div class="notification-content ${this.visible?"visible":""} ${this.variant}">
          <div class="notification-header">
            <div class="notification-title">${this.title}</div>
            <ta-button
              id="${`${this.id}-close-button`}"
              iconOnly
              variant="${this.variant===NotificationVariant.Error?dist_button.Ak.Destruct:dist_button.Ak.Primary}"
              ariaLabel="Close"
              @click="${this._close}"
              ><ta-close-icon></ta-close-icon
            ></ta-button>
          </div>
          <div class="notification-additional-content"><slot></slot></div>
        </div>
      </div>
    `}};Alert_decorate([(0,decorators.MZ)({type:String,reflect:!0}),Alert_metadata("design:type",Object)],AlertComponentWC.prototype,"id",void 0),Alert_decorate([(0,decorators.MZ)({type:Boolean}),Alert_metadata("design:type",Object)],AlertComponentWC.prototype,"visible",void 0),Alert_decorate([(0,decorators.MZ)({type:String}),Alert_metadata("design:type",Object)],AlertComponentWC.prototype,"title",void 0),Alert_decorate([(0,decorators.MZ)({type:String}),Alert_metadata("design:type",String)],AlertComponentWC.prototype,"variant",void 0),AlertComponentWC=Alert_decorate([(0,decorators.EM)("ta-alert")],AlertComponentWC)},"../../packages/ui/dist/link/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{sP:()=>LinkSize,W9:()=>LinkVariant});var lit=__webpack_require__("../../node_modules/lit/index.js"),decorators=__webpack_require__("../../node_modules/lit/decorators.js");const style_css=lit.AH`
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
`;var LinkVariant,n,LinkSize,LinkStyle;(n=LinkVariant||(LinkVariant={})).Primary="primary",n.Secondary="secondary",n.Destruct="destruct",function(n){n.Small="small",n.Default="default"}(LinkSize||(LinkSize={})),function(n){n.Icon="icon",n.Default="default"}(LinkStyle||(LinkStyle={}));var __decorate=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},__metadata=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let LinkComponentWC=class extends lit.WF{constructor(){super(...arguments),this.id="",this.variant=LinkVariant.Primary,this.size=LinkSize.Default,this.disabled=!1,this.href="#",this.openInNewTab=!1}static#_=this.styles=style_css;focus(){const t=this.shadowRoot?.querySelector("a");t?.focus()}render(){const t=this.openInNewTab?"_blank":"_self",e=this.openInNewTab?"noopener noreferrer":"";return lit.qy`
      <a
        id="${this.id}"
        href="${this.href}"
        class="${this.variant} ${this.size}"
        ?disabled="${this.disabled}"
        target="${t}"
        rel="${e}">
        <slot></slot>
      </a>
    `}};__decorate([(0,decorators.MZ)({type:String,reflect:!0}),__metadata("design:type",Object)],LinkComponentWC.prototype,"id",void 0),__decorate([(0,decorators.MZ)({type:String}),__metadata("design:type",Object)],LinkComponentWC.prototype,"variant",void 0),__decorate([(0,decorators.MZ)({type:String}),__metadata("design:type",Object)],LinkComponentWC.prototype,"size",void 0),__decorate([(0,decorators.MZ)({type:Boolean}),__metadata("design:type",Object)],LinkComponentWC.prototype,"disabled",void 0),__decorate([(0,decorators.MZ)({type:String}),__metadata("design:type",Object)],LinkComponentWC.prototype,"href",void 0),__decorate([(0,decorators.MZ)({type:Boolean}),__metadata("design:type",Object)],LinkComponentWC.prototype,"openInNewTab",void 0),LinkComponentWC=__decorate([(0,decorators.EM)("ta-link")],LinkComponentWC)},"../../packages/ui/dist/theme/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{an:()=>createTheme,at:()=>getCssColorVar});const baseTheme={global:{genericFontFamily:"sans-serif, Arial",specificFontFamily:"'Trebuchet MS', serif",componentRadius:"5px",fontSize:{smallScreen:"16px",mediumScreen:"20px",largeScreen:"20px"}},colors:{primary:{base:"#312E2D",hover:"#565352",active:"#212121"},secondary:{base:"#F7901D",hover:"#FFBC4D",active:"#FD8600"},tertiary:{base:"#CEE6E1",hover:"#A4D1C0",active:"#8AB8A0"},background:{base:"#fff",hover:"#f1f1f1",active:"#e0e0e0"},secondaryBackground:{base:"#F4F4F4",hover:"#E5E5E5",active:"#D6D6D6"},textPrimary:{base:"#312E2D",hover:"#4A4746",active:"#1D1B1A"},textSecondary:{base:"#F4F4F4",hover:"#FFFFFF",active:"#E0E0E0"},error:{base:"#d32f2f",hover:"#c62828",active:"#b71c1c"},warning:{base:"#ffa000",hover:"#FFB84D",active:"#FF8C00"},success:{base:"#388e3c",hover:"#4CAF50",active:"#2C6B2A"},info:{base:"#1976d2",hover:"#1E88E5",active:"#1565C0"}},grid:{small:{margin:"16px",gutter:"16px",columns:6},medium:{margin:"24px",gutter:"20px",columns:12},large:{margin:"32px",gutter:"24px",columns:12}},breakpoints:{medium:"768px",large:"1200px"}},mergeTheme=(e,o)=>{const t={...e};for(const n in o)if(o.hasOwnProperty(n)){const r=o[n],c=e[n];"object"==typeof r&&null!==r&&"object"==typeof c&&null!==c?t[n]=mergeTheme(c,r):void 0!==r&&(t[n]=r)}return t},createTheme=(e={})=>{const t=mergeTheme(baseTheme,e);if((o=t)&&"object"==typeof o.global&&"object"==typeof o.colors&&"object"==typeof o.grid&&"object"==typeof o.breakpoints){const e=(t,o="")=>{let m="";for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)){const n=t[r];m+="object"==typeof n&&null!==n?e(n,`${o}-${r}`):`--${o}-${r}: ${n};\n`}return m};let o="";for(const m in t)Object.prototype.hasOwnProperty.call(t,m)&&(o+=e(t[m],m));const m=document.createElement("style");m.textContent=`:root { ${o} }`;const r=document.getElementById("theme-vars");r?r.replaceWith(m):(m.id="theme-vars",document.head.appendChild(m))}var o},getCssColorVar=(o,r="base")=>`var(--colors-${o}-${r})`},"../../packages/ui/dist/utils/validateRequiredProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{N:()=>validateRequiredProperties});const validateRequiredProperties=(o,r)=>{const e=[];for(const t of r)void 0!==o[t]&&null!==o[t]&&""!==o[t]||e.push(t);if(e.length>0)throw new Error(`Missing mandatory properties: ${e.join(", ")}`)}},"storybook/internal/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"storybook/internal/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"storybook/internal/preview-errors":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__},"storybook/internal/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/global":module=>{"use strict";module.exports=__STORYBOOK_MODULE_GLOBAL__},"storybook/internal/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__}},__webpack_require__=>{__webpack_require__.O(0,[659],(()=>{return moduleId="./storybook-config-entry.js",__webpack_require__(__webpack_require__.s=moduleId);var moduleId}));__webpack_require__.O()}]);
//# sourceMappingURL=main.bc8a504e.iframe.bundle.js.map