"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[71],{"../../node_modules/@radix-ui/react-dialog/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Dx:()=>$5d3850c4d0b4e6c7$export$f99233281efd08a0,VY:()=>$5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2,aV:()=>$5d3850c4d0b4e6c7$export$c6fdb837b070b4ff,dk:()=>$5d3850c4d0b4e6c7$export$393edc798c47379d,fC:()=>$5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9,h_:()=>$5d3850c4d0b4e6c7$export$602eac185826482c,jm:()=>$5d3850c4d0b4e6c7$export$69b62a49393917d6,p8:()=>$5d3850c4d0b4e6c7$export$cc702773b8ea3e41,x8:()=>$5d3850c4d0b4e6c7$export$f39c2d165cd861fe,xz:()=>$5d3850c4d0b4e6c7$export$41fb9f06171c75f4});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/@radix-ui/primitive/dist/index.mjs"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@radix-ui/react-context/dist/index.mjs"),_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@radix-ui/react-id/dist/index.mjs"),_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs"),_radix_ui_react_dismissable_layer__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("../../node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs"),_radix_ui_react_focus_scope__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("../../node_modules/@radix-ui/react-focus-scope/dist/index.mjs"),_radix_ui_react_portal__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../node_modules/@radix-ui/react-portal/dist/index.mjs"),_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/@radix-ui/react-presence/dist/index.mjs"),_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@radix-ui/react-primitive/dist/index.mjs"),_radix_ui_react_focus_guards__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("../../node_modules/@radix-ui/react-focus-guards/dist/index.mjs"),react_remove_scroll__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../../node_modules/react-remove-scroll/dist/es2015/Combination.js"),aria_hidden__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../../node_modules/aria-hidden/dist/es2015/index.js"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("../../node_modules/@radix-ui/react-slot/dist/index.mjs");__webpack_require__("../../node_modules/console-browserify/index.js");const[$5d3850c4d0b4e6c7$var$createDialogContext,$5d3850c4d0b4e6c7$export$cc702773b8ea3e41]=(0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__.b)("Dialog"),[$5d3850c4d0b4e6c7$var$DialogProvider,$5d3850c4d0b4e6c7$var$useDialogContext]=$5d3850c4d0b4e6c7$var$createDialogContext("Dialog"),$5d3850c4d0b4e6c7$export$3ddf2d174ce01153=props=>{const{__scopeDialog,children,open:openProp,defaultOpen,onOpenChange,modal=!0}=props,triggerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),contentRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),[open=!1,setOpen]=(0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_2__.T)({prop:openProp,defaultProp:defaultOpen,onChange:onOpenChange});return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($5d3850c4d0b4e6c7$var$DialogProvider,{scope:__scopeDialog,triggerRef,contentRef,contentId:(0,_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_3__.M)(),titleId:(0,_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_3__.M)(),descriptionId:(0,_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_3__.M)(),open,onOpenChange:setOpen,onOpenToggle:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>setOpen((prevOpen=>!prevOpen))),[setOpen]),modal},children)},$5d3850c4d0b4e6c7$export$2e1e1122cf0cba88=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeDialog,...triggerProps}=props,context=$5d3850c4d0b4e6c7$var$useDialogContext("DialogTrigger",__scopeDialog),composedTriggerRef=(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_4__.e)(forwardedRef,context.triggerRef);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__.WV.button,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({type:"button","aria-haspopup":"dialog","aria-expanded":context.open,"aria-controls":context.contentId,"data-state":$5d3850c4d0b4e6c7$var$getState(context.open)},triggerProps,{ref:composedTriggerRef,onClick:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_7__.M)(props.onClick,context.onOpenToggle)}))})),[$5d3850c4d0b4e6c7$var$PortalProvider,$5d3850c4d0b4e6c7$var$usePortalContext]=$5d3850c4d0b4e6c7$var$createDialogContext("DialogPortal",{forceMount:void 0}),$5d3850c4d0b4e6c7$export$dad7c95542bacce0=props=>{const{__scopeDialog,forceMount,children,container}=props,context=$5d3850c4d0b4e6c7$var$useDialogContext("DialogPortal",__scopeDialog);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($5d3850c4d0b4e6c7$var$PortalProvider,{scope:__scopeDialog,forceMount},react__WEBPACK_IMPORTED_MODULE_0__.Children.map(children,(child=>(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_8__.z,{present:forceMount||context.open},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_portal__WEBPACK_IMPORTED_MODULE_9__.h,{asChild:!0,container},child)))))},$5d3850c4d0b4e6c7$export$bd1d06c79be19e17=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const portalContext=$5d3850c4d0b4e6c7$var$usePortalContext("DialogOverlay",props.__scopeDialog),{forceMount=portalContext.forceMount,...overlayProps}=props,context=$5d3850c4d0b4e6c7$var$useDialogContext("DialogOverlay",props.__scopeDialog);return context.modal?(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_8__.z,{present:forceMount||context.open},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($5d3850c4d0b4e6c7$var$DialogOverlayImpl,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({},overlayProps,{ref:forwardedRef}))):null})),$5d3850c4d0b4e6c7$var$DialogOverlayImpl=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeDialog,...overlayProps}=props,context=$5d3850c4d0b4e6c7$var$useDialogContext("DialogOverlay",__scopeDialog);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_remove_scroll__WEBPACK_IMPORTED_MODULE_10__.Z,{as:_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_11__.g7,allowPinchZoom:!0,shards:[context.contentRef]},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__.WV.div,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({"data-state":$5d3850c4d0b4e6c7$var$getState(context.open)},overlayProps,{ref:forwardedRef,style:{pointerEvents:"auto",...overlayProps.style}})))})),$5d3850c4d0b4e6c7$export$b6d9565de1e068cf=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const portalContext=$5d3850c4d0b4e6c7$var$usePortalContext("DialogContent",props.__scopeDialog),{forceMount=portalContext.forceMount,...contentProps}=props,context=$5d3850c4d0b4e6c7$var$useDialogContext("DialogContent",props.__scopeDialog);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_8__.z,{present:forceMount||context.open},context.modal?(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($5d3850c4d0b4e6c7$var$DialogContentModal,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({},contentProps,{ref:forwardedRef})):(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($5d3850c4d0b4e6c7$var$DialogContentNonModal,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({},contentProps,{ref:forwardedRef})))})),$5d3850c4d0b4e6c7$var$DialogContentModal=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const context=$5d3850c4d0b4e6c7$var$useDialogContext("DialogContent",props.__scopeDialog),contentRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),composedRefs=(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_4__.e)(forwardedRef,context.contentRef,contentRef);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const content=contentRef.current;if(content)return(0,aria_hidden__WEBPACK_IMPORTED_MODULE_12__.Ry)(content)}),[]),(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($5d3850c4d0b4e6c7$var$DialogContentImpl,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({},props,{ref:composedRefs,trapFocus:context.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_7__.M)(props.onCloseAutoFocus,(event=>{var _context$triggerRef$c;event.preventDefault(),null===(_context$triggerRef$c=context.triggerRef.current)||void 0===_context$triggerRef$c||_context$triggerRef$c.focus()})),onPointerDownOutside:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_7__.M)(props.onPointerDownOutside,(event=>{const originalEvent=event.detail.originalEvent,ctrlLeftClick=0===originalEvent.button&&!0===originalEvent.ctrlKey;(2===originalEvent.button||ctrlLeftClick)&&event.preventDefault()})),onFocusOutside:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_7__.M)(props.onFocusOutside,(event=>event.preventDefault()))}))})),$5d3850c4d0b4e6c7$var$DialogContentNonModal=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const context=$5d3850c4d0b4e6c7$var$useDialogContext("DialogContent",props.__scopeDialog),hasInteractedOutsideRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),hasPointerDownOutsideRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($5d3850c4d0b4e6c7$var$DialogContentImpl,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({},props,{ref:forwardedRef,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:event=>{var _props$onCloseAutoFoc,_context$triggerRef$c2;(null===(_props$onCloseAutoFoc=props.onCloseAutoFocus)||void 0===_props$onCloseAutoFoc||_props$onCloseAutoFoc.call(props,event),event.defaultPrevented)||(hasInteractedOutsideRef.current||null===(_context$triggerRef$c2=context.triggerRef.current)||void 0===_context$triggerRef$c2||_context$triggerRef$c2.focus(),event.preventDefault());hasInteractedOutsideRef.current=!1,hasPointerDownOutsideRef.current=!1},onInteractOutside:event=>{var _props$onInteractOuts,_context$triggerRef$c3;null===(_props$onInteractOuts=props.onInteractOutside)||void 0===_props$onInteractOuts||_props$onInteractOuts.call(props,event),event.defaultPrevented||(hasInteractedOutsideRef.current=!0,"pointerdown"===event.detail.originalEvent.type&&(hasPointerDownOutsideRef.current=!0));const target=event.target;(null===(_context$triggerRef$c3=context.triggerRef.current)||void 0===_context$triggerRef$c3?void 0:_context$triggerRef$c3.contains(target))&&event.preventDefault(),"focusin"===event.detail.originalEvent.type&&hasPointerDownOutsideRef.current&&event.preventDefault()}}))})),$5d3850c4d0b4e6c7$var$DialogContentImpl=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeDialog,trapFocus,onOpenAutoFocus,onCloseAutoFocus,...contentProps}=props,context=$5d3850c4d0b4e6c7$var$useDialogContext("DialogContent",__scopeDialog),contentRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),composedRefs=(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_4__.e)(forwardedRef,contentRef);return(0,_radix_ui_react_focus_guards__WEBPACK_IMPORTED_MODULE_13__.EW)(),(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_focus_scope__WEBPACK_IMPORTED_MODULE_14__.M,{asChild:!0,loop:!0,trapped:trapFocus,onMountAutoFocus:onOpenAutoFocus,onUnmountAutoFocus:onCloseAutoFocus},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_dismissable_layer__WEBPACK_IMPORTED_MODULE_15__.XB,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({role:"dialog",id:context.contentId,"aria-describedby":context.descriptionId,"aria-labelledby":context.titleId,"data-state":$5d3850c4d0b4e6c7$var$getState(context.open)},contentProps,{ref:composedRefs,onDismiss:()=>context.onOpenChange(!1)}))),!1)})),$5d3850c4d0b4e6c7$export$16f7638e4a34b909=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeDialog,...titleProps}=props,context=$5d3850c4d0b4e6c7$var$useDialogContext("DialogTitle",__scopeDialog);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__.WV.h2,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({id:context.titleId},titleProps,{ref:forwardedRef}))})),$5d3850c4d0b4e6c7$export$94e94c2ec2c954d5=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeDialog,...descriptionProps}=props,context=$5d3850c4d0b4e6c7$var$useDialogContext("DialogDescription",__scopeDialog);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__.WV.p,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({id:context.descriptionId},descriptionProps,{ref:forwardedRef}))})),$5d3850c4d0b4e6c7$export$fba2fb7cd781b7ac=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeDialog,...closeProps}=props,context=$5d3850c4d0b4e6c7$var$useDialogContext("DialogClose",__scopeDialog);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__.WV.button,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({type:"button"},closeProps,{ref:forwardedRef,onClick:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_7__.M)(props.onClick,(()=>context.onOpenChange(!1)))}))}));function $5d3850c4d0b4e6c7$var$getState(open){return open?"open":"closed"}const[$5d3850c4d0b4e6c7$export$69b62a49393917d6,$5d3850c4d0b4e6c7$var$useWarningContext]=(0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__.k)("DialogTitleWarning",{contentName:"DialogContent",titleName:"DialogTitle",docsSlug:"dialog"}),$5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9=$5d3850c4d0b4e6c7$export$3ddf2d174ce01153,$5d3850c4d0b4e6c7$export$41fb9f06171c75f4=$5d3850c4d0b4e6c7$export$2e1e1122cf0cba88,$5d3850c4d0b4e6c7$export$602eac185826482c=$5d3850c4d0b4e6c7$export$dad7c95542bacce0,$5d3850c4d0b4e6c7$export$c6fdb837b070b4ff=$5d3850c4d0b4e6c7$export$bd1d06c79be19e17,$5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2=$5d3850c4d0b4e6c7$export$b6d9565de1e068cf,$5d3850c4d0b4e6c7$export$f99233281efd08a0=$5d3850c4d0b4e6c7$export$16f7638e4a34b909,$5d3850c4d0b4e6c7$export$393edc798c47379d=$5d3850c4d0b4e6c7$export$94e94c2ec2c954d5,$5d3850c4d0b4e6c7$export$f39c2d165cd861fe=$5d3850c4d0b4e6c7$export$fba2fb7cd781b7ac},"../../node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XB:()=>$5cb92bef7577960e$export$177fb62ff3ec1f22});var esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("../../node_modules/react/index.js"),dist=__webpack_require__("../../node_modules/@radix-ui/primitive/dist/index.mjs"),react_primitive_dist=__webpack_require__("../../node_modules/@radix-ui/react-primitive/dist/index.mjs"),react_compose_refs_dist=__webpack_require__("../../node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),react_use_callback_ref_dist=__webpack_require__("../../node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs");let $5cb92bef7577960e$var$originalBodyPointerEvents;const $5cb92bef7577960e$var$DismissableLayerContext=(0,react.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),$5cb92bef7577960e$export$177fb62ff3ec1f22=(0,react.forwardRef)(((props,forwardedRef)=>{var _node$ownerDocument;const{disableOutsidePointerEvents=!1,onEscapeKeyDown,onPointerDownOutside,onFocusOutside,onInteractOutside,onDismiss,...layerProps}=props,context=(0,react.useContext)($5cb92bef7577960e$var$DismissableLayerContext),[node1,setNode]=(0,react.useState)(null),ownerDocument=null!==(_node$ownerDocument=null==node1?void 0:node1.ownerDocument)&&void 0!==_node$ownerDocument?_node$ownerDocument:null===globalThis||void 0===globalThis?void 0:globalThis.document,[,force]=(0,react.useState)({}),composedRefs=(0,react_compose_refs_dist.e)(forwardedRef,(node=>setNode(node))),layers=Array.from(context.layers),[highestLayerWithOutsidePointerEventsDisabled]=[...context.layersWithOutsidePointerEventsDisabled].slice(-1),highestLayerWithOutsidePointerEventsDisabledIndex=layers.indexOf(highestLayerWithOutsidePointerEventsDisabled),index=node1?layers.indexOf(node1):-1,isBodyPointerEventsDisabled=context.layersWithOutsidePointerEventsDisabled.size>0,isPointerEventsEnabled=index>=highestLayerWithOutsidePointerEventsDisabledIndex,pointerDownOutside=function $5cb92bef7577960e$var$usePointerDownOutside(onPointerDownOutside,ownerDocument=(null===globalThis||void 0===globalThis?void 0:globalThis.document)){const handlePointerDownOutside=(0,react_use_callback_ref_dist.W)(onPointerDownOutside),isPointerInsideReactTreeRef=(0,react.useRef)(!1),handleClickRef=(0,react.useRef)((()=>{}));return(0,react.useEffect)((()=>{const handlePointerDown=event=>{if(event.target&&!isPointerInsideReactTreeRef.current){const eventDetail={originalEvent:event};function handleAndDispatchPointerDownOutsideEvent(){$5cb92bef7577960e$var$handleAndDispatchCustomEvent("dismissableLayer.pointerDownOutside",handlePointerDownOutside,eventDetail,{discrete:!0})}"touch"===event.pointerType?(ownerDocument.removeEventListener("click",handleClickRef.current),handleClickRef.current=handleAndDispatchPointerDownOutsideEvent,ownerDocument.addEventListener("click",handleClickRef.current,{once:!0})):handleAndDispatchPointerDownOutsideEvent()}isPointerInsideReactTreeRef.current=!1},timerId=window.setTimeout((()=>{ownerDocument.addEventListener("pointerdown",handlePointerDown)}),0);return()=>{window.clearTimeout(timerId),ownerDocument.removeEventListener("pointerdown",handlePointerDown),ownerDocument.removeEventListener("click",handleClickRef.current)}}),[ownerDocument,handlePointerDownOutside]),{onPointerDownCapture:()=>isPointerInsideReactTreeRef.current=!0}}((event=>{const target=event.target,isPointerDownOnBranch=[...context.branches].some((branch=>branch.contains(target)));isPointerEventsEnabled&&!isPointerDownOnBranch&&(null==onPointerDownOutside||onPointerDownOutside(event),null==onInteractOutside||onInteractOutside(event),event.defaultPrevented||null==onDismiss||onDismiss())}),ownerDocument),focusOutside=function $5cb92bef7577960e$var$useFocusOutside(onFocusOutside,ownerDocument=(null===globalThis||void 0===globalThis?void 0:globalThis.document)){const handleFocusOutside=(0,react_use_callback_ref_dist.W)(onFocusOutside),isFocusInsideReactTreeRef=(0,react.useRef)(!1);return(0,react.useEffect)((()=>{const handleFocus=event=>{if(event.target&&!isFocusInsideReactTreeRef.current){$5cb92bef7577960e$var$handleAndDispatchCustomEvent("dismissableLayer.focusOutside",handleFocusOutside,{originalEvent:event},{discrete:!1})}};return ownerDocument.addEventListener("focusin",handleFocus),()=>ownerDocument.removeEventListener("focusin",handleFocus)}),[ownerDocument,handleFocusOutside]),{onFocusCapture:()=>isFocusInsideReactTreeRef.current=!0,onBlurCapture:()=>isFocusInsideReactTreeRef.current=!1}}((event=>{const target=event.target;[...context.branches].some((branch=>branch.contains(target)))||(null==onFocusOutside||onFocusOutside(event),null==onInteractOutside||onInteractOutside(event),event.defaultPrevented||null==onDismiss||onDismiss())}),ownerDocument);return function $addc16e1bbe58fd0$export$3a72a57244d6e765(onEscapeKeyDownProp,ownerDocument=(null===globalThis||void 0===globalThis?void 0:globalThis.document)){const onEscapeKeyDown=(0,react_use_callback_ref_dist.W)(onEscapeKeyDownProp);(0,react.useEffect)((()=>{const handleKeyDown=event=>{"Escape"===event.key&&onEscapeKeyDown(event)};return ownerDocument.addEventListener("keydown",handleKeyDown),()=>ownerDocument.removeEventListener("keydown",handleKeyDown)}),[onEscapeKeyDown,ownerDocument])}((event=>{index===context.layers.size-1&&(null==onEscapeKeyDown||onEscapeKeyDown(event),!event.defaultPrevented&&onDismiss&&(event.preventDefault(),onDismiss()))}),ownerDocument),(0,react.useEffect)((()=>{if(node1)return disableOutsidePointerEvents&&(0===context.layersWithOutsidePointerEventsDisabled.size&&($5cb92bef7577960e$var$originalBodyPointerEvents=ownerDocument.body.style.pointerEvents,ownerDocument.body.style.pointerEvents="none"),context.layersWithOutsidePointerEventsDisabled.add(node1)),context.layers.add(node1),$5cb92bef7577960e$var$dispatchUpdate(),()=>{disableOutsidePointerEvents&&1===context.layersWithOutsidePointerEventsDisabled.size&&(ownerDocument.body.style.pointerEvents=$5cb92bef7577960e$var$originalBodyPointerEvents)}}),[node1,ownerDocument,disableOutsidePointerEvents,context]),(0,react.useEffect)((()=>()=>{node1&&(context.layers.delete(node1),context.layersWithOutsidePointerEventsDisabled.delete(node1),$5cb92bef7577960e$var$dispatchUpdate())}),[node1,context]),(0,react.useEffect)((()=>{const handleUpdate=()=>force({});return document.addEventListener("dismissableLayer.update",handleUpdate),()=>document.removeEventListener("dismissableLayer.update",handleUpdate)}),[]),(0,react.createElement)(react_primitive_dist.WV.div,(0,esm_extends.Z)({},layerProps,{ref:composedRefs,style:{pointerEvents:isBodyPointerEventsDisabled?isPointerEventsEnabled?"auto":"none":void 0,...props.style},onFocusCapture:(0,dist.M)(props.onFocusCapture,focusOutside.onFocusCapture),onBlurCapture:(0,dist.M)(props.onBlurCapture,focusOutside.onBlurCapture),onPointerDownCapture:(0,dist.M)(props.onPointerDownCapture,pointerDownOutside.onPointerDownCapture)}))}));function $5cb92bef7577960e$var$dispatchUpdate(){const event=new CustomEvent("dismissableLayer.update");document.dispatchEvent(event)}function $5cb92bef7577960e$var$handleAndDispatchCustomEvent(name,handler,detail,{discrete}){const target=detail.originalEvent.target,event=new CustomEvent(name,{bubbles:!1,cancelable:!0,detail});handler&&target.addEventListener(name,handler,{once:!0}),discrete?(0,react_primitive_dist.jH)(target,event):target.dispatchEvent(event)}},"../../node_modules/@radix-ui/react-portal/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>$f1701beae083dbae$export$602eac185826482c});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react-dom/index.js"),_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@radix-ui/react-primitive/dist/index.mjs");const $f1701beae083dbae$export$602eac185826482c=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{var _globalThis$document;const{container=null===globalThis||void 0===globalThis||null===(_globalThis$document=globalThis.document)||void 0===_globalThis$document?void 0:_globalThis$document.body,...portalProps}=props;return container?react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__.WV.div,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},portalProps,{ref:forwardedRef})),container):null}))},"../../node_modules/@radix-ui/react-presence/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>$921a889cee6df7e8$export$99c2b779aa4e8b8b});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react-dom/index.js"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs");const $921a889cee6df7e8$export$99c2b779aa4e8b8b=props=>{const{present,children}=props,presence=function $921a889cee6df7e8$var$usePresence(present){const[node1,setNode]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),stylesRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({}),prevPresentRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(present),prevAnimationNameRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)("none"),initialState=present?"mounted":"unmounted",[state,send]=function $fe963b355347cc68$export$3e6543de14f8614f(initialState,machine){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(((state,event)=>{const nextState=machine[state][event];return null!=nextState?nextState:state}),initialState)}(initialState,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const currentAnimationName=$921a889cee6df7e8$var$getAnimationName(stylesRef.current);prevAnimationNameRef.current="mounted"===state?currentAnimationName:"none"}),[state]),(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__.b)((()=>{const styles=stylesRef.current,wasPresent=prevPresentRef.current;if(wasPresent!==present){const prevAnimationName=prevAnimationNameRef.current,currentAnimationName=$921a889cee6df7e8$var$getAnimationName(styles);if(present)send("MOUNT");else if("none"===currentAnimationName||"none"===(null==styles?void 0:styles.display))send("UNMOUNT");else{send(wasPresent&&prevAnimationName!==currentAnimationName?"ANIMATION_OUT":"UNMOUNT")}prevPresentRef.current=present}}),[present,send]),(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__.b)((()=>{if(node1){const handleAnimationEnd=event=>{const isCurrentAnimation=$921a889cee6df7e8$var$getAnimationName(stylesRef.current).includes(event.animationName);event.target===node1&&isCurrentAnimation&&(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync)((()=>send("ANIMATION_END")))},handleAnimationStart=event=>{event.target===node1&&(prevAnimationNameRef.current=$921a889cee6df7e8$var$getAnimationName(stylesRef.current))};return node1.addEventListener("animationstart",handleAnimationStart),node1.addEventListener("animationcancel",handleAnimationEnd),node1.addEventListener("animationend",handleAnimationEnd),()=>{node1.removeEventListener("animationstart",handleAnimationStart),node1.removeEventListener("animationcancel",handleAnimationEnd),node1.removeEventListener("animationend",handleAnimationEnd)}}send("ANIMATION_END")}),[node1,send]),{isPresent:["mounted","unmountSuspended"].includes(state),ref:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((node=>{node&&(stylesRef.current=getComputedStyle(node)),setNode(node)}),[])}}(present),child="function"==typeof children?children({present:presence.isPresent}):react__WEBPACK_IMPORTED_MODULE_0__.Children.only(children),ref=(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.e)(presence.ref,child.ref);return"function"==typeof children||presence.isPresent?(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child,{ref}):null};function $921a889cee6df7e8$var$getAnimationName(styles){return(null==styles?void 0:styles.animationName)||"none"}$921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName="Presence"},"../../node_modules/class-variance-authority/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>cva});const falsyToString=value=>"boolean"==typeof value?"".concat(value):0===value?"0":value,cx=function(){for(var _len=arguments.length,classes=new Array(_len),_key=0;_key<_len;_key++)classes[_key]=arguments[_key];return classes.flat(1/0).filter(Boolean).join(" ")},cva=(base,config)=>props=>{var ref;if(null==(null==config?void 0:config.variants))return cx(base,null==props?void 0:props.class,null==props?void 0:props.className);const{variants,defaultVariants}=config,getVariantClassNames=Object.keys(variants).map((variant=>{const variantProp=null==props?void 0:props[variant],defaultVariantProp=null==defaultVariants?void 0:defaultVariants[variant];if(null===variantProp)return null;const variantKey=falsyToString(variantProp)||falsyToString(defaultVariantProp);return variants[variant][variantKey]})),propsWithoutUndefined=props&&Object.entries(props).reduce(((acc,param)=>{let[key,value]=param;return void 0===value||(acc[key]=value),acc}),{}),getCompoundVariantClassNames=null==config||null===(ref=config.compoundVariants)||void 0===ref?void 0:ref.reduce(((acc,param1)=>{let{class:cvClass,className:cvClassName,...compoundVariantOptions}=param1;return Object.entries(compoundVariantOptions).every((param=>{let[key,value]=param;return Array.isArray(value)?value.includes({...defaultVariants,...propsWithoutUndefined}[key]):{...defaultVariants,...propsWithoutUndefined}[key]===value}))?[...acc,cvClass,cvClassName]:acc}),[]);return cx(base,getVariantClassNames,getCompoundVariantClassNames,null==props?void 0:props.class,null==props?void 0:props.className)}}}]);