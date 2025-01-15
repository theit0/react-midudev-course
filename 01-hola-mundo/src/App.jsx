import { TwitterFollowCard } from './components/TwitterFollowCard'

export function App () {
  return (
    <section className='bg-gray-900 min-h-screen text-white flex flex-col gap-4 justify-center items-center'>
      <TwitterFollowCard userName='badbunny' initialIsFollowing>
        Benito Antonio Martínez
      </TwitterFollowCard>
    </section>
  )
}
