import * as React from "react";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = () => {
  return (
    <div className="bg-zinc-800">
      <div className="container p-2 mx-auto">
        <nav className="py-2">
          <h1 className="text-base font-bold uppercase text-white">URL Shorty</h1>
        </nav>
      </div>
    </div>
  );
};

export default Header;
