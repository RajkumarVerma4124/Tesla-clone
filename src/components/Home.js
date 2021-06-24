import React from 'react'
import styled from 'styled-components'
import Section from './Section.js'


function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                des="Order Online For Touchless Delivery"
                img="model-s.jpg"
                left="Custom Order"
                right="Existing Inventory"
            />
            <Section
                title="Model Y"
                des="Order Online For Touchless Delivery"
                img="model-y.jpg"
                left="Custom Order"
                right="Existing Inventory"
            />
            <Section
                title="Model 3"
                des="Order Online For Touchless Delivery"
                img="model-3.jpg"
                left="Custom Order"
                right="Existing Inventory"
            />
            <Section
                title="Model X"
                des="Order Online For Touchless Delivery"
                img="model-x.jpg"
                left="Custom Order"
                right="Existing Inventory"
            />
            <Section
                title="Lowest Cost Solar Panels in America"
                des="Money-back guarantee"
                img="solar-panel.jpg"
                left="Order Now"
                right="Learn More"
            />
            <Section
                title="Solar for New Roofs"
                des="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                img="solar-roof.jpg"
                left="Order Now"
                right="Learn More"
            />

            <Section
                title="Accessories"
                des=""
                img="accessories.jpg"
                left="Shop Now"
            />

        </Container>
    )
}

export default Home

const Container = styled.div`
   height:100vh;
`
