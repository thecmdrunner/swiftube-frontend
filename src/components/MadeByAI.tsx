import fonts from "~/lib/fonts";

const MadeByAI = () => {
  return (
    <div
      className={`${fonts.k2d.className} absolute right-[3%] top-[10%] z-50 m-8 flex w-max cursor-default items-center justify-center rounded-full bg-black px-6 py-5 text-center text-white drop-shadow-[0px_3px_4px_#00000090]`}
    >
      <span className="select-none text-4xl font-semibold uppercase">
        Made by A.I.
      </span>
    </div>
  );
};

export default MadeByAI;
