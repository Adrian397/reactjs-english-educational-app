import { notesService, NoteType } from "@services/NotesService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { imgBasePath } from "@utils/imgs";
import { ReactElement, useState } from "react";
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
  const [inputValue, setInputValue] = useState("");
  const [isExpandedCheck, setIsExpandedCheck] = useState(false);

  const { data } = useQuery(["notes"], notesService.getNotes);

  const queryClient = useQueryClient();

  const { mutate } = useMutation(notesService.createNote, {
    onSuccess: () => {
      queryClient.invalidateQueries(["notes"]);
    },
  });

  console.log(data);

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
          {(!isExpandedCheck || data.length === 0) && (
            <AddNote onClick={handleNoteAdd}>Add a note</AddNote>
          )}

          {data &&
            data
              .filter((val: NoteType) =>
                val.text.toLowerCase().includes(inputValue)
              )
              .map((note: NoteType) => (
                <Note
                  key={note.id}
                  note={note}
                  onExpandCheck={setIsExpandedCheck}
                />
              ))}
        </Scroll>
      </NotesList>
    </NotebookWrapper>
  );
};
