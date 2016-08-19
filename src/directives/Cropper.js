import jQuery from 'jquery'
import 'cropper'

export default {
  params: [
    'viewMode',
    'zoomable'
  ],

  paramWatchers: {
    viewMode (val) {
      this.createCropper()
    },
    zoomable (val) {
      this.createCropper()
    }
  },

  createCropper () {
    const vm = this.vm
    const options = JSON.parse(JSON.stringify(this.params))
    options.crop = function crop (event) {
      vm.$emit('crop', event)
    }
    jQuery(this.el).cropper('destroy')
    setTimeout(() => {
      jQuery(this.el).cropper(options)
    })
  },

  bind () {
    this.createCropper()
  },

  update () {
    this.createCropper()
  },

  unbind () {
    jQuery(this.el).cropper('destroy')
  }
}
