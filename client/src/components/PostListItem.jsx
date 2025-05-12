import IKImage from "./Image";
import { Link } from "react-router-dom";

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      <div className="md:hidden xl:block xl:w-1/3">
        <IKImage src="postImg.jpeg" className="rounded-2xl object-cover" width="800" />
      </div>

      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/test" className="text-4xl font-semibold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, error!
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link className="text-blue-800">Kushal chavan</Link>
          <span>on</span>
          <Link className="text-blue-800">Web Design</Link>
          <span>2 days ago</span>
        </div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt in pariatur, modi sunt numquam ad! Earum beatae qui ipsa animi tempore minus totam exercitationem? Facere.
        </p>
        <Link to="/test" className="underline ">Read More</Link>
      </div>
    </div>
  );
};

export default PostListItem;
