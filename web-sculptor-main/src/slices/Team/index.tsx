import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Team`.
 */
export type TeamProps = SliceComponentProps<Content.TeamSlice>;

/**
 * Component for "Team" Slices.
 */
const Team = ({ slice }: TeamProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="h-[70vh] mt-20 pb-20">
        <Heading size="lg" className="mb-8" as="h2">
          {slice.primary.heading}
        </Heading>

        <div className="flex items-center justify-between gap-10">
          {/* 1 AVATAR */}
          <div className="flex item-center justify-center text-white font-black">
            <div className="grid grid-cols-1 gap-4">
              <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
                <div className="h-96 w-72">
                  <PrismicNextImage className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform" field={slice.primary.avatar_4} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
                <div className="absolute inset-0 flex flex-col item-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
                  <div className="text-5xl"><>{slice.primary.name_1}</></div>
                  <div className="text-2xl"><>{slice.primary.title_1}</></div>
                </div>
              </div>
            </div>
          </div>

          {/* 2 AVATAR */}

          <div className="flex item-center justify-center text-slate-200 font-black">
            <div className="grid grid-cols-1">
              <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
                <div className="h-96 w-72">
                  <PrismicNextImage className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform" field={slice.primary.avatar_4} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
                <div className="absolute inset-0 flex flex-col item-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
                  <div className="text-5xl"><>{slice.primary.name_1}</></div>
                  <div className="text-2xl"><>{slice.primary.title_1}</></div>
                </div>
              </div>
            </div>
          </div>

          {/* 3 AVATAR */}

          <div className="flex item-center justify-center text-slate-200 font-black">
            <div className="grid grid-cols-1">
              <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
                <div className="h-96 w-72">
                  <PrismicNextImage className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform" field={slice.primary.avatar_4} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
                <div className="absolute inset-0 flex flex-col item-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
                  <div className="text-5xl"><>{slice.primary.name_1}</></div>
                  <div className="text-2xl"><>{slice.primary.title_1}</></div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 AVATAR */}

          <div className="flex item-center justify-center text-slate-200 font-black">
            <div className="grid grid-cols-1 gap-4">
              <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
                <div className="h-96 w-72">
                  <PrismicNextImage className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform" field={slice.primary.avatar_4} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
                <div className="absolute inset-0 flex flex-col item-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
                  <div className="text-5xl"><>{slice.primary.name_1}</></div>
                  <div className="text-2xl"><>{slice.primary.title_1}</></div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="spacer h-20"></div>
        
      </div>
    </Bounded>
  );
};

export default Team;
