type UploadButtonProps = {
    onUpload: (file: File) => void;
};

function UploadButton({ onUpload }: UploadButtonProps) {
    
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];
        if (file) {onUpload(file)};
    }

    return (
        <label className="flex items-center justify-center w-fit px-5 py-3  border border-cyan-600/20 bg-gray-900 hover:bg-zinc-800 transition cursor-pointer text-sm font-medium text-zinc-200">
            UPLOAD PAPER
            <input
                type="file"
                accept=".pdf"
                className="hidden"
                onChange={handleChange}
            />
        </label>
    )
}

export default UploadButton