const Footer = () => {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <div className="flex justify-center pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">
          © Copyright {new Date().getFullYear()} Rahmat Inc. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
