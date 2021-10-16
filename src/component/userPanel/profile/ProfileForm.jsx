const ProfileForm = ({
  setUpdateUserDetailsData,
  inputDisable,
  userDetails,
  UpdateUserDetailsData,
}) => {
  return (
    <div className="row">
      <div className="col-lg-6 ">
        <div className="mb-md-4 mb-3 profile-field">
          {inputDisable ? (
            ""
          ) : (
            <>
              <label
                for="exampleFormControlInput21"
                class="form-label mb-2  edit-label  "
              >
                First Name
              </label>
            </>
          )}
          <input
            type="text"
            disabled={inputDisable ? true : false}
            className="form-control  input-border-16191e33 btn-disable  py-2 profile-input-placeholder"
            id="exampleFormControlInput12"
            placeholder={
              userDetails && userDetails.firstName
                ? userDetails.firstName
                : "N/A"
            }
            onChange={(e) => {
              setUpdateUserDetailsData({
                ...UpdateUserDetailsData,
                firstName: e.target.value,
              });
            }}
          />
        </div>
      </div>
      <div className="col-lg-6">
        <div className="mb-md-4 mb-3 profile-field">
          {inputDisable ? (
            ""
          ) : (
            <>
              <label
                for="exampleFormControlInput21"
                class="form-label mb-2  edit-label  "
              >
                Last Name
              </label>
            </>
          )}
          <input
            type="text"
            disabled={inputDisable ? true : false}
            className="form-control input-border-16191e33 py-2 profile-input-placeholder"
            id="exampleFormControlInput13"
            placeholder={
              userDetails && userDetails.lastName ? userDetails.lastName : "N/A"
            }
            onChange={(e) => {
              setUpdateUserDetailsData({
                ...UpdateUserDetailsData,
                lastName: e.target.value,
              });
            }}
          />
        </div>
      </div>
      <div className="col-lg-6 col-12">
        <div className="mb-md-4 mb-3 profile-field">
          {inputDisable ? (
            ""
          ) : (
            <>
              <label
                for="exampleFormControlInput21"
                class="form-label mb-2  edit-label  "
              >
                Email
              </label>
            </>
          )}
          <input
            type="gmail"
            disabled
            className="form-control input-border-16191e33 py-2 profile-input-placeholder"
            id="exampleFormControlInput14"
            placeholder={
              userDetails && userDetails.email ? userDetails.email : "N/A"
            }
          />
        </div>
      </div>
      <div className="col-lg-6 col-12">
        <div className="mb-md-4 mb-3 profile-field">
          {inputDisable ? (
            ""
          ) : (
            <>
              <label
                for="exampleFormControlInput21"
                class="form-label mb-2  edit-label  "
              >
                Phone Number
              </label>
            </>
          )}
          <input
            type="number"
            disabled
            className="form-control input-border-16191e33 py-2  profile-input-placeholder"
            id="exampleFormControlInput15"
            placeholder={
              userDetails && userDetails.phone ? userDetails.phone : "N/A"
            }
          />
        </div>
      </div>
    </div>
  );
};
export default ProfileForm;
