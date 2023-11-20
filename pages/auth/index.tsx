import { NextPage } from 'next'
import { AuthModal } from '@/components'
import { useState } from 'react'

const Auth: NextPage = () => {
  const [isActive, setActive] = useState<boolean>(true)
  const toogleActive = () => {
    setActive(prev => !prev)
  } // need add redicrect, the page doesn't need
  return <AuthModal onCotinue={() => { }} onClose={() => { }} setActive={toogleActive} isActive={isActive} />
}
export default Auth
