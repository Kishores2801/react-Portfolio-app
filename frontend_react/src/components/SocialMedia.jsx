import React from 'react'
import { BsInstagram} from 'react-icons/bs';
import { FaFacebook, FaGithub} from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
        <a href="https://www.instagram.com/kishore_shan_28/" target="_blank" rel="noreferrer"><BsInstagram/></a>
        </div>
        <div>
        <a href="https://www.facebook.com/shanmugam.kishore.5" target="_blank" rel="noreferrer"><FaFacebook/></a>
        </div>
        <div>
        <a href="https://github.com/Kishores2801" target="_blank" rel="noreferrer"><FaGithub/></a>
        </div>
    </div>
  )
}

export default SocialMedia

