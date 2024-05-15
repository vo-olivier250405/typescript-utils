const useDropzone = () => {
  const show = () =>
    document.querySelector("#dropzone")?.classList.remove("hidden");

  const dismiss = () =>
    document.querySelector("#dropzone")?.classList.add("hidden");

  return { show, dismiss };
};

const DropzoneProvider = ({ children }: { children: React.ReactNode }) => {
  const { show } = useDropzone();
  return (
    <div className="h-screen" onDragOver={show}>
      {children}
    </div>
  );
};

const Dropzone = ({
  dropzoneText = "Drop files here to upload",
  onDrop,
}: {
  dropzoneText?: string;
  onDrop: (e: React.DragEvent<HTMLDivElement>) => Promise<void>;
}) => {
  const { dismiss } = useDropzone();
  return (
    <div
      id="dropzone"
      className="fixed left-0 top-0 hidden h-screen w-full p-2"
      onDragOver={(e) => {
        e.preventDefault();
        e.persist();
      }}
      onDragLeave={dismiss}
      onDrop={onDrop}
    >
      <div className="pointer-events-none flex h-full w-full border-spacing-5 select-none items-center justify-center rounded-md border-8 border-dashed border-slate-600/50 bg-slate-100 dark:bg-slate-900">
        <p className="text-xl text-slate-800 dark:text-slate-400">
          {dropzoneText}
        </p>
      </div>
    </div>
  );
};

export { DropzoneProvider, Dropzone, useDropzone };
