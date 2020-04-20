import axios from 'axios'

class AxiosMethods {

// --------------projects metdhods-----------------
    getAll() {
        return axios.get(`http://localhost:8080/api/project/`,
        {headers: {
            "Content-Type": "application/json"}
        })
   }

    findById(id) {   
        return axios.get(`http://localhost:8080/api/project/id/${id}`, 
        {headers: {
            "Content-Type": "application/json"}
        })
   }


    deleteById(id){
       return axios.delete(`http://localhost:8080/api/project/id/${id}`, {headers: {
             "Content-Type": "application/json"}
         })
    }

    updateProject(id, project) {
        return axios.put(`http://localhost:8080/api/project/id/${id}`, project, {headers: {
            "Content-Type": "application/json"}
        })
   }

    addProject(project) {
      return axios.post(`http://localhost:8080/api/project/`, project,
      {headers: {
        "Content-Type": "application/json"}
    })
}

// --------------tasks metdhods-----------------
getAllTasks(projectId) {
    return axios.get(`http://localhost:8080/api/project/id/${projectId}/task/`,
    {headers: {
        "Content-Type": "application/json"}
    })
}

findByTaskId(projectId, taskId) {   
    return axios.get(`http://localhost:8080/api/project/id/${projectId}/task/id/${taskId}`, 
    {headers: {
        "Content-Type": "application/json"}
    })
}


deleteByTaskId(projectId, taskId){
   return axios.delete(`http://localhost:8080/api/project/id/${projectId}/task/id/${taskId}`, {headers: {
         "Content-Type": "application/json"}
     })
}

updateTask(projectId, taskId, task) {
    return axios.put(`http://localhost:8080/api/project/id/${projectId}/task/id/${taskId}`, task, {headers: {
        "Content-Type": "application/json"}
    })
}

addTask(task, projectId) {
  return axios.post(`http://localhost:8080/api/project/id/${projectId}/task/`, task,
  {headers: {
    "Content-Type": "application/json"}
})
}

}

export default new AxiosMethods();