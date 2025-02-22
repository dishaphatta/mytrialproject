"use client";
import { useEffect, useRef } from "react";
import { Content, KeyTextField } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { gsap } from "gsap";
import Bounded from "@/components/Bounded";
import Shapes from "./Shapes";
import Button from "@/components/Button";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {

  // GSAP Render Effect
  const component = useRef(null)
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".name-animation",
        {
          x: -100,
          opacity: 0,
          rotate: -10,
        },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          // Random Header pop
          ease: "elastic.out(1,0.3)",
          duration: 1,
          transformOrigin: "left top",
          delay: 0.5,
          stagger: {
            each: 0.2,
            from: "random",
          }
        }
      );

      tl.fromTo(
        ".sub-title", {
        y: 20,
        opacity: 0,
        scale: 1.2,
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        scale: 1,
        ease: "elastic.out(1,0.2)",
        transformOrigin: "left top",
        
      });

      tl.fromTo(
        ".sub-button", {
        y: 20,
        opacity: 0,
        scale: 1.2,
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        scale: 1,
        ease: "elastic.out(1,0.3)",
        transformOrigin: "left top",
      });

    }, component);
    return () => ctx.revert();
  }, []);


  // Random rendering function
  const renderletters = (name:KeyTextField, key:string) => {
    if (!name) return;
    return name.split("").map((letter, index) => (
      <span key={index} className={`name-animation name-animation-${key} inline-block opacity-0`}>
        {letter}
      </span>
    ))
  };

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      ref={component}
    >
      <div className="grid min-h-[80vh] grid-cols-1 md:grid-cols-2 items-center">
        <Shapes />
        <div className="col-start-1 md:row-start-1 ">
          <h1 
            className="text-[clamp(3rem,20vmin,20rem)] font-extrabold leading-none tracking-tighter"
            aria-label={slice.primary.header + " " + slice.primary.last_header}
          >
            <span className="block">
              {renderletters(slice.primary.header, "first")}
            </span>

            {/* Optional gradient effect - still in works */}

            {/* <span className="-mt-[.2em] block bg-gradient-to-r from-[#ffb9b9 to-[#ff91ee] bg-clip-text text-transparent">
              {renderletters(slice.primary.last_header, "last")}
            </span> */}

            <span className="block text-[#ff91ee]">
              {renderletters(slice.primary.last_header, "last")}
            </span>
          </h1>
          <span className="sub-title block tracking-normal mt-2 text-slate-500 text-2xl font-medium md:text-4xl opacity-0">{slice.primary.subtitle}</span>
          {/* <button className="sub-button block tracking-normal text-2xl md:text-4xl font-medium mt-8 py-2 px-4 border-solid border-2 rounded-lg opacity-0">{slice.primary.get_started_button}</button> */}
          <Button 
            label={slice.primary.get_started_button} 
            linkField={slice.primary.get_started_button_link}
            className="sub-button text-[32px] mt-10 opacity-0"
          />
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
