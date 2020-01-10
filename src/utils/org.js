class Org {
    constructor(users) {
        this.init();
    }

    init = () => {
        this.vps = [];
        this.idsMap = {};
        this._id = 1;
    };
    cache = users => {
        users.forEach(emp => {
            if (emp.id) {
                emp.emps = [];
                delete emp.password;
                this.idsMap[emp.id] = emp;
            }
        });
    };
    build = users => {
        this.init();
        this.cache(users);
        users.forEach(emp => {
            if (emp.id) {
                if (!emp.managerId) {
                    // No manager
                    this.vps.push(emp);
                } else {
                    const manager = this.idsMap[emp.managerId];
                    if (!manager) {
                        console.log(`emp [${emp.id}] has unknown manager id [${emp.managerId}]`);
                    } else {
                        manager.emps.push(emp);
                    }
                }
            }
        });
        console.log("org vp's: ", this.vps);
    };
    toggleFold = id => {
        const emp = this.idsMap[id];
        emp.fold = !emp.fold;
    };

    update = (id, data) => {
        this.idsMap[id] = {
            ...this.idsMap[id],
            ...data,
        };
        console.warn('updated - ', this.idsMap[id]);
    };

    add = parentId => {
        const newEmp = {
            id: this._id++,
            emps: [],
            firstName: "new emp",
        };
        this.idsMap[newEmp.id] = newEmp;
        if (parentId === null) {
            this.vps.unshift(newEmp);
        } else {
            const emp = this.idsMap[parentId];
            emp.emps.unshift(newEmp);
            emp.fold = true;
        }
    };
}

const org = new Org();
export default org;
