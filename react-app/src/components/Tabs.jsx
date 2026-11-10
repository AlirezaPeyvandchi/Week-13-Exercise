function Tabs(props) {
  return (
    <>
      {props.tabs.map(function (tab) {
        return (
          <button
            key={tab.id}
            className={props.activeTab === tab.id ? "active" : ""}
            onClick={function () {
              props.setActiveTab(tab.id);
            }}
          >
            {tab.title}
          </button>
        );
      })}
    </>
  );
}

export default Tabs;
