import { useState } from 'react';

import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartAddProject() {
    setProjectsState((previousState) => {
      return {
        ...previousState,
        selectedProjectId: null,
      }
    })
  }

  function handleAddProject(projectData) {
    setProjectsState((previousState) => {
      const projectId = Math.random()
      const newProject = {
        ...projectData,
        id: projectId // Not Ideal
      }
      return {
        ...previousState,
        selectedProjectId: undefined,
        projects: [...previousState.projects, newProject]
      }
    })
  }

  let content;

  if(projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject}/>
  } else if(projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects}/>
      {content}
    </main>
  );
}

export default App;
