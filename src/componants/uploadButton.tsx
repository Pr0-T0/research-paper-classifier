function UploadButton() {
    return (
        <label className="flex items-center justify-center w-fit px-5 py-3  border border-zinc-500 bg-zinc-900 hover:bg-zinc-800 transition cursor-pointer text-sm font-medium text-zinc-200">
            UPLOAD PAPER
            <input
                type="file"
                accept=".pdf"
                className="hidden"
                // onChange={handleChange} logic later
            />
        </label>
    )
}

export default UploadButton