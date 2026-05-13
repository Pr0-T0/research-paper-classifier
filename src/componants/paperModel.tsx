type PaperData = {
  title?: string;
  abstract?: string;
  pages?: number;
};

type PaperModalProps = {
  data: PaperData;
  onChange: (data: PaperData) => void;
  onConfirm: () => void;
  onCancel: () => void;
};

export default function PaperModal({
  data,
  onChange,
  onConfirm,
  onCancel,
}: PaperModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      
      <div className="bg-gray-900 text-white w-175 rounded-2xl p-6 shadow-2xl">
        
        <h2 className="text-2xl font-bold mb-6">
          Verify Extracted Details
        </h2>

        {/* TITLE */}
        <div className="mb-4">
          <label className="block mb-2 text-sm text-gray-300">
            Title
          </label>

          <input
            type="text"
            value={data.title}
            onChange={(e) =>
              onChange({ ...data, title: e.target.value })
            }
            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 outline-none"
          />
        </div>

        {/* ABSTRACT */}
        <div className="mb-4">
          <label className="block mb-2 text-sm text-gray-300">
            Abstract
          </label>

          <textarea
            value={data.abstract}
            onChange={(e) =>
              onChange({ ...data, abstract: e.target.value })
            }
            rows={6}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 outline-none resize-none"
          />
        </div>

        {/* PAGES */}
        <div className="mb-6">
          <label className="block mb-2 text-sm text-gray-300">
            Pages
          </label>

          <input
            type="number"
            value={data.pages}
            onChange={(e) =>
              onChange({
                ...data,
                pages: Number(e.target.value),
              })
            }
            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 outline-none"
          />
        </div>

        {/* BUTTONS */}
        <div className="flex justify-end gap-3">
          
          <button
            onClick={onCancel}
            className="px-5 py-2 rounded-lg bg-gray-700 hover:bg-gray-600"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500"
          >
            Confirm
          </button>

        </div>
      </div>
    </div>
  );
}