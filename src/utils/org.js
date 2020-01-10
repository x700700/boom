export default class org {
  constructor(users) {
    this.vps = [];
    this.idsMap = {};
    this._id = 1;
    this.cache(users);
    this.build(users);
  }

  cache = users => {
    users.forEach(emp => {
      emp.emps = [];
      delete emp.password;
      this.idsMap[emp.id] = emp;
    });
  };
  build = users => {
    users.forEach(emp => {
      if (!emp.managerId) {
        // No manager
        this.vps.push(emp);
      } else {
        const manager = this.idsMap[emp.managerId];
        if (!manager) {
          console.log(
            `emp [${emp.id}] has unknown manager id [${emp.managerId}]`
          );
        } else {
          manager.emps.push(emp);
        }
      }
    });
    console.log("org vp's: ", this.vps);
  };
  add = underId => {
    if (underId === null) {
      this.vps.unshift({
        id: this._id++,
        firstName: "new emp"
      });
    }
  };
}
