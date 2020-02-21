window.performOnLoad = (callback) => {
  if (document.readyState === 'loading') {  // Loading hasn't finished yet
    document.addEventListener('DOMContentLoaded', callback);
  } else {  // `DOMContentLoaded` has already fired
    callback();
  }
}

performOnLoad(() => {
  const htmlElement = document.querySelector("html.isnt-js")

  if (htmlElement) {
    htmlElement.classList.remove("isnt-js")
    htmlElement.classList.add("is-js")
  }

  window.$bucketeer = new Bucketeer({
    form: ".m-actions form",
    images: ".m-images .image",
  })
})

class Bucketeer {
  constructor(options) {
    this.form = document.querySelector(options.form)
    this.images = document.querySelectorAll(options.images)
    this.bindEventListeners(this)
  }

  bindEventListeners(self) {
    self.form.querySelector("input[data-action=filter]").addEventListener("input", self.triggerFilter.bind(self))
  }

  // "asdf" to /a.*s.*d.*f/
  fuzzyRegExp(filterString) {
    const pieces = filterString.split("")
    return new RegExp(pieces.join(".*"), "i")
  }

  triggerFilter(event) {
    const input = event.target || event.srcElement
    const fuzzyFinder = this.fuzzyRegExp(input.value)
    this.images.forEach((image) => {
      var imageName = image.dataset.imageName

      if (imageName.match(fuzzyFinder)) {
        image.classList.remove("is-hidden")
      } else {
        image.classList.add("is-hidden")
      }
    })
  }
}

