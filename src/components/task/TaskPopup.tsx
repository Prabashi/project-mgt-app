import { Grid, CssBaseline, SelectChangeEvent } from "@mui/material";
import ModalPopup from "../modal/ModalPopup";
import { Task } from "../../slices/taskSlice";
import { ReactNode, SyntheticEvent, useEffect, useState } from "react";
import FormTextField from "../form/FormTextField";
import SubmitButton from "../form/SubmitButton";
import CancelButton from "../form/CancelButton";
import FormModal from "../modal/FormModal";
import FormAutoCompleteField from "../form/FormAutoCompleteField";
import FormSelectionField from "../form/FormSelectionField";
import { NewTask } from "../../slices/taskSlice";
import FormTextAreaField from "../form/FormTextAreaField";
import { PRIORITY_LIST, TASK_STATUS_LIST } from "../../constants";
import "../../styles/task.scss";
import ProjectAutoCompleteField from "../dropdowns/ProjectAutoCompleteField";
import AssigneeAutoCompleteField from "../dropdowns/AssigneeAutoCompleteField";

// type NewTask = Omit<Task, 'id'>

interface TaskPopupProps {
  // open: boolean;
  title: string;
  task: any; // TODO: Task, NewTask
  setTask: React.Dispatch<React.SetStateAction<any>>; // TODO
  // initialState?: Task;
  onSubmit: () => void;
}

const TaskPopup = ({ title, task, setTask, onSubmit }: TaskPopupProps) => {
  // const [task, setTask] = useState<Task | NewTask>({
  //   project: "",
  //   name: "",
  //   description: "",
  //   priority: "",
  //   assignee: "",
  //   status: "",
  // });

  // useEffect(() => {
  //   if (initialState) {
  //     setTask({ ...initialState });
  //   }
  // }, [initialState]);

  const handleSubmit = () => {
    onSubmit();
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent<string | null>
  ) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleAutoCompleteChange = (
    e: SyntheticEvent<Element, Event>,
    value: string | null,
    name: string
  ) => {
    setTask({
      ...task,
      [name]: value,
    });
  };

  return (
    <>
      {/* <CssBaseline /> */}
      <FormModal
        title={title}
        onSubmit={handleSubmit}
        classNames="task modal-form"
      >
        <Grid container>
          <Grid item xs={12} mt={2}>
            <ProjectAutoCompleteField
              value={task.project}
              onChange={handleAutoCompleteChange}
            />
            {/* <FormAutoCompleteField
              label="Project"
              name="project"
              options={projectOptions}
              value={task.project}
              isRequired={true}
              onChange={handleAutoCompleteChange}
            /> */}
          </Grid>
          <Grid item xs={12} mt={2}>
            <FormTextField
              label="Name"
              name="name"
              value={task.name}
              isRequired={true}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} mt={2}>
            <FormTextAreaField
              label="Description"
              name="description"
              value={task.description}
              isRequired={true}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} mt={2}>
            <FormSelectionField
              label="Priority"
              name="priority"
              options={PRIORITY_LIST}
              value={task.priority}
              isRequired={true}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} mt={2}>
            <AssigneeAutoCompleteField
              value={task.assignee}
              onChange={handleAutoCompleteChange}
            />
            {/* <FormAutoCompleteField
              label="Assignee"
              name="assignee"
              options={assigneeOptions}
              value={task.assignee}
              isRequired={true}
              onChange={handleAutoCompleteChange}
            /> */}
          </Grid>
          <Grid item xs={12} mt={2}>
            <FormSelectionField
              label="Status"
              name="status"
              options={TASK_STATUS_LIST}
              value={task.status}
              onChange={handleInputChange}
              isRequired={true}
            />
          </Grid>
        </Grid>
      </FormModal>
    </>
  );
};

export default TaskPopup;
