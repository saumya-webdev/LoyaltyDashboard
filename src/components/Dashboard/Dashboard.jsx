import React, { useState } from "react";

import {
  User,
  Gift,
  History,
  Users,
  Menu,
  X,
  Star,
  Calendar,
  Trophy,
  Mail,
  Phone,
  MapPin,
  Eye,
  Package,
  Award,
} from "lucide-react";
import "./Dashboard.css";
import SlotBooking from "./SlotBooking";
import ModalImage from 'react-modal-image';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("membership");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedEntitlement, setSelectedEntitlement] = useState(null);
  const [activeQRCodes, setActiveQRCodes] = useState([]);

const categorizeQRName = (qrName) => {

  let cleanName = qrName.replace(/^QR for /, "").trim();

  const match = cleanName.match(/^(.*?)-\d{10,}/);
  return match ? match[1].trim() : cleanName;
};
  const memberData = {
    id: "John Smith",
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "+1-555-0101",
    tier: "VVIP ANNUAL MEMBERSHIP",
    tierLevel: 3,
    joinDate: "2024-03-15",
    address: "123 Main Street, New York, NY 10001",
    activePasses: 2,
    lifetimePassesIssued: 10,
    lifetimePassesUsed: 5,
    nextTierThreshold: 5,
    tierBenefits: [
      "Admission to Science Center",
      "Admission to Omni Theatre",
      "Admission to KidsSTOP™",
      "Admission to Snow City",
      "Additional pax",
      "Phoenix Indian Restaurant",
      "Coffee Bee",
      "Omni Theatre",
      "Snow City",
      "Science Centre",
      "Curiosity Shop",
      "Astro Scientific",
      "KIDSSTOP",
    ],
  };

  const entitlements = [
    {
      id: 1,
      name: "Admission to Science Center",
      description: "Free unlimited entry to Science Center for member",
      type: "Admission",
      status: "Active",
      usageCount: 99,
      expiryDate: "2025-03-15",
      value: "Unlimited",
    },
    {
      id: 2,
      name: "Admission to Omni Theatre",
      description: "Free entry to Omni Theatre with each visit",
      type: "Admission",
      status: "Active",
      usageCount: 99,
      expiryDate: "2025-03-15",
      value: "Unlimited",
    },
    {
      id: 3,
      name: "Admission to Snow City",
      description: "Free access to Snow City, unlimited times",
      type: "Admission",
      status: "Active",
      usageCount: 99,
      expiryDate: "2025-03-15",
      value: "Unlimited",
    },
    {
      id: 4,
      name: "Phoenix Indian Restaurant",
      description: "5% discount on all meals",
      type: "Discount",
      status: "Active",
      usageCount: 25,
      expiryDate: "2025-03-15",
      value: "5%",
    },
    {
      id: 5,
      name: "Coffee Bee",
      description: "5% discount on all beverages",
      type: "Discount",
      status: "Active",
      usageCount: 20,
      expiryDate: "2025-03-15",
      value: "5%",
    },
    {
      id: 6,
      name: "Curiosity Shop",
      description: "10% off merchandise and educational toys",
      type: "Discount",
      status: "Active",
      usageCount: 18,
      expiryDate: "2025-03-15",
      value: "10%",
    },
    {
      id: 7,
      name: "Astro Scientific",
      description: "20% discount on science kits",
      type: "Discount",
      status: "Active",
      usageCount: 12,
      expiryDate: "2025-03-15",
      value: "20%",
    },
  ];

  const redemptionHistory = [
    {
      id: "RED-2024-000001",
      date: "2024-03-16",
      reward: "Science Centre Merchandise",
      passesUsed: 1,
      status: "Completed",
      type: "Gift",
      description: "Redeemed tote bag at Curiosity Shop",
    },
    {
      id: "RED-2024-000002",
      date: "2024-04-02",
      reward: "Snow City Day Pass",
      passesUsed: 2,
      status: "Completed",
      type: "Entry",
      description: "Full-day access redeemed at Snow City",
    },
   
  ];

  const familyMembers = [
    {
      id: "550e8400-e29b-41d4-a716-446655440001",
      name: "Emily Smith",
      relationship: "Spouse",
      tier: "Verified",
      passesBalance: 3,
      joinDate: "2024-01-25",
      status: "Active",
      sharingEnabled: true,
      sharingPercentage: 50,
      parentalControls: false,
      spendingLimit: null,
    },
  ];

  const tabs = [
    { id: "membership", label: "Membership", icon: User },
    { id: "entitlements", label: "Benefits", icon: Gift },
    { id: "history", label: "History", icon: History },
    { id: "family", label: "Family", icon: Users },
    { id: "activeQr", label: "Active QR", icon: Star },
  ];

  const MembershipTab = () => (
    <div className="tab-content">
      {}
      <div className="member-card">
        <div className="member-header">
          <div className="member-info">
            <div className="avatar">{memberData.name.charAt(0)}</div>
            <div className="member-details">
              <h2>{memberData.name}</h2>
              <p>Member ID: {memberData.id}</p>
            </div>
          </div>
          <div
            className={`tier-badge tier-${memberData.tier
              .toLowerCase()
              .replace(" ", "-")}`}
          >
            <Trophy className="tier-icon" />
            <span>{memberData.tier}</span>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-header">
              <Star className="stat-icon" />
              <span>Active Passes</span>
            </div>
            <p className="stat-value">
              {memberData.activePasses.toLocaleString()}
            </p>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <Award className="stat-icon" />
              <span>Lifetime Passes Issued</span>
            </div>
            <p className="stat-value">
              {memberData.lifetimePassesIssued.toLocaleString()}
            </p>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <Gift className="stat-icon" />
              <span>Lifetime Passes Used</span>
            </div>
            <p className="stat-value">
              {memberData.lifetimePassesUsed.toLocaleString()}
            </p>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <Calendar className="stat-icon" />
              <span>Member Since</span>
            </div>
            <p className="stat-value-date">
              {new Date(memberData.joinDate).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      {}
   <div className="info-grid" style={{ display: "flex", gap: "2rem" }}>
  <div className="contact-card" style={{ flex: 1 }}>
    <h3>Contact Information</h3>
    <div className="contact-list">
      <div className="contact-item">
        <Mail className="contact-icon" />
        <span>{memberData.email}</span>
      </div>
      <div className="contact-item">
        <Phone className="contact-icon" />
        <span>{memberData.phone}</span>
      </div>
      <div className="contact-item">
        <MapPin className="contact-icon" />
        <span>{memberData.address}</span>
      </div>
    </div>
  </div>

  <div className="qr-code-section" style={{ flex: 1, textAlign: "center" }}>
    <h3>Your QR Code</h3>
 <ModalImage
  small="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=http://localhost:5173/dashboard"
  large="https://api.qrserver.com/v1/create-qr-code/?size=600x600&data=http://localhost:5173/dashboard"
  alt="Member QR Code — tap to open"
/>

  </div>

  <div className="progress-card" style={{ flex: 1 }}>
    <h3>Tier Progress</h3>
    <div className="progress-info">
      <div className="progress-text">
        <span>Progress to Next Tier</span>
        <span className="progress-numbers">
          {memberData.activePasses} / {memberData.nextTierThreshold} passes
        </span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${
              (memberData.activePasses / memberData.nextTierThreshold) * 100
            }%`,
          }}
        ></div>
      </div>
      <p className="progress-remaining">
        {memberData.nextTierThreshold - memberData.activePasses} more passes to
        reach Platinum Premier
      </p>
    </div>
  </div>
</div>

      {}
      <div className="benefits-card">
        <h3>Your Tier Benefits</h3>

        <div className="benefits-grid">
          {memberData.tierBenefits.map((benefit, index) => (
            <div key={index} className="benefit-item">
              <div className="benefit-dot"></div>
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const EntitlementsTab = () => (
    <div className="tab-content">
      <div className="entitlements-card">
        <h3>Current Benefits & Entitlements</h3>
        <div className="entitlements-grid">
          {entitlements.map((entitlement) => (
            <div key={entitlement.id} className="entitlement-card">
              <div className="entitlement-header">
                <h4>{entitlement.name}</h4>
                <span
                  className={`status-badge status-${entitlement.status.toLowerCase()}`}
                >
                  {entitlement.status}
                </span>
              </div>
              <p className="entitlement-description">
                {entitlement.description}
              </p>
              <div className="entitlement-details">
                <div className="detail-item">
                  <span className="detail-label">Value:</span>
                  <p className="detail-value">{entitlement.value}</p>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Usage Count:</span>
                  <p className="detail-count">{entitlement.usageCount}</p>
                </div>
                <div className="detail-item detail-full">
                  <span className="detail-label">Expires:</span>
                  <p className="detail-date">
                    {new Date(entitlement.expiryDate).toLocaleDateString()}
                  </p>
                </div>
                <div className="center-align">
                  <button
                    className="nav-btn"
                    onClick={() => setSelectedEntitlement(entitlement)}
                  >
                    Redeem
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const HistoryTab = () => (
    <div className="tab-content">
      <div className="history-card">
        <h3>Redemption History</h3>
        <div className="history-list">
          {redemptionHistory.map((redemption) => (
            <div key={redemption.id} className="history-item">
              <div className="history-content">
                <div className="history-main">
                  <div className="history-title">
                    <Package className="history-icon" />
                    <h4>{redemption.reward}</h4>
                    <span
                      className={`status-badge status-${redemption.status.toLowerCase()}`}
                    >
                      {redemption.status}
                    </span>
                  </div>
                  <p className="history-description">
                    {redemption.description}
                  </p>
                  <div className="history-meta">
                    <span>Order: {redemption.id}</span>
                    <span>Type: {redemption.type}</span>
                    <span>
                      {new Date(redemption.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <div className="history-points">
                  <p>
                    {redemption.passesUsed > 0 ? "-" : "+"}
                    {Math.abs(redemption.passesUsed).toLocaleString()} passes
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const FamilyTab = () => (
  <div className="tab-content">
    <div style={{ display: "flex", gap: "2rem" }}>
      {}
      <div className="family-card" style={{ flex: 1 }}>
        <h3>Family Members</h3>
        <div className="family-grid">
          {familyMembers.map((member) => (
            <div key={member.id} className="family-member">
              <div className="family-header">
                <div className="family-avatar">{member.name.charAt(0)}</div>

                <div className="family-info">
                  <h4>{member.name}</h4>
                  <p>{member.relationship}</p>
                </div>
              </div>

              <div className="family-details">
                <div className="family-detail">
                  <span>Tier:</span>
                  <span
                    className={`tier-badge tier-${member.tier.toLowerCase()}`}
                  >
                    {member.tier}
                  </span>
                </div>

                <div className="family-detail">
                  <span>Passes Balance:</span>
                  <span className="family-points">
                    {member.passesBalance.toLocaleString()}
                  </span>
                </div>

                <div className="family-detail">
                  <span>Sharing:</span>
                  <span className="family-sharing">
                    {member.sharingEnabled
                      ? `${member.sharingPercentage}%`
                      : "Disabled"}
                  </span>
                </div>

                {member.parentalControls && (
                  <div className="parental-controls">
                    <div className="parental-header">
                      <Eye className="parental-icon" />
                      <span>Parental Controls Active</span>
                    </div>
                    <p>Spending limit: ${member.spendingLimit}</p>
                  </div>
                )}

                <div className="family-footer">
                  <span>Member since:</span>
                  <span>{new Date(member.joinDate).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {}
      <div
        className="qr-code-section"
        style={{ flex: 1, textAlign: "center", alignSelf: "start" }}
      >
        <h3>Family QR Code</h3>
   <ModalImage
  small="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=http://localhost:5173/family"
  large="https://api.qrserver.com/v1/create-qr-code/?size=600x600&data=http://localhost:5173/family"
  alt="Member QR Code — tap to open"
/>
      </div>
    </div>
  </div>
);


const ActiveQrTab = () => {
  const groups = Object.groupBy
    ? Object.groupBy(activeQRCodes, qr => qr.category)
    : activeQRCodes.reduce((acc, qr) => {
        const key = qr.category || "Other";
        acc[key] = acc[key] || [];
        acc[key].push(qr);
        return acc;
      }, {});

  return (
    <div className="tab-content">
      <h2>Active QR</h2>
      {activeQRCodes.length === 0 ? (
        <p>Your Redeemed QR will be shown here.</p>
      ) : (
        Object.entries(groups).map(([category, codes]) => (
          <section key={category} className="qr-category-section">
            <h3>{category}</h3>
            <div className="qr-grid">
              {codes.map(qr => {
                const small = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qr.data)}`;
                const medium = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodeURIComponent(qr.data)}`;
                const large = `https://api.qrserver.com/v1/create-qr-code/?size=800x800&data=${encodeURIComponent(qr.data)}`;
                return (
                  <div key={qr.id} className="qr-box">
                    <ModalImage
                      small={small}
                      medium={medium}
                      large={large}
                      alt={`QR for ${qr.data}`}
                      className="qr-modal-thumb"
                      hideDownload={false}
                      hideZoom={false}
                    />
                    <p>{qr.data}</p>
                  </div>
                );
              })}
            </div>
          </section>
        ))
      )}
    </div>
  );
};


  const renderActiveTab = () => {
    switch (activeTab) {
      case "membership":
        return <MembershipTab />;
      case "entitlements":
        return <EntitlementsTab />;
      case "history":
        return <HistoryTab />;
      case "family":
        return <FamilyTab />;
      case "activeQr":
        return <ActiveQrTab />;
      default:
        return <MembershipTab />;
    }
  };

  return (
    <div className="dashboard">
      {}
      <header className="header">
        <div className="header-container">
          <div className="header-content">
            <h1 className="header-title">Loyalty Dashboard</h1>

            {}
            <button
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>

            {}
            <nav className="desktop-nav">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`nav-btn ${
                      activeTab === tab.id ? "nav-btn-active" : ""
                    }`}
                  >
                    <Icon className="nav-icon" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>


        {isMobileMenuOpen && (
          <div className="mobile-nav">
            <nav className="mobile-nav-content">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`mobile-nav-btn ${
                      activeTab === tab.id ? "mobile-nav-btn-active" : ""
                    }`}
                  >
                    <Icon className="mobile-nav-icon" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        )}
      </header>


      <main className="main-content">{renderActiveTab()}</main>
      {selectedEntitlement && (
<SlotBooking
    entitlement={selectedEntitlement}
    onClose={() => setSelectedEntitlement(null)}
  onGenerateQRCodes={(codes) => {
 const categorizeQRName = (qrName) => {
  const name = qrName.toLowerCase();
  if (name.includes("admission to science center")) return "SCIENCE CENTER";
  if (name.includes("admission to omni theatre")) return "OMNI THEATRE";
  if (name.includes("admission to snow city")) return "SNOW CITY";
  return "Other";
};

  const categorizedCodes = codes.map((qr) => ({
    ...qr,
    category: categorizeQRName(qr.data),
  }));

  setActiveQRCodes((prev) => [...prev, ...categorizedCodes]);
  setActiveTab("activeQr");
}}

  />
)}
    </div>
  );
  
};
export default Dashboard;
