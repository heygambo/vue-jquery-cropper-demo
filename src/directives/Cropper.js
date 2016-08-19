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
    const options = JSON.parse(JSON.stringify(this.params))
    options.crop = (event) => {
      this.vm.$emit('crop', event)
    }
    jQuery(this.el).cropper('destroy')
    setTimeout(() => {
      jQuery(this.el).cropper(options)
    })
  },

  bind () {
    this.createCropper()
    this.vm.$on('rotate', (deg) => {
      console.log('rotate!', deg)
      jQuery(this.el).cropper('rotate', deg)
    })
  },

  update () {
    this.createCropper()
  },

  unbind () {
    jQuery(this.el).cropper('destroy')
    this.vm.$off('rotate')
  }
}
