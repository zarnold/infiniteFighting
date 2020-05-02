const cloudinary = require('cloudinary').v2
require('dotenv').config()
const galleryRemoteFolder =
  process.env.GALLERY_REMOTE_FOLDER || `galleries/monsters`

// Test

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

/**
 * List all the monsters
 */
export async function list() {
  const res = await cloudinary.search
    .expression(`folder:${galleryRemoteFolder} AND  resource_type:image`)
    .with_field('context')
    .with_field('tags')
    .max_results(250 * 250)
    .execute()

  return res.resources.map((image, idx) => ({
    publicId: image.public_id,
    id: idx
  }))
}
