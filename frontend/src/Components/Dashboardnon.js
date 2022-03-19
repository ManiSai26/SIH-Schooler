import React from "react";
import { Line, Doughnut, Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import "../StyleSheets/DashboardData.css";
const Dashboardnon = () => {
  let testdata = [
    [86, 88, 67, 84, 26, 54],
    [64, 82, 74, 95, 82, 100],
    [58, 94, 75, 45, 83, 78],
  ];

  let i = 0,
    j = 0;
  let linelabel = [];
  var linedata = [];
  for (i = 0; i < testdata.length; i++) {
    linelabel[i] = "Test" + (i + 1);
  }
  for (i = 0; i < testdata.length; i++) {
    let sum = 0;
    for (j = 0; j < 5; j++) {
      sum += testdata[i][j];
    }
    linedata[i] = sum / 5;
  }
  linedata[i] = 0;
  linedata[i + 1] = 100;
  const data = {
    labels: linelabel,
    datasets: [
      {
        label: "score",
        data: linedata,
        fill: false,
        borderColor: "#0058FF",
        tension: 0.5,
      },
    ],
  };
  let sum = 0;
  for (i = 0; i < linedata.length; i++) {
    sum += linedata[i];
  }
  sum -= 100;
  sum /= linedata.length - 2;
  sum = sum.toFixed(2);
  const calculatedoughnutdata = (index) => {
    let avg = 0;
    for (let i = 0; i < 5; i++) {
      avg += testdata[index][i];
    }
    avg /= 5;
    avg = avg.toFixed(2);
    return {
      labels: ["Correct", "Wrong"],
      datasets: [
        {
          data: [avg, 100 - avg],
          backgroundColor: ["#0058FF", "#F24B0F"],
          hoverOffset: 4,
        },
      ],
    };
  };
  const doughnutData = {
    labels: ["Correct", "Wrong"],
    datasets: [
      {
        data: [sum, 100 - sum],
        backgroundColor: ["#0058FF", "#F24B0F"],
        hoverOffset: 4,
      },
    ],
  };
  let barvalues = [0, 0, 0, 0, 0];
  for (i = 0; i < testdata.length; i++) {
    for (j = 0; j < 5; j++) {
      barvalues[j] += testdata[i][j];
    }
  }
  let maxData = 0,
    maxIndex = 0,
    minData = 100,
    minIndex = 0;
  for (j = 0; j < 5; j++) {
    barvalues[j] /= testdata.length;
    if (maxData < barvalues[j]) {
      maxData = barvalues[j];
      maxIndex = j;
    }
    if (minData > barvalues[j]) {
      minData = barvalues[j];
      minIndex = j;
    }
  }
  let sublabel = ["Drawing", "Debates", "Sports", "Eloctution", "Presentation"];
  console.log(sublabel[maxIndex] + "" + maxData);
  console.log(sublabel[minIndex] + "" + minData);
  barvalues[j] = 0;
  barvalues[j + 1] = 100;
  const barData = {
    labels: ["Drawing", "Debates", "Sports", "Eloctution", "Presentation"],
    datasets: [
      {
        barPercentage: 0.1,
        categoryPercentage: 1,
        label: "score",
        backgroundColor: "#57B8FF",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 0,
        data: barvalues,
      },
    ],
  };
  let testbarvalues=[...barvalues];
  let testsublabel=[...sublabel];
  for(i=0;i<testsublabel.length;i++)
  {
    for(j=i+1;j<testsublabel.length;j++)
    {
      if(testbarvalues[i]<testbarvalues[j])
      {
        let temp=testbarvalues[i];
        testbarvalues[i]=testbarvalues[j];
        testbarvalues[j]=temp;
        temp=testsublabel[i];
        testsublabel[i]=testsublabel[j];
        testsublabel[j]=temp;
      }
    }
  }
  let avg=0;
  for(i=0;i<testdata.length;i++)
  {
    let s=0;
    for(j=0;j<5;j++)
    {
      s+=testdata[i][j];
    }
    s/=5;
    avg+=s;
  }
  avg/=testdata.length;
  console.log(avg);
  return (
    <React.Fragment>
        <div className="Dbheader"><span><b>Non-Academic Activities</b></span></div>
      <div className="DBMainDiv" id="DBMainDivID">
        <div className="DBHeadDiv">
          <span>Dashboard</span>
        </div>
        <div className="DBOverallStatsDiv">
          <div className="DBGraphDiv">
            <Line
              className="DBGraph"
              data={data}
              options={{
                bezierCurve: true,
                scales: {
                  x: {
                    grid: {
                      display: true,
                      color: "#E6E9F4",
                    },
                  },
                  y: {
                    grid: {
                      display: false,
                    },
                    title: {
                      display: true,
                      text: "Score",
                    },
                  },
                },
                plugins: {
                  legend: {
                    display: false,
                  },
                },
              }}
            />
          </div>
          <div className="DBAverageDiv">
            <div className="DBAverageTopDiv">
              <div className="DBAverageTopHead">
                <span>Average Score</span>
              </div>
              <div className="DBAverageTopChart">
                {testdata.length === 0 ? (
                  <div className="DBNoTests">
                    You haven't taken any tests yet.
                  </div>
                ) : (
                  <React.Fragment>
                    <div className="DBDoughnutDiv">
                      <div className="DBAveragepercent">
                        <span>{sum + "%"}</span>
                      </div>
                      <Doughnut
                        className="DBDoughnut"
                        data={doughnutData}
                        options={{
                          cutout: 40,
                          plugins: {
                            legend: {
                              labels: {
                                boxWidth: 10,
                              },
                              display: false,
                              position: "right",
                            },
                          },
                        }}
                      />
                    </div>
                    <div className="DBDoughnutcolorMainDiv">
                      <div className="DbDoughnutcolordiv">
                        <div className="DbDoughnutcolorboxcorrect"></div>
                        <span>Points Scored {sum}%</span>
                      </div>
                      <div className="DbDoughnutcolordiv">
                        <div className="DbDoughnutcolorboxwrong"></div>
                        <span>Points Lost {100 - sum}%</span>
                      </div>
                    </div>
                  </React.Fragment>
                )}
              </div>
            </div>
            <div className="DBAverageBottomDiv">
              <div className="DBAverageBottomHead">
                <span>Average Categorical Score</span>
              </div>
              <div className="DBAverageBottomChart">
                <div className="DBBarDiv">
                  <Bar
                    data={barData}
                    options={{
                      scales: {
                        x: {
                          ticks: {
                            maxRotation: 0,
                            minRotation: 0,
                            font: {
                              size: 6,
                              // weight:600,
                            },
                          },
                          grid: {
                            display: false,
                            color: "#E6E9F4",
                          },
                          ticks: {
                            display: true,
                          },
                        },
                        y: {
                          ticks: {
                            stepSize: 0,
                          },
                          grid: {
                            display: false,
                          },
                        },
                      },
                      plugins: {
                        legend: {
                          display: false,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="DBHistoryDiv">
          {testdata.map((test) => {
            let testNo = testdata.indexOf(test) + 1;
            return (
              <div
                className={testNo === 1 ? "DBHistory" : "DBHistory AddMargin"}
                key={testNo}
              >
                <div className="DBHistoryHead">
                  <span>{"Test" + testNo}</span>
                </div>
                <div className="DBHistoryBody">
                  <div className="DBHistoryGraph">
                    <div className="DBHistorypercent">
                      <span>
                        {                        (
                          (test.reduce(
                            (accumulator, curr) => accumulator + curr
                          )-test[5]) / 5
                        ).toFixed(2) + "%"}
                      </span>
                    </div>
                    <Doughnut
                      className="DBDoughnutHistory"
                      data={calculatedoughnutdata(testNo - 1)}
                      options={{
                        cutout: 25,
                        plugins: {
                          legend: {
                            display: false,
                            position: "right",
                          },
                        },
                      }}
                    />
                  </div>
                  <div className="DBHistoryText">
                    <span>{"Drawing: " + test[0].toFixed(2) + "%"}</span>
                    <span>{"Debates: " + test[1].toFixed(2) + "%"}</span>
                    <span>{"Sports: " + test[2].toFixed(2) + "%"}</span>
                    <span>{"Eloctution: " + test[3].toFixed(2) + "%"}</span>
                    <span>{"Presentation: " + test[4].toFixed(2) + "%"}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="DBrecommendrow">
        <div className="DBrecommend">
          <span>Recommendation</span>
          <div className="DBAverageBottomHeadavg">
            <span>Average Subject Score</span>
          </div>
          <div className="DBAverageBottomChart">
            <div className="DBBarDiv1">
              <Bar
                data={barData}
                options={{
                  scales: {
                    x: {
                      ticks: {
                        maxRotation: 0,
                        minRotation: 0,
                        font: {
                          size: 6,
                          // weight:600,
                        },
                      },
                      grid: {
                        display: false,
                        color: "#E6E9F4",
                      },
                      ticks: {
                        display: true,
                      },
                    },
                    y: {
                      ticks: {
                        stepSize: 0,
                      },
                      grid: {
                        display: false,
                      },
                    },
                  },
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
        <div className="dbrecommendStrength">
          <div className="dbrecommendcol">
          <div className="dbrecommendhead">
              <span><b>Total Aggregate Score:  </b>{avg.toFixed(3)}%</span>
            </div>
            <div className="dbrecommendhead">
              <span><b>Strength:  </b>{sublabel[maxIndex]}</span>
            </div>
            <div className="dbrecommendhead">
              <span><b>Blind Spot:  </b>{sublabel[minIndex]}</span>
            </div>
            <div className="dbrecommendhead">
              <span><b>Subject Prioritization:</b></span>
              {testsublabel.map((l)=>
              {
                return(
                <div className="dbrecommendsubdiv"><span>{l}</span><br/></div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboardnon;
