import config from './config.json'

export default function getBannerList (req, res) {
  res.status(200).json(config.banner)
}