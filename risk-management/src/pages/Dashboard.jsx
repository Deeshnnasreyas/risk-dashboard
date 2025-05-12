import { useState, useMemo } from "react";
import Tabs from "../components/Tabs";
import SearchFilterBar from "../components/SearchFilterBar";
import Table from "../components/Table";
import DashboardHeader from "../components/DashboardHeader";
import Pagination from "../components/Pagination";
import { riskData } from "../constants";
const Dashboard = () => {
  document.title = "Risk Management | Dashboard";
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(riskData.length / 15);
  const itemsPerPage = 10;
  const filtered = useMemo(() => {
    return riskData
      .filter((item) =>
        activeTab === "All" ? true : item.status === activeTab
      )
      .filter((item) =>
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
  }, [activeTab, searchQuery]);
  const getCounts = () => {
    const counts = {
      All: riskData.length,
      New: 0,
      "Under Mitigation": 0,
      Closed: 0,
    };

    riskData.forEach((item) => {
      if (counts[item.status] !== undefined) {
        counts[item.status]++;
      }
    });

    return counts;
  };
  const counts = getCounts();
  const tabsWithCount = [
    { label: "All", count: counts.All },
    { label: "New", count: counts.New },
    { label: "Under Mitigation", count: counts["Under Mitigation"] },
    { label: "Closed", count: counts.Closed },
  ];

  const sorted = useMemo(() => {
    if (!sortConfig.key) return filtered;
    return [...filtered].sort((a, b) => {
      const aValue = a[sortConfig.key.toLowerCase().replace(/ /g, "")];
      const bValue = b[sortConfig.key.toLowerCase().replace(/ /g, "")];
      return sortConfig.direction === "asc"
        ? aValue > bValue
          ? 1
          : -1
        : aValue < bValue
        ? 1
        : -1;
    });
  }, [filtered, sortConfig]);

  // const totalPages = Math.ceil(sorted.length / itemsPerPage);
  const pageData = sorted.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <DashboardHeader />
      <div className="p-6 bg-gray-50 min-h-screen">
        <Tabs
          tabs={tabsWithCount}
          activeTab={activeTab}
          onTabClick={setActiveTab}
        />
        <SearchFilterBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <Table
          data={pageData}
          sortConfig={sortConfig}
          onSort={(key) =>
            setSortConfig((prev) =>
              prev.key === key
                ? { key, direction: prev.direction === "asc" ? "desc" : "asc" }
                : { key, direction: "asc" }
            )
          }
        />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </>
  );
};

export default Dashboard;
