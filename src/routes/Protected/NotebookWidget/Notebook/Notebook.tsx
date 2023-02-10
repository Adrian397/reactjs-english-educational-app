import { notesService } from "@services/NotesService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { imgBasePath } from "@utils/imgs";
import { ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import { Note } from "./Note/Note";
import {
  AddNote,
  InputWrapper,
  NotebookWrapper,
  NotesList,
  Scroll,
  SearchNotes,
} from "./Notebook.styled";

type Props = {
  isVisible: boolean;
};

export const Notebook = ({ isVisible }: Props): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "Notebook" });

  const [inputValue, setInputValue] = useState("");
  const [isExpandedCheck, setIsExpandedCheck] = useState(false);

  const { data } = useQuery(["notes"], notesService.getNotes);

  const queryClient = useQueryClient();

  const { mutate } = useMutation(notesService.createNote, {
    onSuccess: () => {
      queryClient.invalidateQueries(["notes"]);
    },
  });

  const handleNoteAdd = () => {
    mutate({});
  };

  return (
    <NotebookWrapper isVisible={isVisible}>
      <img
        alt="notebook decoration"
        src={imgBasePath + "/notebookDecoration.svg"}
      />
      <InputWrapper>
        <SearchNotes
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
      </InputWrapper>
      <NotesList>
        <Scroll data={data} isExpanded={isExpandedCheck}>
          {(!isExpandedCheck || (data && data.length === 0)) && (
            <AddNote onClick={handleNoteAdd}>{t("addNote")}</AddNote>
          )}

          {data &&
            data
              .filter((val) => val.text.toLowerCase().includes(inputValue))
              .map((note) => (
                <Note
                  key={note._id}
                  note={note}
                  onExpandCheck={setIsExpandedCheck}
                />
              ))}
        </Scroll>
      </NotesList>
    </NotebookWrapper>
  );
};
