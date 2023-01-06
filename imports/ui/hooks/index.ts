import useDeleteService from "./useDeleteService";
import useDialog from "./useDialog";
import useDragAndDropService from "./useDragAndDropService";
import useFormService from "./useFormService";
import useGetListServices from "./useGetListServices";
import useGetServiceDetail from "./useGetServiceDetail";
import useInsertService from "./useInsertService";
import useUpdateService from "./useUpdateService";

const customHooks = {
  useDeleteService,
  useUpdateService,
  useInsertService,
  useGetServiceDetail,
  useDialog,
  useDragAndDropService,
  useFormService,
  useGetListServices,
};

export default customHooks;
