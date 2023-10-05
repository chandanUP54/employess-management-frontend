import axios from "axios";

//connected by eclipse project name -->  ems1

const BASE_API_URL = "http://localhost:8091";

class EmpService {

    saveEmp(emp) {
        return axios.post(BASE_API_URL + "/employees/save", emp);
    }

    getAllEmp() {
        return axios.get(BASE_API_URL + "/employees");
    }

    getEmpById(id) {
        return axios.get(BASE_API_URL + "/employees/" + id);
    }

    deleteEmp(id) {
        return axios.delete(BASE_API_URL + "/employees/delete/" + id);
    }

    updateEmp(id, emp) {
        return axios.put(BASE_API_URL + "/employees/update/" + id, emp);
    }
}

export default new EmpService();