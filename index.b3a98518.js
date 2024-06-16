var t=document.querySelector("#largeImg");document.querySelector("#thumbs").addEventListener("click",function(e){e.preventDefault();var r=e.target.closest(".list-item");if(r){var i=r.querySelector("a");if(i){var u=i.getAttribute("href"),a=i.getAttribute("title");t.setAttribute("src",u),t.setAttribute("alt",a)}}});
//# sourceMappingURL=index.b3a98518.js.map
