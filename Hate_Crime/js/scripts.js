$(document).ready( function () {
  console.log("data loaded");
  $('#hate-table').DataTable( {
    ajax: {
        url: '../data.txt',
        dataSrc: ''
    },
    scrollY:        200,
    deferRender:    true,
    scroller:       true,
    scrollX: true,
    responsive: true,
    columns: [
                { data: 'County' },
                { data: 'Year' },
                { data: 'Anti-Male' },
                { data: 'Anti-Female' },
                { data: 'Anti-Transgender' },
                { data: 'Anti-Gender Identity Expression' },
                { data: 'Anti-Age' },
                { data: 'Anti-White' },
                { data: 'Anti-Black' },
                { data: 'Anti-American Indian/Alaskan Native' },
                { data: 'Anti-Asian' },
                { data: 'Anti-Native Hawaiian/Pacific Islander' },
                { data: 'Anti-Multi-Racial Groups' },
                { data: 'Anti-Other Race' },
                { data: 'Anti-Jewish' },
                { data: 'Anti-Catholic' },
                { data: 'Anti-Protestant' },
                { data: 'Anti-Islamic (Muslim)' },
                { data: 'Anti-Multi-Religious Groups' },
                { data: 'Anti-Atheism/Agnosticism' },
                { data: 'Anti-Religious Practice Generally' },
                { data: 'Anti-Other Religion' },
                { data: 'Anti-Buddhist' },
                { data: 'Anti-Eastern Orthodox' },
                { data: 'Anti-Hindu' },
                { data: 'Anti-Jehovahs Witness' },
                { data: 'Anti-Mormon' },
                { data: 'Anti-Other Christian' },
                { data: 'Anti-Sikh' },
                { data: 'Anti-Hispanic' },
                { data: 'Anti-Arab' },
                { data: 'Anti-Other Ethnicity/National Origin' },
                { data: 'Anti-Non-Hispanic*' },
                { data: 'Anti-Gay Male' },
                { data: 'Anti-Gay Female' },
                { data: 'Anti-Gay (Male and Female)' },
                { data: 'Anti-Heterosexual' },
                { data: 'Anti-Bisexual' },
                { data: 'Anti-Physical Disability' },
                { data: 'Anti-Mental Disability' },
                { data: 'Total Incidents' },
                { data: 'Total Victims' },
                { data: 'Total Offenders' },

              ]
            } );

            var chart = c3.generate({
              bindto: '#piechart',
              data: {
                  columns: [
                      ['Anti-Semitic', 170],
                      ['Anti-White', 25],
                      ['Anti-Black', 31],
                      ['Anti-Gay', 42],
                      ['Other', 30]
                  ],
                  type : 'pie',
                  onclick: function (d, i) { console.log("onclick", d, i); },
                  onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                  onmouseout: function (d, i) { console.log("onmouseout", d, i); }
              },
              color: {
                pattern: ['#FF0000', '#000000', '#696969', '#A9A9A9', '#D3D3D3']
            }
          });

            var chart = c3.generate({
              data: {
                x: 'x',
                  columns: [
                      ['x', 2010, 2011, 2012, 2013, 2014, 2015, 2016],
                      ['Anti-Jewish', 220, 199, 341, 241, 235, 206, 242],
                      ['Anti-Black', 140, 120, 138, 108, 89, 75, 75],
                      ['Anti-Gay Male', 114, 85, 70, 88, 95, 84, 86],
                      ['Anti-Islamic', 29, 19, 31, 22, 24, 33, 41],
                      ['Anti-Hispanic', 58, 14, 25, 18, 13, 19, 9]
                  ]
              },
              color: {
                pattern: ['#FF0000', '#000000', '#696969', '#A9A9A9', '#D3D3D3']
            }
          });
        
    } );
