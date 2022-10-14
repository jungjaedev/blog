import React from 'react'

const Header = () => {
  // const navList = [
  //   { content: "모든 글", route: "/" },
  //   { content: "소개", route: "/about" },
  // ];
  return (
    <div className="hidden md:contents">
      <div className="sticky top-0 mx-auto max-w-[1080px] bg-white bg-opacity-50 py-[8px] px-4 dark:bg-darkBg dark:bg-opacity-50">
        <div className="flex justify-between py-2">
          <div
              className="flex cursor-pointer items-center px-2 text-2xl font-bold text-black"
            >
              Tech.blog
          </div>
          <div className="flex items-center space-x-8 px-2">
            {/* {navList.map()} */}
            <div>a</div>
            <div>b</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header