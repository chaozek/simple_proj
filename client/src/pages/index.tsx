import { getDataFromTree } from "@apollo/client/react/ssr";
import Homepage from "src/views/homepage";
import withApollo from "../utils/withApollo";


const index = () => {
  return <Homepage />;
};

export default withApollo(index, {
  getDataFromTree,
});
