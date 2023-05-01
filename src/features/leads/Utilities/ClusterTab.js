const ClusterTab = ({ predicted_cluster, handle_cluster, active_cluster, total_cluster }) => {
    const tabs = [];
    for (let i = 0; i < total_cluster; i++) {
        tabs.push(
            <a key={i} onClick={() => handle_cluster(i)} className={`tab ${active_cluster == i ? 'tab-active' : ''}`}>
                Cluster {i}
            </a>
        );
    }

    return (
        <div className="container p-5 items-center justify-center flex">
            <div className="tabs tabs-boxed">{tabs}</div>
        </div>
    );
};

export default ClusterTab;