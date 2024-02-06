import Button from "./components/Elements/Button/Button";

export default function App() {
  return (
    <>
      <div className="bg-Off-Black min-h-screen flex justify-center items-center">
        <div className="bg-Dark-Grey w-64 h-96 rounded-lg">
          <div className="py-6 flex flex-col items-center justify-center gap-3 font-inter">
            <div className="w-14 h-14">
              <img className="rounded-full" src="./src/assets/images/avatar-jessica.jpeg" />
            </div>
            <div className="text-center">
              <h1 className="text-White text-[16px] font-medium">Jessica Randall</h1>
              <h1 className="text-Green text-[10px]">London, United Kingdom</h1>
            </div>
            <div className="text-center">
              <p className="text-White text-[9px]">&quot;Front-end developer and avid reader.&quot;</p>
            </div>
            <div className="flex flex-col gap-3">
              <Button>Github</Button>
              <Button>Frontend Mentor</Button>
              <Button>LinkedIn</Button>
              <Button>Twitter</Button>
              <Button>Instagram</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
