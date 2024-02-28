import * as React from "react";
import FormContainer from "./FormContainer";
import { UrlData } from "../interfaces/UrlData";
import axios from "axios";
import { serverUrl } from "../utils/constants";
import DataTable from "./DataTable";

interface IMainProps {}

const Main: React.FunctionComponent<IMainProps> = () => {
  const [data, setData] = React.useState<UrlData[]>([]);
  const [reload, setReload] = React.useState<boolean>(false);

  const updateReloadState = (): void => {
    setReload(true);
  };

  const fetchTableData = async () => {
    const response = await axios.get(`${serverUrl}/shortUrl/all`);
    console.log(response);
    setData(response.data);
    setReload(false);
  };

  React.useEffect(() => {
    fetchTableData();
  }, [reload]);

  return (
    <div>
      <FormContainer updateReloadState={updateReloadState} />
      <DataTable updateReloadState={updateReloadState} data={data} />
    </div>
  );
};

export default Main;
