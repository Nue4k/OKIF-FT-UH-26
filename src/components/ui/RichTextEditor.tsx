"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import { useCallback, useRef, useState } from "react";
import {
  Bold,
  Italic,
  Heading1,
  Heading2,
  List,
  ListOrdered,
  Quote,
  Image as ImageIcon,
  Loader2,
} from "lucide-react";

interface RichTextEditorProps {
  content: string;
  onChange: (content: string) => void;
  placeholder?: string;
}

export default function RichTextEditor({
  content,
  onChange,
  placeholder = "Tulis isi konten di sini...",
}: RichTextEditorProps) {
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({
        HTMLAttributes: {
          class: "rounded-xl w-full h-auto object-cover my-6 shadow-sm",
        },
      }),
    ],
    content,
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose-base max-w-none focus:outline-none min-h-[300px] px-6 py-5 bg-white/40 backdrop-blur-sm rounded-b-[1.5rem]",
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  const uploadImage = useCallback(
    async (file: File) => {
      if (!editor) return;

      setIsUploading(true);
      try {
        const formData = new FormData();
        formData.append("file", file);

        const res = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        const result = await res.json();
        if (res.ok && result.data?.url) {
          editor.chain().focus().setImage({ src: result.data.url }).run();
        } else {
          alert("Gagal mengupload gambar.");
        }
      } catch (error) {
        console.error("Upload error:", error);
        alert("Terjadi kesalahan saat mengupload gambar.");
      } finally {
        setIsUploading(false);
      }
    },
    [editor]
  );

  const handleImageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      uploadImage(file);
    }
  };

  if (!editor) {
    return null;
  }

  const ToolbarButton = ({
    onClick,
    isActive = false,
    disabled = false,
    children,
  }: {
    onClick: () => void;
    isActive?: boolean;
    disabled?: boolean;
    children: React.ReactNode;
  }) => (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`p-2.5 rounded-xl transition-all duration-200 ${
        isActive
          ? "bg-okif-primary text-white shadow-md shadow-okif-primary/20"
          : "hover:bg-okif-pale/40 text-slate-600 hover:text-okif-primary"
      } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {children}
    </button>
  );

  return (
    <div className="w-full rounded-[2rem] border border-white/70 bg-white/60 p-2 shadow-[0_16px_48px_rgba(8,10,143,0.08)] backdrop-blur-xl transition-all focus-within:ring-2 focus-within:ring-okif-secondary/30">
      <div className="flex flex-wrap items-center gap-1.5 p-2 bg-white/50 backdrop-blur-md rounded-[1.5rem] border border-white/40 shadow-sm mb-2">
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBold().run()}
          isActive={editor.isActive("bold")}
        >
          <Bold className="w-4 h-4" />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleItalic().run()}
          isActive={editor.isActive("italic")}
        >
          <Italic className="w-4 h-4" />
        </ToolbarButton>

        <div className="w-[1px] h-6 bg-slate-300/60 mx-1.5" />

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          isActive={editor.isActive("heading", { level: 2 })}
        >
          <Heading1 className="w-4 h-4" />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          isActive={editor.isActive("heading", { level: 3 })}
        >
          <Heading2 className="w-4 h-4" />
        </ToolbarButton>

        <div className="w-[1px] h-6 bg-slate-300/60 mx-1.5" />

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          isActive={editor.isActive("bulletList")}
        >
          <List className="w-4 h-4" />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          isActive={editor.isActive("orderedList")}
        >
          <ListOrdered className="w-4 h-4" />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          isActive={editor.isActive("blockquote")}
        >
          <Quote className="w-4 h-4" />
        </ToolbarButton>

        <div className="w-[1px] h-6 bg-slate-300/60 mx-1.5" />

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageInput}
          accept="image/*"
          className="hidden"
        />
        <ToolbarButton
          onClick={() => fileInputRef.current?.click()}
          disabled={isUploading}
        >
          {isUploading ? (
            <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
          ) : (
            <ImageIcon className="w-4 h-4" />
          )}
        </ToolbarButton>
      </div>

      <EditorContent editor={editor} />
    </div>
  );
}
