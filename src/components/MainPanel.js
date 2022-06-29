import React from 'react';
import TasksGroup from './TasksGroup';
import Header from './Header';
import { TO_DO, DOING, DONE } from '../fixtures/fakeData';

const Main = () => {
  return (
    <div className="flex flex-1 flex-col bg-taskDo-gray p-5">
      {/* <Navigation /> */}
      <div className="flex flex-1 h-screen min-h-screen bg-taskDo-gray">
        <div className="flex flex-col  overflow-y-hidden">
          <Header />

          <div className="flex mb-5 overflow-y-hidden">
            <TasksGroup title="To Do" titleBorder tasks={TO_DO} />
            <TasksGroup title="Doing" tasks={DOING} />
            <TasksGroup title="Done" tasks={DONE} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
