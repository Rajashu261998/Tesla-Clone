import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
  return (
    <Container>
      <Section
          title="Model S" 
          description="Order Online for Touchless Delivery"
          backgroundImage="model-s.jpg"
          leftButtonText="Custom order"
          rightButtonText="Existing inventory"
          
      />
      <Section
          title="Model y" 
          description="Order Online for Touchless Delivery"
          backgroundImage="model-y.jpg"
          leftButtonText="Custom order"
          rightButtonText="Existing inventory"
      />
      <Section
          title="Model x" 
          description="Order Online for Touchless Delivery"
          backgroundImage="model-x.jpg"
          leftButtonText="Custom order"
          rightButtonText="Existing inventory" 
      />
      <Section
          title="Model 3" 
          description="Order Online for Touchless Delivery"
          backgroundImage="model-3.jpg"
          leftButtonText="Custom order"
          rightButtonText="Existing inventory"
      />
      <Section
          title="Solar Panels" 
          description="Lowest Cost Solar Panels in America"
          backgroundImage="solar-panel.jpg"
          leftButtonText="Order Now"
          rightButtonText="Learn More"
      />
      <Section
     
          title="Solar Roof" 
          description="Produce Clean Energy From Your Roof"
          backgroundImage="solar-roof.jpg"
          leftButtonText="Order Now"
          rightButtonText="Learn More"
  />
  <Section
          
          title="Accessories" 
          description="Produce Clean Energy From Your Roof"
          backgroundImage="accessories.jpg"
          leftButtonText="Shop Now"
          rightButtonText=""
 />
  

    </Container>
  )
}

export default Home

const Container = styled.div`
        height:100vh;  

`