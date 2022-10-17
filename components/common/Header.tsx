import Link from 'next/link'

const Header = () => {

  return (
    <div className="md:contents">
      <div className="sticky top-0 mx-auto max-w-[1080px] bg-white bg-opacity-50 py-[8px] px-4">
        <div className="flex justify-between py-2">
          <Link href="/">
            <div
              className="flex cursor-pointer items-center px-2 text-2xl font-bold text-black"
            >
              Tech.blog
            </div>
          </Link>
          {/* <div className="flex items-center space-x-8 px-2"> */}
            {/* <div>a</div> */}
            {/* <div>b</div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default Header