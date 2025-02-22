"use client";
import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

/**
 * Props for `Services`.
 */
export type ServicesProps = SliceComponentProps<Content.ServicesSlice>;



/**
 * Component for "AnySize" Slices.
 */
const Services = ({ slice }: ServicesProps): JSX.Element => {

  const component = useRef(null)
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".box-animation", {
        keyframes: {
          "0%": {scaleX: 1, scaleY: 1,},
          "25%": {scaleX: 0.4, scaleY: 1.2},
          "50%": {scaleX: 0.7, scaleY: 0.6},
          "100%": {scaleX: 1., scaleY: 1},
          easeEach: 'back.inOut'
        },
        ease: 'power1.inOut',
        // easeEach: 'back.inOut',
        
        duration: 5,
        // yoyo: true, //to revert animation sameway
        repeat: -1,
        // repeatDelay: 0.5
      }),
      gsap.to(".text-scale-1", {
        keyframes: {
          "0%": {x: 0, scale: 1,},
          "25%": {x: 150, scale: 1.4,},
          "50%": {x: 50, scale: 1.4,},
          "100%": {x: 0, scale: 1,},
          easeEach: 'back.inOut'
        },
        ease: 'power1.inOut',
        duration: 5,
        // yoyo: true, //to revert animation sameway
        repeat: -1,
        // repeatDelay: 0.5
      }),
      gsap.to(".text-scale-2", {
        keyframes: {
          "0%": {x: 0, scale: 1,},
          "25%": {x: -150, scale: 1.4,},
          "50%": {x: -50, scale: 1.4,},
          "100%": {x: 0, scale: 1,},
          easeEach: 'back.inOut'
        },
        ease: 'power1.inOut',
        duration: 5,
        // yoyo: true, //to revert animation sameway
        repeat: -1,
        // repeatDelay: 0.5
      }),
      gsap.to(".ball-animate", {
        keyframes: {
          "0%": {scale: 1,},
          "34%": {scale: 0.7,},
          "50%": {scale: 0.4,},
          "95%": {scale: 1,},
          easeEach: 'back.inOut'
        },
        ease: 'power1.inOut',
        duration: 5,
        // yoyo: true, //to revert animation sameway
        repeat: -1,
        // repeatDelay: 0.5
      })

    }, component);
    return () => ctx.revert();
  }, []);

  return (
    <Bounded
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        ref={component}
      >

      <div className="h-[90vh] text-indigo-200 font-bold flex items-center justify-center">
        <div className="my-0 mx-auto flex items-center justify-center">
          <h2 className="text-scale-1 text-[142px] mr-4">
            <>{slice.primary.first}</>
          </h2>
          
          {/* Custom CSS For grid in Global CSS */}
          <div className="grid text-container place-items-center">
            
            <div className="box-animation text-grid rounded-md h-[54vh] w-[45vw] bg-[#ffe9fe] z-40">
              {/* <div className="rounded-md absolute pointer-events-none inset-0 -z-40 h-full bg-[url('/noisetexture.jpg')] opacity-60 mix-blend-soft-light"></div> */}
            </div>
            
            <div className="ball-animate text-grid h-[174px] w-[174px] rounded-full bg-gradient-to-tr from-[#ff85a1] to-[#9381ff] z-50"></div>

          </div>
            
          <div>
            <h2 className="text-scale-2 text-[142px] ml-2">
              <>{slice.primary.last}</>
            </h2>
          </div>
        </div>
      </div>

    </Bounded>
    
  );
};

export default Services;
