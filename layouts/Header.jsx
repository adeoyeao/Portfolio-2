import Navbar from "../components/Navbar"
import Head from "next/head"
import { Navigation } from 'aa-web-design-ui-kit'
import { useRouter } from 'next/router' 

const Header = ({children}) => {
      const router = useRouter()
      const Nav =                   <Navigation 
      backgroundColor='white'
      accentColor='blue'
      paddingSide={10}
      align='right'
      activeLink='/'
      links={[
            {
                  name: 'Services',
                  route: 'services',
                  onClick: () => router.push('services')
            },
            {
                  name: 'Projects',
                  route: 'projects',
                  onClick: () => router.push('projects')
            },
      ]}
      logo='/icons/logo.svg'
      menu='/icons/hamburger.svg'
      visible={true}
      white='white'
      black='black'
/> 
      return (
            <div>
                  <Head>
                        <meta charSet="UTF-8" />
                        <meta name="description" content="Web Developer Portfolio" />
                        <meta name="keywords" content="Alfred Adeoye, Web Developer, Portfolio, React, JavaScript, Front End Development" />
                        <meta name="author" content="Alfred Adeoye" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <title>Alfred Adeoye</title>
                        <link rel="icon" type="image/svg" href="/icons/favicon.svg" />
                  </Head>
                  <Navbar />
                  {/* { Nav } */}
            { children }
            </div>
      )
}

export default Header