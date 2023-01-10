import {
  SnackbarKey,
  useSnackbar as useNotistack,
  VariantType,
} from "notistack";

export interface UseSnackbarReturn {
  onOpenSnackbar: (message: string, variant: VariantType) => void;
  onCloseSnackbar: (key?: SnackbarKey | undefined) => void;
}

function useSnackbar(): UseSnackbarReturn {
  const { enqueueSnackbar, closeSnackbar } = useNotistack();

  const onOpenSnackbar = (message: string, variant?: VariantType) => {
    if (!variant) enqueueSnackbar(message);
    else enqueueSnackbar(message, { variant });
  };

  return { onOpenSnackbar, onCloseSnackbar: closeSnackbar };
}

export default useSnackbar;
