const TaskList = ({ tasks = [] }) => {  // Default to empty array if tasks is undefined
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No completed tasks available</p>
      ) : (
        tasks.map((task) => (
          <div key={task._id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">{task.title}</h2>
            <p>{task.description}</p>
            <div className="mt-2">
              <img
                src={task.imageUrl} // Assuming `imageUrl` stores the task image
                alt={task.title}
                className="w-full h-48 object-cover rounded"
              />
            </div>
            <p className="text-sm text-gray-400 mt-2">Due: {task.dueDate}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
