import { useDropzone } from "react-dropzone";
import { BiCheckDouble } from "react-icons/bi";
import { FiUploadCloud } from "react-icons/fi";

const UploadImage = ({ file, setFile }) => {
  // use pakeage for set file
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFile(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  // image preview when user selected file
  const images = file.map((file) => (
    <div
      key={file.name}
      className="flex items-center justify-between"
    >
      <div className="flex items-center">
        <img src={file.preview} className="!w-24 !h-24 rounded-full" alt="preview" />
      </div>
    </div>
  ));

  // submit form
  const submitUploadImage = (e) => {
    // const formData = new FormData();
    // formData.append("image", file[0]);
  };
  return (
    <div className="flex flex-col  items-center">
      <div
        {...getRootProps()}
        className="border-2 !w-24 !h-24 overflow-hidden cursor-pointer border-gray-500 flex justify-center items-center rounded-full border-  mt-8"
      >
        <input {...getInputProps()} />
        <div className="flex justify-center">
          {file.length === 0 ? (
            <FiUploadCloud
              size={35}
              className="text-gray-700"
            />
          ) : (
            images
          )}
        </div>
      </div>
      <span className="text-xs yekanBold text-gray-600 pt-2">
        عکس پروفایل
      </span>
    </div>
  );
};

export default UploadImage;
