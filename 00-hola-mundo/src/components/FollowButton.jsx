export function FollowButton ({ isFollowing }) {
  return (
    <>
      {
                isFollowing
                  ? (
                    <button className='text-sm bg-white text-black font-bold px-4 py-2 rounded-full hover:bg-gray-200 active:bg-gray-300'>Seguir</button>
                    )
                  : (
                    <button className='text-sm bg-none text-white font-bold px-4 py-2 rounded-full hover:bg-gray-700 active:bg-gray-800 border border-white'>Seguir</button>
                    )
            }
    </>
  )
}
