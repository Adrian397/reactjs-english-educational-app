import CloseIcon from "@mui/icons-material/Close";
import { imgBasePath } from "@utils/imgs";
import { useFormik } from "formik";
import { ReactElement } from "react";
import * as Yup from "yup";
import {
  Close,
  Export,
  Modal,
  ModalWrapper,
} from "./ExportFileNameModal.styled";

type Props = {
  noteId: string;
  onNoteExport: (id: string, fileName: string) => void;
  onVisibilityChange: React.Dispatch<
    React.SetStateAction<{
      deleteModal: boolean;
      exportModal: boolean;
    }>
  >;
};

export const ExportFileNameModal = ({
  noteId,
  onNoteExport,
  onVisibilityChange,
}: Props): ReactElement => {
  const formik = useFormik({
    initialValues: {
      fileName: "",
    },

    validationSchema: Yup.object({
      fileName: Yup.string().required(),
    }),

    onSubmit: (values) => {
      onNoteExport(noteId, values.fileName);
      onVisibilityChange((prevState) => ({
        ...prevState,
        exportModal: false,
      }));
    },

    validateOnBlur: false,
  });

  return (
    <ModalWrapper>
      <Modal>
        <Close
          onClick={() =>
            onVisibilityChange((prevState) => ({
              ...prevState,
              exportModal: false,
            }))
          }
        >
          <CloseIcon />
        </Close>
        <Export>
          <img alt="export icon" src={imgBasePath + "/exportColoured.svg"} />
        </Export>

        <p>Enter a name for the exported text file</p>
        <form onSubmit={formik.handleSubmit}>
          <input
            placeholder="Enter file name..."
            {...formik.getFieldProps("fileName")}
          />
          <div>
            <button
              onClick={() =>
                onVisibilityChange((prevState) => ({
                  ...prevState,
                  exportModal: false,
                }))
              }
              type="button"
            >
              Cancel
            </button>
            <button
              disabled={!formik.values.fileName || !formik.isValid}
              type="submit"
            >
              Export
            </button>
          </div>
        </form>
      </Modal>
    </ModalWrapper>
  );
};
