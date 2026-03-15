"use client";

import React from "react";
import Image from "next/image";
import {
  HeroSection,
  HeroInner,
  HeroContent,
  HeroSubtitle,
  HeroTitleRow,
  HeroImageWrap,
  HeroImageLink,
  HeroImage,
} from "./SimpleHero.styles";
import { LowerCaseTitle, BrushStrokes } from "../..";

interface SimpleHeroProps {
  title?: string;
  subtitle?: string;
  image?: string;
  imageLink?: string;
  paddingSize?: "sm" | "md" | "lg";
  brushStrokes?: boolean;
  tiltImage?: boolean;
}

const heroImage = (image: string, tiltImage?: boolean) => {
  return (
    <HeroImage $tiltImage={tiltImage}>
      <Image
        src={image}
        alt=""
        fill
        sizes="(min-width: 768px) 320px, 70vw"
        style={{ objectFit: "cover" }}
        priority
      />
    </HeroImage>
  );
};

const SimpleHero = ({
  title = "",
  subtitle = "",
  image,
  imageLink,
  paddingSize = "lg",
  brushStrokes = true,
  tiltImage = true,
}: SimpleHeroProps) => {
  const hasImage = Boolean(image);
  return (
    <HeroSection $paddingSize={paddingSize}>
      <HeroInner $hasImage={hasImage}>
        <HeroContent $hasImage={hasImage}>
          <LowerCaseTitle>{title}</LowerCaseTitle>
          <HeroTitleRow>
            {brushStrokes && <BrushStrokes />}
            <HeroSubtitle $hasImage={hasImage} $brushStrokes={brushStrokes}>
              {subtitle}
            </HeroSubtitle>
          </HeroTitleRow>
        </HeroContent>
        {hasImage && (
          <HeroImageWrap>
            {imageLink ? (
              <HeroImageLink
                href={imageLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View LinkedIn profile"
              >
                {heroImage(image ?? "", tiltImage)}
              </HeroImageLink>
            ) : (
              heroImage(image ?? "", tiltImage)
            )}
          </HeroImageWrap>
        )}
      </HeroInner>
    </HeroSection>
  );
};

export default SimpleHero;
