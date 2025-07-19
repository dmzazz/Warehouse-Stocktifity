import { useLocation } from "react-router-dom";

const Header = () => {
  let location = useLocation();

  // Extract the last part of the path to use as the title
  const pathname = location.pathname;
  // Split the path by '/' and get the last part
  const pathnameParts = pathname.split("/");
  // If the path ends with a slash, the last part will be empty, so we handle that
  const lastPart = pathnameParts[pathnameParts.length - 1];
  // If the last part is empty, we take the second last part
  const title = lastPart.charAt(0).toUpperCase() + lastPart.slice(1);

  return (
    <header className="fixed flex w-full bg-[#6B728E] border-b-2 p-4">
      <div className="flex w-full">
        <h1 className="text-white font-semibold text-sm">{title}</h1>
      </div>
    </header>
  );
};

export default Header;
