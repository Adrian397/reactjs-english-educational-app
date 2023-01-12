import { asyncWrapper } from "./api/api.utils";
import axios from "./api/axios";

export type NoteType = {
  _id: string;
  text: string;
};

const notesServiceDef = () => {
  const getNotes = asyncWrapper(async (): Promise<NoteType[]> => {
    const token = localStorage.getItem("accessToken");

    const response = await axios.get("/notes/getNotes", {
      headers: {
        Authorization: token,
      },
    });

    return response.data.notes;
  });

  const createNote = asyncWrapper(async () => {
    const token = localStorage.getItem("accessToken");

    const response = await axios.post(
      "/notes/createNote",
      {
        text: "",
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return response;
  });

  const updateNote = asyncWrapper(async (args: NoteType) => {
    const token = localStorage.getItem("accessToken");

    const response = await axios.post(
      "/notes/updateNote",
      {
        id: args._id,
        text: args.text,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return response;
  });

  const deleteNote = asyncWrapper(async (id: string) => {
    const token = localStorage.getItem("accessToken");

    const response = await axios.post(
      "/notes/deleteNote",
      {
        id,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );

    return response;
  });

  return { getNotes, createNote, updateNote, deleteNote };
};

export const notesService = notesServiceDef();
