import { imgBasePath } from "@utils/imgs";
import { nanoid } from "nanoid";
import { ReactElement, useEffect, useState } from "react";
import { Note } from "./Note/Note";
import {
  AddNote,
  InputWrapper,
  NotebookWrapper,
  NotesList,
  Scroll,
  SearchNotes,
} from "./Notebook.styled";
import { NoteType } from "./Notebook.utils";

type Props = {
  isVisible: boolean;
};

export const Notebook = ({ isVisible }: Props): ReactElement => {
  const [data, setData] = useState<NoteType[]>(
    JSON.parse(localStorage.getItem("notes") ?? "[]")
  );
  const [inputValue, setInputValue] = useState("");
  const [isExpandedCheck, setIsExpandedCheck] = useState(false);

  useEffect(() => {
    window.localStorage.setItem("notes", JSON.stringify(data));
  }, [data]);

  const handleNoteSave = (text: string, id: string) => {
    const updatedNotes = data.map((note) => {
      if (note.id === id) {
        return { ...note, text };
      }
      return note;
    });

    setData(updatedNotes);
  };

  const handleNoteAdd = () => {
    setData((prevState) => [...prevState, { text: "", id: nanoid() }]);
  };

  const handleNoteDelete = (
    id: string,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    const newNotes = data.filter((note) => note.id !== id);
    setData(newNotes);
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

          {data
            .filter((val) => val.text.toLowerCase().includes(inputValue))
            .map((note) => (
              <Note
                key={note.id}
                note={note}
                onExpandCheck={setIsExpandedCheck}
                onNoteDelete={handleNoteDelete}
                onNoteSave={handleNoteSave}
              />
            ))}
        </Scroll>
      </NotesList>
    </NotebookWrapper>
  );
};
