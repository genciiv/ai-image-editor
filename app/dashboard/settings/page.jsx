export default function SettingsPage() {
  return (
    <>
      <div className="dashHeader">
        <h1>Account Settings</h1>
        <p>Manage your account preferences and security settings.</p>
      </div>

      <div className="settingsWrap">
        <section className="settingsCard">
          <h2>Name</h2>
          <p>Please enter your full name, or a display name.</p>

          <input defaultValue="AI Image Editor User" />

          <div className="settingsBottom">
            <span>Please use 32 characters at maximum.</span>
            <button>Save</button>
          </div>
        </section>

        <section className="settingsCard">
          <h2>Email</h2>
          <p>Enter the email address you want to use to log in.</p>

          <input defaultValue="user@example.com" />

          <div className="settingsBottom">
            <span>Please enter a valid email address.</span>
            <button>Save</button>
          </div>
        </section>

        <section className="settingsCard">
          <h2>Set Password</h2>
          <p>Click the button below to set up a password for your account.</p>

          <div className="settingsBottom">
            <span>Secure your account.</span>
            <button>Set Password</button>
          </div>
        </section>
      </div>
    </>
  );
}
