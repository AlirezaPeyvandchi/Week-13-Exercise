function TabContent(props) {
  const selectedTab = props.tabs.find(function (tab) {
    return tab.id === props.activeTab;
  });

  return (
    <div className="tab-content">
      <h2>{selectedTab.title}</h2>

      <p>{selectedTab.content}</p>
    </div>
  );
}

export default TabContent;
