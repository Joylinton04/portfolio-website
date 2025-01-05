import npmSticker from "../../assets/npm.jpg";

type LevelUIProps = {
  length: number;
};

const LevelUI: React.FC<LevelUIProps> = ({ length }) => {
  return (
    <div className="flex flex-col">
      <div>
        <div className="flex space-x-3 mb-6 absolute">
          {[...Array(length)].map((_, index) => (
            <div key={index} className="h-[3.5rem] w-[1rem] bg-highlight"></div>
          ))}
        </div>
        <div className="flex space-x-3 mb-6">
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className="h-[3.5rem] w-[1rem] border border-soft"
            ></div>
          ))}
        </div>
      </div>
      <span className="text-title text-end">{length}0%</span>
    </div>
  );
};

const Stack = () => {
  return (
    <div className="h-screen text-soft/90 p-body font-body">
      <h1 className="font-heading text-3xl text-center flex justify-center items-center flex-col text-title">
        <span className="text-5xl">Stack</span>
        <div className="h-1 w-[70px] block bg-highlight rounded"></div>
      </h1>
      <div className="grid grid-cols-4 gap-4 gap-y-10 mt-8 relative">
        <div className="h-56 p-4 col-span-3 relative">
          <div className="bg-title w-24 h-[0.2rem] absolute left-0"></div>
          <div className="bg-title w-[0.2rem] h-24 absolute left-0"></div>
          <div className="bg-title w-[0.2rem] h-24 absolute bottom-0 right-0"></div>
          <div className="bg-title w-24 h-[0.2rem] absolute bottom-0 right-0"></div>
          <div className="p-8 text-xl">
            I specialize in building responsive, dynamic, and visually appealing
            web applications using a variety of modern tools and technologies.
          </div>
        </div>
        <div className="h-56 p-4 border-[3px] border-title flex flex-col justify-between">
          <h1 className="text-highlight text-3xl font-medium">HTML/CSS</h1>
          <LevelUI length={9} />
        </div>
        <div className="h-56 p-4 border-[3px] border-title flex flex-col justify-between">
          <h1 className="text-highlight text-3xl font-medium">JAVASCRIPT</h1>
          <LevelUI length={7} />
        </div>
        <div className="h-56 p-4 border-[3px] border-title flex flex-col justify-between">
          <h1 className="text-highlight text-3xl font-medium">REACTJS</h1>
          <LevelUI length={7} />
        </div>
        <div className="h-56 p-4 border-[3px] border-title flex flex-col justify-between">
          <h1 className="text-highlight text-3xl font-medium">TYPESCRIPT</h1>
          <LevelUI length={7} />
        </div>
        <div className="h-56 p-4 border-[3px] border-title flex flex-col justify-between">
          <h1 className="text-highlight text-3xl font-medium">PYTHON</h1>
          <LevelUI length={5} />
        </div>
      </div>
      {/* tools */}
      <div>
        <h1 className="text-3xl text-center font-heading mt-8">Tools</h1>
        <div className="font-body text-lg font-bold">
          <div>
            <div className="flex gap-4">
              <img
                src={npmSticker}
                alt="npm"
                className="w-24 h-24 rounded-full"
              />
              <span className="text-title">npm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
