import { FiTwitter, FiYoutube, FiLinkedin } from 'react-icons/fi'

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap -m-1.5">
      <div className="w-auto p-1.5">
        <a className="flex items-center justify-center w-10 h-10 bg-gray-600 hover:bg-pink-500 hover:text-white text-gray-900  text-2xl rounded-full" href="#">
          <FiTwitter />
        </a>
      </div>
      <div className="w-auto p-1.5">
        <a className="flex items-center justify-center w-10 h-10 bg-gray-600 hover:bg-pink-500 hover:text-white text-2xl rounded-full" href="#">
          <FiYoutube />
        </a>
      </div>
      <div className="w-auto p-1.5">
        <a className="flex items-center justify-center w-10 h-10 bg-gray-600 hover:bg-pink-500 hover:text-white  text-2xl rounded-full" href="#">
          <FiLinkedin />
        </a>
      </div>
    </div>
  )
}
