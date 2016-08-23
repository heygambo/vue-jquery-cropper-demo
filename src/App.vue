<template>
  <div id="app">
    <p>jQuery Cropper &amp; Vue Demonstration</p>
    <button id="toggle" @click="toggleCropper">Toggle Cropper</button>
    <div v-if="showCropper">
      <div id="options">
        <div class="view-modes">
          <button
            class="view-mode"
            v-bind="{disabled: cropOptions.viewMode === 0}"
            @click="cropOptions.viewMode = 0">
            View Mode 1
          </button>
          <button
            class="view-mode"
            v-bind="{disabled: cropOptions.viewMode === 1}"
            @click="cropOptions.viewMode = 1">
            View Mode 2
          </button>
          <button
            class="view-mode"
            v-bind="{disabled: cropOptions.viewMode === 2}"
            @click="cropOptions.viewMode = 2">
            View Mode 3
          </button>
          <button
            class="view-mode"
            v-bind="{disabled: cropOptions.viewMode === 3}"
            @click="cropOptions.viewMode = 3">
            View Mode 4
          </button>
        </div>
        
        <input type="checkbox" v-model="cropOptions.zoomable">
        <label for="zoomable">Zoomable?</label>
      </div>
      <div class="actions">
        <button @click="$emit('rotate', 90)">Rotate 90°</button>
      </div>
      <img
        v-cropper="cropOptions"
        src="assets/mustache.jpg"
        alt="Mustache">
      <pre id="output">
x: {{ cropData.x }}
y: {{ cropData.y }}
width: {{ cropData.width }}
height: {{ cropData.height }}
      </pre>
      <div id="photo-credit">
        <a href="https://www.flickr.com/photos/gottshar/7077944259">
          Photo Credit
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Cropper from './directives/Cropper'

export default {
  directives: {
    Cropper
  },

  data () {
    return {
      cropData: {},
      cropOptions: {
        viewMode: 0,
        zoomable: false
      },
      showCropper: false
    }
  },

  events: {
    crop (event) {
      this.cropData = {
        x: event.x,
        y: event.y,
        width: event.width,
        height: event.height
      }
    }
  },

  methods: {
    toggleCropper () {
      this.showCropper = !this.showCropper
    }
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  margin: 0 auto;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}

img {
  height: auto;
  width: 400px;
}

#toggle {
  margin-bottom: 30px;
}

#options {
  margin-bottom: 20px;
}

#photo-credit {
  margin-top: 30px;
}

</style>
