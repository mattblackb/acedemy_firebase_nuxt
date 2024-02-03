<template>
  <img :src="changeImage()" />
</template>

<script>
export default {
  data() {
    return {
      selectedImage: 'imgs/4.png',
      images: [
        'imgs/1.png',
        'imgs/2.png',
        'imgs/3.png',
        'imgs/4.png',
        'imgs/5.png',
        'imgs/6.png',
        'imgs/7.png',
        'imgs/8.png',
        'imgs/9.png',
        'imgs/10.png',
        'imgs/11.png',
        'imgs/12.png',
        'imgs/13.png',
        'imgs/14.png',
        'imgs/15.png',
        'imgs/16.png',
        'imgs/17.png',
        'imgs/18.png',
        'imgs/19.png',
        'imgs/20.png',
        'imgs/21.png',
        'imgs/22.png',
        'imgs/23.png',
        'imgs/24.png',
        'imgs/25.png',
        'imgs/26.png',
        'imgs/27.png',
        'imgs/28.png',
        'imgs/29.png',
        'imgs/30.png',
        'imgs/31.png',
        'imgs/32.png',
        'imgs/33.png',
        'imgs/34.png',
        'imgs/35.png',
        'imgs/36.png',
        'imgs/37.png',
        'imgs/38.png',
      ],
    }
  },
  methods: {
    changeImage() {
      var index = Math.floor(Math.random() * this.images.length)
      this.selectedImage = this.images[index]
      return this.selectedImage
    },
  },
}
</script>
