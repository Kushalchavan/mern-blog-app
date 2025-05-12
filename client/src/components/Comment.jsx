import IKImage from "./Image";

const Comment = () => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        <IKImage
          src="userimage.jpeg"
          className="w-10 h-10 rouded-full object-cover"
          width="40"
        />
        <span className="font-medium">Kushal chavan</span>
        <span className="text-sm text-gray-500">2 days agp</span>
      </div>

      <div className="mt-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem rem optio ipsa magnam tenetur repellendus deserunt,
          beatae quia saepe sunt tempora iure veniam maxime? Doloremque?
        </p>
      </div>
    </div>
  );
};

export default Comment;
