const ProfilePage = () => {
  const stats = [
    {
      title: "Problems Solved",
      value: 120,
      icon: "fas fa-code",
      color: "#22c55e",
    },
    {
      title: "Total Score",
      value: 850,
      icon: "fas fa-star",
      color: "#facc15",
    },
    {
      title: "Mock Interviews",
      value: 5,
      icon: "fas fa-user-clock",
      color: "#38bdf8",
    },
  ];

  return (
    <div className="profile-container">
      <h2 className="profile-title">Welcome Back!</h2>

      <div className="cards-container">
        {stats.map((item, index) => (
          <div className="card" key={index}>
            <div
              className="icon"
              style={{ backgroundColor: item.color }}
            >
              <i className={item.icon}></i>
            </div>

            <h3>{item.value}</h3>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;