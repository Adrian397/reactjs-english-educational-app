import { asyncWrapper } from "./api/api.utils";
import axios from "./api/axios";

export type NoteType = {
  id: string;
  text: string;
};

type ResponseType = {
  _id: string;
  text: string;
};

const notesServiceDef = () => {
  const getNotes = asyncWrapper(async () => {
    const token = localStorage.getItem("accessToken");

    try {
      const response = await axios.get("/notes/getNotes", {
        headers: {
          Authorization: token,
        },
      });

      const transformedData = response.data.notes.map((note: ResponseType) => ({
        id: note._id,
        text: note.text,
      }));

      return transformedData;
    } catch (e) {
      throw new Error("Custom");
    }
  });

  const createNote = asyncWrapper(async () => {
    const token = localStorage.getItem("accessToken");

    try {
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
    } catch (e) {
      throw new Error("Custom");
    }
  });

  const updateNote = asyncWrapper(async (args: NoteType) => {
    const token = localStorage.getItem("accessToken");

    try {
      const response = await axios.post(
        "/notes/updateNote",
        {
          id: args.id,
          text: args.text,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      return response;
    } catch (e) {
      throw new Error("Custom");
    }
  });

  const deleteNote = asyncWrapper(async (id: string) => {
    const token = localStorage.getItem("accessToken");

    try {
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
    } catch (e) {
      throw new Error("Custom");
    }
  });

  return { getNotes, createNote, updateNote, deleteNote };
};

export const notesService = notesServiceDef();
