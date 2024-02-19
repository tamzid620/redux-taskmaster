import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    onCancle() ;
  };
  const onCancle = () => {
    reset();
    setIsOpen(false);
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Programming Hero">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4">
          <label htmlFor="title">Title</label>
          <input
            className="w-full rounded-md"
            type="text"
            {...register("title", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="description">Description</label>
          <textarea
            className="w-full rounded-md"
            rows="4"
            {...register("description", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="date">Deadline</label>
          <input
            className="w-full rounded-md"
            type="date"
            {...register("date", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="category">Assign to</label>
          <select
            className="w-full rounded-md"
            {...register("category", { required: true })}
          >
            <option value="work">Work</option>
            <option value="personal">Personal</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="category">Priroty</label>
          <select
            className="w-full rounded-md"
            {...register("category", { required: true })}
          >
            <option value="work">High</option>
            <option value="personal">Medium</option>
            <option value="other">Low</option>
          </select>
        </div>
        <div className=" flex gap-3 justify-end">
        <button onClick={() => onCancle()} className="btn btn-danger mt-3" type="button">Cancle</button>
        <button className="btn btn-primary mt-3" type="submit">Submit</button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
