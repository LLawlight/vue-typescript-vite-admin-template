import{d as e,e as l,w as t,r as a,o as r,c as d,k as o}from"./vendor.8e5c2465.js";var i=e({name:"Tree",setup(){const e=l(""),a=l();t(e,(e=>{a.value.filter(e)}));return{data2:[{id:1,label:"Level one 1",children:[{id:4,label:"Level two 1-1",children:[{id:9,label:"Level three 1-1-1"},{id:10,label:"Level three 1-1-2"}]}]},{id:2,label:"Level one 2",children:[{id:5,label:"Level two 2-1"},{id:6,label:"Level two 2-2"}]},{id:3,label:"Level one 3",children:[{id:7,label:"Level two 3-1"},{id:8,label:"Level two 3-2"}]}],defaultProps:{children:"children",label:"label"},filterText:e,tree2:a,filterNode:(e,l)=>!e||l.label&&-1!==l.label.indexOf(e)}}});const n={class:"app-container"};i.render=function(e,l,t,i,s,f){const c=a("el-input"),p=a("el-tree");return r(),d("div",n,[o(c,{modelValue:e.filterText,"onUpdate:modelValue":l[1]||(l[1]=l=>e.filterText=l),placeholder:"Filter keyword",style:{"margin-bottom":"30px"}},null,8,["modelValue"]),o(p,{ref:"tree2",data:e.data2,props:e.defaultProps,"filter-node-method":e.filterNode,class:"filter-tree","default-expand-all":""},null,8,["data","props","filter-node-method"])])};export default i;
