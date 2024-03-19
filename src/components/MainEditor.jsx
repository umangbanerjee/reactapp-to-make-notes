import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import FontFamily from "@tiptap/extension-font-family";
import {
  FaBold,
  FaHeading,
  FaItalic,
  FaStrikethrough,
  FaUnderline,
} from "react-icons/fa";
import { IconContext } from "react-icons";

export default function MainEditor() {
  const extensions = [
    StarterKit,
    FontFamily.configure({
      defaultFontFamily: "Arial",
      fontFamily: [
        { name: "Arial"},
        { name: "Helvetica"},
        { name: "Times New Roman"},
        { name: "Georgia"},
        { name: "Courier New"},
        { name: "Verdana"},
        { name: "Geneva"},
        { name: "Tahoma"},
        { name: "Trebuchet MS"},
        { name: "Arial Black"},
      ],
    }),
  ];

  const content = "<p>Hello World!</p>";

  const editor = useEditor({
    extensions,
    content,
  });

  return (
    <div>
      <div className="tools">
        <EditorToolbar editor={editor} />
        <IconContext.Provider value={{ size: "1.5rem" }}>
          <button>
            <FaBold />
          </button>
          <button>
            <FaItalic />
          </button>
          <button>
            <FaUnderline />
          </button>
          <button>
            <FaStrikethrough />
          </button>
          <button>
            <FaHeading />
          </button>
        </IconContext.Provider>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
}

function EditorToolbar({ editor }) {
  const handleChangeFontFamily = (event) => {
    editor.chain().focus().setFontFamily(event.target.value).run();
  };

  return (
    <div>
      <select onChange={handleChangeFontFamily}>
        <option value="Arial" >Arial</option>
        <option value="Helvetica">Helvetica</option>
        <option value="Times New Roman">Times New Roman</option>
        <option value="Georgia">Georgia</option>
        <option value="Courier New">Courier New</option>
        <option value="Verdana">Verdana</option>
        <option value="Geneva">Geneva</option>
        <option value="Tahoma">Tahoma</option>
        <option value="Trebuchet MS">Trebuchet MS</option>
        <option value="Arial Black">Arial Black</option>
      </select>
    </div>
  );
}
