import { useLayoutChangerProvider } from "../../../redux/LayoutChangerProvider";

const ProfileForm = ({
  setUpdateUserDetailsData,
  inputDisable,
  userDetails,
  UpdateUserDetailsData,
}) => {
  const { layoutClickChanger, getValueOf } = useLayoutChangerProvider();

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
                {getValueOf("First Name")}
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
                {getValueOf("Last Name")}
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
                {getValueOf("Email")}
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
      <div className="col-lg-6 col-12 d-flex flex-column">
        {inputDisable ? (
          ""
        ) : (
          <>
            <label
              for="exampleFormControlInput21"
              className="form-label mb-2  edit-label  "
            >
              {getValueOf("Phone Number")}
            </label>
          </>
        )}
        <div className="row">
          {layoutClickChanger ? (
            <>
              <div
                className={
                  layoutClickChanger
                    ? "profile-field col ps-0"
                    : "profile-field col pe-0"
                }
              >
                <input
                  type="number"
                  disabled={inputDisable ? true : false}
                  onChange={(e) => {
                    setUpdateUserDetailsData({
                      ...UpdateUserDetailsData,
                      phone: e.target.value,
                    });
                  }}
                  className="form-control input-border-16191e33 py-2  profile-input-placeholder grey-color"
                  id="exampleFormControlInput15"
                  placeholder={
                    userDetails && userDetails.phone ? userDetails.phone : "N/A"
                  }
                />
              </div>
              <div className={layoutClickChanger ? "col-3 pe-0" : "col-3 ps-0"}>
                <input
                  type="number"
                  disabled
                  className="form-control input-border-16191e33 py-2  profile-input-placeholder"
                  id="exampleFormControlInput15"
                  placeholder={
                    userDetails && userDetails.countryCode
                      ? userDetails.countryCode
                      : "N/A"
                  }
                />
              </div>
            </>
          ) : (
            <>
              <div className={layoutClickChanger ? "col-3 ps-0" : "col-3 pe-0"}>
                <input
                  type="number"
                  disabled
                  className="form-control input-border-16191e33 py-2  profile-input-placeholder"
                  id="exampleFormControlInput15"
                  placeholder={
                    userDetails && userDetails.countryCode
                      ? userDetails.countryCode
                      : "N/A"
                  }
                />
              </div>
              <div
                className={
                  layoutClickChanger
                    ? "profile-field col pe-0"
                    : "profile-field col ps-0"
                }
              >
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProfileForm;
