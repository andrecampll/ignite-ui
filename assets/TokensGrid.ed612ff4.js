var a=Object.defineProperty;var o=(r,n)=>a(r,"name",{value:n,configurable:!0});import{a as d,j as e}from"./jsx-runtime.cc1b39bd.js";const s=o(({tokens:r,hasRemValue:n=!1})=>d("table",{className:"tokens-grid",children:[e("thead",{children:d("tr",{children:[e("th",{children:"Name"}),e("th",{children:"Value"}),n&&e("th",{children:"Pixels"})]})}),e("tbody",{children:Object.entries(r).map(([t,i])=>d("tr",{children:[e("td",{children:t}),e("td",{children:i}),n&&d("td",{children:[Number(i.replace("rem",""))*16,"px"]})]},t))})]}),"TokensGrid");try{s.displayName="TokensGrid",s.__docgenInfo={description:"",displayName:"TokensGrid",props:{tokens:{defaultValue:null,description:"",name:"tokens",required:!0,type:{name:"Record<string, string>"}},hasRemValue:{defaultValue:{value:"false"},description:"",name:"hasRemValue",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/TokensGrid.tsx#TokensGrid"]={docgenInfo:s.__docgenInfo,name:"TokensGrid",path:"src/components/TokensGrid.tsx#TokensGrid"})}catch{}export{s as T};
//# sourceMappingURL=TokensGrid.ed612ff4.js.map
