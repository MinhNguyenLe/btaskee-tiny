import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Enzyme, { configure, shallow, mount, render } from "enzyme";

configure({ adapter: new Adapter() });

export { shallow, mount, render };
export default Enzyme;
