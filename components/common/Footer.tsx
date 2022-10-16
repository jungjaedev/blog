import { AiFillGithub } from 'react-icons/ai';
import { RiKakaoTalkFill } from 'react-icons/ri';

const Footer = () => {
  const handleClick = (type: string) => {
    if(type === 'Kakao') {
      window.open('https://open.kakao.com/o/gHsXFgDe')
    } else if(type === 'Github') {
      window.open('https://github.com/jungjaedev/')
    }
  }
  return (
    <div className="mt-auto flex w-full flex-col items-center justify-center space-y-2 border border-[#EBEBEB] bg-[#FCFCFC] py-[40px]">
      <div className="flex items-center space-x-3">
        <AiFillGithub onClick={() => handleClick("Github")} className="hover:cursor-pointer" size="2rem" />
        <RiKakaoTalkFill className="hover:cursor-pointer" onClick={() => handleClick("Kakao")} size="2rem" />
      </div>
      <div className="text-center">
        © 2022. Tech Blog
      </div>
    </div>
  )
}

export default Footer