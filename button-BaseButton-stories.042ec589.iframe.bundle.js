"use strict";(self.webpackChunkstorybook_ui=self.webpackChunkstorybook_ui||[]).push([[635],{"./src/button/BaseButton.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CodeAndAccessibility:()=>CodeAndAccessibility,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/lit/index.js"),_tiger_analytics_ui_button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/ui/dist/button/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Button/ta-button",component:"ta-button",parameters:{controls:{expanded:!0}},argTypes:{id:{description:"Mandatory - unique id for testing",table:{defaultValue:{summary:""}},control:"text"},variant:{options:[_tiger_analytics_ui_button__WEBPACK_IMPORTED_MODULE_1__.Ak.Primary,_tiger_analytics_ui_button__WEBPACK_IMPORTED_MODULE_1__.Ak.Secondary,_tiger_analytics_ui_button__WEBPACK_IMPORTED_MODULE_1__.Ak.Destruct],description:"different styles of the button",table:{defaultValue:{summary:_tiger_analytics_ui_button__WEBPACK_IMPORTED_MODULE_1__.Ak.Primary}},control:{type:"select"}},size:{options:[_tiger_analytics_ui_button__WEBPACK_IMPORTED_MODULE_1__.Mp.Default,_tiger_analytics_ui_button__WEBPACK_IMPORTED_MODULE_1__.Mp.Small],description:"size of the button",table:{defaultValue:{summary:_tiger_analytics_ui_button__WEBPACK_IMPORTED_MODULE_1__.Mp.Default}},control:{type:"select"}},type:{options:["button","submit","reset","menu"],description:"type of the button",table:{defaultValue:{summary:"button"}},control:{type:"select"}},ariaLabel:{description:"A11Y - screen reader label for the button",table:{defaultValue:{summary:""}},control:"text"},iconOnly:{description:"determines if the button contains only icon. ariaLabel is mandatory if iconOnly is true.",table:{defaultValue:{summary:"false"}},control:"boolean"},disabled:{description:"enable or disable the button",table:{defaultValue:{summary:"false"}},control:"boolean"},click:{description:"Triggered when the button is clicked",table:{category:"Events"},control:!1},focus:{description:"Focuses the button",table:{category:"Methods"},control:!1}}},description="The ta-button component is a versatile and customizable button designed to fit various UI needs within your design system. It currently supports multiple variants and sizes, offering flexibility in adapting to different contexts and user interactions. Future updates will include additional features, such as icon support and new button types, allowing for even greater customization and functionality.",CodeAndAccessibility=(args=>{const buttonClickHandler=()=>{alert("Button clicked!")};return args.iconOnly?lit__WEBPACK_IMPORTED_MODULE_0__.qy`
      <ta-button
        id="${args.id}"
        .variant="${args.variant}"
        .size="${args.size}"
        ?disabled="${args.disabled}"
        @click="${buttonClickHandler}"
        ?iconOnly="${args.iconOnly}"
        ariaLabel="${args.ariaLabel}"
        ><ta-settings-icon></ta-settings-icon
      ></ta-button>
      <ta-grid-container .showSideMargin="${!1}">
        <ta-grid-column
          ><div class="story-title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div></ta-grid-column
        >
        <ta-grid-column><div class="story-description">${description}</div></ta-grid-column>
      </ta-grid-container>
    `:lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ta-button
      id="${args.id}"
      .variant="${args.variant}"
      .size="${args.size}"
      ?disabled="${args.disabled}"
      @click="${buttonClickHandler}"
      ariaLabel="${args.ariaLabel}"
      >Settings</ta-button
    >
    <ta-grid-container .showSideMargin="${!1}">
      <ta-grid-column
        ><div class="story-title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div></ta-grid-column
      >
      <ta-grid-column><div class="story-description">${description}</div></ta-grid-column>
    </ta-grid-container>
  `}).bind({});CodeAndAccessibility.args={id:"test-button",variant:_tiger_analytics_ui_button__WEBPACK_IMPORTED_MODULE_1__.Ak.Primary,size:_tiger_analytics_ui_button__WEBPACK_IMPORTED_MODULE_1__.Mp.Default,type:"button",ariaLabel:"Settings",iconOnly:!1,disabled:!1};const __namedExportsOrder=["CodeAndAccessibility"];CodeAndAccessibility.parameters={...CodeAndAccessibility.parameters,docs:{...CodeAndAccessibility.parameters?.docs,source:{originalSource:'args => {\n  const buttonClickHandler = () => {\n    alert(\'Button clicked!\');\n  };\n  if (args.iconOnly) {\n    return html`\n      <ta-button\n        id="${args.id}"\n        .variant="${args.variant}"\n        .size="${args.size}"\n        ?disabled="${args.disabled}"\n        @click="${buttonClickHandler}"\n        ?iconOnly="${args.iconOnly}"\n        ariaLabel="${args.ariaLabel}"\n        ><ta-settings-icon></ta-settings-icon\n      ></ta-button>\n      <ta-grid-container .showSideMargin="${false}">\n        <ta-grid-column\n          ><div class="story-title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div></ta-grid-column\n        >\n        <ta-grid-column><div class="story-description">${description}</div></ta-grid-column>\n      </ta-grid-container>\n    `;\n  }\n  return html`\n    <ta-button\n      id="${args.id}"\n      .variant="${args.variant}"\n      .size="${args.size}"\n      ?disabled="${args.disabled}"\n      @click="${buttonClickHandler}"\n      ariaLabel="${args.ariaLabel}"\n      >Settings</ta-button\n    >\n    <ta-grid-container .showSideMargin="${false}">\n      <ta-grid-column\n        ><div class="story-title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div></ta-grid-column\n      >\n      <ta-grid-column><div class="story-description">${description}</div></ta-grid-column>\n    </ta-grid-container>\n  `;\n}',...CodeAndAccessibility.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=button-BaseButton-stories.042ec589.iframe.bundle.js.map