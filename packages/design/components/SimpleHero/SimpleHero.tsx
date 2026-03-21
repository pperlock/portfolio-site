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
import { LowerCaseTitle, BrushStrokes, PageAlignmentWrapper } from "../..";

interface SimpleHeroProps {
  title?: string;
  subtitle?: string;
  image?: string;
  imageLink?: string;
  paddingSize?: "sm" | "md" | "lg";
}

const heroImage = (image: string) => {
  return (
    <HeroImage>
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
}: SimpleHeroProps) => {
  const hasImage = Boolean(image);
  return (
    <HeroSection $paddingSize={paddingSize}>
      <PageAlignmentWrapper>
        <HeroInner $hasImage={hasImage}>
          <HeroContent $hasImage={hasImage}>
            <LowerCaseTitle>{title}</LowerCaseTitle>
            <HeroTitleRow>
              <BrushStrokes />
              <HeroSubtitle $hasImage={hasImage}>{subtitle}</HeroSubtitle>
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
                  {heroImage(image ?? "")}
                </HeroImageLink>
              ) : (
                heroImage(image ?? "")
              )}
            </HeroImageWrap>
          )}
        </HeroInner>
      </PageAlignmentWrapper>
    </HeroSection>
  );
};

export default SimpleHero;
