import React from "react";
// import { Factory } from "meteor/dburles:factory";
import chai from "chai";
import DialogServiceDetail, {
  DialogServiceDetailProps,
} from "../DialogServiceDetail";
import { stub, spy, mock, createSandbox, assert, expectation } from "sinon";
import { render, mount, shallow } from "../../../../../tests/enzyme";

import AllTheProviders from "../../../test-utils";
import FormService from "../../Form/FormService/FormService";
import DialogBase from "../../../mui-base/Dialog/DialogBase";
import customHooks from "../../../hooks/";

const mockResetHookForm = spy();
const mockGetValuesHookForm = spy();
const mockMutateUpdateService = spy();
const mockMutateDeleteService = spy();
const mockOnClose = spy();

const mockPropsDialogServiceDetail: DialogServiceDetailProps = {
  open: true,
  onCloseDialog: mockOnClose,
  idService: "1",
};

const mockModuleDialogServiceDetail = () => {
  stub(customHooks, "useFormService").returns({
    isLoading: false,
  });
  stub(customHooks, "useUpdateService").returns({
    mutate: mockMutateUpdateService,
    isLoading: false,
  });
  stub(customHooks, "useDeleteService").returns({
    mutate: mockMutateDeleteService,
    isLoading: false,
  });
};

const renderDialogServiceDetail = () => {
  return mount(
    <AllTheProviders
      reset={mockResetHookForm}
      getValues={mockGetValuesHookForm}
    >
      <DialogServiceDetail {...mockPropsDialogServiceDetail} />
    </AllTheProviders>
  );
};

describe("<DialogServiceDetail />", () => {
  mockModuleDialogServiceDetail();
  const screen = renderDialogServiceDetail();

  it("Should render correct UI", () => {
    chai.expect(screen.find(FormService)).to.have.lengthOf(1);

    chai.expect(screen.find(DialogBase)).to.have.lengthOf(1);
    chai.expect(screen.find(DialogBase).props().maxWidth).to.equal("lg");
    chai
      .expect(screen.find(DialogBase).props().title)
      .to.equal("Service's detail");
    chai
      .expect(screen.find(DialogBase).props().open)
      .to.equal(mockPropsDialogServiceDetail.open);
  });

  it("Should update service when click Save button", () => {
    chai.expect(screen.find(DialogBase)).to.have.lengthOf(1);

    const buttonSave = screen.findWhere((node) => {
      return node.type() === "button" && node.text() === "Save";
    });
    chai.expect(buttonSave).to.exist;
    buttonSave.simulate("click");
    assert.calledOnce(mockMutateUpdateService);
  });

  it("Should delete service when click Delete button", () => {
    chai.expect(screen.find(DialogBase)).to.have.lengthOf(1);

    const buttonDelete = screen.findWhere((node) => {
      return node.type() === "button" && node.text() === "Delete";
    });
    chai.expect(buttonDelete).to.exist;
    buttonDelete.simulate("click");
    assert.calledOnce(mockMutateDeleteService);
  });

  it("Should close service when click Close button", () => {
    chai.expect(screen.find(DialogBase)).to.have.lengthOf(1);

    const buttonClose = screen.findWhere((node) => {
      return node.type() === "button" && node.text() === "Cancel";
    });
    chai.expect(buttonClose).to.exist;
    buttonClose.simulate("click");
    assert.calledOnce(mockOnClose);
    assert.calledOnce(mockResetHookForm);
  });
});
