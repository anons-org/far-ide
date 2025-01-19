import { useFileContent } from "@/store/useFileContent.store";
import MonacoEditor from "@monaco-editor/react";
export default function Editor() {
  const fileContent = useFileContent((state) => state.fileContent);
  const selectedFileInfo = useFileContent((state) => state.selectedFileInfo);
  const handleEditorMount = (editor: any, monaco: any) => {
    console.log("Editor mounted", editor, monaco);
  };
  // 检查类型
  const isTypescript =
    selectedFileInfo.name.endsWith(".ts") ||
    selectedFileInfo.name.endsWith(".tsx");
  const isJs =
    selectedFileInfo.name.endsWith(".js") ||
    selectedFileInfo.name.endsWith(".jsx");
  const isCss =
    selectedFileInfo.name.endsWith(".css") ||
    selectedFileInfo.name.endsWith(".scss") ||
    selectedFileInfo.name.endsWith(".less");
  const isHtml =
    selectedFileInfo.name.endsWith(".html") ||
    selectedFileInfo.name.endsWith(".razor") ||
    selectedFileInfo.name.endsWith(".handlebars");
  const isJson = selectedFileInfo.name.endsWith(".json");

  const language = isTypescript
    ? "typescript"
    : isJs
    ? "javascript"
    : isCss
    ? "css"
    : isHtml
    ? "html"
    : isJson
    ? "json"
    : "text";

  return (
    <div className="h-full w-full">
      {selectedFileInfo.id ? (
        <MonacoEditor
          height="100%"
          width="100%"
          language={language}
          theme="vs-dark"
          value={fileContent}
          onMount={handleEditorMount}
        />
      ) : null}
    </div>
  );
}
