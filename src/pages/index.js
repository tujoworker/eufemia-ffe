import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Layout from '../layout/Layout'
import GatsbyLink from '../layout/GatsbyLink'
import styled from '@emotion/styled'

// hacked FFE
import { Context } from '../hacked-ffe/Provider'
import Button from '../hacked-ffe/Button'
import Label from '../hacked-ffe/Label'
import Input from '../hacked-ffe/Input'
import Checkbox from '../hacked-ffe/Checkbox'
import H1 from '../hacked-ffe/H1'
import P from '../hacked-ffe/P'
import Link from '../hacked-ffe/Link'
import { bell as Bell, link_out as LinkOut } from 'dnb-ui-lib/icons'

const SpacingWrapper = styled.div`
  margin: 2rem 0;
  padding: 2rem;
`

const Section = ({ children }) => {
  const { carrier } = useContext(Context)
  return (
    <SpacingWrapper
      className={carrier === 'dnb' ? 'dnb-section' : 'section-color'}
    >
      {children}
    </SpacingWrapper>
  )
}
Section.propTypes = {
  children: PropTypes.node.isRequired
}

const IndexPage = () => {
  const { carrier } = useContext(Context)

  return (
    <Layout>
      <H1>{(carrier === 'dnb' && 'Eufemia') || 'FFE'}</H1>
      <P>
        This is a simple POC of how to use Eufemia and FFE components in
        single wrapper components.
        <br />
        <Link href="/">This is a Link</Link>
        <br />
        <GatsbyLink to="/page-2/">Go to page 2</GatsbyLink>
      </P>

      <Section>
        <Button
          leftIcon={<Bell />}
          onClick={() => {
            console.log('onClick')
          }}
        >
          Button
        </Button>
      </Section>

      <Section>
        <Button
          element="a"
          href="#hash"
          variant="secondary"
          rightIcon={<LinkOut />}
        >
          Link
        </Button>
      </Section>

      <Section>
        <Label htmlFor="input">Input</Label>
        <Input
          id="input"
          onChange={({ value }) => {
            console.log('onChange', value)
          }}
          value="Input value"
        />
      </Section>

      <Section>
        <Checkbox
          onChange={({ checked }) => {
            console.log('onChange', checked)
          }}
        >
          Checkbox
        </Checkbox>
      </Section>
    </Layout>
  )
}

export default IndexPage
