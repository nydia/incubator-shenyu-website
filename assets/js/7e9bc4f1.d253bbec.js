"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[9390],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=s(n),h=o,d=m["".concat(l,".").concat(h)]||m[h]||p[h]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3224:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],u={title:"Contributor",sidebar_position:4,description:"Apache ShenYu Contributor's Guide",author:"xiaoyu",categories:"Apache ShenYu",tags:["Contributor"],date:new Date("2019-04-09T00:00:00.000Z"),cover:"/img/architecture/shenyu-framework.png"},l=void 0,s={unversionedId:"contributor",id:"contributor",isDocsHomePage:!1,title:"Contributor",description:"Apache ShenYu Contributor's Guide",source:"@site/community/3-contributor.md",sourceDirName:".",slug:"/contributor",permalink:"/community/contributor",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/community/3-contributor.md",version:"current",lastUpdatedBy:"fengzhenbing",lastUpdatedAt:1630924098,formattedLastUpdatedAt:"9/6/2021",sidebarPosition:4,frontMatter:{title:"Contributor",sidebar_position:4,description:"Apache ShenYu Contributor's Guide",author:"xiaoyu",categories:"Apache ShenYu",tags:["Contributor"],date:"2019-04-09T00:00:00.000Z",cover:"/img/architecture/shenyu-framework.png"},sidebar:"community",previous:{title:"Issue And Pull Request",permalink:"/community/issue-pr"},next:{title:"Committer",permalink:"/community/committer"}},c=[{value:"Submit an Issue",id:"submit-an-issue",children:[]},{value:"Developer Flow",id:"developer-flow",children:[]}],p={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can report a bug, submit a new function enhancement suggestion, or submit a pull request directly."),(0,a.kt)("h2",{id:"submit-an-issue"},"Submit an Issue"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Before submitting an issue, please go through a comprehensive search to make sure the problem cannot be solved just by searching."),(0,a.kt)("li",{parentName:"ul"},"Check the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-shenyu/issues"},"Issue List")," to make sure the problem is not repeated."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-shenyu/issues/new/choose"},"Create")," a new issue and choose the type of issue."),(0,a.kt)("li",{parentName:"ul"},"Define the issue with a clear and descriptive title."),(0,a.kt)("li",{parentName:"ul"},"Fill in necessary information according to the template."),(0,a.kt)("li",{parentName:"ul"},"Choose a label after the issue is created, for example: bug\uff0cenhancement\uff0cdiscussion."),(0,a.kt)("li",{parentName:"ul"},"Please pay attention to your issue, you may need to provide more information during discussion.")),(0,a.kt)("h2",{id:"developer-flow"},"Developer Flow"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Fork ShenYu repo")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fork a ",(0,a.kt)("inlineCode",{parentName:"li"},"Apache ShenYu")," repo to your own repo to work, then setting upstream.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git remote add upstream https://github.com/apache/incubator-shenyu.git\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Choose Issue")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Please choose the issue to be edited. If it is a new issue discovered or a new function enhancement to offer, please create an issue and set the right label for it."),(0,a.kt)("li",{parentName:"ul"},"After choosing the relevant issue, please reply with a deadline to indicate that you are working on it.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Create Branch")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Switch to forked master branch, pull codes from upstream, then create a new branch.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout master\ngit pull upstream master\ngit checkout -b issueNo\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Notice")," \uff1aWe will merge PR using squash, commit log will be different from upstream if you use the old branch."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Coding")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Please obey the ",(0,a.kt)("a",{parentName:"li",href:"/en/contribute/code-conduct/"},"Code of Conduct")," during the process of development and finish the check before submitting the pull request."),(0,a.kt)("li",{parentName:"ul"},"push code to your fork repo.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git add modified-file-names\ngit commit -m 'commit log'\ngit push origin issueNo\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Submit Pull Request")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Send a pull request to the master branch."),(0,a.kt)("li",{parentName:"ul"},"The mentor will do code review before discussing some details (including the design, the implementation and the performance) with you. The request will be merged into the branch of current development version after the edit is well enough."),(0,a.kt)("li",{parentName:"ul"},"At last, congratulate to be an official contributor of ShenYu.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Delete Branch")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can delete the remote branch (origin/issueNo) and the local branch (issueNo) associated with the remote branch (origin/issueNo) after the mentor merged the pull request into the master branch of ShenYu.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout master\ngit branch -d issueNo\ngit push origin --delete issueNo\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Notice"),":  Please note that in order to show your id in the contributor list, don't forget the configurations below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'git config --global user.name "username"\ngit config --global user.email "username@mail.com"\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"FAQ")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"After each Pull Request (PR), you need to execute the following operations, otherwise, the previous PR commit records will be mixed with this PR commit records. The specific operation process is as follows:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout master\ngit fetch upstream\ngit reset --hard upstream/master\ngit push -f\n")))}m.isMDXComponent=!0}}]);