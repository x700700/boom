import React, { useEffect } from "react";
import Emp from "./Emp";
import Icon from "./Atoms/Icon";

const Main = ({ vps, addEmp }) => {
  /*
  const [data, setData] = useState('');
  const load = useCallback(async () => {
    const resp = await myFetch('users/1');
    setData(JSON.stringify(resp));
  }, [setData]);
*/

  return (
    <div>
      <h1>Organization</h1>
      {vps && (
        <div>
          <Icon fa="plus-square" color="blue" onClick={() => addEmp(null)} />
          {vps.map(emp => (
            <div key={emp.id}>
              <Emp emp={emp} addEmp={addEmp} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Main;
