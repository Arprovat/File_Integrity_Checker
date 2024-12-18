
import  { useEffect, useState } from 'react';
import { Upload, Shield, FileText } from 'lucide-react';
import axios  from 'axios'

const FileIntegrityChecker = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileInfo, setFileInfo] = useState(null);
  const [integrityMessage, setIntegrityMessage] = useState('');
 
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      console.log(selectedFile)
      setFileInfo({
        name: file.name,
        size: `${(file.size / 1024).toFixed(2)} KB`,
        type: file.type
      });
      setIntegrityMessage('');
    }
  };

 
useEffect(()=>{

},[])
  const handlePostFile =async () => {
    if (selectedFile) {
      const formdata = new FormData();
      formdata.append('File',selectedFile)
      const results = await axios.post('http://localhost:8008/api/fileUpload',formdata,{
        withCredentials:true
        })
        console.log(results)
      setIntegrityMessage('File successfully posted. Ready for integrity check.');
    } else {
      setIntegrityMessage('Please upload a file first.');
    }
  };

  const handleCheckIntegrity = async(e) => {
    e.preventDefault();
    if (selectedFile) {
      const formdata = new FormData();
      formdata.append("File",selectedFile)
      const results = await axios.post('http://localhost:8008/api/checkFileIntegrity',formdata,{
      withCredentials:true
      })
      console.log(results)
      setIntegrityMessage('Integrity check completed. File is authentic.');
    } else {
      setIntegrityMessage('Please upload and post a file first.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex items-center justify-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center">
          <Shield className="mr-2 text-blue-500" />
          File Integrity Checker
        </h1>
      </div>

      <div className="mb-4">
        <input 
          type="file" 
          id="fileUpload"
          className="hidden"
          onChange={handleFileUpload}
        />
        <label 
          htmlFor="fileUpload" 
          className="flex items-center justify-center w-full p-4 border-2 border-dashed border-blue-200 rounded-lg cursor-pointer hover:bg-blue-50 transition"
        >
          <Upload className="mr-2 text-blue-500" />
          {selectedFile ? selectedFile.name : 'Upload File'}
        </label>
      </div>

      <div className="flex space-x-4 mb-6">
        <button 
          onClick={handlePostFile}
          disabled={!selectedFile}
          className="flex-1 flex items-center justify-center p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:bg-gray-300 transition"
        >
          Post
        </button>
        <button 
          onClick={handleCheckIntegrity}
          disabled={!selectedFile}
          className="flex-1 flex items-center justify-center p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 transition"
        >
          Check Integrity
        </button>
      </div>

      {fileInfo && (
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <h2 className="text-lg font-semibold mb-2 flex items-center">
            <FileText className="mr-2 text-gray-600" />
            File Information
          </h2>
          <div className="space-y-2">
            <p><strong>Name:</strong> {fileInfo.name}</p>
            <p><strong>Size:</strong> {fileInfo.size}</p>
            <p><strong>Type:</strong> {fileInfo.type}</p>
          </div>
        </div>
      )}

      {integrityMessage && (
        <div className={`p-4 rounded-lg text-center ${
          integrityMessage.includes('authentic') || integrityMessage.includes('posted') 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {integrityMessage}
        </div>
      )}
    </div>
  );
};

export default FileIntegrityChecker;