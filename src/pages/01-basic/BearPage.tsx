import { useShallow } from "zustand/react/shallow";
import { WhiteCard } from "../../components";
import { useBearStore } from "../../stores";

export const BearPage = () => {
  return (
    <>
      <h1>Contador de Ursos</h1>
      <p>Gerenciamento simples de estado com Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <BlackBears />

        <PolarBears />

        <PandaBears />

        <BearsDisplay />
      </div>
    </>
  );
};

export const BlackBears = () => {
  const blackBears = useBearStore((state) => state.blackBears);
  const increaseblackBears = useBearStore((state) => state.increaseblackBears);
  // const { blackBears, increaseblackBears } = useBearStore((state) => state);

  return (
    <WhiteCard centered>
      <h2>Ursos Negros</h2>

      <div className="flex flex-col md:flex-row mt-5">
        <button
          onClick={() => {
            increaseblackBears(+1);
          }}
        >
          {" "}
          +1
        </button>
        <span className="text-3xl mx-2 lg:mx-10"> {blackBears} </span>
        <button
          onClick={() => {
            increaseblackBears(-1);
          }}
        >
          -1
        </button>
      </div>
    </WhiteCard>
  );
};

export const PolarBears = () => {
  const polarBears = useBearStore((state) => state.polarBears);
  const increasePolarBears = useBearStore((state) => state.increasePolarBears);

  return (
    <WhiteCard centered>
      <h2>Ursos Polares</h2>

      <div className="flex flex-col md:flex-row mt-5">
        <button
          onClick={() => {
            increasePolarBears(+1);
          }}
        >
          {" "}
          +1
        </button>
        <span className="text-3xl mx-2 lg:mx-10"> {polarBears} </span>
        <button
          onClick={() => {
            increasePolarBears(-1);
          }}
        >
          -1
        </button>
      </div>
    </WhiteCard>
  );
};

export const PandaBears = () => {
  const pandaBears = useBearStore((state) => state.pandaBears);
  const increasePandaBears = useBearStore((state) => state.increasePandaBears);

  return (
    <WhiteCard centered>
      <h2>Ursos Pandas</h2>

      <div className="flex flex-col md:flex-row mt-5">
        <button
          onClick={() => {
            increasePandaBears(+1);
          }}
        >
          {" "}
          +1
        </button>
        <span className="text-3xl mx-2 lg:mx-10"> {pandaBears} </span>
        <button
          onClick={() => {
            increasePandaBears(-1);
          }}
        >
          -1
        </button>
      </div>
    </WhiteCard>
  );
};

export const BearsDisplay = () => {
  const bears = useBearStore(useShallow((state) => state.bears));

  const doNothing = useBearStore((state) => state.doNothing);
  const addBear = useBearStore((state) => state.addBear);
  const clearBears = useBearStore((state) => state.clearBears);

  return (
    <WhiteCard>
      <h1>Ursos</h1>
      <button className="flex flex-col md:flex-row mt-5" onClick={doNothing}>
        Fazer nada
      </button>
      <button className="flex flex-col md:flex-row mt-2" onClick={addBear}>
        Adicionar Urso
      </button>
      <button className="flex flex-col md:flex-row mt-2" onClick={clearBears}>
        Remover Ursos
      </button>
      <pre className="mt-5">{JSON.stringify(bears, null, 2)}</pre>
    </WhiteCard>
  );
};
