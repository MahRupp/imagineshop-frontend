import styled from "styled-components";
import Image, { StaticImageData } from 'next/image';

import { Container } from "../styles/utils";

interface BannerProps {
  image: StaticImageData;
  width: number;
  heigh: number;
}

const Banner = ({image, width, heigh}: BannerProps) => {
  return (
    <BannerContainer>
      <Image src={image} width={width} height={heigh}></Image>
    </BannerContainer>
  )
}

const BannerContainer = styled.section `
  ${Container};
  border-top: 3px solid ${({ theme }) => theme.colors.primary};
  border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
`;

export default Banner;