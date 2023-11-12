import { JiraTasks } from "../../components";

export const JiraPage = () => {
  return (
    <>
      <h1>Tarefas</h1>
      <p>Gerenciamento de estado com objetos Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <JiraTasks title="Pendentes" value="pending" />

        <JiraTasks title="Em progresso" value="in-progress" />

        <JiraTasks title="Concluídas" value="done" />
      </div>
    </>
  );
};
