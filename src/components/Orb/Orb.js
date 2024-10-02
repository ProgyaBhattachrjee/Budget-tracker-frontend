import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useWindowsize } from '../utils/useWindowsize';



function Orb() {
    const { width,height} = useWindowsize()
    const moveorb = keyframes`
       0%{
    transform: translate(0,0);
   }
   50%{
    transform: translate(${width/1.2}px,${height/1.5}px);
   }
   100%{
    transform: translate(0,0);
   }
    `
    const OrbStyle = styled.div`
  width: 70vh;
  height: 70vh; 
  position: absolute;
  border-radius: 50%;
  margin-left: -37vh;
  margin-top: -37vh;
  background: linear-gradient(180deg, #f0e6ef 0%, #6320ee 100%);
  filter: blur(200px);
  animation: ${moveorb} 10s alternate linear infinite;
`;
    
  return (
    <OrbStyle>
     
    </OrbStyle>
  );
}

export default Orb;
