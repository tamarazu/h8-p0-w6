var pageTitleElement = document.getElementById("fill-me");
var pageBoxElement = document.getElementsByClassName("change-all-of-me")
var pageHeadingsElement = document.getElementsByTagName("h2")

pageTitleElement.innerHTML = 'HALO!'
var pageTitleElementContent = pageTitleElement.innerHTML

for(var i = 0; i < pageBoxElement.length; i++){
    var currentPageBoxElements = pageBoxElement[i]
    var currentPageBoxContent = currentPageBoxElements.innerHTML
    currentPageBoxElements.innerHTML = 'Halo Juga!'
}


pageHeadingsElement[0].innerHTML = "apa kabar"

