'use client'
import React from 'react'

interface MyContextType {
  showForm: boolean;
  taskUpdate: Partial<Task>;
  toggleForm: () => void;
  taskUpdateData: (task: Task) => void;
}

export const MyContext = React.createContext<MyContextType>({
    showForm: false,
    taskUpdate:{},
    toggleForm: () => {},
    taskUpdateData: (id: Task) => {},
});

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
    const [showForm, setShowForm] = React.useState(false);
    const [taskUpdate, setTaskUpdate] = React.useState<Partial<Task>>({
        id: '',
        title: '',
        desc: '',
        completed: false,
        important: false,
        date: '',
    });

    const toggleForm = () => {
        setShowForm(prev => !prev);
        if(showForm){
          setTaskUpdate({ id: '', title: '', desc: '', completed: false, important: false, date: '' });
        }
    }

    const taskUpdateData = (task:Task) => {
        setTaskUpdate(task);
    }

    return (
        <MyContext.Provider value={{ showForm, toggleForm, taskUpdate, taskUpdateData }}>
            {children}
        </MyContext.Provider>
    );
}

export default LayoutProvider;
