import { SetStateAction, useState } from "react";
import { Button, Input } from "antd";

const PersonalityText = () => {
  const [editing, setEditing] = useState(false);
  const [profileText, setProfileText] = useState(`
    Allow me to introduce myself. Modern yet traditional, I am deeply
    inclined in our values, ethics and culture. I am looking forward
    to settling down with a partner who shares my values and
    interests, someone with whom I can always be myself. If you find
    yourself having mutual thoughts, feel free to contact me.
  `);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    setEditing(false);
    console.log(profileText);
  };

  const handleCancelClick = () => {
    setEditing(false);
  };

  const handleInputChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setProfileText(e.target.value);
  };

  return (
    <div>
      <div className="align-items-center my-1 mt-2 d-flex justify-content-between">
        <h6 className="">
          Personality, Family Details, Career, Partner Expectations etc.
        </h6>
        {!editing ? (
          <Button
            className="text-primary border-0 pe-0"
            onClick={handleEditClick}
          >
            Edit
          </Button>
        ) : (
          <>
            <Button
              className="text-primary border-0 pe-0"
              onClick={handleSaveClick}
            >
              Save
            </Button>
            <Button
              className="text-primary border-0 pe-0"
              onClick={handleCancelClick}
            >
              Cancel
            </Button>
          </>
        )}
      </div>

      <div className="user-d-border"></div>

      {!editing ? (
        <p>{profileText}</p>
      ) : (
        <Input.TextArea
          rows={6}
          value={profileText}
          onChange={handleInputChange}
        />
      )}
    </div>
  );
};

export default PersonalityText;
