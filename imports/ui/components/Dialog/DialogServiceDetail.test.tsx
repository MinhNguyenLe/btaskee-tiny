import React from "react";
import { Factory } from "meteor/dburles:factory";
import chai from "chai";
import DialogServiceDetail, {
  DialogServiceDetailProps,
} from "./DialogServiceDetail";
import { stub, spy, mock, createSandbox, assert } from "sinon";
import { render, mount, shallow } from "../../enzyme";

import AllTheProviders from "../../test-utils";
import FormService from "../Form/FormService/FormService";
import { Button } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import DialogBase from "../../mui-base/Dialog/DialogBase";

const mockPropsDialogServiceDetail: DialogServiceDetailProps = {
  open: true,
  onCloseDialog: () => {},
  idService: "1",
};

const mockFn = spy();

const renderDialogServiceDetail = () => {
  return mount(
    <AllTheProviders reset={mockFn}>
      <DialogServiceDetail {...mockPropsDialogServiceDetail} />
    </AllTheProviders>
  );
};

describe("<DialogServiceDetail />", () => {
  it("should render DialogServiceDetail", () => {
    const service = Factory.create("services", {
      name: "testing",
    });

    // stub(testFunc, "useFormContext").returns({ reset: () => {}, test2: 2 });

    // const screen = shallow(
    //   <AllTheProviders>
    //     <DialogServiceDetail {...mockPropsDialogServiceDetail} />
    //   </AllTheProviders>
    // );

    const screen = renderDialogServiceDetail();

    console.log("From testing -------------", screen.html());

    // assert.calledOnce(mockFn);

    // sinon.assert.calledWith(ReactHookForm.useFormContext.reset, {});

    chai.assert.equal(service.name, "testing");

    chai.expect(screen.find(DialogBase)).to.have.lengthOf(1);
  });
});
