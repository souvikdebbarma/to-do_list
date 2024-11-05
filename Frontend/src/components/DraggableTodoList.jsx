import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import TodoItem from './TodoItem'

function DraggableTodoList({ todos, setTodos, toggleTodo, deleteTodo }) {
  const onDragEnd = (result) => {
    if (!result.destination) return
    
    const items = Array.from(todos)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)
    
    setTodos(items)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="todos">
        {(provided) => (
          <ul 
            {...provided.droppableProps} 
            ref={provided.innerRef}
            className="space-y-3 mt-6"
          >
            {todos.length === 0 ? (
              <div className="text-center p-8 bg-white/5 dark:bg-blue/5 border border-white/10 dark:border-white/5 backdrop-blur-sm rounded-xl">
                <p className="text-white/70 italic">
                  No todos yet. Add one using the form on the left!
                </p>
              </div>
            ) : (
              todos.map((todo, index) => (
                <Draggable 
                  key={todo.id.toString()} 
                  draggableId={todo.id.toString()} 
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <TodoItem 
                        todo={todo}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                      />
                    </div>
                  )}
                </Draggable>
              ))
            )}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default DraggableTodoList 