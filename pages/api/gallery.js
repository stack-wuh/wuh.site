import config from './config.json'

export default function getGalleryList (req, res) {
  return res.status(200).json(config.gallery)
}