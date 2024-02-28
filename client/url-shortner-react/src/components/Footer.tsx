import * as React from "react";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = () => {
  return (
    <>
      <div className="bg-zinc-800 text-white text-base text-center py-2">
        Copyright &#169; URL Shorty | aryakarthi
      </div>
    </>
  );
};

export default Footer;
