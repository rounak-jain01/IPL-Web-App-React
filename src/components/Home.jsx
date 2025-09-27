import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [matchesData, setMatchesData] = useState([]);

  useEffect(() => {
    // fetchdata();
    setMatchesData(filterData);
  }, []);

  async function fetchdata() {
    const url = "https://cricbuzz-cricket.p.rapidapi.com/series/v1/7607";
    const options = {
      method: "GET",
      headers: {
        'x-rapidapi-key': '31f74ca3ddmsh0fd2c743ae67e88p1d35e1jsna518de8e4549',
        "x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      // console.log(result);
      let filterData = result.matchDetails.filter(
        (singleMatch) => singleMatch["matchDetailsMap"]
      );
      setMatchesData(filterData);
    } catch (error) {
      console.error(error);
    }
  }

  let data = {
    matchDetails: [
      {
        matchDetailsMap: {
          key: "Fri, 22 Mar 2024",
          match: [
            {
              matchInfo: {
                matchId: 89654,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "1st Match",
                matchFormat: "T20",
                startDate: "1711117800000",
                endDate: "1711117800000",
                state: "complete",
                status: "Chennai Super Kings won by 6 wkts",
                team1: {
                  teamId: 58,
                  teamName: "CHENNAI SUPER KINGS",
                  teamSName: "CSK",
                  imageId: 225641,
                },
                team2: {
                  teamId: 59,
                  teamName: "ROYAL CHALLENGERS BENGALURU",
                  teamSName: "RCB",
                  imageId: 225643,
                },
                venueInfo: {
                  ground: "MA Chidambaram Stadium",
                  city: "Chennai",
                  timezone: "+05:30",
                },
                currBatTeamId: 58,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 176,
                    wickets: 4,
                    overs: 18.4,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 173,
                    wickets: 6,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        adDetail: {
          name: "native_news_index_random_1",
          layout: "native_large",
          position: 1,
        },
      },
      {
        matchDetailsMap: {
          key: "Sat, 23 Mar 2024",
          match: [
            {
              matchInfo: {
                matchId: 89661,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "2nd Match",
                matchFormat: "T20",
                startDate: "1711188000000",
                endDate: "1711188000000",
                state: "complete",
                status: "Punjab Kings won by 4 wkts",
                team1: {
                  teamId: 65,
                  teamName: "PUNJAB KINGS",
                  teamSName: "PBKS",
                  imageId: 225648,
                },
                team2: {
                  teamId: 61,
                  teamName: "DELHI CAPITALS",
                  teamSName: "DC",
                  imageId: 225644,
                },
                venueInfo: {
                  ground:
                    "Maharaja Yadavindra Singh International Cricket Stadium, Mullanpur",
                  city: "New Chandigarh",
                  timezone: "+05:30",
                },
                currBatTeamId: 65,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 177,
                    wickets: 6,
                    overs: 19.2,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 174,
                    wickets: 9,
                    overs: 20,
                  },
                },
              },
            },
            {
              matchInfo: {
                matchId: 89665,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "3rd Match",
                matchFormat: "T20",
                startDate: "1711202400000",
                endDate: "1711202400000",
                state: "complete",
                status: "Kolkata Knight Riders won by 4 runs",
                team1: {
                  teamId: 63,
                  teamName: "KOLKATA KNIGHT RIDERS",
                  teamSName: "KKR",
                  imageId: 225646,
                },
                team2: {
                  teamId: 255,
                  teamName: "SUNRISERS HYDERABAD",
                  teamSName: "SRH",
                  imageId: 225649,
                },
                venueInfo: {
                  ground: "Eden Gardens",
                  city: "Kolkata",
                  timezone: "+05:30",
                },
                currBatTeamId: 63,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 208,
                    wickets: 7,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 204,
                    wickets: 7,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Sun, 24 Mar 2024",
          match: [
            {
              matchInfo: {
                matchId: 89668,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "4th Match",
                matchFormat: "T20",
                startDate: "1711274400000",
                endDate: "1711274400000",
                state: "complete",
                status: "Rajasthan Royals won by 20 runs",
                team1: {
                  teamId: 64,
                  teamName: "RAJASTHAN ROYALS",
                  teamSName: "RR",
                  imageId: 225647,
                },
                team2: {
                  teamId: 966,
                  teamName: "LUCKNOW SUPER GIANTS",
                  teamSName: "LSG",
                  imageId: 389444,
                },
                venueInfo: {
                  ground: "Sawai Mansingh Stadium",
                  city: "Jaipur",
                  timezone: "+05:30",
                },
                currBatTeamId: 64,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 193,
                    wickets: 4,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 173,
                    wickets: 6,
                    overs: 20,
                  },
                },
              },
            },
            {
              matchInfo: {
                matchId: 89675,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "5th Match",
                matchFormat: "T20",
                startDate: "1711288800000",
                endDate: "1711288800000",
                state: "complete",
                status: "Gujarat Titans won by 6 runs",
                team1: {
                  teamId: 971,
                  teamName: "GUJARAT TITANS",
                  teamSName: "GT",
                  imageId: 235085,
                },
                team2: {
                  teamId: 62,
                  teamName: "MUMBAI INDIANS",
                  teamSName: "MI",
                  imageId: 225645,
                },
                venueInfo: {
                  ground: "Narendra Modi Stadium",
                  city: "Ahmedabad",
                  timezone: "+05:30",
                },
                currBatTeamId: 971,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 168,
                    wickets: 6,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 162,
                    wickets: 9,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Mon, 25 Mar 2024",
          match: [
            {
              matchInfo: {
                matchId: 89682,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "6th Match",
                matchFormat: "T20",
                startDate: "1711375200000",
                endDate: "1711375200000",
                state: "complete",
                status: "Royal Challengers Bengaluru won by 4 wkts",
                team1: {
                  teamId: 59,
                  teamName: "ROYAL CHALLENGERS BENGALURU",
                  teamSName: "RCB",
                  imageId: 225643,
                },
                team2: {
                  teamId: 65,
                  teamName: "PUNJAB KINGS",
                  teamSName: "PBKS",
                  imageId: 225648,
                },
                venueInfo: {
                  ground: "M.Chinnaswamy Stadium",
                  city: "Bengaluru",
                  timezone: "+05:30",
                },
                currBatTeamId: 59,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 178,
                    wickets: 6,
                    overs: 19.2,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 176,
                    wickets: 6,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        adDetail: {
          name: "native_news_index_random_2",
          layout: "native_large",
          position: 4,
        },
      },
      {
        matchDetailsMap: {
          key: "Tue, 26 Mar 2024",
          match: [
            {
              matchInfo: {
                matchId: 89689,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "7th Match",
                matchFormat: "T20",
                startDate: "1711461600000",
                endDate: "1711461600000",
                state: "complete",
                status: "Chennai Super Kings won by 63 runs",
                team1: {
                  teamId: 58,
                  teamName: "CHENNAI SUPER KINGS",
                  teamSName: "CSK",
                  imageId: 225641,
                },
                team2: {
                  teamId: 971,
                  teamName: "GUJARAT TITANS",
                  teamSName: "GT",
                  imageId: 235085,
                },
                venueInfo: {
                  ground: "MA Chidambaram Stadium",
                  city: "Chennai",
                  timezone: "+05:30",
                },
                currBatTeamId: 58,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 206,
                    wickets: 6,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 143,
                    wickets: 8,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Wed, 27 Mar 2024",
          match: [
            {
              matchInfo: {
                matchId: 89693,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "8th Match",
                matchFormat: "T20",
                startDate: "1711548000000",
                endDate: "1711548000000",
                state: "complete",
                status: "Sunrisers Hyderabad won by 31 runs",
                team1: {
                  teamId: 255,
                  teamName: "SUNRISERS HYDERABAD",
                  teamSName: "SRH",
                  imageId: 225649,
                },
                team2: {
                  teamId: 62,
                  teamName: "MUMBAI INDIANS",
                  teamSName: "MI",
                  imageId: 225645,
                },
                venueInfo: {
                  ground: "Rajiv Gandhi International Stadium",
                  city: "Hyderabad",
                  timezone: "+05:30",
                },
                currBatTeamId: 255,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 277,
                    wickets: 3,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 246,
                    wickets: 5,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Thu, 28 Mar 2024",
          match: [
            {
              matchInfo: {
                matchId: 89700,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "9th Match",
                matchFormat: "T20",
                startDate: "1711634400000",
                endDate: "1711634400000",
                state: "complete",
                status: "Rajasthan Royals won by 12 runs",
                team1: {
                  teamId: 64,
                  teamName: "RAJASTHAN ROYALS",
                  teamSName: "RR",
                  imageId: 225647,
                },
                team2: {
                  teamId: 61,
                  teamName: "DELHI CAPITALS",
                  teamSName: "DC",
                  imageId: 225644,
                },
                venueInfo: {
                  ground: "Sawai Mansingh Stadium",
                  city: "Jaipur",
                  timezone: "+05:30",
                },
                currBatTeamId: 64,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 185,
                    wickets: 5,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 173,
                    wickets: 5,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Fri, 29 Mar 2024",
          match: [
            {
              matchInfo: {
                matchId: 89703,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "10th Match",
                matchFormat: "T20",
                startDate: "1711720800000",
                endDate: "1711720800000",
                state: "complete",
                status: "Kolkata Knight Riders won by 7 wkts",
                team1: {
                  teamId: 59,
                  teamName: "ROYAL CHALLENGERS BENGALURU",
                  teamSName: "RCB",
                  imageId: 225643,
                },
                team2: {
                  teamId: 63,
                  teamName: "KOLKATA KNIGHT RIDERS",
                  teamSName: "KKR",
                  imageId: 225646,
                },
                venueInfo: {
                  ground: "M.Chinnaswamy Stadium",
                  city: "Bengaluru",
                  timezone: "+05:30",
                },
                currBatTeamId: 63,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 182,
                    wickets: 6,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 186,
                    wickets: 3,
                    overs: 16.5,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Sat, 30 Mar 2024",
          match: [
            {
              matchInfo: {
                matchId: 89710,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "11th Match",
                matchFormat: "T20",
                startDate: "1711807200000",
                endDate: "1711807200000",
                state: "complete",
                status: "Lucknow Super Giants won by 21 runs",
                team1: {
                  teamId: 966,
                  teamName: "LUCKNOW SUPER GIANTS",
                  teamSName: "LSG",
                  imageId: 389444,
                },
                team2: {
                  teamId: 65,
                  teamName: "PUNJAB KINGS",
                  teamSName: "PBKS",
                  imageId: 225648,
                },
                venueInfo: {
                  ground:
                    "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium",
                  city: "Lucknow",
                  timezone: "+05:30",
                },
                currBatTeamId: 966,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 199,
                    wickets: 8,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 178,
                    wickets: 5,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Sun, 31 Mar 2024",
          match: [
            {
              matchInfo: {
                matchId: 89717,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "12th Match",
                matchFormat: "T20",
                startDate: "1711879200000",
                endDate: "1711879200000",
                state: "complete",
                status: "Gujarat Titans won by 7 wkts",
                team1: {
                  teamId: 971,
                  teamName: "GUJARAT TITANS",
                  teamSName: "GT",
                  imageId: 235085,
                },
                team2: {
                  teamId: 255,
                  teamName: "SUNRISERS HYDERABAD",
                  teamSName: "SRH",
                  imageId: 225649,
                },
                venueInfo: {
                  ground: "Narendra Modi Stadium",
                  city: "Ahmedabad",
                  timezone: "+05:30",
                },
                currBatTeamId: 971,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 168,
                    wickets: 3,
                    overs: 19.1,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 162,
                    wickets: 8,
                    overs: 20,
                  },
                },
              },
            },
            {
              matchInfo: {
                matchId: 89724,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "13th Match",
                matchFormat: "T20",
                startDate: "1711893600000",
                endDate: "1711893600000",
                state: "complete",
                status: "Delhi Capitals won by 20 runs",
                team1: {
                  teamId: 61,
                  teamName: "DELHI CAPITALS",
                  teamSName: "DC",
                  imageId: 225644,
                },
                team2: {
                  teamId: 58,
                  teamName: "CHENNAI SUPER KINGS",
                  teamSName: "CSK",
                  imageId: 225641,
                },
                venueInfo: {
                  ground: "Dr. Y.S. Rajasekhara Reddy ACA-VDCA Cricket Stadium",
                  city: "Visakhapatnam",
                  timezone: "+05:30",
                },
                currBatTeamId: 61,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 191,
                    wickets: 5,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 171,
                    wickets: 6,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Mon, 01 Apr 2024",
          match: [
            {
              matchInfo: {
                matchId: 89731,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "14th Match",
                matchFormat: "T20",
                startDate: "1711980000000",
                endDate: "1711980000000",
                state: "complete",
                status: "Rajasthan Royals won by 6 wkts",
                team1: {
                  teamId: 62,
                  teamName: "MUMBAI INDIANS",
                  teamSName: "MI",
                  imageId: 225645,
                },
                team2: {
                  teamId: 64,
                  teamName: "RAJASTHAN ROYALS",
                  teamSName: "RR",
                  imageId: 225647,
                },
                venueInfo: {
                  ground: "Wankhede Stadium",
                  city: "Mumbai",
                  timezone: "+05:30",
                },
                currBatTeamId: 64,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 125,
                    wickets: 9,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 127,
                    wickets: 4,
                    overs: 15.3,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Tue, 02 Apr 2024",
          match: [
            {
              matchInfo: {
                matchId: 89738,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "15th Match",
                matchFormat: "T20",
                startDate: "1712066400000",
                endDate: "1712066400000",
                state: "complete",
                status: "Lucknow Super Giants won by 28 runs",
                team1: {
                  teamId: 59,
                  teamName: "ROYAL CHALLENGERS BENGALURU",
                  teamSName: "RCB",
                  imageId: 225643,
                },
                team2: {
                  teamId: 966,
                  teamName: "LUCKNOW SUPER GIANTS",
                  teamSName: "LSG",
                  imageId: 389444,
                },
                venueInfo: {
                  ground: "M.Chinnaswamy Stadium",
                  city: "Bengaluru",
                  timezone: "+05:30",
                },
                currBatTeamId: 966,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 153,
                    wickets: 10,
                    overs: 19.4,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 181,
                    wickets: 5,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Wed, 03 Apr 2024",
          match: [
            {
              matchInfo: {
                matchId: 89745,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "16th Match",
                matchFormat: "T20",
                startDate: "1712152800000",
                endDate: "1712152800000",
                state: "complete",
                status: "Kolkata Knight Riders won by 106 runs",
                team1: {
                  teamId: 61,
                  teamName: "DELHI CAPITALS",
                  teamSName: "DC",
                  imageId: 225644,
                },
                team2: {
                  teamId: 63,
                  teamName: "KOLKATA KNIGHT RIDERS",
                  teamSName: "KKR",
                  imageId: 225646,
                },
                venueInfo: {
                  ground: "Dr. Y.S. Rajasekhara Reddy ACA-VDCA Cricket Stadium",
                  city: "Visakhapatnam",
                  timezone: "+05:30",
                },
                currBatTeamId: 63,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 166,
                    wickets: 10,
                    overs: 17.2,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 272,
                    wickets: 7,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Thu, 04 Apr 2024",
          match: [
            {
              matchInfo: {
                matchId: 89749,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "17th Match",
                matchFormat: "T20",
                startDate: "1712239200000",
                endDate: "1712239200000",
                state: "complete",
                status: "Punjab Kings won by 3 wkts",
                team1: {
                  teamId: 971,
                  teamName: "GUJARAT TITANS",
                  teamSName: "GT",
                  imageId: 235085,
                },
                team2: {
                  teamId: 65,
                  teamName: "PUNJAB KINGS",
                  teamSName: "PBKS",
                  imageId: 225648,
                },
                venueInfo: {
                  ground: "Narendra Modi Stadium",
                  city: "Ahmedabad",
                  timezone: "+05:30",
                },
                currBatTeamId: 65,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 199,
                    wickets: 4,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 200,
                    wickets: 7,
                    overs: 19.5,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Fri, 05 Apr 2024",
          match: [
            {
              matchInfo: {
                matchId: 89752,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "18th Match",
                matchFormat: "T20",
                startDate: "1712325600000",
                endDate: "1712325600000",
                state: "complete",
                status: "Sunrisers Hyderabad won by 6 wkts",
                team1: {
                  teamId: 255,
                  teamName: "SUNRISERS HYDERABAD",
                  teamSName: "SRH",
                  imageId: 225649,
                },
                team2: {
                  teamId: 58,
                  teamName: "CHENNAI SUPER KINGS",
                  teamSName: "CSK",
                  imageId: 225641,
                },
                venueInfo: {
                  ground: "Rajiv Gandhi International Stadium",
                  city: "Hyderabad",
                  timezone: "+05:30",
                },
                currBatTeamId: 255,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 166,
                    wickets: 4,
                    overs: 18.1,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 165,
                    wickets: 5,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Sat, 06 Apr 2024",
          match: [
            {
              matchInfo: {
                matchId: 89756,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "19th Match",
                matchFormat: "T20",
                startDate: "1712412000000",
                endDate: "1712412000000",
                state: "complete",
                status: "Rajasthan Royals won by 6 wkts",
                team1: {
                  teamId: 64,
                  teamName: "RAJASTHAN ROYALS",
                  teamSName: "RR",
                  imageId: 225647,
                },
                team2: {
                  teamId: 59,
                  teamName: "ROYAL CHALLENGERS BENGALURU",
                  teamSName: "RCB",
                  imageId: 225643,
                },
                venueInfo: {
                  ground: "Sawai Mansingh Stadium",
                  city: "Jaipur",
                  timezone: "+05:30",
                },
                currBatTeamId: 64,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 189,
                    wickets: 4,
                    overs: 19.1,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 183,
                    wickets: 3,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Sun, 07 Apr 2024",
          match: [
            {
              matchInfo: {
                matchId: 89763,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "20th Match",
                matchFormat: "T20",
                startDate: "1712484000000",
                endDate: "1712484000000",
                state: "complete",
                status: "Mumbai Indians won by 29 runs",
                team1: {
                  teamId: 62,
                  teamName: "MUMBAI INDIANS",
                  teamSName: "MI",
                  imageId: 225645,
                },
                team2: {
                  teamId: 61,
                  teamName: "DELHI CAPITALS",
                  teamSName: "DC",
                  imageId: 225644,
                },
                venueInfo: {
                  ground: "Wankhede Stadium",
                  city: "Mumbai",
                  timezone: "+05:30",
                },
                currBatTeamId: 62,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 234,
                    wickets: 5,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 205,
                    wickets: 8,
                    overs: 20,
                  },
                },
              },
            },
            {
              matchInfo: {
                matchId: 89770,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "21st Match",
                matchFormat: "T20",
                startDate: "1712498400000",
                endDate: "1712498400000",
                state: "complete",
                status: "Lucknow Super Giants won by 33 runs",
                team1: {
                  teamId: 966,
                  teamName: "LUCKNOW SUPER GIANTS",
                  teamSName: "LSG",
                  imageId: 389444,
                },
                team2: {
                  teamId: 971,
                  teamName: "GUJARAT TITANS",
                  teamSName: "GT",
                  imageId: 235085,
                },
                venueInfo: {
                  ground:
                    "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium",
                  city: "Lucknow",
                  timezone: "+05:30",
                },
                currBatTeamId: 966,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 163,
                    wickets: 5,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 130,
                    wickets: 10,
                    overs: 18.5,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Mon, 08 Apr 2024",
          match: [
            {
              matchInfo: {
                matchId: 91380,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "22nd Match",
                matchFormat: "T20",
                startDate: "1712584800000",
                endDate: "1712584800000",
                state: "complete",
                status: "Chennai Super Kings won by 7 wkts",
                team1: {
                  teamId: 58,
                  teamName: "CHENNAI SUPER KINGS",
                  teamSName: "CSK",
                  imageId: 225641,
                },
                team2: {
                  teamId: 63,
                  teamName: "KOLKATA KNIGHT RIDERS",
                  teamSName: "KKR",
                  imageId: 225646,
                },
                venueInfo: {
                  ground: "MA Chidambaram Stadium",
                  city: "Chennai",
                  timezone: "+05:30",
                },
                currBatTeamId: 58,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 141,
                    wickets: 3,
                    overs: 17.4,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 137,
                    wickets: 9,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Tue, 09 Apr 2024",
          match: [
            {
              matchInfo: {
                matchId: 91389,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "23rd Match",
                matchFormat: "T20",
                startDate: "1712671200000",
                endDate: "1712671200000",
                state: "complete",
                status: "Sunrisers Hyderabad won by 2 runs",
                team1: {
                  teamId: 65,
                  teamName: "PUNJAB KINGS",
                  teamSName: "PBKS",
                  imageId: 225648,
                },
                team2: {
                  teamId: 255,
                  teamName: "SUNRISERS HYDERABAD",
                  teamSName: "SRH",
                  imageId: 225649,
                },
                venueInfo: {
                  ground:
                    "Maharaja Yadavindra Singh International Cricket Stadium, Mullanpur",
                  city: "New Chandigarh",
                  timezone: "+05:30",
                },
                currBatTeamId: 255,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 180,
                    wickets: 6,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 182,
                    wickets: 9,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Wed, 10 Apr 2024",
          match: [
            {
              matchInfo: {
                matchId: 91393,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "24th Match",
                matchFormat: "T20",
                startDate: "1712757600000",
                endDate: "1712757600000",
                state: "complete",
                status: "Gujarat Titans won by 3 wkts",
                team1: {
                  teamId: 64,
                  teamName: "RAJASTHAN ROYALS",
                  teamSName: "RR",
                  imageId: 225647,
                },
                team2: {
                  teamId: 971,
                  teamName: "GUJARAT TITANS",
                  teamSName: "GT",
                  imageId: 235085,
                },
                venueInfo: {
                  ground: "Sawai Mansingh Stadium",
                  city: "Jaipur",
                  timezone: "+05:30",
                },
                currBatTeamId: 971,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 196,
                    wickets: 3,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 199,
                    wickets: 7,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Thu, 11 Apr 2024",
          match: [
            {
              matchInfo: {
                matchId: 91398,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "25th Match",
                matchFormat: "T20",
                startDate: "1712844000000",
                endDate: "1712844000000",
                state: "complete",
                status: "Mumbai Indians won by 7 wkts",
                team1: {
                  teamId: 62,
                  teamName: "MUMBAI INDIANS",
                  teamSName: "MI",
                  imageId: 225645,
                },
                team2: {
                  teamId: 59,
                  teamName: "ROYAL CHALLENGERS BENGALURU",
                  teamSName: "RCB",
                  imageId: 225643,
                },
                venueInfo: {
                  ground: "Wankhede Stadium",
                  city: "Mumbai",
                  timezone: "+05:30",
                },
                currBatTeamId: 62,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 199,
                    wickets: 3,
                    overs: 15.3,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 196,
                    wickets: 8,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Fri, 12 Apr 2024",
          match: [
            {
              matchInfo: {
                matchId: 91407,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "26th Match",
                matchFormat: "T20",
                startDate: "1712930400000",
                endDate: "1712930400000",
                state: "complete",
                status: "Delhi Capitals won by 6 wkts",
                team1: {
                  teamId: 966,
                  teamName: "LUCKNOW SUPER GIANTS",
                  teamSName: "LSG",
                  imageId: 389444,
                },
                team2: {
                  teamId: 61,
                  teamName: "DELHI CAPITALS",
                  teamSName: "DC",
                  imageId: 225644,
                },
                venueInfo: {
                  ground:
                    "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium",
                  city: "Lucknow",
                  timezone: "+05:30",
                },
                currBatTeamId: 61,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 167,
                    wickets: 7,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 170,
                    wickets: 4,
                    overs: 18.1,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Sat, 13 Apr 2024",
          match: [
            {
              matchInfo: {
                matchId: 91416,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "27th Match",
                matchFormat: "T20",
                startDate: "1713016800000",
                endDate: "1713016800000",
                state: "complete",
                status: "Rajasthan Royals won by 3 wkts",
                team1: {
                  teamId: 65,
                  teamName: "PUNJAB KINGS",
                  teamSName: "PBKS",
                  imageId: 225648,
                },
                team2: {
                  teamId: 64,
                  teamName: "RAJASTHAN ROYALS",
                  teamSName: "RR",
                  imageId: 225647,
                },
                venueInfo: {
                  ground:
                    "Maharaja Yadavindra Singh International Cricket Stadium, Mullanpur",
                  city: "New Chandigarh",
                  timezone: "+05:30",
                },
                currBatTeamId: 64,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 147,
                    wickets: 8,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 152,
                    wickets: 7,
                    overs: 19.5,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Sun, 14 Apr 2024",
          match: [
            {
              matchInfo: {
                matchId: 91420,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "28th Match",
                matchFormat: "T20",
                startDate: "1713088800000",
                endDate: "1713088800000",
                state: "complete",
                status: "Kolkata Knight Riders won by 8 wkts",
                team1: {
                  teamId: 63,
                  teamName: "KOLKATA KNIGHT RIDERS",
                  teamSName: "KKR",
                  imageId: 225646,
                },
                team2: {
                  teamId: 966,
                  teamName: "LUCKNOW SUPER GIANTS",
                  teamSName: "LSG",
                  imageId: 389444,
                },
                venueInfo: {
                  ground: "Eden Gardens",
                  city: "Kolkata",
                  timezone: "+05:30",
                },
                currBatTeamId: 63,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 162,
                    wickets: 2,
                    overs: 15.4,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 161,
                    wickets: 7,
                    overs: 20,
                  },
                },
              },
            },
            {
              matchInfo: {
                matchId: 91425,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "29th Match",
                matchFormat: "T20",
                startDate: "1713103200000",
                endDate: "1713103200000",
                state: "complete",
                status: "Chennai Super Kings won by 20 runs",
                team1: {
                  teamId: 62,
                  teamName: "MUMBAI INDIANS",
                  teamSName: "MI",
                  imageId: 225645,
                },
                team2: {
                  teamId: 58,
                  teamName: "CHENNAI SUPER KINGS",
                  teamSName: "CSK",
                  imageId: 225641,
                },
                venueInfo: {
                  ground: "Wankhede Stadium",
                  city: "Mumbai",
                  timezone: "+05:30",
                },
                currBatTeamId: 58,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 186,
                    wickets: 6,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 206,
                    wickets: 4,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Mon, 15 Apr 2024",
          match: [
            {
              matchInfo: {
                matchId: 91434,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "30th Match",
                matchFormat: "T20",
                startDate: "1713189600000",
                endDate: "1713189600000",
                state: "complete",
                status: "Sunrisers Hyderabad won by 25 runs",
                team1: {
                  teamId: 59,
                  teamName: "ROYAL CHALLENGERS BENGALURU",
                  teamSName: "RCB",
                  imageId: 225643,
                },
                team2: {
                  teamId: 255,
                  teamName: "SUNRISERS HYDERABAD",
                  teamSName: "SRH",
                  imageId: 225649,
                },
                venueInfo: {
                  ground: "M.Chinnaswamy Stadium",
                  city: "Bengaluru",
                  timezone: "+05:30",
                },
                currBatTeamId: 255,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 262,
                    wickets: 7,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 287,
                    wickets: 3,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Tue, 16 Apr 2024",
          match: [
            {
              matchInfo: {
                matchId: 91443,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "31st Match",
                matchFormat: "T20",
                startDate: "1713276000000",
                endDate: "1713276000000",
                state: "complete",
                status: "Rajasthan Royals won by 2 wkts",
                team1: {
                  teamId: 63,
                  teamName: "KOLKATA KNIGHT RIDERS",
                  teamSName: "KKR",
                  imageId: 225646,
                },
                team2: {
                  teamId: 64,
                  teamName: "RAJASTHAN ROYALS",
                  teamSName: "RR",
                  imageId: 225647,
                },
                venueInfo: {
                  ground: "Eden Gardens",
                  city: "Kolkata",
                  timezone: "+05:30",
                },
                currBatTeamId: 64,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 223,
                    wickets: 6,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 224,
                    wickets: 8,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Wed, 17 Apr 2024",
          match: [
            {
              matchInfo: {
                matchId: 91452,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "32nd Match",
                matchFormat: "T20",
                startDate: "1713362400000",
                endDate: "1713362400000",
                state: "complete",
                status: "Delhi Capitals won by 6 wkts",
                team1: {
                  teamId: 971,
                  teamName: "GUJARAT TITANS",
                  teamSName: "GT",
                  imageId: 235085,
                },
                team2: {
                  teamId: 61,
                  teamName: "DELHI CAPITALS",
                  teamSName: "DC",
                  imageId: 225644,
                },
                venueInfo: {
                  ground: "Narendra Modi Stadium",
                  city: "Ahmedabad",
                  timezone: "+05:30",
                },
                currBatTeamId: 61,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 89,
                    wickets: 10,
                    overs: 17.3,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 92,
                    wickets: 4,
                    overs: 8.5,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Thu, 18 Apr 2024",
          match: [
            {
              matchInfo: {
                matchId: 91461,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "33rd Match",
                matchFormat: "T20",
                startDate: "1713448800000",
                endDate: "1713448800000",
                state: "complete",
                status: "Mumbai Indians won by 9 runs",
                team1: {
                  teamId: 65,
                  teamName: "PUNJAB KINGS",
                  teamSName: "PBKS",
                  imageId: 225648,
                },
                team2: {
                  teamId: 62,
                  teamName: "MUMBAI INDIANS",
                  teamSName: "MI",
                  imageId: 225645,
                },
                venueInfo: {
                  ground:
                    "Maharaja Yadavindra Singh International Cricket Stadium, Mullanpur",
                  city: "New Chandigarh",
                  timezone: "+05:30",
                },
                currBatTeamId: 62,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 183,
                    wickets: 10,
                    overs: 19.1,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 192,
                    wickets: 7,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Fri, 19 Apr 2024",
          match: [
            {
              matchInfo: {
                matchId: 91470,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "34th Match",
                matchFormat: "T20",
                startDate: "1713535200000",
                endDate: "1713535200000",
                state: "complete",
                status: "Lucknow Super Giants won by 8 wkts",
                team1: {
                  teamId: 966,
                  teamName: "LUCKNOW SUPER GIANTS",
                  teamSName: "LSG",
                  imageId: 389444,
                },
                team2: {
                  teamId: 58,
                  teamName: "CHENNAI SUPER KINGS",
                  teamSName: "CSK",
                  imageId: 225641,
                },
                venueInfo: {
                  ground:
                    "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium",
                  city: "Lucknow",
                  timezone: "+05:30",
                },
                currBatTeamId: 966,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 180,
                    wickets: 2,
                    overs: 19,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 176,
                    wickets: 6,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Sat, 20 Apr 2024",
          match: [
            {
              matchInfo: {
                matchId: 91474,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "35th Match",
                matchFormat: "T20",
                startDate: "1713621600000",
                endDate: "1713621600000",
                state: "complete",
                status: "Sunrisers Hyderabad won by 67 runs",
                team1: {
                  teamId: 61,
                  teamName: "DELHI CAPITALS",
                  teamSName: "DC",
                  imageId: 225644,
                },
                team2: {
                  teamId: 255,
                  teamName: "SUNRISERS HYDERABAD",
                  teamSName: "SRH",
                  imageId: 225649,
                },
                venueInfo: {
                  ground: "Arun Jaitley Stadium",
                  city: "Delhi",
                  timezone: "+05:30",
                },
                currBatTeamId: 255,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 199,
                    wickets: 10,
                    overs: 19.1,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 266,
                    wickets: 7,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Sun, 21 Apr 2024",
          match: [
            {
              matchInfo: {
                matchId: 91479,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "36th Match",
                matchFormat: "T20",
                startDate: "1713693600000",
                endDate: "1713693600000",
                state: "complete",
                status: "Kolkata Knight Riders won by 1 run",
                team1: {
                  teamId: 63,
                  teamName: "KOLKATA KNIGHT RIDERS",
                  teamSName: "KKR",
                  imageId: 225646,
                },
                team2: {
                  teamId: 59,
                  teamName: "ROYAL CHALLENGERS BENGALURU",
                  teamSName: "RCB",
                  imageId: 225643,
                },
                venueInfo: {
                  ground: "Eden Gardens",
                  city: "Kolkata",
                  timezone: "+05:30",
                },
                currBatTeamId: 63,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 222,
                    wickets: 6,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 221,
                    wickets: 10,
                    overs: 20,
                  },
                },
              },
            },
            {
              matchInfo: {
                matchId: 91488,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "37th Match",
                matchFormat: "T20",
                startDate: "1713708000000",
                endDate: "1713708000000",
                state: "complete",
                status: "Gujarat Titans won by 3 wkts",
                team1: {
                  teamId: 65,
                  teamName: "PUNJAB KINGS",
                  teamSName: "PBKS",
                  imageId: 225648,
                },
                team2: {
                  teamId: 971,
                  teamName: "GUJARAT TITANS",
                  teamSName: "GT",
                  imageId: 235085,
                },
                venueInfo: {
                  ground:
                    "Maharaja Yadavindra Singh International Cricket Stadium, Mullanpur",
                  city: "New Chandigarh",
                  timezone: "+05:30",
                },
                currBatTeamId: 971,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 142,
                    wickets: 10,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 146,
                    wickets: 7,
                    overs: 19.1,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Mon, 22 Apr 2024",
          match: [
            {
              matchInfo: {
                matchId: 91497,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "38th Match",
                matchFormat: "T20",
                startDate: "1713794400000",
                endDate: "1713794400000",
                state: "complete",
                status: "Rajasthan Royals won by 9 wkts",
                team1: {
                  teamId: 64,
                  teamName: "RAJASTHAN ROYALS",
                  teamSName: "RR",
                  imageId: 225647,
                },
                team2: {
                  teamId: 62,
                  teamName: "MUMBAI INDIANS",
                  teamSName: "MI",
                  imageId: 225645,
                },
                venueInfo: {
                  ground: "Sawai Mansingh Stadium",
                  city: "Jaipur",
                  timezone: "+05:30",
                },
                currBatTeamId: 64,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 183,
                    wickets: 1,
                    overs: 18.4,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 179,
                    wickets: 9,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Tue, 23 Apr 2024",
          match: [
            {
              matchInfo: {
                matchId: 91506,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "39th Match",
                matchFormat: "T20",
                startDate: "1713880800000",
                endDate: "1713880800000",
                state: "complete",
                status: "Lucknow Super Giants won by 6 wkts",
                team1: {
                  teamId: 58,
                  teamName: "CHENNAI SUPER KINGS",
                  teamSName: "CSK",
                  imageId: 225641,
                },
                team2: {
                  teamId: 966,
                  teamName: "LUCKNOW SUPER GIANTS",
                  teamSName: "LSG",
                  imageId: 389444,
                },
                venueInfo: {
                  ground: "MA Chidambaram Stadium",
                  city: "Chennai",
                  timezone: "+05:30",
                },
                currBatTeamId: 966,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 210,
                    wickets: 4,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 213,
                    wickets: 4,
                    overs: 19.3,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Wed, 24 Apr 2024",
          match: [
            {
              matchInfo: {
                matchId: 91515,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "40th Match",
                matchFormat: "T20",
                startDate: "1713967200000",
                endDate: "1713967200000",
                state: "complete",
                status: "Delhi Capitals won by 4 runs",
                team1: {
                  teamId: 61,
                  teamName: "DELHI CAPITALS",
                  teamSName: "DC",
                  imageId: 225644,
                },
                team2: {
                  teamId: 971,
                  teamName: "GUJARAT TITANS",
                  teamSName: "GT",
                  imageId: 235085,
                },
                venueInfo: {
                  ground: "Arun Jaitley Stadium",
                  city: "Delhi",
                  timezone: "+05:30",
                },
                currBatTeamId: 61,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 224,
                    wickets: 4,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 220,
                    wickets: 8,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Thu, 25 Apr 2024",
          match: [
            {
              matchInfo: {
                matchId: 91524,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "41st Match",
                matchFormat: "T20",
                startDate: "1714053600000",
                endDate: "1714053600000",
                state: "complete",
                status: "Royal Challengers Bengaluru won by 35 runs",
                team1: {
                  teamId: 255,
                  teamName: "SUNRISERS HYDERABAD",
                  teamSName: "SRH",
                  imageId: 225649,
                },
                team2: {
                  teamId: 59,
                  teamName: "ROYAL CHALLENGERS BENGALURU",
                  teamSName: "RCB",
                  imageId: 225643,
                },
                venueInfo: {
                  ground: "Rajiv Gandhi International Stadium",
                  city: "Hyderabad",
                  timezone: "+05:30",
                },
                currBatTeamId: 59,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 171,
                    wickets: 8,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 206,
                    wickets: 7,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Fri, 26 Apr 2024",
          match: [
            {
              matchInfo: {
                matchId: 91528,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "42nd Match",
                matchFormat: "T20",
                startDate: "1714140000000",
                endDate: "1714140000000",
                state: "complete",
                status: "Punjab Kings won by 8 wkts",
                team1: {
                  teamId: 63,
                  teamName: "KOLKATA KNIGHT RIDERS",
                  teamSName: "KKR",
                  imageId: 225646,
                },
                team2: {
                  teamId: 65,
                  teamName: "PUNJAB KINGS",
                  teamSName: "PBKS",
                  imageId: 225648,
                },
                venueInfo: {
                  ground: "Eden Gardens",
                  city: "Kolkata",
                  timezone: "+05:30",
                },
                currBatTeamId: 65,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 261,
                    wickets: 6,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 262,
                    wickets: 2,
                    overs: 18.4,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Sat, 27 Apr 2024",
          match: [
            {
              matchInfo: {
                matchId: 91533,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "43rd Match",
                matchFormat: "T20",
                startDate: "1714212000000",
                endDate: "1714212000000",
                state: "complete",
                status: "Delhi Capitals won by 10 runs",
                team1: {
                  teamId: 61,
                  teamName: "DELHI CAPITALS",
                  teamSName: "DC",
                  imageId: 225644,
                },
                team2: {
                  teamId: 62,
                  teamName: "MUMBAI INDIANS",
                  teamSName: "MI",
                  imageId: 225645,
                },
                venueInfo: {
                  ground: "Arun Jaitley Stadium",
                  city: "Delhi",
                  timezone: "+05:30",
                },
                currBatTeamId: 61,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 257,
                    wickets: 4,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 247,
                    wickets: 9,
                    overs: 20,
                  },
                },
              },
            },
            {
              matchInfo: {
                matchId: 91542,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "44th Match",
                matchFormat: "T20",
                startDate: "1714226400000",
                endDate: "1714226400000",
                state: "complete",
                status: "Rajasthan Royals won by 7 wkts",
                team1: {
                  teamId: 966,
                  teamName: "LUCKNOW SUPER GIANTS",
                  teamSName: "LSG",
                  imageId: 389444,
                },
                team2: {
                  teamId: 64,
                  teamName: "RAJASTHAN ROYALS",
                  teamSName: "RR",
                  imageId: 225647,
                },
                venueInfo: {
                  ground:
                    "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium",
                  city: "Lucknow",
                  timezone: "+05:30",
                },
                currBatTeamId: 64,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 196,
                    wickets: 5,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 199,
                    wickets: 3,
                    overs: 19,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Sun, 28 Apr 2024",
          match: [
            {
              matchInfo: {
                matchId: 91551,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "45th Match",
                matchFormat: "T20",
                startDate: "1714298400000",
                endDate: "1714298400000",
                state: "complete",
                status: "Royal Challengers Bengaluru won by 9 wkts",
                team1: {
                  teamId: 971,
                  teamName: "GUJARAT TITANS",
                  teamSName: "GT",
                  imageId: 235085,
                },
                team2: {
                  teamId: 59,
                  teamName: "ROYAL CHALLENGERS BENGALURU",
                  teamSName: "RCB",
                  imageId: 225643,
                },
                venueInfo: {
                  ground: "Narendra Modi Stadium",
                  city: "Ahmedabad",
                  timezone: "+05:30",
                },
                currBatTeamId: 59,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 200,
                    wickets: 3,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 206,
                    wickets: 1,
                    overs: 16,
                  },
                },
              },
            },
            {
              matchInfo: {
                matchId: 91555,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "46th Match",
                matchFormat: "T20",
                startDate: "1714312800000",
                endDate: "1714312800000",
                state: "complete",
                status: "Chennai Super Kings won by 78 runs",
                team1: {
                  teamId: 58,
                  teamName: "CHENNAI SUPER KINGS",
                  teamSName: "CSK",
                  imageId: 225641,
                },
                team2: {
                  teamId: 255,
                  teamName: "SUNRISERS HYDERABAD",
                  teamSName: "SRH",
                  imageId: 225649,
                },
                venueInfo: {
                  ground: "MA Chidambaram Stadium",
                  city: "Chennai",
                  timezone: "+05:30",
                },
                currBatTeamId: 58,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 212,
                    wickets: 3,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 134,
                    wickets: 10,
                    overs: 18.5,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Mon, 29 Apr 2024",
          match: [
            {
              matchInfo: {
                matchId: 91564,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "47th Match",
                matchFormat: "T20",
                startDate: "1714399200000",
                endDate: "1714399200000",
                state: "complete",
                status: "Kolkata Knight Riders won by 7 wkts",
                team1: {
                  teamId: 63,
                  teamName: "KOLKATA KNIGHT RIDERS",
                  teamSName: "KKR",
                  imageId: 225646,
                },
                team2: {
                  teamId: 61,
                  teamName: "DELHI CAPITALS",
                  teamSName: "DC",
                  imageId: 225644,
                },
                venueInfo: {
                  ground: "Eden Gardens",
                  city: "Kolkata",
                  timezone: "+05:30",
                },
                currBatTeamId: 63,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 157,
                    wickets: 3,
                    overs: 16.3,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 153,
                    wickets: 9,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Tue, 30 Apr 2024",
          match: [
            {
              matchInfo: {
                matchId: 91569,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "48th Match",
                matchFormat: "T20",
                startDate: "1714485600000",
                endDate: "1714485600000",
                state: "complete",
                status: "Lucknow Super Giants won by 4 wkts",
                team1: {
                  teamId: 966,
                  teamName: "LUCKNOW SUPER GIANTS",
                  teamSName: "LSG",
                  imageId: 389444,
                },
                team2: {
                  teamId: 62,
                  teamName: "MUMBAI INDIANS",
                  teamSName: "MI",
                  imageId: 225645,
                },
                venueInfo: {
                  ground:
                    "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium",
                  city: "Lucknow",
                  timezone: "+05:30",
                },
                currBatTeamId: 966,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 145,
                    wickets: 6,
                    overs: 19.2,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 144,
                    wickets: 7,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Wed, 01 May 2024",
          match: [
            {
              matchInfo: {
                matchId: 91578,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "49th Match",
                matchFormat: "T20",
                startDate: "1714572000000",
                endDate: "1714572000000",
                state: "complete",
                status: "Punjab Kings won by 7 wkts",
                team1: {
                  teamId: 58,
                  teamName: "CHENNAI SUPER KINGS",
                  teamSName: "CSK",
                  imageId: 225641,
                },
                team2: {
                  teamId: 65,
                  teamName: "PUNJAB KINGS",
                  teamSName: "PBKS",
                  imageId: 225648,
                },
                venueInfo: {
                  ground: "MA Chidambaram Stadium",
                  city: "Chennai",
                  timezone: "+05:30",
                },
                currBatTeamId: 65,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 162,
                    wickets: 7,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 163,
                    wickets: 3,
                    overs: 17.5,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Thu, 02 May 2024",
          match: [
            {
              matchInfo: {
                matchId: 91587,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "50th Match",
                matchFormat: "T20",
                startDate: "1714658400000",
                endDate: "1714658400000",
                state: "complete",
                status: "Sunrisers Hyderabad won by 1 run",
                team1: {
                  teamId: 255,
                  teamName: "SUNRISERS HYDERABAD",
                  teamSName: "SRH",
                  imageId: 225649,
                },
                team2: {
                  teamId: 64,
                  teamName: "RAJASTHAN ROYALS",
                  teamSName: "RR",
                  imageId: 225647,
                },
                venueInfo: {
                  ground: "Rajiv Gandhi International Stadium",
                  city: "Hyderabad",
                  timezone: "+05:30",
                },
                currBatTeamId: 255,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 201,
                    wickets: 3,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 200,
                    wickets: 7,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Fri, 03 May 2024",
          match: [
            {
              matchInfo: {
                matchId: 91596,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "51st Match",
                matchFormat: "T20",
                startDate: "1714744800000",
                endDate: "1714744800000",
                state: "complete",
                status: "Kolkata Knight Riders won by 24 runs",
                team1: {
                  teamId: 62,
                  teamName: "MUMBAI INDIANS",
                  teamSName: "MI",
                  imageId: 225645,
                },
                team2: {
                  teamId: 63,
                  teamName: "KOLKATA KNIGHT RIDERS",
                  teamSName: "KKR",
                  imageId: 225646,
                },
                venueInfo: {
                  ground: "Wankhede Stadium",
                  city: "Mumbai",
                  timezone: "+05:30",
                },
                currBatTeamId: 63,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 145,
                    wickets: 10,
                    overs: 18.5,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 169,
                    wickets: 10,
                    overs: 19.5,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Sat, 04 May 2024",
          match: [
            {
              matchInfo: {
                matchId: 91600,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "52nd Match",
                matchFormat: "T20",
                startDate: "1714831200000",
                endDate: "1714831200000",
                state: "complete",
                status: "Royal Challengers Bengaluru won by 4 wkts",
                team1: {
                  teamId: 59,
                  teamName: "ROYAL CHALLENGERS BENGALURU",
                  teamSName: "RCB",
                  imageId: 225643,
                },
                team2: {
                  teamId: 971,
                  teamName: "GUJARAT TITANS",
                  teamSName: "GT",
                  imageId: 235085,
                },
                venueInfo: {
                  ground: "M.Chinnaswamy Stadium",
                  city: "Bengaluru",
                  timezone: "+05:30",
                },
                currBatTeamId: 59,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 152,
                    wickets: 6,
                    overs: 13.4,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 147,
                    wickets: 10,
                    overs: 19.3,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Sun, 05 May 2024",
          match: [
            {
              matchInfo: {
                matchId: 91609,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "53rd Match",
                matchFormat: "T20",
                startDate: "1714903200000",
                endDate: "1714903200000",
                state: "complete",
                status: "Chennai Super Kings won by 28 runs",
                team1: {
                  teamId: 65,
                  teamName: "PUNJAB KINGS",
                  teamSName: "PBKS",
                  imageId: 225648,
                },
                team2: {
                  teamId: 58,
                  teamName: "CHENNAI SUPER KINGS",
                  teamSName: "CSK",
                  imageId: 225641,
                },
                venueInfo: {
                  ground: "Himachal Pradesh Cricket Association Stadium",
                  city: "Dharamsala",
                  timezone: "+05:30",
                },
                currBatTeamId: 58,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 139,
                    wickets: 9,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 167,
                    wickets: 9,
                    overs: 20,
                  },
                },
              },
            },
            {
              matchInfo: {
                matchId: 91618,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "54th Match",
                matchFormat: "T20",
                startDate: "1714917600000",
                endDate: "1714917600000",
                state: "complete",
                status: "Kolkata Knight Riders won by 98 runs",
                team1: {
                  teamId: 966,
                  teamName: "LUCKNOW SUPER GIANTS",
                  teamSName: "LSG",
                  imageId: 389444,
                },
                team2: {
                  teamId: 63,
                  teamName: "KOLKATA KNIGHT RIDERS",
                  teamSName: "KKR",
                  imageId: 225646,
                },
                venueInfo: {
                  ground:
                    "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium",
                  city: "Lucknow",
                  timezone: "+05:30",
                },
                currBatTeamId: 63,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 137,
                    wickets: 10,
                    overs: 16.1,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 235,
                    wickets: 6,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Mon, 06 May 2024",
          match: [
            {
              matchInfo: {
                matchId: 91623,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "55th Match",
                matchFormat: "T20",
                startDate: "1715004000000",
                endDate: "1715004000000",
                state: "complete",
                status: "Mumbai Indians won by 7 wkts",
                team1: {
                  teamId: 62,
                  teamName: "MUMBAI INDIANS",
                  teamSName: "MI",
                  imageId: 225645,
                },
                team2: {
                  teamId: 255,
                  teamName: "SUNRISERS HYDERABAD",
                  teamSName: "SRH",
                  imageId: 225649,
                },
                venueInfo: {
                  ground: "Wankhede Stadium",
                  city: "Mumbai",
                  timezone: "+05:30",
                },
                currBatTeamId: 62,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 174,
                    wickets: 3,
                    overs: 17.2,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 173,
                    wickets: 8,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Tue, 07 May 2024",
          match: [
            {
              matchInfo: {
                matchId: 91632,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "56th Match",
                matchFormat: "T20",
                startDate: "1715090400000",
                endDate: "1715090400000",
                state: "complete",
                status: "Delhi Capitals won by 20 runs",
                team1: {
                  teamId: 61,
                  teamName: "DELHI CAPITALS",
                  teamSName: "DC",
                  imageId: 225644,
                },
                team2: {
                  teamId: 64,
                  teamName: "RAJASTHAN ROYALS",
                  teamSName: "RR",
                  imageId: 225647,
                },
                venueInfo: {
                  ground: "Arun Jaitley Stadium",
                  city: "Delhi",
                  timezone: "+05:30",
                },
                currBatTeamId: 61,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 221,
                    wickets: 8,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 201,
                    wickets: 8,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Wed, 08 May 2024",
          match: [
            {
              matchInfo: {
                matchId: 91641,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "57th Match",
                matchFormat: "T20",
                startDate: "1715176800000",
                endDate: "1715176800000",
                state: "complete",
                status: "Sunrisers Hyderabad won by 10 wkts",
                team1: {
                  teamId: 255,
                  teamName: "SUNRISERS HYDERABAD",
                  teamSName: "SRH",
                  imageId: 225649,
                },
                team2: {
                  teamId: 966,
                  teamName: "LUCKNOW SUPER GIANTS",
                  teamSName: "LSG",
                  imageId: 389444,
                },
                venueInfo: {
                  ground: "Rajiv Gandhi International Stadium",
                  city: "Hyderabad",
                  timezone: "+05:30",
                },
                currBatTeamId: 255,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 167,
                    overs: 9.4,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 165,
                    wickets: 4,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Thu, 09 May 2024",
          match: [
            {
              matchInfo: {
                matchId: 91645,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "58th Match",
                matchFormat: "T20",
                startDate: "1715263200000",
                endDate: "1715263200000",
                state: "complete",
                status: "Royal Challengers Bengaluru won by 60 runs",
                team1: {
                  teamId: 65,
                  teamName: "PUNJAB KINGS",
                  teamSName: "PBKS",
                  imageId: 225648,
                },
                team2: {
                  teamId: 59,
                  teamName: "ROYAL CHALLENGERS BENGALURU",
                  teamSName: "RCB",
                  imageId: 225643,
                },
                venueInfo: {
                  ground: "Himachal Pradesh Cricket Association Stadium",
                  city: "Dharamsala",
                  timezone: "+05:30",
                },
                currBatTeamId: 59,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 181,
                    wickets: 10,
                    overs: 17,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 241,
                    wickets: 7,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Fri, 10 May 2024",
          match: [
            {
              matchInfo: {
                matchId: 91650,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "59th Match",
                matchFormat: "T20",
                startDate: "1715349600000",
                endDate: "1715349600000",
                state: "complete",
                status: "Gujarat Titans won by 35 runs",
                team1: {
                  teamId: 971,
                  teamName: "GUJARAT TITANS",
                  teamSName: "GT",
                  imageId: 235085,
                },
                team2: {
                  teamId: 58,
                  teamName: "CHENNAI SUPER KINGS",
                  teamSName: "CSK",
                  imageId: 225641,
                },
                venueInfo: {
                  ground: "Narendra Modi Stadium",
                  city: "Ahmedabad",
                  timezone: "+05:30",
                },
                currBatTeamId: 971,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 231,
                    wickets: 3,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 196,
                    wickets: 8,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Sat, 11 May 2024",
          match: [
            {
              matchInfo: {
                matchId: 91654,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "60th Match",
                matchFormat: "T20",
                startDate: "1715436000000",
                endDate: "1715436000000",
                state: "complete",
                status:
                  "Kolkata Knight Riders won by 18 runs - 16 overs game - due to rain",
                team1: {
                  teamId: 63,
                  teamName: "KOLKATA KNIGHT RIDERS",
                  teamSName: "KKR",
                  imageId: 225646,
                },
                team2: {
                  teamId: 62,
                  teamName: "MUMBAI INDIANS",
                  teamSName: "MI",
                  imageId: 225645,
                },
                venueInfo: {
                  ground: "Eden Gardens",
                  city: "Kolkata",
                  timezone: "+05:30",
                },
                currBatTeamId: 63,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 157,
                    wickets: 7,
                    overs: 16,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 139,
                    wickets: 8,
                    overs: 16,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Sun, 12 May 2024",
          match: [
            {
              matchInfo: {
                matchId: 91663,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "61st Match",
                matchFormat: "T20",
                startDate: "1715508000000",
                endDate: "1715508000000",
                state: "complete",
                status: "Chennai Super Kings won by 5 wkts",
                team1: {
                  teamId: 58,
                  teamName: "CHENNAI SUPER KINGS",
                  teamSName: "CSK",
                  imageId: 225641,
                },
                team2: {
                  teamId: 64,
                  teamName: "RAJASTHAN ROYALS",
                  teamSName: "RR",
                  imageId: 225647,
                },
                venueInfo: {
                  ground: "MA Chidambaram Stadium",
                  city: "Chennai",
                  timezone: "+05:30",
                },
                currBatTeamId: 58,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 145,
                    wickets: 5,
                    overs: 18.2,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 141,
                    wickets: 5,
                    overs: 20,
                  },
                },
              },
            },
            {
              matchInfo: {
                matchId: 91668,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "62nd Match",
                matchFormat: "T20",
                startDate: "1715522400000",
                endDate: "1715522400000",
                state: "complete",
                status: "Royal Challengers Bengaluru won by 47 runs",
                team1: {
                  teamId: 59,
                  teamName: "ROYAL CHALLENGERS BENGALURU",
                  teamSName: "RCB",
                  imageId: 225643,
                },
                team2: {
                  teamId: 61,
                  teamName: "DELHI CAPITALS",
                  teamSName: "DC",
                  imageId: 225644,
                },
                venueInfo: {
                  ground: "M.Chinnaswamy Stadium",
                  city: "Bengaluru",
                  timezone: "+05:30",
                },
                currBatTeamId: 59,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 187,
                    wickets: 9,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 140,
                    wickets: 10,
                    overs: 19.1,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Mon, 13 May 2024",
          match: [
            {
              matchInfo: {
                matchId: 91677,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "63rd Match",
                matchFormat: "T20",
                startDate: "1715608800000",
                endDate: "1715608800000",
                state: "complete",
                status: "Match abandoned without toss",
                team1: {
                  teamId: 971,
                  teamName: "GUJARAT TITANS",
                  teamSName: "GT",
                  imageId: 235085,
                },
                team2: {
                  teamId: 63,
                  teamName: "KOLKATA KNIGHT RIDERS",
                  teamSName: "KKR",
                  imageId: 225646,
                },
                venueInfo: {
                  ground: "Narendra Modi Stadium",
                  city: "Ahmedabad",
                  timezone: "+05:30",
                },
                isTimeAnnounced: true,
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Tue, 14 May 2024",
          match: [
            {
              matchInfo: {
                matchId: 91681,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "64th Match",
                matchFormat: "T20",
                startDate: "1715695200000",
                endDate: "1715695200000",
                state: "complete",
                status: "Delhi Capitals won by 19 runs",
                team1: {
                  teamId: 61,
                  teamName: "DELHI CAPITALS",
                  teamSName: "DC",
                  imageId: 225644,
                },
                team2: {
                  teamId: 966,
                  teamName: "LUCKNOW SUPER GIANTS",
                  teamSName: "LSG",
                  imageId: 389444,
                },
                venueInfo: {
                  ground: "Arun Jaitley Stadium",
                  city: "Delhi",
                  timezone: "+05:30",
                },
                currBatTeamId: 61,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 208,
                    wickets: 4,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 189,
                    wickets: 9,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Wed, 15 May 2024",
          match: [
            {
              matchInfo: {
                matchId: 91686,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "65th Match",
                matchFormat: "T20",
                startDate: "1715781600000",
                endDate: "1715781600000",
                state: "complete",
                status: "Punjab Kings won by 5 wkts",
                team1: {
                  teamId: 64,
                  teamName: "RAJASTHAN ROYALS",
                  teamSName: "RR",
                  imageId: 225647,
                },
                team2: {
                  teamId: 65,
                  teamName: "PUNJAB KINGS",
                  teamSName: "PBKS",
                  imageId: 225648,
                },
                venueInfo: {
                  ground: "Barsapara Cricket Stadium",
                  city: "Guwahati",
                  timezone: "+05:30",
                },
                currBatTeamId: 65,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 144,
                    wickets: 9,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 145,
                    wickets: 5,
                    overs: 18.5,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Thu, 16 May 2024",
          match: [
            {
              matchInfo: {
                matchId: 91690,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "66th Match",
                matchFormat: "T20",
                startDate: "1715868000000",
                endDate: "1715868000000",
                state: "complete",
                status: "Match abandoned without toss",
                team1: {
                  teamId: 255,
                  teamName: "SUNRISERS HYDERABAD",
                  teamSName: "SRH",
                  imageId: 225649,
                },
                team2: {
                  teamId: 971,
                  teamName: "GUJARAT TITANS",
                  teamSName: "GT",
                  imageId: 235085,
                },
                venueInfo: {
                  ground: "Rajiv Gandhi International Stadium",
                  city: "Hyderabad",
                  timezone: "+05:30",
                },
                isTimeAnnounced: true,
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Fri, 17 May 2024",
          match: [
            {
              matchInfo: {
                matchId: 91699,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "67th Match",
                matchFormat: "T20",
                startDate: "1715954400000",
                endDate: "1715954400000",
                state: "complete",
                status: "Lucknow Super Giants won by 18 runs",
                team1: {
                  teamId: 62,
                  teamName: "MUMBAI INDIANS",
                  teamSName: "MI",
                  imageId: 225645,
                },
                team2: {
                  teamId: 966,
                  teamName: "LUCKNOW SUPER GIANTS",
                  teamSName: "LSG",
                  imageId: 389444,
                },
                venueInfo: {
                  ground: "Wankhede Stadium",
                  city: "Mumbai",
                  timezone: "+05:30",
                },
                currBatTeamId: 966,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 196,
                    wickets: 6,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 214,
                    wickets: 6,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Sat, 18 May 2024",
          match: [
            {
              matchInfo: {
                matchId: 91704,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "68th Match",
                matchFormat: "T20",
                startDate: "1716040800000",
                endDate: "1716040800000",
                state: "complete",
                status: "Royal Challengers Bengaluru won by 27 runs",
                team1: {
                  teamId: 59,
                  teamName: "ROYAL CHALLENGERS BENGALURU",
                  teamSName: "RCB",
                  imageId: 225643,
                },
                team2: {
                  teamId: 58,
                  teamName: "CHENNAI SUPER KINGS",
                  teamSName: "CSK",
                  imageId: 225641,
                },
                venueInfo: {
                  ground: "M.Chinnaswamy Stadium",
                  city: "Bengaluru",
                  timezone: "+05:30",
                },
                currBatTeamId: 59,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 218,
                    wickets: 5,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 191,
                    wickets: 7,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Sun, 19 May 2024",
          match: [
            {
              matchInfo: {
                matchId: 91713,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "69th Match",
                matchFormat: "T20",
                startDate: "1716112800000",
                endDate: "1716112800000",
                state: "complete",
                status: "Sunrisers Hyderabad won by 4 wkts",
                team1: {
                  teamId: 255,
                  teamName: "SUNRISERS HYDERABAD",
                  teamSName: "SRH",
                  imageId: 225649,
                },
                team2: {
                  teamId: 65,
                  teamName: "PUNJAB KINGS",
                  teamSName: "PBKS",
                  imageId: 225648,
                },
                venueInfo: {
                  ground: "Rajiv Gandhi International Stadium",
                  city: "Hyderabad",
                  timezone: "+05:30",
                },
                currBatTeamId: 255,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 215,
                    wickets: 6,
                    overs: 19.1,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 214,
                    wickets: 5,
                    overs: 20,
                  },
                },
              },
            },
            {
              matchInfo: {
                matchId: 91717,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "70th Match",
                matchFormat: "T20",
                startDate: "1716127200000",
                endDate: "1716127200000",
                state: "complete",
                status: "Match abandoned due to rain (with toss)",
                team1: {
                  teamId: 64,
                  teamName: "RAJASTHAN ROYALS",
                  teamSName: "RR",
                  imageId: 225647,
                },
                team2: {
                  teamId: 63,
                  teamName: "KOLKATA KNIGHT RIDERS",
                  teamSName: "KKR",
                  imageId: 225646,
                },
                venueInfo: {
                  ground: "Barsapara Cricket Stadium",
                  city: "Guwahati",
                  timezone: "+05:30",
                },
                isTimeAnnounced: true,
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Tue, 21 May 2024",
          match: [
            {
              matchInfo: {
                matchId: 91722,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "Qualifier 1",
                matchFormat: "T20",
                startDate: "1716300000000",
                endDate: "1716300000000",
                state: "complete",
                status: "Kolkata Knight Riders won by 8 wkts",
                team1: {
                  teamId: 63,
                  teamName: "KOLKATA KNIGHT RIDERS",
                  teamSName: "KKR",
                  imageId: 225646,
                },
                team2: {
                  teamId: 255,
                  teamName: "SUNRISERS HYDERABAD",
                  teamSName: "SRH",
                  imageId: 225649,
                },
                venueInfo: {
                  ground: "Narendra Modi Stadium",
                  city: "Ahmedabad",
                  timezone: "+05:30",
                },
                currBatTeamId: 63,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 164,
                    wickets: 2,
                    overs: 13.4,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 159,
                    wickets: 10,
                    overs: 19.3,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Wed, 22 May 2024",
          match: [
            {
              matchInfo: {
                matchId: 91731,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "Eliminator",
                matchFormat: "T20",
                startDate: "1716386400000",
                endDate: "1716386400000",
                state: "complete",
                status: "Rajasthan Royals won by 4 wkts",
                team1: {
                  teamId: 64,
                  teamName: "RAJASTHAN ROYALS",
                  teamSName: "RR",
                  imageId: 225647,
                },
                team2: {
                  teamId: 59,
                  teamName: "ROYAL CHALLENGERS BENGALURU",
                  teamSName: "RCB",
                  imageId: 225643,
                },
                venueInfo: {
                  ground: "Narendra Modi Stadium",
                  city: "Ahmedabad",
                  timezone: "+05:30",
                },
                currBatTeamId: 64,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 174,
                    wickets: 6,
                    overs: 19,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 172,
                    wickets: 8,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Fri, 24 May 2024",
          match: [
            {
              matchInfo: {
                matchId: 91735,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "Qualifier 2",
                matchFormat: "T20",
                startDate: "1716559200000",
                endDate: "1716559200000",
                state: "complete",
                status: "Sunrisers Hyderabad won by 36 runs",
                team1: {
                  teamId: 255,
                  teamName: "SUNRISERS HYDERABAD",
                  teamSName: "SRH",
                  imageId: 225649,
                },
                team2: {
                  teamId: 64,
                  teamName: "RAJASTHAN ROYALS",
                  teamSName: "RR",
                  imageId: 225647,
                },
                venueInfo: {
                  ground: "MA Chidambaram Stadium",
                  city: "Chennai",
                  timezone: "+05:30",
                },
                currBatTeamId: 255,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 175,
                    wickets: 9,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 139,
                    wickets: 7,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
      {
        matchDetailsMap: {
          key: "Sun, 26 May 2024",
          match: [
            {
              matchInfo: {
                matchId: 91740,
                seriesId: 7607,
                seriesName: "Indian Premier League 2024",
                matchDesc: "Final",
                matchFormat: "T20",
                startDate: "1716732000000",
                endDate: "1716732000000",
                state: "complete",
                status: "Kolkata Knight Riders won by 8 wkts",
                team1: {
                  teamId: 63,
                  teamName: "KOLKATA KNIGHT RIDERS",
                  teamSName: "KKR",
                  imageId: 225646,
                },
                team2: {
                  teamId: 255,
                  teamName: "SUNRISERS HYDERABAD",
                  teamSName: "SRH",
                  imageId: 225649,
                },
                venueInfo: {
                  ground: "MA Chidambaram Stadium",
                  city: "Chennai",
                  timezone: "+05:30",
                },
                currBatTeamId: 63,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 114,
                    wickets: 2,
                    overs: 10.3,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 113,
                    wickets: 10,
                    overs: 18.3,
                  },
                },
              },
            },
          ],
          seriesId: 7607,
        },
      },
    ],
    appIndex: {
      seoTitle:
        "Indian Premier League 2024 live scores, schedule and results - Cricbuzz | Cricbuzz.com",
      webURL: "www.cricbuzz.com/cricket-series/",
    },
  };

  let filterData = data.matchDetails.filter(
    (singleMatch) => singleMatch["matchDetailsMap"]
  );
   

  return (
    <>
      {/* Background with animated gradient */}
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Main content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-yellow-500 bg-clip-text text-transparent mb-4 animate-gradient">
              IPL 2024 Dashboard
                </h1>
            <p className="text-gray-300 text-lg sm:text-xl font-light mb-6">
              Live Scores • Match Results • Team Performance
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Matches Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {matchesData.map((data, dataIdx) =>
              data.matchDetailsMap.match.map((singlematch, idx) => {
                const matchId = singlematch.matchInfo.matchId;
                const team1 = singlematch.matchInfo.team1;
                const team2 = singlematch.matchInfo.team2;
                const status = singlematch.matchInfo.status;
                const date = data.matchDetailsMap.key;
                const venue = singlematch.matchInfo.venueInfo;
                
                // Determine match status color
                const getStatusColor = (status) => {
                  if (status.includes('won')) return 'text-green-400';
                  if (status.includes('abandoned')) return 'text-yellow-400';
                  if (status.includes('tie')) return 'text-blue-400';
                  return 'text-gray-300';
                };

                // Get team colors based on team name
                const getTeamColors = (teamName) => {
                  const colors = {
                    'CSK': 'from-yellow-500 to-yellow-600',
                    'RCB': 'from-red-500 to-red-600',
                    'MI': 'from-blue-500 to-blue-600',
                    'KKR': 'from-purple-500 to-purple-600',
                    'DC': 'from-blue-400 to-blue-500',
                    'PBKS': 'from-red-400 to-red-500',
                    'RR': 'from-pink-500 to-pink-600',
                    'SRH': 'from-orange-500 to-orange-600',
                    'GT': 'from-gray-500 to-gray-600',
                    'LSG': 'from-green-500 to-green-600'
                  };
                  return colors[teamName] || 'from-gray-500 to-gray-600';
                };

                return (
                  <div
                    key={`${dataIdx}-${idx}`}
                    className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 animate-slide-up"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    {/* Card glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Match header */}
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-gray-400 font-medium">{date}</span>
                        <div className="px-3 py-1 bg-gray-700/50 rounded-full">
                          <span className="text-xs text-gray-300">{singlematch.matchInfo.matchDesc}</span>
                        </div>
                      </div>

                      {/* Teams */}
                      <div className="text-center mb-6">
                        <div className="flex items-center justify-center space-x-6 mb-2">
                          <div className="text-center group/team">
                            <div className={`w-14 h-14 bg-gradient-to-br ${getTeamColors(team1.teamSName)} rounded-full flex items-center justify-center mb-2 mx-auto shadow-lg group-hover/team:scale-110 transition-transform duration-300 animate-float`}>
                              <span className="text-white font-bold text-xs">{team1.teamSName}</span>
                            </div>
                            <p className="text-sm font-semibold text-gray-200 group-hover/team:text-white transition-colors duration-300">{team1.teamSName}</p>
                          </div>
                          
                          <div className="text-gray-400 font-bold text-lg animate-pulse">VS</div>
                          
                          <div className="text-center group/team">
                            <div className={`w-14 h-14 bg-gradient-to-br ${getTeamColors(team2.teamSName)} rounded-full flex items-center justify-center mb-2 mx-auto shadow-lg group-hover/team:scale-110 transition-transform duration-300 animate-float`} style={{ animationDelay: '0.5s' }}>
                              <span className="text-white font-bold text-xs">{team2.teamSName}</span>
                            </div>
                            <p className="text-sm font-semibold text-gray-200 group-hover/team:text-white transition-colors duration-300">{team2.teamSName}</p>
                          </div>
                        </div>
                      </div>

                      {/* Venue */}
                      <div className="mb-4 text-center">
                        <p className="text-sm text-gray-400">
                          <i className="fas fa-map-marker-alt mr-2"></i>
                          {venue.ground}, {venue.city}
                        </p>
                      </div>

                      {/* Status */}
                      <div className="text-center mb-6">
                        <p className={`text-sm font-medium ${getStatusColor(status)}`}>
                          {status}
                        </p>
                      </div>

                      {/* Action button */}
                      <Link to={`/MatchDetails/${matchId}`}>
                        <div className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 flex items-center justify-center space-x-2 group/btn relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                          <span className="relative z-10">View Details</span>
                          <i className="fas fa-arrow-right group-hover/btn:translate-x-1 transition-transform duration-300 relative z-10"></i>
                        </div>
              </Link>
            </div>

                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-orange-500 rounded-full animate-ping"></div>
                    <div className="absolute bottom-4 left-4 w-1 h-1 bg-red-500 rounded-full animate-pulse"></div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer */}
          <div className="text-center mt-16 animate-fade-in">
            <p className="text-gray-400 text-sm">
              Powered by React • Built with Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
