import React from 'react'

import Layout from '../layout/Layout'
import GatsbyLink from '../layout/GatsbyLink'

import H1 from '../hacked-ffe/H1'
import P from '../hacked-ffe/P'

const SecondPage = () => (
  <Layout>
    <H1>Hi from the second static page</H1>
    <P>Welcome to page 2</P>
    <GatsbyLink to="/">Go back to the homepage</GatsbyLink>
  </Layout>
)

export default SecondPage
