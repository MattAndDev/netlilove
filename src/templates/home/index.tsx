/* eslint-disable @typescript-eslint/no-var-requires */
import 'normalize.css'
import React, { FC } from 'react'
import { graphql } from 'gatsby'
import { HomeQuery } from '../../graphql-types'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import { slide } from './styles.module.css'

const Home: FC<{ data: HomeQuery }> = ({ data }) => {
  console.log(data)
  return (
    <div>
      <Carousel
        showThumbs={false}
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        autoPlay={true}
        transitionTime={200}
      >
        {data.allMarkdownRemark.edges[0].node.frontmatter.images.map(
          ({ image, title }) => (
            <div>
              <h1 style={{ position: 'absolute' }}>{title}</h1>
              <img
                className={slide}
                src={image.childImageSharp.fluid.src}
                srcSet={image.childImageSharp.fluid.srcSet}
                sizes={image.childImageSharp.fluid.sizes}
                alt=""
              />
            </div>
          )
        )}
      </Carousel>
    </div>
  )
}
export default Home

export const pageQuery = graphql`
  query Home {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "//home//" } }) {
      edges {
        node {
          id
          fileAbsolutePath
          frontmatter {
            images {
              title
              image {
                childImageSharp {
                  fluid(maxWidth: 1800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
