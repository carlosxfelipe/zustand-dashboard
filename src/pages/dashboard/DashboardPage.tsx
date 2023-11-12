import {
  IoAccessibilityOutline,
  IoHeartOutline,
  IoListOutline,
  IoLockClosedOutline,
  IoPawOutline,
} from "react-icons/io5";
import { WhiteCard } from "../../components";
import { useBearStore, usePersonStore } from "../../stores";

export const Dashboard = () => {
  const totalBears = useBearStore((state) => state.totalBears);
  const firsName = usePersonStore((state) => state.firstName);

  return (
    <>
      <h1>Dashboard</h1>
      <p>Informação coletiva de vários stores de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <WhiteCard centered>
          <IoPawOutline size={50} className="text-indigo-600" />
          <h2>Ursos</h2>
          <p>{totalBears()}</p>
        </WhiteCard>

        <WhiteCard centered>
          <IoAccessibilityOutline size={50} className="text-indigo-600" />
          <h2>Pessoa</h2>
          <p>{firsName}</p>
        </WhiteCard>

        <WhiteCard centered>
          <IoListOutline size={50} className="text-indigo-600" />
          <h2>Tarefas</h2>
          <p>Informação</p>
        </WhiteCard>

        <WhiteCard centered>
          <IoHeartOutline size={50} className="text-indigo-600" />
          <h2>Casamento</h2>
          <p>Informação</p>
        </WhiteCard>

        <WhiteCard centered>
          <IoLockClosedOutline size={50} className="text-indigo-600" />
          <h2>Autenticação</h2>
          <p>Informação</p>
        </WhiteCard>
      </div>
    </>
  );
};
