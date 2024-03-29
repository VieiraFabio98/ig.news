import {FaGithub} from 'react-icons/fa'
import {FiX} from 'react-icons/fi'
import styles from './styles.module.scss'
import { signIn, useSession, signOut } from 'next-auth/react'

export function SignInButton() {
  const {data: session} = useSession()

  return session ? (
    <button 
    className={styles.signInButton}
    type="button"
    onClick={() => {signOut()}}
    >
      <FaGithub color='04D361'/>
      {session?.user?.name}
      <FiX color='#737380' className={styles.closeIcon}/>
    </button>
  ) : (
    <button 
    className={styles.signInButton}
    type="button"
    onClick={() => {
      signIn('gitHub')
    }}
    >
      <FaGithub color='#EBA417'/>
      Sign in with GitHub
    </button>
  )
}