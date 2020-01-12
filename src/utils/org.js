import {addUpdateEmp} from "./api";

const delNode = async (id, managerId, managerEmps, emp) => {
    let updatedEmps = managerEmps.filter(x => x.id !== id);
    if (emp.emps.length > 0) {
        updatedEmps = updatedEmps.concat(emp.emps);

        for (let i=0 ; i < emp.emps.length ; i++) {
            // Todo - man, promise.all... (and then back to forEach)
            await addUpdateEmp(org.getNum(emp.emps[i].id), { managerId: managerId });
            emp.emps[i].managerId = managerId;
        }
    }
    return updatedEmps;
};

class Org {
    constructor(users) {
        this.init();
    }

    init = () => {
        this.vps = [];
        this.idsMap = {};
        this._num = 0;
    };
    cache = users => {
        users.forEach(emp => {
            if (emp && emp.id) {
                emp.num = this._num;
                emp.emps = [];
                delete emp.password;
                this.idsMap[emp.id] = emp;
            }
            this._num++;
        });
    };
    build = users => {
        this.init();
        this.cache(users);
        users.forEach(emp => {
            if (emp && emp.id) {
                if (!emp.managerId) {
                    // No manager
                    this.vps.unshift(emp);
                } else {
                    const manager = this.idsMap[emp.managerId];
                    if (!manager) {
                        console.log(`emp [${emp.id}] has unknown manager id [${emp.managerId}]`);
                    } else {
                        manager.emps.unshift(emp);
                    }
                }
            }
        });
        console.log("org vp's: ", this.vps);
    };
    toggleFold = id => {
        const emp = this.idsMap[id];
        emp.expand = !emp.expand;
    };
    toggleFoldAll = (toggle) => {
        this.idsMap.forEach((emp) => {
            emp.expand = toggle;
        });
    };
    setModified = id => {
        const emp = this.idsMap[id];
        emp.modified = true;
    };

    getNum = id => (this.idsMap[id] || {}).num;
    update = (id, data) => {
        const emp = this.idsMap[id];
        Object.keys(data).forEach((key) => {
            emp[key] = data[key];
        });
        emp.modified = false;
    };

    getNew = managerId => {
        const newEmp = {
            num: this._num,
            id: Math.floor(Math.random() * 100000000),
            emps: [],
            firstName: "new emp",
            managerId: managerId,
        };
        this._num++;
        return newEmp;
    };
    add = (managerId, newEmp) => {
        this.idsMap[newEmp.id] = newEmp;
        if (managerId === null) {
            this.vps.unshift(newEmp);
        } else {
            const emp = this.idsMap[managerId];
            emp.emps.unshift(newEmp);
            emp.expand = true;
        }
    };

    del = async (id) => {
        const emp = this.idsMap[id];
        const manager = emp.managerId ? this.idsMap[emp.managerId] || {} : null;
        if (manager) {
            manager.emps = await delNode(id, manager.id, manager.emps, emp);
        } else {
            this.vps = await delNode(id, null, this.vps, emp);
        }
        delete this.idsMap[id];
    };
}

const org = new Org();
export default org;
