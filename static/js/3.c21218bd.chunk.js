(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{43:function(e,t,n){"use strict";n.r(t);var r=n(32),a=n.n(r),o=n(33),i=n(0),c=n.n(i),s=n(7),u=n(8),l=n(10),p=n(9),f=n(11),d=n(38),h={position:"relative",margin:"15px",width:"calc(100%-30px)",height:"calc(100%-30px)",minHeight:"200px",borderWidth:"2px",borderColor:"rgb(102, 102, 102)",borderStyle:"dashed",borderRadius:"5px",textAlign:"left"},m=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(p.a)(t).call(this,e))).onDrop=function(e){n.setState({uploadedFiles:[],files:e},function(){var e=[];n.state.files.forEach(function(t){var r=new FileReader;r.onload=function(){null!==r.result&&(n.props.onFileLoaded&&n.props.onFileLoaded(t,r.result),e=e.concat(t),n.setState({uploadedFiles:e}))},r.onabort=function(){return console.log("file reading was aborted")},r.onerror=function(){return console.log("file reading has failed")},r.readAsDataURL(t)})})},n.state={files:[],uploadedFiles:[]},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(d.a,{onDrop:this.onDrop,accept:this.props.accept},function(t){var n=t.getRootProps,r=t.getInputProps,a=t.isDragActive;return c.a.createElement("div",Object.assign({},n(),{style:h}),c.a.createElement("input",r()),c.a.createElement("ul",null,e.state.uploadedFiles.map(function(e){return c.a.createElement("li",{key:e.name},e.name," - ",e.size," bytes")})),0==e.state.uploadedFiles.length?a?c.a.createElement("p",null,"Drop files here..."):c.a.createElement("p",null,"Try dropping some files here, or click to select files to upload."):c.a.createElement("p",null))})}}]),t}(i.Component),v=n(37),b=n.n(v);b.a.config({name:"WUIS",version:1,storeName:"audio",description:"Audio files"});var g=function(){var e=Object(o.a)(a.a.mark(function e(t,n){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.setItem(t,n);case 2:console.log(t,n.toString().length);case 3:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),w=function(){var e=Object(o.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.getItem(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(o.a)(a.a.mark(function e(){var t;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.keys();case 2:return t=e.sent,e.abrupt("return",Promise.all(t.map(function(e){return w(e)})));case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();t.default=function(){var e=function(){var e=Object(o.a)(a.a.mark(function e(t,n){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t.name,n);case 2:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}();return x().then(function(e){console.log(e)}),c.a.createElement("div",null,c.a.createElement("h1",null,"Upload"),c.a.createElement(m,{onFileLoaded:e}))}}}]);
//# sourceMappingURL=3.c21218bd.chunk.js.map