import React, { useState } from "react";
import { jsPDF } from "jspdf";
import "./Reports.css";

function Reports() {
  const [searchQuery, setSearchQuery] = useState("");

  // Report Data
  const reports = [
    { id: 1, title: "📊 Farm Performance", description: "Analyze livestock health, breeding cycles, and overall farm productivity trends." },
    { id: 2, title: "🥛 Milk Production", description: "Track daily, weekly, and monthly milk production with efficiency metrics." },
    { id: 3, title: "💰 Sales & Revenue", description: "Monitor sales reports, revenue trends, and top-performing dairy products." },
    { id: 4, title: "💸 Expense Reports", description: "Get insights into farm expenses, cost management, and operational budgets." },
    { id: 5, title: "📦 Inventory Reports", description: "Track feed, medical supplies, and dairy products in stock." },
    { id: 6, title: "👨‍🌾 Employee Performance", description: "Review employee attendance, work efficiency, and task completion rates." },
    { id: 7, title: "📈 Profit & Loss Analysis", description: "Analyze income vs. expenses to assess financial stability." },
    { id: 8, title: "🛒 Customer Insights", description: "Track customer orders, preferences, and feedback to enhance sales strategies." },
    { id: 9, title: "🐄 Livestock Reports", description: "Monitor herd size, new births, and overall cattle management." },
    { id: 10, title: "🦠 Disease Outbreak Reports", description: "Track recent outbreaks, vaccination data, and treatments given to cattle." },
    { id: 11, title: "🌾 Feed Consumption Reports", description: "Analyze the quantity and quality of feed used per livestock type." },
    { id: 12, title: "📉 Worker Productivity", description: "Measure farm worker efficiency, task completion rates, and labor costs." }
  ];

  // Filter Reports Based on Search Query
  const filteredReports = reports.filter((report) =>
    report.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to Generate PDF
  const generatePDF = (report) => {
    const doc = new jsPDF();
    doc.setFont("helvetica", "bold");
    doc.text(report.title, 10, 20);
    doc.setFont("helvetica", "normal");
    doc.text(report.description, 10, 40);
    doc.save(`${report.title}.pdf`);
  };

  return (
    <div className="reports-container">
      <h2 className="reports-title">📑 Dairy Farm Reports</h2>
      <p className="reports-subtitle">
        View detailed reports on farm performance, milk production, sales, inventory, livestock, and more.
      </p>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="🔍 Search reports..."
        className="report-search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Report Grid */}
      <div className="reports-grid">
        {filteredReports.length > 0 ? (
          filteredReports.map((report) => (
            <div key={report.id} className="report-card">
              <h3>{report.title}</h3>
              <p>{report.description}</p>
              <button className="download-btn" onClick={() => generatePDF(report)}>📥 Download PDF</button>
            </div>
          ))
        ) : (
          <p className="no-results">❌ No reports found!</p>
        )}
      </div>
    </div>
  );
}

export default Reports;
