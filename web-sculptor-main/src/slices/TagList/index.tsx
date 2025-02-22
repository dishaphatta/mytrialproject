"use client";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import React, { useEffect, useRef } from "react";
import { MdCircle } from "react-icons/md";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)


/**
 * Props for `TagList`.
 */
export type TagListProps = SliceComponentProps<Content.TagListSlice>;

/**
 * Component for "TagList" Slices.
 */
const TagList = ({ slice }: TagListProps): JSX.Element => {

  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // create as many GSAP animations and/or ScrollTriggers here as you want
      const tl = gsap.timeline({
        scrollTrigger: {
          // trigger: component.current,
          pin: true, // pin the trigger element while active
          start: "top bottom",
          end: "bottom top",
          scrub: 5,
        },
      });

      tl.fromTo(
        ".tag-row",
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(600, 400)
              : gsap.utils.random(-600, -400);
          },
        },
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(-600, -400)
              : gsap.utils.random(600, 400);
          },
          // duration:0.5,
          ease: "power1.inOut",
        },
      );
    }, component);
    return () => ctx.revert(); // cleanup!
  }, []);



  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="overflow-hidden"
      ref={component}
    >
      <Bounded as="div">
        <Heading size="lg" className="mb-8" as="h2">
          {slice.primary.heading}
        </Heading>
      </Bounded>
      <div>
        {slice.items.map(({tag_color, tag_name}, index)=>(
          <div key={index} className="tag-row mb-8 flex items-center justify-center gap-4 text-stone-700" aria-label={tag_name || undefined}>
            {Array.from({length: 15}, (_, index) =>(
              <React.Fragment key={index}>
                <span className="tag-item text-7xl font-extrabold tracking-tighter"
                  style={{
                    color: index === 7 && tag_color ? tag_color : "inherit"
                  }}
                >
                  {tag_name}
                </span>
                <span className="text-3xl">
                  <MdCircle />
                </span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TagList;
