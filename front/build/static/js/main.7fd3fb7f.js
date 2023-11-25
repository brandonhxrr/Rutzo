/*! For license information please see main.7fd3fb7f.js.LICENSE.txt */
  cursor: copy;
  display: inline-block;
  line-height: 0;

  > .container {
    position: relative;

    > div,
    > svg {
      position: relative;
    }

    &.highlight:before {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 50%;
      box-shadow: 0 0 5px 2px #aaa;
      content: '';
    }
  }
`,B5=O.memo((function(e){return(0,z.jsx)(j5,{...e})}));function R5(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=R5(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}const V5=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=R5(e))&&(r&&(r+=" "),r+=t);return r};function D5(e){let{address:t,name:n,onClick:r,isActive:i,block:a}=e;const o=V5(qV.button,qV.medium,i?qV.primary:qV.light,a&&qV.block);return(0,z.jsxs)("button",{type:"button",className:o,onClick:r,children:[(0,z.jsx)(B5,{value:t,className:qV.icon,theme:"polkadot",size:28}),n]})}const U5={list:"Accounts_list__9LQG9"};function F5(e){let{list:t,onChange:n}=e;const{login:r}=FH(),i=t.length>0;return i?(0,z.jsx)("ul",{className:U5.list,children:t.map((e=>(0,z.jsx)("li",{children:(0,z.jsx)(D5,{address:e.address,name:e.meta.name,isActive:I0(e),onClick:()=>(e=>{r(e),localStorage.setItem(C0.ACCOUNT,e.address),n()})(e),block:!0})},e.address)))}):(0,z.jsx)("p",{children:"No accounts found. Please open Polkadot extension, create a new account or import existing one and reload the page."})}function X5(e){let{accounts:t,close:n}=e;return(0,z.jsx)(EQ,{heading:"Connect",close:n,children:t?(0,z.jsx)(F5,{list:t,onChange:n}):(0,z.jsxs)("p",{children:["Wallet extension was not found or disconnected. Please check how to install a supported wallet and create an account"," ",(0,z.jsx)("a",{href:"https://wiki.gear-tech.io/docs/idea/account/create-account",target:"_blank",rel:"noreferrer",className:"link-text",children:"here"}),"."]})})}const Z5={wallet:"Wallet_wallet__kNJJ1",balance:"Wallet_balance__pQvAR",currency:"Wallet_currency__-rO5b"};function q5(e){let{balance:t,address:n,name:r,onClick:i}=e;return(0,z.jsxs)("div",{className:Z5.wallet,children:[(0,z.jsxs)("p",{className:Z5.balance,children:[t.value," ",(0,z.jsx)("span",{className:Z5.currency,children:t.unit})]}),(0,z.jsx)(D5,{address:n,name:r,onClick:i})]})}function W5(){const{account:e,accounts:t}=FH(),[n,r]=(0,O.useState)(!1),i=()=>{r(!0)};return(0,z.jsxs)(z.Fragment,{children:[e?(0,z.jsx)(q5,{balance:e.balance,address:e.address,name:e.meta.name,onClick:i}):(0,z.jsx)(WV,{icon:E0,text:"Sign in",onClick:i}),n&&(0,z.jsx)(X5,{accounts:t,close:()=>{r(!1)}})]})}const G5={header:"Header_header__4hINr",nav:"Header_nav__Hx9JF",list:"Header_list__viDMH",highlight:"Header_highlight__xAkgf",open:"Header_open__mI7fK",show:"Header_show__dO8uN"};function Y5(e){let{isAccountVisible:t}=e;const[n]=O.useState(!1);return(0,z.jsxs)("header",{className:G5.header,children:[(0,z.jsx)(x0,{}),(0,z.jsx)("div",{className:`${G5.nav} ${n?G5.open:""}`,children:(0,z.jsxs)("ul",{className:`${G5.list} ${n?G5.show:""}`,children:[(0,z.jsx)("li",{children:(0,z.jsx)("a",{href:"/#features",children:"FEATURES"})}),(0,z.jsx)("li",{children:(0,z.jsx)("a",{href:"/#how-to-start",children:"HOW TO START"})}),(0,z.jsx)("li",{children:(0,z.jsx)("a",{href:"/#faq",children:"FAQ"})}),(0,z.jsx)("li",{children:(0,z.jsx)("a",{href:"/marketplace",children:"MARKETPLACE"})})]})}),(0,z.jsx)("div",{className:G5.highlight,children:(0,z.jsxs)("a",{href:"/play",children:[(0,z.jsx)("svg",{width:"30",height:"24",viewBox:"0 0 20 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,z.jsx)("path",{d:"M4.47752 0.139215C3.89907 0.269986 3.28622 0.791419 2.66869 1.67868C1.45551 3.42341 0.400225 6.4113 0.0844225 8.98701C0.0156338 9.54983 0 9.81468 0 10.4106C0 11.0165 0.0156338 11.2499 0.0844225 11.6604C0.295479 12.9002 0.847352 13.6038 1.71503 13.7395C2.12776 13.8041 2.5358 13.7196 2.94541 13.4862C3.33469 13.2644 3.65987 12.9896 4.11794 12.4947C4.51973 12.061 4.78394 11.7266 5.46245 10.7913C5.67976 10.4901 5.92365 10.1606 6.00494 10.0597L6.1519 9.87262H9.99625H13.8406L13.9876 10.0597C14.0689 10.1606 14.3315 10.5165 14.5738 10.8493C15.2867 11.8325 15.5556 12.1653 16.009 12.637C16.3936 13.0343 16.6594 13.2561 16.9924 13.4548C17.427 13.713 17.8475 13.8074 18.2775 13.7395C18.4791 13.708 18.6449 13.6534 18.8153 13.5624C19.8768 12.9996 20.2458 11.1654 19.8377 8.49041C19.5094 6.33846 18.6808 3.93325 17.6943 2.25971C17.3754 1.72006 17.0768 1.31451 16.7266 0.940399C16.3123 0.500079 15.9777 0.269986 15.5838 0.152457C15.4603 0.114384 15.4274 0.00513196 14.0986 0.000165939C12.801 -0.00480008 12.7853 0.106107 12.6853 0.137559C12.5524 0.180598 12.3585 0.31137 12.0443 0.569603C11.7613 0.801351 11.6065 0.907292 11.4862 0.953642C11.4095 0.981783 11.3236 0.983438 9.99625 0.983438C8.66894 0.983438 8.58295 0.981783 8.50635 0.953642C8.38597 0.907292 8.23119 0.801351 7.94822 0.569603C7.63555 0.313025 7.44169 0.182253 7.31036 0.139215C7.21343 0.107763 7.14933 -0.0014894 5.89394 0.000165939C4.69952 0.000165939 4.59946 0.111074 4.47752 0.139215ZM14.9725 2.19846C15.1366 2.23984 15.2805 2.37392 15.3368 2.54277C15.368 2.63381 15.368 2.80928 15.3368 2.90032C15.207 3.28436 14.7411 3.38865 14.4831 3.09234C14.3815 2.97647 14.3503 2.88874 14.3503 2.72155C14.3503 2.61395 14.3581 2.56263 14.3831 2.5047C14.4488 2.35572 14.5785 2.2415 14.7317 2.19846C14.8255 2.17197 14.8631 2.17197 14.9725 2.19846ZM5.24358 3.01123V3.59888H5.79858H6.35358L6.35045 3.98954L6.34576 4.37854L5.79545 4.37689H5.24358L5.24045 4.96784L5.23576 5.56046L4.86524 5.56542L4.49315 5.56873V4.97281V4.37689H3.93815H3.38315V3.98788V3.59888H3.93815H4.49315V3.01123V2.42358H4.86836H5.24358V3.01123ZM13.7218 3.52273C13.8906 3.56411 14.0454 3.71806 14.0923 3.89022C14.1204 3.99285 14.1064 4.18818 14.0642 4.28088C14.0157 4.38516 13.9141 4.48945 13.8109 4.54076C13.6858 4.60201 13.5107 4.60036 13.3872 4.53745C13.284 4.48448 13.1809 4.37358 13.134 4.26432C13.0855 4.15507 13.0855 3.93657 13.1324 3.82897C13.1996 3.67668 13.3388 3.55584 13.4935 3.51777C13.5795 3.49625 13.6202 3.4979 13.7218 3.52273ZM16.3545 3.56577C16.5312 3.65847 16.6328 3.83228 16.6328 4.04582C16.6328 4.15342 16.625 4.18652 16.5812 4.28088C16.4905 4.47786 16.3295 4.5838 16.1247 4.5838C15.9183 4.58215 15.7589 4.47621 15.6682 4.28088C15.6244 4.18652 15.6166 4.15507 15.6166 4.04582C15.6182 3.9465 15.626 3.9018 15.6588 3.82897C15.7839 3.54094 16.0856 3.42672 16.3545 3.56577ZM15.096 4.90329C15.1961 4.9546 15.293 5.0622 15.3414 5.17145C15.3946 5.29229 15.3977 5.48762 15.3477 5.60515C15.3008 5.7144 15.1992 5.82531 15.0944 5.87828C15.0194 5.91801 14.9881 5.92463 14.874 5.92463C14.7599 5.92463 14.7286 5.91801 14.652 5.87828C14.3909 5.74254 14.2862 5.39327 14.43 5.12841C14.4785 5.03737 14.6082 4.91487 14.6911 4.88342C14.7911 4.84369 15.0022 4.85528 15.096 4.90329ZM8.04984 7.03371C8.42662 7.11813 8.74711 7.45582 8.8331 7.86303C8.88625 8.11796 8.83935 8.41426 8.71115 8.64435C8.62986 8.79168 8.46101 8.96052 8.31562 9.03998C8.14833 9.13102 8.02014 9.16579 7.83879 9.16579C7.43856 9.16744 7.08836 8.93569 6.91639 8.55662C6.83822 8.38281 6.81634 8.27687 6.8179 8.08485C6.81946 7.65943 7.03365 7.30187 7.39635 7.11482C7.5949 7.01219 7.82628 6.98405 8.04984 7.03371ZM12.3773 7.03371C12.5915 7.08171 12.8213 7.234 12.9573 7.41609C13.1074 7.61804 13.1746 7.83324 13.1746 8.1014C13.173 8.40764 13.0714 8.65263 12.8557 8.87114C12.6571 9.07143 12.4289 9.16744 12.1537 9.16579C11.877 9.16413 11.6331 9.05819 11.4424 8.85458C11.2501 8.64932 11.1563 8.42916 11.1422 8.15106C11.1313 7.94746 11.1625 7.78689 11.2501 7.59983C11.3783 7.32836 11.6566 7.09827 11.9348 7.03536C12.0677 7.00391 12.246 7.00391 12.3773 7.03371Z",fill:"white"})}),"PLAY"]})}),t&&(0,z.jsx)(W5,{})]})}var K5;function J5(){return J5=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},J5.apply(this,arguments)}function Q5(e,t){let{title:n,titleId:r,...i}=e;return O.createElement("svg",J5({width:20,height:20,viewBox:"0 0 16 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?O.createElement("title",{id:r},n):null,K5||(K5=O.createElement("path",{d:"M4.8965 18C5.52012 18 5.69637 17.7512 5.69637 17.4332C5.69637 17.1152 5.69637 16.424 5.68278 15.4424C2.44267 16.1475 1.75127 13.8663 1.75127 13.8663C1.22253 12.5253 0.449798 12.1521 0.449798 12.1521C-0.60769 11.4332 0.531127 11.447 0.531127 11.447C1.69704 11.53 2.32066 12.6498 2.32066 12.6498C3.36455 14.447 5.04561 13.9217 5.70992 13.6175C5.76415 13.023 6.02173 12.4562 6.45555 12.0415C3.86616 11.7512 1.1412 10.742 1.1412 6.26266C1.12765 5.10139 1.56148 3.96775 2.34775 3.12445C2.21219 2.83411 1.81905 1.64517 2.44267 0.0276461C2.44267 0.0276461 3.41879 -0.290324 5.65569 1.23045C7.56723 0.705075 9.57365 0.705075 11.4852 1.23045C13.695 -0.276464 14.6847 0.0276461 14.6847 0.0276461C15.3083 1.63135 14.9151 2.8203 14.8067 3.12445C15.593 3.96775 16.0133 5.10139 15.9997 6.26266C15.9997 10.7558 13.2747 11.7373 10.6718 12.0276C11.0785 12.3733 11.4581 13.0922 11.4581 14.1843C11.4581 15.7604 11.4446 17.0046 11.4446 17.3779C11.4446 17.682 11.5801 17.9309 12.2444 17.9309L4.8965 18Z",fill:"#BCBCBC"})))}const _5=O.forwardRef(Q5);__webpack_require__.p;var $5,e7;function t7(){return t7=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},t7.apply(this,arguments)}function n7(e,t){let{title:n,titleId:r,...i}=e;return O.createElement("svg",t7({width:25,height:25,viewBox:"0 0 965 965",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?O.createElement("title",{id:r},n):null,$5||($5=O.createElement("path",{d:"M482.33 963.66C748.161 963.66 963.66 748.161 963.66 482.33C963.66 216.499 748.161 1 482.33 1C216.499 1 1 216.499 1 482.33C1 748.161 216.499 963.66 482.33 963.66Z",fill:"black",stroke:"white",strokeMiterlimit:10})),e7||(e7=O.createElement("path",{d:"M185.83 203.461L415.9 511.081L184.38 761.191H236.49L439.19 542.211L602.96 761.191H780.28L537.26 436.271L752.76 203.461H700.65L513.98 405.131L363.15 203.461H185.83ZM262.46 241.841H343.92L703.64 722.811H622.18L262.46 241.841Z",fill:"white"})))}const r7=O.forwardRef(n7);__webpack_require__.p;var i7,a7,o7,s7;function c7(){return c7=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c7.apply(this,arguments)}function l7(e,t){let{title:n,titleId:r,...i}=e;return O.createElement("svg",c7({width:25,height:25,viewBox:"0 0 965 965",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?O.createElement("title",{id:r},n):null,i7||(i7=O.createElement("path",{d:"M482.33 963.66C748.161 963.66 963.66 748.161 963.66 482.33C963.66 216.499 748.161 1 482.33 1C216.499 1 1 216.499 1 482.33C1 748.161 216.499 963.66 482.33 963.66Z",fill:"black",stroke:"white",strokeMiterlimit:10})),a7||(a7=O.createElement("path",{d:"M482 275.471C549.266 275.471 557.233 275.728 583.8 276.94C608.362 278.061 621.7 282.164 630.578 285.614C641.52 289.652 651.418 296.092 659.544 304.459C667.911 312.585 674.351 322.483 678.389 333.425C681.839 342.302 685.943 355.641 687.063 380.203C688.275 406.768 688.532 414.735 688.532 482.003C688.532 549.271 688.275 557.236 687.063 583.803C685.942 608.365 681.838 621.703 678.389 630.581C674.198 641.446 667.779 651.313 659.544 659.547C651.31 667.782 641.443 674.201 630.578 678.392C621.701 681.842 608.362 685.946 583.8 687.066C557.24 688.278 549.273 688.535 482 688.535C414.727 688.535 406.763 688.278 380.2 687.066C355.638 685.945 342.3 681.841 333.422 678.392C322.48 674.353 312.582 667.914 304.456 659.547C296.089 651.421 289.65 641.523 285.611 630.581C282.161 621.704 278.057 608.365 276.937 583.803C275.725 557.239 275.468 549.271 275.468 482.003C275.468 414.735 275.725 406.77 276.937 380.203C278.058 355.641 282.161 342.303 285.611 333.425C289.65 322.482 296.09 312.584 304.458 304.458C312.584 296.091 322.482 289.652 333.424 285.613C342.301 282.163 355.64 278.059 380.202 276.939C406.767 275.727 414.734 275.47 482.002 275.47M482.002 230.079C413.584 230.079 405.002 230.369 378.136 231.595C351.321 232.819 333.009 237.077 316.985 243.305C300.176 249.631 284.948 259.547 272.365 272.362C259.547 284.945 249.628 300.172 243.3 316.982C237.077 333.007 232.819 351.319 231.6 378.134C230.369 405 230.079 413.582 230.079 482C230.079 550.418 230.369 559 231.6 585.866C232.824 612.681 237.082 630.993 243.31 647.017C249.636 663.826 259.552 679.054 272.367 691.637C284.95 704.452 300.178 714.368 316.987 720.694C333.012 726.922 351.324 731.18 378.138 732.404C405.008 733.63 413.587 733.92 482.004 733.92C550.421 733.92 559.004 733.63 585.87 732.404C612.685 731.18 630.997 726.922 647.021 720.694C663.756 714.222 678.954 704.325 691.641 691.637C704.329 678.95 714.226 663.752 720.698 647.017C726.926 630.992 731.184 612.68 732.408 585.866C733.634 558.996 733.924 550.417 733.924 482C733.924 413.583 733.634 405 732.408 378.134C731.184 351.319 726.926 333.007 720.698 316.983C714.373 300.174 704.456 284.946 691.641 272.363C679.058 259.545 663.829 249.627 647.018 243.3C630.993 237.077 612.681 232.819 585.866 231.6C559 230.369 550.418 230.079 482 230.079H482.002Z",fill:"white"})),o7||(o7=O.createElement("path",{d:"M482 352.635C456.414 352.635 431.403 360.222 410.129 374.437C388.855 388.652 372.274 408.856 362.482 432.494C352.691 456.133 350.129 482.144 355.121 507.238C360.112 532.332 372.433 555.383 390.525 573.475C408.617 591.567 431.668 603.888 456.762 608.879C481.857 613.871 507.868 611.309 531.506 601.518C555.144 591.726 575.348 575.145 589.563 553.871C603.778 532.597 611.365 507.586 611.365 482C611.365 447.69 597.736 414.786 573.475 390.525C549.214 366.264 516.31 352.635 482 352.635ZM482 565.973C465.392 565.973 449.157 561.048 435.347 551.821C421.538 542.593 410.775 529.478 404.42 514.134C398.064 498.79 396.401 481.906 399.642 465.617C402.882 449.328 410.88 434.366 422.624 422.622C434.367 410.878 449.33 402.88 465.619 399.64C481.908 396.4 498.792 398.063 514.136 404.419C529.48 410.775 542.595 421.538 551.822 435.347C561.049 449.156 565.974 465.392 565.974 482C565.974 504.271 557.126 525.63 541.378 541.378C525.63 557.126 504.271 565.973 482 565.973Z",fill:"white"})),s7||(s7=O.createElement("path",{d:"M616.476 377.754C633.172 377.754 646.706 364.22 646.706 347.524C646.706 330.828 633.172 317.294 616.476 317.294C599.781 317.294 586.246 330.828 586.246 347.524C586.246 364.22 599.781 377.754 616.476 377.754Z",fill:"white"})))}const u7=O.forwardRef(l7),f7=(__webpack_require__.p,{socials:"Socials_socials__v7s8k"}),d7=[{href:"https://github.com/brandonhxrr/Rutzo",icon:_5},{href:"https://x.com/Rustizados",icon:r7},{href:"https://instagram.com/rustizados",icon:u7}];function h7(){return(0,z.jsx)("ul",{className:f7.socials,children:d7.map((e=>{let{href:t,icon:n}=e;return(0,z.jsx)("li",{children:(0,z.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:(0,z.jsx)(n,{})})},t)}))})}const p7={copyright:"Copyright_copyright__BpZr3"};function m7(){const e=(new Date).getFullYear();return(0,z.jsxs)("small",{className:p7.copyright,children:["Rutzo ",e,". All rights reserved."]})}const g7={footer:"Footer_footer__HFTw6"};function y7(){return(0,z.jsxs)("footer",{className:g7.footer,children:[(0,z.jsx)(h7,{}),(0,z.jsx)(m7,{})]})}const b7={loader:"ApiLoader_loader__kWhHs",ellipsis:"ApiLoader_ellipsis__IYa+h"};function v7(){return(0,z.jsx)("p",{className:b7.loader,children:"Initializing API"})}const w7=[function(e){let{basename:t,children:n,window:r}=e,i=O.useRef();null==i.current&&(i.current=function(e){return void 0===e&&(e={}),eB((function(e,t){let{pathname:n,search:r,hash:i}=e.location;return QH("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"===typeof t?t:_H(t)}),null,e)}({window:r,v5Compat:!0}));let a=i.current,[o,s]=O.useState({action:a.action,location:a.location});return O.useLayoutEffect((()=>a.listen(s)),[a]),O.createElement($B,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:a})},function(e){let{children:t}=e;return(0,z.jsx)(jH,{template:FQ,containerClassName:UQ.root,children:t})},function(e){let{children:t}=e;return(0,z.jsx)(xH,{providerAddress:M0,children:t})},function(e){let{children:t}=e;const{api:n,isApiReady:r}=(0,O.useContext)(wH),i=(0,O.useContext)(LH),[a,o]=(0,O.useState)([]),[s,c]=(0,O.useState)([]),[l,u]=(0,O.useState)(),{address:f}=l||{},[d,h]=(0,O.useState)(!1),[p,m]=(0,O.useState)(!1),g=e=>{let{message:t}=e;return i.error(t)},y=e=>{const[t]=n.registry.chainTokens,[r]=n.registry.chainDecimals;return{value:lH(e.toString(),{decimals:r,forceUnit:t,withSiFull:!1,withSi:!1,withUnit:t}),unit:t}},b=e=>{localStorage.setItem(bH,e.address),u(e)},v=e=>null==n?void 0:n.balance.findOut(e.address).then((t=>Object.assign(Object.assign({},e),{balance:y(t),decodedAddress:tj(e.address)}))).then(b).catch(g);(0,O.useEffect)((()=>{r&&zn("Gear App").then((e=>Sj(this,void 0,void 0,(function*(){return{exts:e,accs:yield Nn()}})))).then((e=>{let{exts:t,accs:n}=e;o(t),c(n)})).catch(g).finally((()=>h(!0)))}),[r]),(0,O.useEffect)((()=>{if(!d)return;const e=null==s?void 0:s.find(vH);return Ln((e=>c(e))),e?v(e).finally((()=>m(!0))):m(!0),()=>{}}),[d]);const w=e=>u((t=>t?Object.assign(Object.assign({},t),{balance:y(e)}):t));(0,O.useEffect)((()=>{let e;return f&&(e=null==n?void 0:n.gearEvents.subscribeToBalanceChanges(f,w)),()=>{null==e||e.then((e=>e()))}}),[n,f]);const{Provider:x}=HH,k={extensions:a,accounts:s,account:l,isAccountReady:p,login:v,logout:()=>{localStorage.removeItem(bH),u(void 0)}};return(0,z.jsx)(x,Object.assign({value:k},{children:t}))}];const x7=function(e){return()=>w7.reduceRight(((e,t)=>(0,z.jsx)(t,{children:e})),(0,z.jsx)(e,{}))}((function(){const{isApiReady:e}=ZH(),{isAccountReady:t}=FH(),n=e&&t;return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(Y5,{isAccountVisible:t}),(0,z.jsx)("main",{children:n?(0,z.jsx)(n0,{}):(0,z.jsx)(v7,{})}),(0,z.jsx)(y7,{})]})})),k7=document.getElementById("root");(0,I.s)(k7).render((0,z.jsx)(x7,{}))})()})();
//# sourceMappingURL=main.7fd3fb7f.js.map