import useDeleteService from "./useDeleteService";
import useDialog from "./useDialog";
import useDragAndDropService from "./useDragAndDropService";
import useFormService from "./useFormService";
import useGetListServices from "./useGetListServices";
import useGetServiceDetail from "./useGetServiceDetail";
import useInsertService from "./useInsertService";
import useUpdateService from "./useUpdateService";
import useTabs from "./useTabs";

const customHooks = {
  useDeleteService,
  useUpdateService,
  useInsertService,
  useGetServiceDetail,
  useDialog,
  useDragAndDropService,
  useFormService,
  useGetListServices,
  useTabs,
};

export default customHooks;
