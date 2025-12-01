import TaskForm from "../../components/TaskForm";
import TaskList from "../../components/TaskList";

export default function DashboardPage() {
  return (
    <div className="container py-5">

      <h1 className="text-center mb-4 fw-bold">🎯 Panel de tareas</h1>

      <div className="col-lg-7 mx-auto card-modern">
        <h4 className="mb-3 fw-semibold">Mis tareas</h4>

        <TaskForm />
        <TaskList />
      </div>

    </div>
  );
}
