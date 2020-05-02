<script>
import { CldImage } from 'cloudinary-vue'
export default {
  name: `Portrait`,
  components: {
    CldImage
  },
  props: {
    publicId: { type: String, required: true }
  }
}
</script>

<template>
  <cld-image
    :publicId="publicId"
    cloud-name="cepcam"
    secure="true"
    height="480px"
  ></cld-image>
</template>

<style scoped></style>
