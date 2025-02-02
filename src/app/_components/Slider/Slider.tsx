"use client";
import React, { useEffect, useRef, useState } from "react";
import Container from "@/app/utils/helpers/Container";
import { useIntersectionObserver } from "@/app/hooks/useIntersectionObserver";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";

const Slider = ({ children, gap, totalItems = 0, itemsPerScreen }: any) => {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const slideContainer = useRef<any>();
  const [mouseDownAt, setMouseDownAt] = useState({
    x: 0,
    y: 0,
  });
  const itemContainer = useRef<any>();

  const handleTouchStart = (e: any) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: any) => {
    if (!isDragging) return;

    const currentX = e.touches[0].clientX;
    const diffX = startX - currentX;

    setTranslateX((prevTranslateX) => prevTranslateX - diffX * 1.5);
    setStartX(currentX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleOnClick = (e: any) => {
    e.stopPropagation();
    setMouseDownAt({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    });
  };

  const handleOnUp = (e: any) => {
    const mouseDownEnd = {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY,
    };

    const deltaX = mouseDownAt.x - mouseDownEnd.x;
    const deltaY = mouseDownAt.y - mouseDownEnd.y;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX) {
        if (-deltaX < 0) {
          next();
        } else {
          prev();
        }
      }
    }
  };

  function extractNumbersFromString(inputString: any) {
    let numbers = inputString.match(/\d+/g);
    let result = numbers ? numbers.map(Number) : [];

    return result;
  }

  function next() {
    const itemsContainer: any = itemContainer?.current;
    if (itemsContainer?.childNodes?.length) {
      const totalParentWidth =
        slideContainer?.current?.parentNode?.clientWidth -
        extractNumbersFromString(
          window
            .getComputedStyle(slideContainer?.current?.parentNode, null)
            .getPropertyValue("padding-left")
        ) *
          2;
      const limit = totalParentWidth - itemContainer.current.clientWidth;
      const itemWidth = itemsContainer?.childNodes[0]?.clientWidth;
      if (translateX > limit) {
        setTranslateX(translateX - (itemWidth + gap));
      } else {
        setTranslateX(0);
      }
    }
  }
  function prev() {
    const itemsContainer = itemContainer?.current;
    if (itemsContainer?.childNodes?.length) {
      const totalParentWidth =
        slideContainer?.current?.parentNode?.clientWidth -
        extractNumbersFromString(
          window
            .getComputedStyle(slideContainer?.current?.parentNode, null)
            .getPropertyValue("padding-left")
        ) *
          2;
      const limit = totalParentWidth - itemContainer.current.clientWidth;
      const itemWidth = itemsContainer?.childNodes[0]?.clientWidth;
      if (translateX < 0) {
        setTranslateX((prev) => prev + (itemWidth + gap));
      } else {
        setTranslateX(limit);
      }
    }
  }
  useEffect(() => {
    if (entry && entry.isIntersecting && isSmallDevice) {
      next();
    }
  }, [entry, isSmallDevice]);

  useEffect(() => {
    if (itemsPerScreen && !isSmallDevice) {
      const containerWidth =
        slideContainer?.current?.clientWidth - gap * (itemsPerScreen - 1);
      const calculatedItemWidth = containerWidth / itemsPerScreen;
      const items = itemContainer.current?.childNodes;
      const offset = 0.06;
      items.forEach((item: any) => {
        item.style.width = `${
          calculatedItemWidth - calculatedItemWidth * offset
        }px`;
      });
    }
  }, [itemsPerScreen, isSmallDevice]);
  return (
    <div className="relative" ref={ref}>
      <Container>
        <div
          className="overflow-hidden relative"
          ref={slideContainer}
          onTouchStart={handleOnClick}
          onTouchEnd={handleOnUp}
        >
          <div
            className={`flex select-none ${
              isDragging ? "" : "transition-transform ease-in-out duration-500"
            } gap-${gap || "[8px]"} w-fit`}
            style={{
              transform: `translateX(${translateX}px)`,
            }}
            ref={itemContainer}
          >
            {children}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Slider;
