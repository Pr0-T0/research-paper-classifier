import UploadButton from "./uploadButton";

export default function Header() {
   return (
     <header className="w-full  bg-gray-900 border-b text-zinc-200">
        <div className="mx-auto flex items-center justify-between px-4 py-3">
            <div className="text-2xl font-bold">PAPER CLASSIFIER</div>
            <UploadButton/>
        </div>
    </header>
   )
}
