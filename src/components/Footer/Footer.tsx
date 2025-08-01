import styled, { css } from 'styled-components'

import { breakpoints } from '../../styles/breakpoints'
import { FooterCard } from '../FooterCard/FooterCard'
import { Logo } from '../Logo'
import googlePlayBanner from '../../assets/images/googleplay-banner.png'
import appStoreBanner from '../../assets/images/appstore-banner.png'

const FooterContainer = styled.div(
  ({ theme: { color } }) => css`
    min-height: 450px;
    color: #8a8a8a;
    background: #5a5a5a;
    padding: 2rem 0;

    hr {
      color: #666666;
      width: 100%;
    }
    a {
      color: #7a7a7a;
      text-decoration: none;
    }
    h2,
    h3,
    h4 {
      color: #787878;
    }
  `
)

const FooterTop = styled.div`
  display: grid;
  gap: 40px 24px;
  grid-template-columns: repeat(1, 1fr);
  @media ${breakpoints.S} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${breakpoints.L} {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const Footer = () => {
  const navigationLinks = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Categories',
      href: '/categories',
    },
    {
      name: 'About',
      href: '/about',
    },
    {
      name: 'Login',
      href: '/login',
    },
  ]

  const socialMediaLinks = [
    {
      name: 'Facebook',
      href: 'https://facebook.com',
      external: true,
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      external: true,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com',
      external: true,
    },
  ]

  return (
    <FooterContainer>
      <div className="container">
        <FooterTop>
          <Logo large logoOnly />
          <FooterCard title="Discover us" links={navigationLinks} />
          <FooterCard title="Our social media" links={socialMediaLinks} />
          <FooterCard title="Check our apps">
            <div className="footer-bottom">
              <img style={{ width: '120px', marginBottom: '0.5rem' }} src={appStoreBanner} />
              <img style={{ width: '120px' }} src={googlePlayBanner} />
              <p
                style={{
                  fontSize: '0.8rem',
                  fontFamily: 'monospace',
                  color: '#8a8a8a',
                }}
                role="figure"
              >
                Version 3.2 updated at {new Date().toLocaleString()}
              </p>
            </div>
          </FooterCard>
        </FooterTop>
      </div>
    </FooterContainer>
  )
}
