function helperGridJs(selector, options) {
    var defaults = {
      size: "10%",
      color: "red"
    }
  
    var settings = Object.assign({}, defaults, options),
        elements = document.querySelectorAll(selector)
  
    elements.forEach(function(element) {
      var newElement = document.createElement("div")
      newElement.className = "helperJs"
  
      if (settings.color) {
        newElement.style.background = "linear-gradient(to left, " + settings.color + " 1px, transparent 0%) repeat-x left center"
      }
      
      if (settings.size) {
        newElement.style.backgroundSize = settings.size + " 100vh"
      }
  
      newElement.style.zIndex = 99
      newElement.style.position = "fixed"
      newElement.style.top = 0
      newElement.style.left = 0
      newElement.style.width = "100%"
      newElement.style.height = "100vh"
      newElement.style.opacity = 0.5
      newElement.style.pointerEvents = "none"
  
      element.parentNode.insertBefore(newElement, element.nextSibling)
    })
  }