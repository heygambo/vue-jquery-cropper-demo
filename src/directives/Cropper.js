import jQuery from 'jquery'
import 'cropper'

export default {
  deep: true,

  createCropper (options) {
    options.crop = (event) => {
      this.vm.$emit('crop', event)
    }
    jQuery(this.el).cropper('destroy')
    setTimeout(() => {
      jQuery(this.el).cropper(options)
    })
  },

  bind () {
    this.vm.$on('rotate', (deg) => {
      jQuery(this.el).cropper('rotate', deg)
    })
  },

  update (options) {
    this.createCropper(options)
  },

  unbind () {
    jQuery(this.el).cropper('destroy')
    this.vm.$off('rotate')
  }
}
