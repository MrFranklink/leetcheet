import React, { useState } from 'react';
import './contest.css'; 
import Popup from './Pop'; 

function Contest() {
  const [username, setUsername] = useState('');
  const [stats, setStats] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isInputVisible, setInputVisible] = useState(true);
  const [isPopupOpen, setPopupOpen] = useState(false); 
  const [selectedStat, setSelectedStat] = useState(''); 

  const fetchData = async (username) => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://leetcodestats.cyclic.app/${username}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setStats(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching contest stats:', error);
      setIsLoading(false);
      setPopupOpen(true); 
    }
  };

  const handleShowStats = () => {
    if (username.trim() === '') {
      alert('Please enter a username.');
      return;
    }

    fetchData(username);
    setInputVisible(false); 
  };

  const handleHideStats = () => {
    setInputVisible(true); 
    setStats(null); 
  };

  const handleClosePopup = () => {
    setPopupOpen(false); 
    handleHideStats(); 
  };

  const statOptions = [
    'Total Solved',
    'Total Questions',
    'Easy Solved',
    'Total Easy',
    'Medium Solved',
    'Total Medium',
    'Hard Solved',
    'Total Hard',
    'Ranking',
    'Contribution Points',
    'Reputation',
  ];

  const getStatValue = () => {
   
    switch (selectedStat) {
      case 'Total Solved':
        return stats ? stats.totalSolved : '';
      case 'Total Questions':
        return stats ? stats.totalQuestions : '';
      case 'Easy Solved':
        return stats ? stats.easySolved : '';
      case 'Total Easy':
        return stats ? stats.totalEasy : '';
      case 'Medium Solved':
        return stats ? stats.mediumSolved : '';
      case 'Total Medium':
        return stats ? stats.totalMedium : '';
      case 'Hard Solved':
        return stats ? stats.hardSolved : '';
      case 'Total Hard':
        return stats ? stats.totalHard : '';
      case 'Ranking':
        return stats ? stats.ranking : '';
      case 'Contribution Points':
        return stats ? stats.contributionPoints : '';
      case 'Reputation':
        return stats ? stats.reputation : '';
      default:
        return '';
    }
  };

  return (
    <div className="contest-container">
      {isInputVisible ? (
        <>
          <h3>Enter Your Username</h3>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </>
      ) : null}
      <div>
        {isInputVisible ? (
          <>
            <select onChange={(e) => setSelectedStat(e.target.value)}>
              <option value="" disabled selected>
                Select a State
              </option>
              {statOptions.map((stat, index) => (
                <option key={index} value={stat}>
                  {stat}
                </option>
              ))}
            </select>
            <button
              className="contest-button"
              onClick={handleShowStats}
              disabled={isLoading}
            >
              {isLoading ? 'Loading Stats...' : 'Show Stats'}
            </button>
          </>
        ) : (
          <button
            className="contest-button"
            onClick={handleHideStats}
            disabled={isLoading}
          >
            Hide Stats
          </button>
        )}
      </div>
      {stats ? (
        <div>
          <h3>Contest Stats for {username}</h3>
          <p>{selectedStat}: {getStatValue()}</p>
        </div>
      ) : null}
      <Popup isOpen={isPopupOpen} message="Wrong username. Please try again." onClose={handleClosePopup} />
    </div>
  );
}

export default Contest;
