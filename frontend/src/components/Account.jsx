import { useState } from "react";

const Account = () => {
  const [profileImage, setProfileImage] = useState("./ass.jpg ");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-xl font-bold mb-4">Account Settings</h1>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <img
              src={profileImage}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-2 border-purple-600 cursor-pointer"
              onClick={handleImageClick}
              title="Change Profile"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              id="fileInput"
              className="hidden"
            />
          </div>

          <div className="flex-1">
            <h2 className="font-bold text-lg">Marry Doe</h2>
            <p className="text-gray-600 text-sm">Marry@Gmail.Com</p>
            <p className="mt-2 text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
