import { useState } from 'react'

export function TwitterFollowCard ({ children, userName = 'unknown', initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const buttonStyle = isFollowing
    ? 'group text-sm bg-none text-white font-bold px-4 py-2 rounded-full hover:bg-red-700 active:bg-red-800 border hover:border-red-600 hover:bg-opacity-20 active:hover:bg-opacity-30 hover:text-red-600 border-white '
    : 'text-sm bg-white text-black font-bold px-4 py-2 rounded-full hover:bg-gray-200 active:bg-gray-300'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='flex items-center gap-4'>
      <header className='flex gap-4 items-center'>
        <img className='rounded-full w-14 h-14 object-cover' alt='profile_photo' src='https://scontent.fmdz6-1.fna.fbcdn.net/v/t39.30808-6/471678924_1140059577488834_1284540674095115733_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=kAUIHmKm1UwQ7kNvgEi7gIv&_nc_oc=AdiVh8CPMsSm_N94OoEEQB2YeGmAEMNRC5V71bv7eJEPxd2GDbHjpdh_8iUKOcusnhI&_nc_zt=23&_nc_ht=scontent.fmdz6-1.fna&_nc_gid=AMa-F1oeAR4FA1-qS_6GtPc&oh=00_AYBSOj6EiYYAcy4BR9JDZab0q3pKCMzKkglUwavuaDtwig&oe=6789E117' />
        <div className='flex leading-none gap-1 flex-col'>
          <strong>{children}</strong>
          <span className='text-sm text-gray-300'>@{userName}</span>
        </div>
      </header>
      <aside>
        <button onClick={handleClick} className={buttonStyle}>
          <span className='group-hover:hidden'>{isFollowing ? 'Siguiendo' : 'Seguir'}</span>
          <span className='hidden group-hover:inline'>{isFollowing ? 'Dejar de seguir' : 'Seguir'}</span>
        </button>
      </aside>
    </article>
  )
}
