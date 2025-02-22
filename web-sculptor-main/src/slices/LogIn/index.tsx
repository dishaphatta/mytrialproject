import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `LogIn`.
 */
export type LogInProps = SliceComponentProps<Content.LogInSlice>;

/**
 * Component for "LogIn" Slices.
 */
const LogIn = ({ slice }: LogInProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid1 gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
        <Heading as="h1" size="lg" className="col-start-1 text-white">
          {slice.primary.heading}
        </Heading>
        <div className="prose prose-xl prose-slate prose-invert col-start-1">
          <PrismicRichText field={slice.primary.description} />
        </div>
        <Button 
          linkField={slice.primary.button_link}
          label={slice.primary.button_text}
        />
      </div>
    </Bounded>
  );
};

export default LogIn;
