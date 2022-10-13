import { AiFillGithub } from 'react-icons/ai';
import { RiKakaoTalkFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <div className="mt-auto flex w-full flex-col items-center justify-center space-y-2 border border-[#EBEBEB] bg-[#FCFCFC] py-[40px]">
      <div className="flex items-center space-x-3">
        <AiFillGithub size="2rem" />
        <RiKakaoTalkFill size="2rem" />
      </div>
      <div className="text-center">
        © 2022. Tech Blog
      </div>
    </div>
  )
}

export default Footer