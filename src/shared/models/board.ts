export interface Column {
  id: string,
  title: string,
  tasks: Task[]
}

export interface Task {
  id: string,
  content: string
}

export interface TasksList {
  column: Column,
  index: number
}

export interface TaskElement {
  task: Task,
  index: number,
}

export interface StylingProps {
  theme?: any,
  isDragging?: boolean,
  isDraggingOver?: boolean
}


